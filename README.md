# Next.js Essential

Repository ini berisi dokumentasi dan source code pembelajaran **Next.js dari dasar hingga memahami konsep-konsep essential yang sering digunakan dalam pengembangan aplikasi web modern**.

Materi disusun secara bertahap dan berfokus pada praktik melalui contoh sederhana serta studi kasus agar lebih mudah dipahami.

Repository ini cocok untuk kamu yang sudah mengenal dasar **JavaScript atau React** dan ingin mulai mempelajari bagaimana membangun aplikasi menggunakan Next.js.

---

## 🎯 Tujuan Pembelajaran

Setelah mengikuti materi di repository ini, diharapkan kamu dapat memahami:

* Struktur dasar project Next.js
* App Router
* Routing dan Dynamic Routing
* Layout dan Nested Layout
* Server Component dan Client Component
* Data Fetching
* Loading dan Error Handling
* Route Handler / API
* Form Handling
* Server Actions
* CRUD
* Integrasi Database
* Authentication
* Environment Variables
* Metadata dan SEO
* Deployment aplikasi Next.js

---

## 📚 Materi

### 1. Pengenalan Next.js

Materi awal untuk memahami Next.js dan bagaimana Next.js bekerja di atas React.

Materi yang akan dibahas:

* Apa itu Next.js?
* Next.js vs React + Vite
* Membuat project Next.js
* Struktur folder Next.js
* Mengenal folder `app`
* Mengenal `page.tsx`
* Mengenal `layout.tsx`

---

### 2. Routing

Mempelajari sistem routing berbasis folder yang digunakan oleh Next.js App Router.

Materi yang akan dibahas:

* Basic Routing
* Nested Route
* Dynamic Route
* Catch-all Route
* Navigasi menggunakan `Link`
* `useRouter`
* `useParams`
* `useSearchParams`

Contoh struktur route:

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
└── products/
    ├── page.tsx
    └── [id]/
        └── page.tsx
```

Route yang dihasilkan:

```text
/
/about
/products
/products/1
/products/2
```

---

### 3. Layout

Mempelajari bagaimana membuat layout yang dapat digunakan oleh beberapa halaman.

Materi yang akan dibahas:

* Root Layout
* Nested Layout
* Shared Layout
* Navbar
* Sidebar
* Penggunaan `children`

Contoh:

```tsx
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />

            <main>
                {children}
            </main>
        </div>
    )
}
```

---

### 4. Server Component & Client Component

Memahami perbedaan antara **Server Component** dan **Client Component** pada Next.js.

Materi yang akan dibahas:

* Apa itu Server Component?
* Apa itu Client Component?
* Kapan menggunakan Server Component?
* Kapan menggunakan Client Component?
* Directive `"use client"`
* State dan event pada Client Component

Contoh Client Component:

```tsx
"use client"

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}
```

---

### 5. Data Fetching

Mempelajari bagaimana mengambil dan menampilkan data pada aplikasi Next.js.

Materi yang akan dibahas:

* Fetch API
* Async Server Component
* Fetch data dari API
* Caching
* Revalidation
* Dynamic Data

Contoh:

```tsx
export default async function UsersPage() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    )

    const users = await response.json()

    return (
        <div>
            {users.map((user: any) => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}
        </div>
    )
}
```

---

### 6. Loading & Error Handling

Mempelajari cara menangani loading, error, dan halaman yang tidak ditemukan.

Materi yang akan dibahas:

* `loading.tsx`
* `error.tsx`
* `not-found.tsx`
* Loading UI
* Error Boundary

Contoh struktur:

```text
app/
└── users/
    ├── page.tsx
    ├── loading.tsx
    ├── error.tsx
    └── not-found.tsx
```

---

### 7. Route Handler / API

Mempelajari bagaimana membuat endpoint API menggunakan Next.js.

Materi yang akan dibahas:

* Route Handler
* HTTP Method
* GET
* POST
* PUT
* PATCH
* DELETE
* Request
* Response

Contoh struktur:

```text
app/
└── api/
    └── users/
        └── route.ts
```

Contoh Route Handler:

```ts
export async function GET() {
    return Response.json({
        message: "Hello from Next.js API"
    })
}
```

---

### 8. CRUD

Menggabungkan beberapa konsep sebelumnya untuk membuat aplikasi CRUD sederhana.

Studi kasus yang digunakan:

**Employee Management**

Fitur:

* Menampilkan employee
* Menampilkan detail employee
* Menambahkan employee
* Mengubah employee
* Menghapus employee
* Validasi form
* Loading state
* Error handling

Contoh route:

```text
/employees
/employees/create
/employees/1
/employees/1/edit
```

---

### 9. Form & Server Actions

Mempelajari cara menangani form menggunakan fitur Server Actions.

Materi yang akan dibahas:

* Form Handling
* Server Actions
* `"use server"`
* Form Action
* Pending State
* Validation
* `useActionState`

---

### 10. Database

Mempelajari bagaimana menghubungkan aplikasi Next.js dengan database.

Materi yang akan dibahas:

* Setup database
* ORM
* Schema
* Migration
* Query database
* Relasi data
* CRUD menggunakan database

ORM yang dapat digunakan:

* Prisma
* Drizzle

---

### 11. Authentication

Mempelajari konsep authentication pada aplikasi Next.js.

Materi yang akan dibahas:

* Register
* Login
* Logout
* Session
* Protected Route
* Authorization
* Role & Permission

---

### 12. Production Essential

Mempelajari beberapa hal penting sebelum aplikasi Next.js digunakan di production.

Materi yang akan dibahas:

* Environment Variables
* Metadata
* SEO
* Image Optimization
* Font Optimization
* Static Rendering
* Dynamic Rendering
* Caching
* Deployment

---

## 🗂️ Struktur Dokumentasi

Dokumentasi pembelajaran disimpan di dalam folder `docs`.

```text
docs/
├── introduction.md
├── installation.md
│
├── routing/
│   ├── basic-routing.md
│   ├── dynamic-route.md
│   └── navigation.md
│
├── rendering/
│   ├── server-component.md
│   └── client-component.md
│
├── data-fetching/
│   ├── fetch-data.md
│   ├── loading.md
│   └── error-handling.md
│
├── api/
│   └── route-handler.md
│
├── database/
│   └── database.md
│
└── authentication/
    └── authentication.md
```

Dokumentasi akan terus diperbarui seiring dengan proses pembelajaran dan pengembangan repository.

---

## 🛠️ Tech Stack

Teknologi utama yang digunakan dalam repository ini:

* Next.js
* React
* TypeScript
* Node.js

Beberapa teknologi tambahan akan digunakan pada materi tertentu seperti database, authentication, dan dokumentasi.

---

## 📖 Konsep Pembelajaran

Materi pada repository ini tidak hanya berfokus pada syntax, tetapi juga memahami **alasan sebuah fitur digunakan dan bagaimana penerapannya dalam aplikasi nyata**.

Setiap materi sebisa mungkin menggunakan pola:

```text
Konsep
   ↓
Penjelasan
   ↓
Contoh sederhana
   ↓
Studi kasus
   ↓
Implementasi
```

Dengan pendekatan tersebut, materi diharapkan lebih mudah dipahami dibandingkan hanya membaca dokumentasi atau menghafal syntax.

---

## 📝 Catatan

Repository ini dibuat sebagai bagian dari proses belajar Next.js sekaligus sebagai dokumentasi yang dapat digunakan kembali sebagai referensi.

Materi akan terus berkembang dan diperbarui mengikuti proses pembelajaran serta perkembangan Next.js.
