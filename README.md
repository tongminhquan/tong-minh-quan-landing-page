# Tong Minh Quan Personal Landing Page

Landing page cá nhân song ngữ VI/EN cho Tống Minh Quân, xây bằng Next.js App Router, TypeScript, Tailwind CSS, `motion/react`, `next-themes` và hero 3D nhẹ với React Three Fiber.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- motion/react
- next-themes
- three, `@react-three/fiber`, `@react-three/drei`

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Kiểm tra chất lượng

```bash
npm run lint
npm run build
```

## Cấu trúc chính

```text
app/
components/
data/
```

Các section được tách riêng theo brief:

- `components/Hero.tsx`
- `components/About.tsx`
- `components/Skills.tsx`
- `components/Education.tsx`
- `components/Projects.tsx`
- `components/Activities.tsx`
- `components/Awards.tsx`
- `components/Contact.tsx`
- `components/ThemeToggle.tsx`
- `components/LanguageToggle.tsx`
- `components/ThreeHero.tsx`

## Dữ liệu và dịch thuật

- Dữ liệu tĩnh nằm trong `data/profile.ts`
- Nội dung song ngữ nằm trong `data/translations.ts`
- Locale được lưu bằng `localStorage` key `tmq-locale`
- Theme được lưu bằng `next-themes` key `tmq-theme`

## Nguồn nội dung

- Phần học vấn, kỹ năng, dự án, hoạt động và danh hiệu được dựng từ brief/CV đã cung cấp trong prompt.
- Link Facebook cá nhân được giữ như external link an toàn: `https://www.facebook.com/maminhquan69`
- Không scrape nội dung yêu cầu đăng nhập hoặc vượt quyền truy cập Facebook.
- Có đối chiếu công khai hạn chế từ web cho mốc giải thưởng FPT Polytechnic; không đưa thêm dữ liệu cá nhân nhạy cảm lên giao diện.

## Ghi chú triển khai

- Hero 3D dùng procedural geometry và dynamic import, không tải asset 3D nặng.
- Có fallback khi WebGL không sẵn sàng hoặc người dùng bật reduced motion.
- Form liên hệ đang ở chế độ demo an toàn, chỉ log dữ liệu vào console để tiện nối backend sau.
- Đã tránh hoàn toàn giá trị cấu hình bị cấm; nếu cần mức cao, code chỉ dùng các mức như `high` hoặc `xhigh` trong nội dung mô tả.
