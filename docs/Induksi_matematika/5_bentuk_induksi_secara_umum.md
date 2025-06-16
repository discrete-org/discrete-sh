---
sidebar_position: 5
---

# Bentuk Induksi Secara Umum
Adalah mungkin membuat bentuk umum metode induksi sehingga ia dapat diterapkan tidak hanya untuk pembuktian proposisi yang menyangkut himpunan bilangan bulat positif, tetapi juga pembuktian yang menyangkut himpunan obyek yang lebih umum. Syaratnya, himpunan obyek tersebut harus mempunyai keterurutan dan mempunyai elemen terkecil.

DEFINISI 4.1. Relasi biner "«" pada himpunan X dikatakan terurut dengan baik (atau
himpunan X dikatakan terurut dengan baik dengan "") bila memiliki properti berikut:
1. Diberikan x,y,z ∈ X , jika x < y dan y < z, maka x < z,
2. Diberikan x,y ∈ X. Salah satu dari kemungkinan ini benar: x < y atau y < x atau x = y.
3. Jika A adalah himpunan bagian tidak kosong dari X, terdapat elemen x ∈ A sedemikian sehingga x < y untuk semua y ∈ A. Dengan kata lain, setiap himpunan bagian tidak kosong dari X mengandung "elemen terkecil".

Himpunan bilangan riil tak-negatif tidak terurut dengan baik oleh relasi "<". Himpunan ini mempunyai properti (1) dan (2) tetapi tidak (3). Sebagai contoh, himpunan semua bilangan riil yang lebih besar dari 1, yaitu `{ x | x adalah bilangan riil dan x > 1 }` , tidak mengandung elemen terkecil.

Himpunan pasangan terurut bilangan bulat tidak negatif terurut dengan baik oleh relasi "<", dengan kata lain "<" didefinisikan oleh (n1, n2) (n3 < n4) jika dan
hanya jika (n1 < n3) atau (n1 = n3 dan n2 < n4). Properti (1), (1), dan (iii) dimiliki oleh himpunan ini.

Bentuk induksi secara umum dapat dituliskan sebagai berikut:

Misalkan X terurut dengan baik oleh "<", dan p(x) adalah pernyataan perihal elemen x dari X. Kita ingin membuktikan bahwa p(x) benar untuk semua x € X. . Untuk membuktikan ini, kita hanya perlu menunjukkan bahwa:
1. p(x0) benar, yang dalam hal ini x0 adalah elemen terkecil di dalam X, dan
2. jika p(y) benar untuk y £ x, maka p(x) juga benar untuk setiap x > x0 di dalam X.

sehingga p(x) benar untuk semua x ∈ X.