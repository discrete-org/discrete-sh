---
sidebar_position: 3
---

# 📈 Prinsip Induksi yang Dirampatkan

Kadang, kita tidak selalu ingin membuktikan bahwa suatu pernyataan benar untuk **semua bilangan bulat positif** yang dimulai dari 1. Ada kalanya kita hanya ingin menyatakan bahwa pernyataan tersebut **benar mulai dari suatu bilangan tertentu**, misalnya mulai dari *n₀* ke atas.

Nah, untuk situasi seperti ini, kita bisa menggunakan versi **induksi matematika yang diperluas** — biasa disebut sebagai **induksi yang dirampatkan** atau *generalized induction*.

---

## 🧠 Rumus Umum

Misalkan *p(n)* adalah suatu pernyataan yang melibatkan bilangan bulat, dan kita ingin membuktikan bahwa *p(n)* benar untuk **semua n ≥ n₀**, di mana *n₀* adalah bilangan bulat tertentu.

Untuk membuktikan hal ini, cukup lakukan dua langkah berikut:

1. **Basis Induksi**: Tunjukkan bahwa *p(n₀)* benar.
2. **Langkah Induksi**: Asumsikan *p(n)* benar untuk suatu *n ≥ n₀*, lalu buktikan bahwa *p(n + 1)* juga benar.

Jika dua langkah ini berhasil, maka kita bisa simpulkan bahwa *p(n)* benar untuk semua *n ≥ n₀*.

---

## 🧾 Penjelasan Singkat

Cara kerjanya masih mirip dengan prinsip induksi biasa. Bedanya, titik awalnya bukan *n = 1*, melainkan bisa dimulai dari angka lain, seperti *n = 5*, *n = 10*, atau *n = 100*, tergantung pada konteks soalnya.

Sama seperti efek domino, yang penting domino pertama yang kita dorong adalah domino ke-*n₀*, dan kita pastikan bahwa setiap domino berikutnya akan ikut jatuh jika sebelumnya jatuh juga.

---

## 📌 Contoh Sederhana

Misalkan kita ingin membuktikan bahwa:

> Untuk setiap bilangan bulat *n ≥ 4*, berlaku bahwa  
> **2ⁿ > n²**

Kita bisa gunakan induksi yang dirampatkan dengan *n₀ = 5*:

1. **Basis**: Untuk *n = 5*  
   2⁵ = 32 dan 5² = 25 → 32 > 25 ✔️

2. **Langkah Induksi**: Asumsikan 2ⁿ > n² untuk suatu *n ≥ 5*  
   Tunjukkan bahwa 2ⁿ⁺¹ > (n+1)²

   _(Langkah detailnya bisa dihitung manual atau dibantu software)_

Jika berhasil, berarti pernyataan tersebut **benar untuk semua n ≥ 5**.

---

Dengan teknik ini, kita bisa fleksibel menentukan dari mana induksi dimulai — tidak melulu dari angka 1. Teknik ini sangat berguna saat menghadapi pernyataan yang **baru berlaku setelah titik tertentu**.

