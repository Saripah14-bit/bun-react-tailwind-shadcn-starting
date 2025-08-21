# 🚀 Bun + React + Tailwind + Shadcn UI Starter Template

## Fitur

- **Bun**: Runtime JavaScript super cepat, pengelola paket, dan bundler.
- **React**: Library UI deklaratif dan efisien.
- **Tailwind CSS**: Utility-first CSS framework untuk styling yang mudah dan konsisten.
- **Shadcn UI**: Koleksi komponen UI yang dapat dikustomisasi.
- **TypeScript**: Dukungan penuh untuk pengetikan statis.
- **Struktur Proyek Modular**: Mudah dikembangkan dan dipelihara.

---

##  Instalasi

1. **Clone repository:**
   ```bash
   git clone <repo-url>
   cd <nama-folder>
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

---

## Perintah Pengembangan

- **Menjalankan server development:**
  ```bash
  bun dev
  ```

- **Build project:**
  ```bash
  bun run build
  ```

- **Menjalankan untuk production:**
  ```bash
  bun start
  ```

---

## 📁 Struktur Proyek

```text
src/
├── components/
│   ├── shared/         # Komponen yang dapat digunakan ulang
│   └── ui/             # Komponen Shadcn UI (button, card, dsb)
├── hooks/              # Custom React hooks
├── lib/                # Fungsi utilitas/library
├── pages/              # Komponen halaman
├── public/
│   ├── images/         # Aset gambar
│   └── styles/         # File CSS global
├── routes/             # Routing aplikasi
├── stores/             # State management (Zustand)
├── types/              # Definisi tipe TypeScript
├── APITester.tsx       # Komponen untuk testing API
├── App.tsx             # Komponen utama aplikasi
├── index.ts            # Entry point aplikasi
├── main.tsx            # Entry point React
```

File penting lainnya:
- `.env` - Environment variables
- `bunfig.toml` - Konfigurasi Bun
- `tsconfig.json` - Konfigurasi TypeScript
- `components.json` - Konfigurasi Shadcn Components

## Screen Shoot 

![gambar] (./public [alt](image-1.png).png)
