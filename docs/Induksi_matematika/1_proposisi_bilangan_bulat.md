---
sidebar_position: 1
---

# Proposisi Perihal Bilangan Bulat
Proposisi yang menyangkut perihal bilangan bulat cukup banyak dijumpai di dalam matematika diskrit maupun di dalam ilmu komputer. Proposisi tersebut mengkaitkan suatu masalah yang dihubungkan dengan bilangan bulat. Untuk memberikan ilustrasi mengenai proposisi seperti apa yang dimaksudkan, marilah tinjau dua contoh proposisi sederhana sebagai berikut. 

Di dalam matematika, banyak teorema yang menyatakan bahwa *p*(*n*) benar untuk semua bilangan bulat positif *n*, yang dalam hal ini *p*(*n*) disebut juga fungsi proposisi. Contoh pertama, misalkan *p*(*n*) adalah proposisi yang menyatakan : "Jumlah bilangan bulat positif dari 1 sampai *n* adalah *n*(*n* + 1)/2". Buktikan bahwa *p*(*n*) benar.

Kalau kita coba dengan beberapa nilai *n*, memang timbul dugaan bahwa *p*(*n*) benar. Misalnya untuk *n* = 5, *p*(5) adalah: Jumlah bilangan bulat positif dari 1 sampai 5 adalah 5(5+1)/2. Terlihat bahwa 

1 + 2 + 3 + 4+ 5 = 15 = 5(6)/2

Untuk nilai-nilai *n* yang lain kita akan dapatkan kesimpulan serupa. Sayangnya, instansiasi seperti *p*(5) tidak dapat berlaku sebagai bukti bahwa *p*(*n*) benar untuk seluruh *n*. Kita memang sudah menunjukan bahwa *n* = 5 berada di dalam himpunan kebenaran *p*(*n*). Tetapi, kita tahu bahwa 5 bukanlah satu-satunya bilangan bulat positif. Karena bilangan bulat positif tidak terhingga banyaknya, kita tentu tidak mungkin mencoba seluruhnya untuk membuktikan *p*(*n*) benar. Jadi, kita tidak dapat menggunakan pendekatan semacam ini untuk membuktikan kebenaran pernyataan perhal bilangan bulat.

Contoh kedua, kita ingin menemukan rumus jumlah dari *n* buah bilangan ganjil positif yang pertama. Misalnya untuk *n* = 1,2,3,4,5 kita mengamati jumlah *n* bilangan ganjil positif pertama adalah :

*n* = 1 => 1 = 1

*n* = 2 => 1 + 3 = 4

*n* = 3 => 1 + 3 + 5 = 9

*n* = 4 => 1 + 3 + 5 + 7 = 16

*n* = 5 => 1 + 3 + 5 + 7 + 9 = 25

Dari nilai-nilai penjumlahan itu kita menduga bahwa jumlah *n* buah bilangan ganjil positif pertama adalah *n*^2. Kita perlu membuktikan bahwa perkiraan kita tersebut benar jka memang itu faktanya. Kita perlu membuktikan bahwa perkiraan kita tersebut benar jika memang itu faktanya. Bagaimana cara membuktikannya dengan induksi matematik?