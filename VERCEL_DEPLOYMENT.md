# Vercel Deployment Guide

Bu dokümantasyon, SymphonyRoute Landing Page projesinin Vercel'de production ortamına deploy edilmesi için gerekli adımları içerir.

## Ön Gereksinimler

- Vercel hesabı
- GitHub repository erişimi
- Domain yönetimi (symphonyroute.com)

## Environment Variables (Vercel Dashboard'da Ayarlanacak)

Vercel Dashboard → Project Settings → Environment Variables bölümünde aşağıdaki değişkenleri ekleyin:

### Production Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://symphonyroute.com
NEXT_PUBLIC_DASHBOARD_URL=https://dashboard.symphonyroute.com
NEXT_PUBLIC_DASHBOARD_DOMAIN=dashboard.symphonyroute.com
NEXT_PUBLIC_GA_ID=G-DLBH0YJ0MW
```

### Preview/Development Environment Variables (Opsiyonel)

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DASHBOARD_URL=http://localhost:5001
NEXT_PUBLIC_DASHBOARD_DOMAIN=dashboard.symphonyroute.com
NEXT_PUBLIC_GA_ID=G-DLBH0YJ0MW
```

## Deployment Adımları

### 1. Vercel'e Proje Ekleme

1. [Vercel Dashboard](https://vercel.com/dashboard)'a giriş yapın
2. "Add New..." → "Project" seçin
3. GitHub repository'yi seçin: `cihangulx/symphony-route-landing`
4. "Import" butonuna tıklayın

### 2. Build Ayarları

Vercel otomatik olarak Next.js projesini algılayacaktır. Aşağıdaki ayarlar otomatik olarak uygulanır:

- **Framework Preset**: Next.js
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

### 3. Environment Variables Ekleme

1. Project Settings → Environment Variables
2. Her bir environment variable için:
   - **Name**: Değişken adı (örn: `NEXT_PUBLIC_SITE_URL`)
   - **Value**: Değer (örn: `https://symphonyroute.com`)
   - **Environment**: Production, Preview, Development (gerekirse)
3. "Save" butonuna tıklayın

### 4. Domain Ayarları

1. Project Settings → Domains
2. "Add Domain" butonuna tıklayın
3. Domain adını girin: `symphonyroute.com`
4. Vercel'in verdiği DNS kayıtlarını domain sağlayıcınızda yapılandırın:
   - A Record veya CNAME kaydı
   - SSL sertifikası otomatik olarak sağlanır

### 5. İlk Deployment

1. "Deploy" butonuna tıklayın
2. Build sürecini takip edin
3. Deployment tamamlandığında URL'yi kontrol edin

## Build ve Deployment Kontrolü

### Build Logları

Vercel Dashboard → Deployments → [Deployment] → Build Logs

### Yaygın Sorunlar

1. **Build Hatası**: 
   - `pnpm-lock.yaml` dosyasının commit edildiğinden emin olun
   - Environment variables'ların doğru ayarlandığını kontrol edin

2. **Environment Variable Hatası**:
   - Tüm `NEXT_PUBLIC_*` değişkenlerinin Production environment için ayarlandığını kontrol edin

3. **Domain Hatası**:
   - DNS kayıtlarının doğru yapılandırıldığını kontrol edin
   - DNS propagation'ın tamamlanmasını bekleyin (24-48 saat)

## Production Checklist

- [ ] Tüm environment variables ayarlandı
- [ ] Domain yapılandırıldı ve DNS kayıtları eklendi
- [ ] SSL sertifikası aktif
- [ ] Build başarılı
- [ ] Site erişilebilir durumda
- [ ] Google Analytics çalışıyor
- [ ] Tüm sayfalar doğru çalışıyor

## Monitoring

- **Analytics**: Vercel Analytics Dashboard
- **Logs**: Vercel Dashboard → Logs
- **Performance**: Vercel Dashboard → Analytics

## Rollback

Eski bir deployment'a geri dönmek için:

1. Vercel Dashboard → Deployments
2. Geri dönmek istediğiniz deployment'ı bulun
3. "..." menüsünden "Promote to Production" seçin

## Notlar

- Production build'lerde `output: 'standalone'` kullanılmaz (Vercel için gerekli değil)
- Image optimization Vercel'de otomatik olarak yapılır
- Static assets otomatik olarak CDN'de cache'lenir

