---
sidebar_position: 1
---

# 📏 Proposisi tentang Bilangan Bulat

Dalam matematika diskrit maupun ilmu komputer, kita sering menemukan pernyataan atau **proposisi** yang berkaitan dengan **bilangan bulat**. Proposisi semacam ini biasanya menyampaikan pola atau sifat khusus dari bilangan bulat, dan cukup sering dijadikan dasar untuk pembuktian logis yang kuat.

Agar lebih konkret, mari kita bahas dua contoh sederhana terlebih dahulu.

---

## 📌 Contoh 1 — Menjumlahkan Bilangan dari 1 sampai *n*

Bayangkan ada sebuah proposisi *p(n)* yang berbunyi:  
**"Jumlah bilangan bulat positif dari 1 hingga *n* adalah *n(n + 1)/2*"**

Jika kita uji dengan *n = 5*, hasilnya seperti ini:

```math
1 + 2 + 3 + 4 + 5 = 15  
n(n + 1)/2 = 5(6)/2 = 15 ✅
```

Benar, hasilnya cocok. Tetapi,apakah ini cukup untuk membuktikan bahwa rumus tersebut berlaku untuk setiap bilangan bulat positif? Tentu tidak.

Kita tidak bisa hanya mencoba beberapa nilai kecil dan langsung menyimpulkan kebenarannya. sebab, jumlah bilangan bulat positif itu tidak terbatas. Maka dari itu, kita memerlukan metode pembuktian yang lebih sistematis dan menyeluruh — salah satunya adalah **embuktian induksi matematika**.

## 📌 Contoh 2 — Menjumlahkan Bilangan Ganjil
Sekarang, kita coba amati pola lain, yaitu jumlah n bilangan ganjil positif pertama:

n = 1 → 1 = 1²  

n = 2 → 1 + 3 = 4 = 2²  

n = 3 → 1 + 3 + 5 = 9 = 3²  

n = 4 → 1 + 3 + 5 + 7 = 16 = 4²  

n = 5 → 1 + 3 + 5 + 7 + 9 = 25 = 5²

Dari sini, kita bisa membuat dugaan bahwa:

**"Jumlah n bilangan ganjil positif pertama adalah n²"**

Pola ini terlihat konsisten, tetapi lagi-lagi, dugaan saja tidak cukup. Untuk membuktikan bahwa ini benar bagi semua n, kita perlu pendekatan yang terstruktur, dan induksi matematika adalah alat yang tepat untuk itu.