# Vercel Environment Variables Kurulum Rehberi

Bu rehber, Vercel Dashboard üzerinden environment variables'ları nasıl ekleyeceğinizi adım adım açıklar.

## Adım Adım Kurulum

### 1. Vercel Dashboard'a Giriş

1. [Vercel Dashboard](https://vercel.com/dashboard) adresine gidin
2. Hesabınıza giriş yapın

### 2. Projeyi Seçin

1. Dashboard'da `symphony-route-landing` projesini bulun
2. Projeye tıklayın

### 3. Settings'e Gidin

1. Üst menüden **"Settings"** sekmesine tıklayın
2. Sol menüden **"Environment Variables"** seçeneğine tıklayın

### 4. Environment Variables Ekleme

Her bir environment variable için aşağıdaki adımları tekrarlayın:

#### 4.1. NEXT_PUBLIC_SITE_URL

1. **"Key"** alanına: `NEXT_PUBLIC_SITE_URL`
2. **"Value"** alanına: `https://symphonyroute.com`
3. **Environment** seçeneklerinden:
   - ✅ **Production** (işaretle)
   - ✅ **Preview** (işaretle - opsiyonel)
   - ❌ **Development** (işaretleme)
4. **"Save"** butonuna tıklayın

#### 4.2. NEXT_PUBLIC_DASHBOARD_URL

1. **"Key"**: `NEXT_PUBLIC_DASHBOARD_URL`
2. **"Value"**: `https://dashboard.symphonyroute.com`
3. **Environment**: ✅ Production, ✅ Preview
4. **"Save"**

#### 4.3. NEXT_PUBLIC_DASHBOARD_DOMAIN

1. **"Key"**: `NEXT_PUBLIC_DASHBOARD_DOMAIN`
2. **"Value"**: `dashboard.symphonyroute.com`
3. **Environment**: ✅ Production, ✅ Preview
4. **"Save"**

#### 4.4. NEXT_PUBLIC_GA_ID

1. **"Key"**: `NEXT_PUBLIC_GA_ID`
2. **"Value"**: `G-DLBH0YJ0MW` (veya kendi GA ID'niz)
3. **Environment**: ✅ Production, ✅ Preview
4. **"Save"**

## Tüm Environment Variables Listesi

Aşağıdaki tabloyu kullanarak tüm değişkenleri hızlıca ekleyebilirsiniz:

| Key | Value | Production | Preview | Development |
|-----|-------|------------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://symphonyroute.com` | ✅ | ✅ | ❌ |
| `NEXT_PUBLIC_DASHBOARD_URL` | `https://dashboard.symphonyroute.com` | ✅ | ✅ | ❌ |
| `NEXT_PUBLIC_DASHBOARD_DOMAIN` | `dashboard.symphonyroute.com` | ✅ | ✅ | ❌ |
| `NEXT_PUBLIC_GA_ID` | `G-DLBH0YJ0MW` | ✅ | ✅ | ❌ |

## Önemli Notlar

### 🔒 Güvenlik

- **Asla** hassas bilgileri (API keys, secrets) `NEXT_PUBLIC_*` prefix'i ile başlatmayın
- `NEXT_PUBLIC_*` değişkenleri client-side'da görünür olur
- Hassas bilgiler için server-side environment variables kullanın

### 🔄 Değişikliklerin Aktif Olması

- Environment variables ekledikten veya güncelledikten sonra **yeni bir deployment** yapmanız gerekir
- Mevcut deployment'lar otomatik olarak güncellenmez
- **"Deployments"** sekmesinden **"Redeploy"** yapabilirsiniz

### 📝 Environment Seçenekleri

- **Production**: Canlı site için (symphonyroute.com)
- **Preview**: Pull request'ler ve branch'ler için
- **Development**: Local development için (genellikle kullanılmaz)

## Hızlı Kontrol

Tüm environment variables'ları ekledikten sonra:

1. **"Deployments"** sekmesine gidin
2. En son deployment'ı bulun
3. **"..."** menüsünden **"Redeploy"** seçin
4. Deployment tamamlandığında siteyi kontrol edin

## Sorun Giderme

### Environment Variable Görünmüyor

- ✅ Yeni bir deployment yaptınız mı?
- ✅ Doğru environment'ı seçtiniz mi? (Production/Preview)
- ✅ Key adını doğru yazdınız mı? (büyük/küçük harf duyarlı)

### Değerler Yanlış

- ✅ Value alanında gereksiz boşluk var mı?
- ✅ Tırnak işareti kullanmayın (Vercel otomatik ekler)
- ✅ URL'ler `https://` ile başlamalı

## Ek Kaynaklar

- [Vercel Environment Variables Dokümantasyonu](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

