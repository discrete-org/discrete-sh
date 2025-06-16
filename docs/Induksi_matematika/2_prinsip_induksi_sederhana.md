---
sidebar_position: 2
---

# 🧩 Prinsip Induksi Sederhana

Induksi matematika adalah salah satu metode pembuktian yang sering digunakan dalam matematika diskrit, terutama ketika kita ingin menunjukkan bahwa suatu pernyataan berlaku untuk **semua bilangan bulat positif**.

Nah, prinsip dasarnya cukup sederhana dan dapat dirangkum sebagai berikut:

Misalkan terdapat sebuah proposisi *p(n)* yang bergantung pada bilangan bulat positif *n*. Untuk membuktikan bahwa *p(n)* benar untuk semua *n*, kita hanya perlu melalui dua tahap:

1. **Basis Induksi**: Tunjukkan bahwa *p(1)* benar.
2. **Langkah Induksi**: Asumsikan *p(n)* benar, lalu buktikan bahwa *p(n+1)* juga benar.

Jika kedua tahap ini berhasil, maka kita bisa menyimpulkan bahwa *p(n)* benar untuk semua bilangan bulat positif.

---

## 🧱 Apa Itu Basis dan Langkah Induksi?

- **Basis induksi** adalah langkah awal di mana kita memverifikasi bahwa pernyataan berlaku untuk *n = 1* (bilangan bulat positif terkecil).
- **Langkah induksi** adalah tahap di mana kita **mengasumsikan** bahwa pernyataan berlaku untuk suatu nilai *n* (ini disebut **hipotesis induksi**) dan kemudian membuktikan bahwa itu juga berlaku untuk *n + 1*.

Dengan kata lain, jika *p(n)* benar, maka *p(n+1)* juga harus benar. Tujuan utama dari langkah ini adalah memastikan bahwa kebenaran pernyataan “menular” dari satu nilai ke nilai berikutnya.

---

## 🎯 Kenapa Ini Bekerja?

Metode induksi ini bekerja karena sifat bilangan bulat positif yang **berurutan dan tak terbatas**. Bila kita tahu:

- *p(1)* benar (basis),
- dan *p(n) → p(n+1)* juga benar (langkah induksi),

maka kita bisa simpulkan:

- Karena *p(1)* benar, maka *p(2)* juga benar.
- Karena *p(2)* benar, maka *p(3)* juga benar.
- Karena *p(3)* benar, maka *p(4)* juga benar.

…dan seterusnya, tanpa henti!

---

## 🁢 Ilustrasi: Efek Domino

Bayangkan barisan batu domino yang berdiri sejajar. Kalau kita dorong domino pertama, ia akan menjatuhkan domino kedua. Lalu domino kedua menjatuhkan domino ketiga, dan begitu seterusnya. Kita tidak perlu mendorong semuanya satu per satu — cukup satu dorongan pertama, dan pastikan masing-masing domino bisa menjatuhkan yang berikutnya.

Nah, itulah inti dari **induksi matematika**. Dorong satu (basis), pastikan hubungan antar domino kuat (langkah induksi), dan semuanya akan ikut rebah (semua *p(n)* jadi benar)!

---

Di bagian berikutnya, kita akan lihat bagaimana prinsip ini diterapkan dalam contoh nyata. Ayo lanjutkan ke contoh dan latihan supaya konsep ini makin nempel! 💡
