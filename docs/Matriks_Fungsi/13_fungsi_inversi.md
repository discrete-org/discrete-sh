---
sidebar_position: 13
---

# 🔁 Fungsi Inversi

Pernah kepikiran untuk “membalik” sebuah fungsi? Kalau kamu punya fungsi `f` yang memetakan elemen dari himpunan A ke B secara unik (satu-ke-satu), maka kamu bisa bikin fungsi kebalikannya. Fungsi ini disebut **fungsi inversi**, dan biasanya ditulis sebagai `f⁻¹`.

Secara sederhana: kalau `f` memetakan `a` ke `b` (ditulis `f(a) = b`), maka `f⁻¹(b) = a`. Artinya, fungsi inversi akan “menelusuri balik” dari hasil ke asal.

Tapi nggak semua fungsi bisa dibalik! Hanya fungsi yang **berkoresponden satu-ke-satu** (alias *invertible*) yang bisa punya fungsi inversi. Kalau ada dua elemen dari A yang menuju elemen B yang sama, maka fungsi seperti ini **tidak bisa dibalik** karena kita bingung mau kembali ke elemen yang mana.

---

## 📌 Contoh Fungsi Inversi

Bayangkan kita punya fungsi `f` seperti ini:

```math
f : A → B
f = {(1, a), (2, b), (3, c)}
```
Fungsi *f* ini jelas satu-ke-satu, karena : 
- Setiap elemen di A hanya punya satu pasangan di B.
- Tidak ada dua elemen A yang menuju ke elemen B yang sama.

Nah, kalau kita balik arah panahnya, kita dapat fungsi inversi f⁻¹:


























































---
sidebar_position: 13
---

# Fungsi Inversi
Jika *f* adalah fungsi berkoresponden satu-ke-satu dari A ke B, maka kita dapat menemukan **balikan** atau **inversi** (*inversi*) dari *f*. Fungsi inversi dari *f* dilambangkan dengan *f*⁻¹. Misalkan *a* adalah anggota himpunan A dan *b* adalah anggota himpunan B, maka *f*⁻¹(*b*) = *a* jika *f*(*a*) = *b*.

Fungsi yang berkoresponden satu-ke-satu sering dinamakan juga fungsi yang *invertible* (dapat dibalikan), karena kita dapat mendefinisikan fungsi balikannya. Sebuah fungsi dikatakan *not invertible* (tidak dapat dibalikan) jika ia bukan fungsi yang berkoresponden satu-ke-satu, karena fungsi balikannya tidak ada.

## 🔁 Contoh Fungsi Inversi

Misalkan kita punya fungsi `f` yang memetakan elemen dari A ke B seperti berikut:

```math
f : A → B
f = {(1, a), (2, b), (3, c)}
```

Karena setiap elemen di A hanya berpasangan dengan satu elemen unik di B, dan tidak ada dua elemen A yang menuju elemen B yang sama, maka fungsi ini **berkoresponden satu-ke-satu** (one-to-one).

Kita bisa membalik pasangan ini untuk mendapatkan fungsi inversinya f⁻¹:

*f*⁻¹: *B* -> *A* *f*⁻¹ = (a,1),(b,2),(c,3)
