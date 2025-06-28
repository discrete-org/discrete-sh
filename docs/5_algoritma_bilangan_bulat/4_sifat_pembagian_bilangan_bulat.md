---
sidebar_position: 4
---

# ➗ Sifat Pembagian pada Bilangan Bulat

Mari kita mulai pembahasan tentang bilangan bulat dari konsep dasar yang sangat penting: **pembagian**. Mengapa pembagian? 🤔 Karena dari sinilah kita mengenal bilangan prima, aritmetika modulo, dan algoritma Euclidean — semua ini sangat berperan penting, terutama dalam dunia kriptografi 🔐.

---

## 📘 Definisi Pembagian

Misalkan *a* dan *b* adalah bilangan bulat, dan *a* ≠ 0. Kita mengatakan bahwa *a* **habis membagi** *b* jika ada bilangan bulat *c* sehingga berlaku:

> *b = a × c*

📌 Notasi yang biasa digunakan:  
> *a | b*  → dibaca "*a* membagi *b*"

Artinya, ketika *b* dibagi dengan *a*, hasilnya berupa bilangan bulat tanpa sisa. Kadang, pernyataan ini juga disebut "*b* adalah kelipatan dari *a*".

---

### ✍️ Contoh

- ✅ 4 membagi 12 → karena 12 = 4 × 3  
- ❌ 4 tidak membagi 13 → karena 13 ÷ 4 = 3,25 (bukan bilangan bulat)

---

## 📐 Teorema Euclides

Setiap kali sebuah bilangan bulat *m* dibagi oleh bilangan bulat positif *n*, pasti akan diperoleh dua bilangan bulat unik, yaitu:

- *q* sebagai **hasil bagi** 📤  
- *r* sebagai **sisa pembagian** 🧩

Misalnya, saat 13 dibagi 4:

- Hasil bagi (*q*) = 3  
- Sisa (*r*) = 1

Jika pembagiannya sempurna, maka sisanya adalah nol. Contohnya, 12 dibagi 4 menghasilkan 3 dengan sisa 0.

💡 Catatan:  
Sisa pembagian *r* selalu **lebih besar atau sama dengan 0**, dan **lebih kecil dari pembagi *n***.

---

## 🧠 Ringkasan Istilah

- *m* → bilangan yang dibagi (*dividend*)  
- *n* → pembagi (*divisor*)  
- *q* → hasil bagi (*quotient*)  
- *r* → sisa (*remainder*)

---

## ⚙️ Notasi `div` dan `mod`

Untuk menyatakan hasil bagi dan sisa dalam pembagian, digunakan dua operator penting:

- `div` → untuk menyatakan hasil bagi bulat  
- `mod` → untuk menyatakan sisa pembagian  

Contoh:  
Jika 13 dibagi 4, maka:

- `13 div 4 = 3`  
- `13 mod 4 = 1`

---

Materi ini akan menjadi dasar saat kita membahas topik-topik lanjutan seperti **bilangan prima**, **faktorisasi**, dan **aritmetika modulo**. Pastikan kamu memahaminya dengan baik, karena kita akan melangkah makin dalam! 🚀
