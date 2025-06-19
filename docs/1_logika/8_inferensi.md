---
sidebar_position: 8
---

# 🔍 Inferensi: Cara Menarik Kesimpulan dari Pernyataan Logika

Pernah nggak sih kamu dengar beberapa pernyataan, lalu dari situ kamu bisa nebak atau menyimpulkan sesuatu? 🤔  
Nah, proses menyimpulkan sesuatu berdasarkan pernyataan-pernyataan yang ada disebut **inferensi**.

Di dalam logika proposisional, kita punya beberapa **kaidah inferensi** yang bisa membantu kita menyusun argumen secara logis. Yuk kita bahas satu per satu! 🧠✨

---

## 1. ✅ **Modus Ponen (Law of Detachment)**

Kaidah ini berdasarkan pada tautologi:


(p ∧ (p → q)) → q


Artinya, kalau:
- p benar ✅  
- dan p → q benar ✅  
→ Maka **q juga benar**!

📝 **Notasi:**

p → q
p
∴ q


📌 **Contoh:**
> Kalau hujan (p), maka jalanan basah (q)  
> Sekarang hujan  
> ∴ Jalanan basah 🌧️🚗

---

## 2. ❌ **Modus Tollens**

Tautologinya adalah:

(¬q ∧ (p → q)) → ¬p


Artinya, kalau:
- p → q  
- tapi q tidak terjadi (¬q)  
→ Maka p juga tidak terjadi (¬p)

📝 **Notasi:**

p → q
¬q
∴ ¬p


📌 **Contoh:**
> Kalau saya belajar (p), maka saya lulus (q)  
> Saya tidak lulus (¬q)  
> ∴ Saya tidak belajar 😅

---

## 3. 🔗 **Silogisme Hipotesis**

Berdasarkan tautologi:

((p → q) ∧ (q → r)) → (p → r)


Kalau:
- p → q  
- q → r  
→ Maka p → r

📝 **Notasi:**

p → q
q → r
∴ p → r


📌 **Contoh:**
> Kalau saya belajar (p), maka saya paham (q)  
> Kalau saya paham, saya bisa ujian (r)  
> ∴ Kalau saya belajar, saya bisa ujian 🧠✅

---

## 4. 🧠 **Silogisme Disjungtif**

Tautologi:

((p ∨ q) ∧ ¬p) → q


Kalau:
- p atau q benar  
- tapi p salah  
→ Maka q yang benar

📝 **Notasi:**

p ∨ q
¬p
∴ q


📌 **Contoh:**
> Saya akan pergi (p) atau saya tinggal di rumah (q)  
> Saya tidak pergi (¬p)  
> ∴ Saya tinggal di rumah 🏡

---

## 5. ✂️ **Simplifikasi**

Tautologi:

(p ∧ q) → p


Kalau dua pernyataan benar bersamaan, kita bisa ambil salah satunya.

📝 **Notasi:**

p ∧ q
∴ p


📌 **Contoh:**
> Saya lapar (p) dan capek (q)  
> ∴ Saya lapar 😋

---

## 6. ➕ **Penjumlahan**

Tautologi:

p → (p ∨ q)


Kalau p benar, maka p ∨ q juga benar (meskipun kita gak tahu q gimana).

📝 **Notasi:**

p
∴ p ∨ q


📌 **Contoh:**
> Saya belajar (p)  
> ∴ Saya belajar atau saya main 🎮

---

## 7. 🤝 **Konjungsi**

Tautologi:

(p ∧ q) → (p ∧ q)


Kalau dua pernyataan benar secara terpisah, kita bisa gabung.

📝 **Notasi:**

p
q
∴ p ∧ q


📌 **Contoh:**
> Saya makan (p)  
> Saya minum (q)  
> ∴ Saya makan dan minum 🍽️🥤

---

