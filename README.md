# React + Vite + TypeScript Template

A modern, minimal frontend template built with **React**, **Vite**,
**TypeScript**, and **Tailwind CSS v4**.

This template is designed for **pure frontend applications** and focuses
on: - fast setup - sensible defaults - light/dark mode support - clean
project structure - testing out of the box

---

## ✨ Features

- ⚡ **Vite** for fast development and builds
- ⚛️ **React + TypeScript**
- 🎨 **Tailwind CSS v4** (CSS-first, no config file)
- 🌗 **Light / Dark mode** (class-based, persistent)
- 🧭 **React Router** (with 404 handling)
- 🧪 **Vitest + Testing Library**
- 🧩 Reusable UI primitives (`Button`, `Card`, `Input`)
- 🧼 ESLint with sensible defaults
- 📁 Scalable folder structure

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/react-vite-ts-template.git
cd react-vite-ts-template
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start the development server

```bash
npm run dev
```

The app will be available at:

    http://localhost:5173

---

## 🏗 Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧪 Running Tests

```bash
npm run test
npm run test:watch
npm run test:coverage
```

---

## 🌗 Dark Mode

This template uses **class-based dark mode** with Tailwind CSS v4.

- The `.dark` class is toggled on the `<html>` element
- The preference is stored in `localStorage`
- Colors are driven by CSS variables defined via `@theme`

---

## 📁 Project Structure

```txt
src/
├─ app/
├─ components/
│  ├─ common/
│  └─ ui/
├─ pages/
├─ lib/
├─ styles/
├─ test/
└─ main.tsx
```

---

## 📄 License

MIT
