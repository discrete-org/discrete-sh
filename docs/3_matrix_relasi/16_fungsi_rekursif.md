---
sidebar_position: 16
---

# 🔁 Fungsi Rekursif

Pernah mendengar istilah “rekursif” ketika belajar pemrograman? Misalnya saat membuat fungsi `fibonacci()` atau `faktorial()`? Nah, konsep itu sebenarnya berasal dari matematika, dan namanya adalah **fungsi rekursif**.

Fungsi rekursif merupakan salah satu cara untuk mendefinisikan sesuatu secara bertahap — dengan merujuk kembali ke dirinya sendiri. Kedengarannya agak membingungkan, ya? Tenang, kita bahas pelan-pelan.

---

## 🤔 Apa Itu Fungsi Rekursif?

Secara sederhana, **fungsi rekursif** adalah fungsi yang didefinisikan berdasarkan versi yang lebih kecil dari dirinya sendiri. Untuk membuat fungsi rekursif yang baik dan benar, biasanya ada dua bagian penting:

1. **Basis** — bagian yang menjadi titik akhir atau kondisi berhenti dari proses rekursi.
2. **Langkah rekursif** — bagian yang memanggil fungsi itu sendiri, dengan masukan yang lebih kecil.

Tanpa adanya basis, fungsi akan terus memanggil dirinya sendiri tanpa henti — dan bisa menyebabkan program macet atau bahkan crash.

---

## 🧪 Contoh Fungsi Rekursif: Faktorial

Misalkan kita ingin menghitung faktorial dari suatu bilangan `n` (ditulis sebagai `n!`). Faktorial adalah hasil perkalian semua bilangan bulat positif dari 1 sampai `n`.

Contoh:

```math
5! = 5 × 4 × 3 × 2 × 1 = 120
```

Dengan pendekatan rekursif, kita bisa mendefinisikan:

*n*! = *n* × (*n* − 1)!, *untukn* > 00! = 1 ← *iniadalahbasisnya*

Jika kita menghitung 5!, prosesnya menjadi seperti ini:

5! = 5 × 4!

4! = 4 × 3!

3! = 3 × 2!

2! = 2 × 1!

1! = 1 × 0!

0! = 1         ← sampai di sini, kita mulai menghitung balik ke atas


## 📈 Contoh Lain: Deret Fibonacci
Deret Fibonacci adalah urutan bilangan di mana setiap bilangan merupakan jumlah dari dua bilangan sebelumnya. Urutannya seperti ini:

0, 1, 1, 2, 3, 5, 8, 13, ...

Fungsi rekursifnya ditulis seperti ini:

*F*(*n*) = *F*(*n* − 1) + *F*(*n* − 2), *untukn* ≥ 2*F*(0) = 0F(1) = 1

Contoh :
F(4) = F(3) + F(2)

     = (F(2) + F(1)) + (F(1) + F(0))

     = ((F(1) + F(0)) + 1) + (1 + 0)

     = ((1 + 0) + 1) + 1

     = 3


## ⚠️ Hal yang Perlu Diperhatikan
- Fungsi rekursif sangat berguna, tetapi dapat menjadi **tidak efisien** jika tidak dirancang dengan hati-hati. Contohnya seperti pada Fibonacci, banyak perhitungan yang berulang.
- Untuk mengatasinya, sering kali digunakan teknik seperti **penyimpanan hasil sementara** (*memoization)* atau menggunakan pendekatan **iteratif** dari bawah ke atas.


## 🧠 Kesimpulan
Fungsi rekursif adalah alat yang sangat berguna dalam matematika maupun pemrograman. Ia memungkinkan kita menyelesaikan masalah dengan membaginya menjadi versi yang lebih kecil dari masalah yang sama.

Yang terpenting adalah selalu memastikan ada **basis** atau kondisi akhir, supaya fungsi tidak berjalan tanpa henti.