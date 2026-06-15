# Deploy landing page len VPS InterData

Muc tieu:

- Domain hien thi: `maminhquân.vn`
- Domain ky thuat cho DNS/SSL/Nginx: `xn--maminhqun-i2a.vn`
- VPS: `103.173.226.86`
- App Next.js chay qua PM2 o port `3002`

## 1. DNS tren TenTen

Tao 2 ban ghi sau:

1. Domain goc
- Ten: de trong hoac `@`
- Loai: `A`
- Gia tri: `103.173.226.86`

2. WWW
- Ten: `www`
- Loai: `A`
- Gia tri: `103.173.226.86`

Sau do bam `Luu`, roi bam `Cap nhat trang thai DNS`.

## 2. Chuan bi server

Dang nhap VPS:

```bash
ssh <user>@103.173.226.86
```

Cai Node.js LTS, PM2, Nginx neu chua co:

```bash
sudo apt update
sudo apt install -y nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

## 3. Lay code ve server

```bash
sudo mkdir -p /var/www/maminhquan
sudo chown -R $USER:$USER /var/www/maminhquan
cd /var/www/maminhquan
git clone https://github.com/tongminhquan/tong-minh-quan-landing-page.git .
git checkout feature/tong-minh-quan-landing-page
```

Neu da clone truoc do:

```bash
cd /var/www/maminhquan
git fetch origin
git checkout feature/tong-minh-quan-landing-page
git pull origin feature/tong-minh-quan-landing-page
```

## 4. Build production

```bash
cd /var/www/maminhquan
npm ci
NEXT_PUBLIC_SITE_URL=https://xn--maminhqun-i2a.vn npm run build
```

## 5. Chay PM2

```bash
cd /var/www/maminhquan
pm2 start ecosystem.config.js
pm2 save
pm2 status
```

Kiem tra local tren VPS:

```bash
curl -I http://127.0.0.1:3002
```

Can thay `HTTP/1.1 200 OK`.

## 6. Cau hinh Nginx

Copy file mau:

```bash
sudo cp /var/www/maminhquan/deploy/interdata-nginx.conf /etc/nginx/sites-available/maminhquan
sudo ln -s /etc/nginx/sites-available/maminhquan /etc/nginx/sites-enabled/maminhquan
sudo nginx -t
sudo systemctl reload nginx
```

Kiem tra:

```bash
curl -I http://xn--maminhqun-i2a.vn
curl -I http://www.xn--maminhqun-i2a.vn
```

## 7. Bat HTTPS

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d xn--maminhqun-i2a.vn -d www.xn--maminhqun-i2a.vn
```

Sau khi cap SSL:

```bash
curl -I https://xn--maminhqun-i2a.vn
curl -I https://www.xn--maminhqun-i2a.vn
```

## 8. Lenh cap nhat cho cac lan sau

```bash
cd /var/www/maminhquan
git pull origin feature/tong-minh-quan-landing-page
npm ci
NEXT_PUBLIC_SITE_URL=https://xn--maminhqun-i2a.vn npm run build
pm2 restart maminhquan-landing-page
```

## 9. Neu muon toi tu dong deploy trong phien sau

Can cung cap mot trong hai cach:

1. SSH user + private key hoac password cho VPS
2. Mot session da dang nhap san trong terminal/server tool

Khi co quyen truy cap, toi co the:

- dang code moi
- push GitHub
- SSH vao VPS
- pull code
- build
- restart PM2
- verify domain va HTTP/HTTPS
