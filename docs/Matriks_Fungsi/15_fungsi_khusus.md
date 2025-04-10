---
sidebar_position: 15
---

# 🧮 Fungsi Khusus

Di dunia ilmu komputer dan matematika diskrit, ada beberapa fungsi yang sering banget dipakai dalam algoritma, struktur data, dan analisis kompleksitas. Di bagian ini, kita akan bahas beberapa fungsi penting seperti:

- *Floor* dan *Ceiling*
- Modulo
- Faktorial
- Eksponensial dan Logaritmik

---

## 🔻 Fungsi *Floor* dan 🔺 *Ceiling*

### 🔻 *Floor*

Fungsi *floor*, dilambangkan `⌊x⌋`, mengembalikan **bilangan bulat terbesar** yang **kurang dari atau sama dengan** `x`.

Contoh:
- ⌊3.7⌋ = 3  
- ⌊-1.2⌋ = -2

### 🔺 *Ceiling*

Fungsi *ceiling*, dilambangkan `⌈x⌉`, mengembalikan **bilangan bulat terkecil** yang **lebih besar atau sama dengan** `x`.

Contoh:
- ⌈3.7⌉ = 4  
- ⌈-1.2⌉ = -1

Fungsi ini sering digunakan saat kita perlu membulatkan angka ke bawah atau ke atas dalam perhitungan algoritma, pembagian blok memori, dan lain-lain.

---

## 🧮 Fungsi Modulo

Fungsi **modulo** (`mod`) memberikan sisa hasil pembagian antara dua bilangan.

Jika `a mod n = r`, maka `r` adalah sisa pembagian `a` oleh `n`.

Contoh:
- 10 mod 3 = 1  
- 17 mod 5 = 2  
- 9 mod 3 = 0

Fungsi ini sangat berguna dalam:
- Perhitungan siklik (misalnya hari dalam seminggu)
- Hashing
- Pengulangan indeks array

---

## ❗ Fungsi Faktorial

Fungsi **faktorial**, dilambangkan `n!`, adalah hasil perkalian semua bilangan bulat positif dari 1 sampai `n`.

Definisi:
- `n! = n × (n−1) × (n−2) × ... × 2 × 1`
- Khusus: `0! = 1` (didefinisikan secara konvensi)

Contoh:
- 3! = 3 × 2 × 1 = 6  
- 5! = 5 × 4 × 3 × 2 × 1 = 120

Faktorial banyak digunakan dalam kombinatorika, probabilitas, dan analisis algoritma rekursif.

---

## 📈 Fungsi Eksponensial dan Logaritmik

### 📈 Fungsi Eksponensial

Fungsi **eksponensial**, biasanya ditulis `f(x) = a^x`, memodelkan pertumbuhan atau peluruhan yang sangat cepat.

Contoh:
- 2^3 = 8  
- 10^0 = 1

### 📉 Fungsi Logaritmik

Fungsi **logaritmik**, kebalikan dari eksponensial. Jika `a^x = b`, maka `logₐ(b) = x`.

Contoh:
- log₂(8) = 3 (karena 2^3 = 8)  
- log₁₀(1000) = 3 (karena 10^3 = 1000)

Fungsi logaritmik sering muncul dalam:
- Analisis kompleksitas (misalnya algoritma binary search → O(log n))
- Kriptografi
- Kompresi data

---

## 🧠 Kesimpulan

Fungsi-fungsi khusus ini bukan cuma teori — mereka adalah alat praktis dalam dunia komputasi. Memahami cara kerja dan kapan menggunakannya bisa sangat membantu dalam merancang solusi yang efisien dan elegan.
