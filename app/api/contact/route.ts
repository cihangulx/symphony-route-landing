import { NextRequest, NextResponse } from 'next/server'

/**
 * API Gateway URL
 * 
 * This should be set via environment variable API_GATEWAY_URL.
 * Defaults to http://localhost:3000 for local development.
 * 
 * Example: API_GATEWAY_URL=https://api.symphonyroute.com
 */
const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://localhost:3000'

// IP adresini al
function getClientIP(request: NextRequest): string {
  // X-Forwarded-For header'ından IP al (proxy/load balancer arkasında)
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  // X-Real-IP header'ından IP al
  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
  
  // Fallback: request IP
  return request.ip || 'unknown'
}

// Email format validasyonu
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    // Request body'yi parse et
    const body = await request.json()
    const { name, email, subject, message } = body

    // Temel validasyon (frontend'de de yapılıyor ama güvenlik için)
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email format validasyonu
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Trim ve temizleme
    const trimmedName = name.trim()
    const trimmedEmail = email.trim().toLowerCase()
    const trimmedSubject = subject.trim()
    const trimmedMessage = message.trim()

    // Boş string kontrolü (sadece whitespace)
    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // IP adresini al
    const clientIP = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || undefined

    // API Gateway URL kontrolü (development için log)
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Contact API] Sending request to: ${API_GATEWAY_URL}/api/contact`)
    }

    // API Gateway'e istek gönder
    const response = await fetch(`${API_GATEWAY_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Forwarded-For': clientIP,
        'User-Agent': userAgent || '',
      },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        ipAddress: clientIP,
        userAgent,
      }),
    })

    // Response parsing - sadece ok response'larda parse et
    let data
    try {
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        // JSON değilse text olarak oku
        const text = await response.text()
        data = text ? { message: text } : {}
      }
    } catch (parseError) {
      console.error('Error parsing response:', parseError)
      // Parse hatası durumunda boş data ile devam et
      data = {}
    }

    if (!response.ok) {
      const errorMessage = data?.message || data?.error || `Server error: ${response.status}`
      console.error(`[Contact API] Error from API Gateway: ${errorMessage}`)
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    // Daha spesifik hata mesajları
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return NextResponse.json(
        { error: 'Unable to connect to the server. Please try again later.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

