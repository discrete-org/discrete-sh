---
sidebar_position: 10
---

# Klosur Relasi

Misakan R adalah relasi yang tidak refleksif. Kita dapat membuat relasi baru yang mengandung R sedemikian sehingga relasi baru tersebut menjadi refleksif. Relasi baru tersebut haruslah relasi terkecil yang mengandung R. Sebagai contoh, relasi R = `{(1,1),(1,3),(2,2),(2,3),(3,3),(3,3)}` pada himpunan A = `{1,2,3}` tidak refleksif. Bagaimana membuat relasi refleksif yang sesedikit mungkin dan mengandung R? Untuk melakukan hal ini, kita hanya perlu menambahkan (2,2) dan (3,3) ke dalam R karena dua elemen relasi ini yang belum terdapat di dalam R. Relasi baru yang terbentuk, dilambangkan dengan S, mengandung R, yaitu 

S = `{(1,1),(1,3),(2,2),(2,3),(3,2),(3,3)}` 

Sekarang, S bersifat refleksif. Relasi S disebut **klosur refleksif** (*reflexive closure*) dari R. Sembarang relasi lain yang mengandung R harus juga memuat (2,2) dan (3,3). Catat juga bahwa S adalah himpunan bagian dari sembarang relasi refleksif lain yang memuat R.

Contoh lain, misalkan R = `{(1,3),(1,2),(2,1),(3,2),(3,3)}` pada himpunan A = `{1,2,3}`. Jelas, R tidak setangkup. Bagaimana membuat relasi setangkup yang sesedikit mungkin dan mengandung R? Untuk melakukan hal ini, kita hanya perlu menambahkan (3,1) dan (2,3) ke dalam R karena dua elemen relasi ini yang belum terdapat di dalam S agar S menjadi setangkup. Relasi baru yang terbentuk mengandung R yaitu 

S = `{(1,3),(3,1),(1,2),(2,1),(3,2),(2,3),(3,3)}`

Sekarang, S bersifat setangkup. Relasi S disebut **klosur setangkup** (*symmetric closure*) dari R.

Secara umum, misalkan R adalah relasi pada himpunan A. R dapat memiliki atau tidak memiliki sifat **P**, seperti refleksif, setangkup, atau menghantar. Jika terdapat relasi S dengan sifat **P** yang mengandung R sedemikian sehingga S adalah himpunan bagian dari setiap relasi dengan sifat P yang mengandung R, maka S disebut **klosur** (*closure*) atau tutupan dari R.

Ada tiga jenis klosuri, yaitu klosur refleksif (*reflexive closure*), klosur setangkup (*symmetric closure*), dan klosur menghantar (*transitive closure*). Cara-cara membentuk ketiga klosur tersebut dijelaskan di bawah ini 

### **Klosur Refleksif**

Misalkan R adalah sebuah relasi pada himpunan A. Klosur refleksif dari R adalah R ∪ Δ, yang hal ini Δ = `{(a,a) | a ∈ A}`. Pada contoh kita di atas, R = `{(1,1) (1,3) (2,3) (3,2)}` adalah relasi pada himpunan A = `{1,2,3}`, maka Δ = `{(1,1) (2,2) (3,3)}`, sehingga klosur refleksif dari R adalah

R ∪ Δ = `{(1,1) (1,3) (2,3) (3,2)}` ∪ `{(1,1) (2,2) (3,3)}`

= `{(1,1) (1,3) (2,2) (2,3) (3,2) (3,3)}`

Contoh : Misalkan R adalah relasi `{(a,b) | a ≠ b}` pada himpunan bilangan bulat. Maka, klosur refleksif dari R adalah 

R ∪ Δ = `{(a,b) | a ≠ b}` ∪ `{(a,a) | a ∈ Z}` = `{(a,b) | a,b ∈ Z}`

### **Klosur Setangkup**

Misalkan R adalah sebuah relasi pada himpunan A. Klosur setangkup dari R adalah R ∪ ℝ⁻¹, yang dalam hal ini ℝ⁻¹ = `{(b,a) | (a,b) a ∈ R}`. Pada contoh kita diatas, R = `{(1,3) (1,2) (2,1) (3,2) (3,3)}` adalah relasi pada himpunan A = `{1,2,3}`, maka ℝ⁻¹ = `{(3,1) (2,1) (1,2) (2,3) (3,3)}` sehingga klosur setangkup dari R adalah

R ∪ ℝ⁻¹ = `{(1,3) (1,2) (2,1) (3,2) (3,3)}` ∪ `{(3,1) (2,1) (1,2) (2,3) (3,3)}`

= `{(1,3) (3,1) (1,2) (2,1) (3,2) (2,3) (3,3)}`

Contoh : Misalkan R adalah relasi `{(a,b) | a habis membagi b}` pada himpunan bilangan bulat. Maka klosur setangkup dari R adalah

R ∪ ℝ⁻¹ = `{(a,b) | a habis membagi b}` ∪ `{(b,a) | b habis membagi a}`

= `{(a,b) | a habis membagi b atau b habis membagi a}`

### **Klosur Menghantar**

Pembentukan klosur menghantar lebih sulit daripada dua buah klosur sebelumnya. Sebagai contoh, misalkan R = `{(1,2) (1,4) (2,1) (3,2)}` adalah relasi pada himpunan A = `{1,2,3}`. Relasi ini tidak transitif karena tidak mengandung semua pasangan (a,c) sedemikian sehingga (a,b) dan (b,c) di dalam R. Pasangan (a,c) yang tidak terdapat di dalam R adalah (1,1) (2,2) (2,4) dan (3,1). Penambahan semua pasangan ini ke dalam R sehingga menjadi 

S = `{(1,2) (1,4) (2,1) (3,2) (1,1) (2,2) (2,4) (3,1)}`

tidak menghasilkan relasi yang bersifat menghantar karena, misalnya terdapat (3, l)e S dan (1, 4) ∈ S, tetapi (3, 4) ∉ S.

Menemukan klosur menghantar dari sebuah relasi ekivalen dengan menentukan pasangan-pasangan simpul simpul mana di dalam graf berarah yang terhubung dengan sebuah lintasan. Teorema berikut berguna untuk menemukan klosur menghantar.

