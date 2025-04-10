---
sidebar_position: 15
---

# 🧮 Fungsi Khusus

Dalam dunia ilmu komputer dan matematika diskrit, terdapat sejumlah fungsi yang sering digunakan untuk menyelesaikan berbagai persoalan teknis. Fungsi-fungsi ini tidak hanya penting secara teori, tetapi juga sangat berguna dalam praktik komputasi sehari-hari. Di antaranya adalah:

- Fungsi *floor* dan *ceiling*
- Fungsi modulo
- Fungsi faktorial
- Fungsi eksponensial dan logaritmik

---

## 🔻 Fungsi *Floor* dan 🔺 *Ceiling*

### 🔻 *Floor*

Fungsi *floor*, ditulis dengan simbol `⌊x⌋`, akan menghasilkan **bilangan bulat terbesar** yang **kurang dari atau sama dengan** nilai `x`.

Contoh:
- ⌊4.8⌋ = 4  
- ⌊-2.3⌋ = -3

### 🔺 *Ceiling*

Sebaliknya, fungsi *ceiling*, ditulis `⌈x⌉`, memberikan **bilangan bulat terkecil** yang **lebih besar dari atau sama dengan** `x`.

Contoh:
- ⌈4.8⌉ = 5  
- ⌈-2.3⌉ = -2

Kedua fungsi ini banyak digunakan dalam pembulatan angka, pembagian data ke dalam blok, serta alokasi memori dalam pemrograman.

---

## 🧮 Fungsi Modulo

Fungsi **modulo** (atau `mod`) mengembalikan sisa pembagian antara dua bilangan bulat. Jika kita menuliskan `a mod n`, maka hasilnya adalah sisa dari pembagian `a` oleh `n`.

Contoh:
- 14 mod 5 = 4  
- 20 mod 6 = 2  
- 9 mod 3 = 0

Konsep ini sangat berguna dalam pengkodean, penjadwalan, serta operasi yang melibatkan sistem bilangan siklik.

---

## ❗ Fungsi Faktorial

Fungsi **faktorial**, disimbolkan dengan `n!`, adalah hasil dari perkalian semua bilangan bulat positif dari 1 hingga `n`.

Rumus:
- `n! = n × (n−1) × (n−2) × ... × 2 × 1`
- Secara khusus, `0!` didefinisikan sebagai 1.

Contoh:
- 4! = 4 × 3 × 2 × 1 = 24  
- 6! = 720

Fungsi faktorial lazim digunakan dalam perhitungan kombinasi, permutasi, serta dalam algoritma rekursif.

---

## 📈 Fungsi Eksponensial dan 📉 Logaritmik

### 📈 Eksponensial

Fungsi **eksponensial** dinyatakan sebagai `f(x) = a^x`, yang menggambarkan pertumbuhan atau peluruhan yang sangat cepat.

Contoh:
- 2^4 = 16  
- 10^2 = 100

Fungsi ini banyak digunakan dalam analisis pertumbuhan populasi, kompleksitas algoritma, dan komputasi ilmiah.

### 📉 Logaritmik

Fungsi **logaritmik** merupakan kebalikan dari fungsi eksponensial. Jika `a^x = b`, maka `logₐ(b) = x`.

Contoh:
- log₂(16) = 4 (karena 2^4 = 16)  
- log₁₀(1000) = 3

Fungsi logaritma sering muncul dalam konteks algoritma yang efisien (seperti pencarian biner), pengukuran kompleksitas waktu, dan teknik kompresi data.

---

## 🧠 Penutup

Fungsi-fungsi ini memiliki peranan penting dalam banyak aspek pemrograman dan komputasi. Memahami cara kerja dan penggunaannya akan sangat membantu dalam menyusun solusi yang cermat, cepat, dan elegan.
