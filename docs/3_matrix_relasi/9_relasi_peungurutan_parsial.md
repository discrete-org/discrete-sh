---
sidebar_position: 9
---

# 📊 Relasi Pengurutan Parsial

Relasi dalam matematika nggak cuma tentang pasangan elemen — tapi juga bisa dipakai untuk **mengurutkan** elemen-elemen dalam suatu himpunan. Contohnya? Relasi ≥ (lebih besar atau sama dengan) pada bilangan bulat. Dengan relasi ini, kita bisa tahu mana bilangan yang datang **sebelum** atau **sesudah** bilangan tertentu.

Nah, pengurutan seperti ini disebut **relasi pengurutan parsial** (*partial ordering*).

---

## 🔍 Apa Itu Relasi Pengurutan Parsial?

Relasi R pada himpunan S disebut sebagai **relasi pengurutan parsial** jika memenuhi tiga sifat:

- ✅ **Refleksif** → setiap elemen berhubungan dengan dirinya sendiri.
- ✅ **Tolak-setangkup** (*antisimetris*) → jika `a` berhubungan dengan `b` dan `b` dengan `a`, maka `a` dan `b` harus sama.
- ✅ **Menghantar** (*transitif*) → jika `a` berhubungan dengan `b` dan `b` dengan `c`, maka `a` juga berhubungan dengan `c`.

Kalau sebuah himpunan S punya relasi R yang seperti ini, maka pasangan (S, R) disebut **himpunan terurut parsial** atau **poset** (*partially ordered set*).

---

## 📌 Contoh Pengurutan Parsial

### 1. Relasi ≥ pada Bilangan Bulat

- **Refleksif**: karena `a ≥ a` untuk semua bilangan bulat `a`.
- **Tolak-setangkup**: kalau `a ≥ b` dan `b ≥ a`, berarti `a = b`.
- **Menghantar**: kalau `a ≥ b` dan `b ≥ c`, maka pasti `a ≥ c`.

Jadi, relasi ≥ adalah contoh klasik relasi pengurutan parsial.

---

### 2. Relasi "Habis Membagi"

Misalnya, `a` dan `b` adalah bilangan bulat, dan `(a, b)` dalam relasi jika `a` habis membagi `b`.

- **Refleksif**: karena setiap bilangan pasti habis membagi dirinya sendiri.
- **Tolak-setangkup**: jika `a` habis membagi `b` dan `b` habis membagi `a`, maka `a = b`.
- **Menghantar**: kalau `a` habis membagi `b` dan `b` habis membagi `c`, maka `a` pasti habis membagi `c`.

Jadi, relasi "habis membagi" juga memenuhi syarat pengurutan parsial.

---

## ⚠️ Kenapa Disebut *Parsial*?

Kenapa nggak langsung disebut *pengurutan total*? Karena dalam pengurutan parsial, **tidak semua elemen harus bisa dibandingkan satu sama lain**.

Contohnya, mungkin dua elemen `x` dan `y` **tidak punya hubungan apapun** — artinya kita tidak bisa bilang apakah `x` lebih besar dari `y` atau sebaliknya. Inilah yang bikin pengurutan ini disebut *parsial* atau *tak lengkap*.

---

## 🧠 Kesimpulan

**Relasi pengurutan parsial** adalah cara sistematis untuk mengurutkan elemen-elemen berdasarkan sifat tertentu, tapi tanpa memaksa semua elemen untuk bisa dibandingkan. Ini berguna di banyak situasi nyata, seperti struktur organisasi, urutan tugas, atau pembagian faktor.

