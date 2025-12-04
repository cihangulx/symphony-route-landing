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

    // IP adresini al
    const clientIP = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || undefined

    // API Gateway'e istek gönder
    const response = await fetch(`${API_GATEWAY_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Forwarded-For': clientIP,
        'User-Agent': userAgent || '',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        ipAddress: clientIP,
        userAgent,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || data.error || 'An error occurred' },
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

