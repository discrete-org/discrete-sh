---
sidebar_position: 14
---

# 🔗 Komposisi Fungsi

Pernah denger pepatah “satu langkah membawa ke langkah berikutnya”? Nah, konsep itu mirip dengan **komposisi fungsi**. Kalau kamu punya dua fungsi yang terhubung, kamu bisa “menyambung” mereka jadi satu fungsi baru!

Misalkan:
- `g` adalah fungsi dari himpunan A ke B,
- `f` adalah fungsi dari B ke C.

Kita bisa bikin fungsi baru dari A langsung ke C, yang disebut **komposisi fungsi** dan ditulis sebagai:

```math
(f ∘ g)(a) = f(g(a))
```

Artinya, kita masukkan a ke dalam g, lalu hasilnya kita masukkan ke dalam f. Jadi semacam alur kerja berantai:

→ a masuk ke g

→ hasil dari g(a) masuk ke f

→ keluar f(g(a)) sebagai hasil akhirnya.

## 📌 Ilustrasi Komposisi
Bayangkan kamu punya dua fungsi:
- g(x) = x + 2
- f(x) = x²

Kalau kita komposisikan f ∘ g, maka:

(f∘g)(x) =f (g(x)) = f(x+2) = (x+2)^2

Jadi fungsi f ∘ g langsung mengubah x menjadi (x + 2)² dalam satu langkah.


