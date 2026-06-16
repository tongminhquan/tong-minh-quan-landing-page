# Domain setup

Target display domain: `maminhquân.vn`

Technical ASCII domain for DNS and app config: `xn--maminhqun-i2a.vn`

## App config

- Set `NEXT_PUBLIC_SITE_URL=https://xn--maminhqun-i2a.vn` in the deploy environment.
- The app metadata already uses `https://xn--maminhqun-i2a.vn` as the default canonical URL.

## DNS and hosting

- Point both `maminhquân.vn` and `www.maminhquân.vn` to the actual hosting target.
- If the site is hosted on Vercel, add both domains in the project domain settings first.
- If the site is hosted on another server, create the matching `A` or `CNAME` records there.
- After DNS is active, enable HTTPS for the mapped domain on the hosting platform.

## Verify after mapping

- Open `https://xn--maminhqun-i2a.vn`
- Open `https://maminhquân.vn`
- Check the page source for canonical and Open Graph URLs
- Confirm the floating Zalo CTA loads `/zalo-logo.png` correctly
