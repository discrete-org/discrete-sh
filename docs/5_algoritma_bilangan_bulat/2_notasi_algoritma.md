---
sidebar_position: 2
---

# Notasi Algoritma
Algoritma dapat dituliskan dalam berbagai notasi, misalnya dalam notasi kalimatkalimat deksriptif seperti contoh resep masakan Rendang Padang di atas. Dengan notasi bergaya kalimat ini, deskripsi setiap langkah dijelaskan dengan bahasa sehari-hari secara gamblang. Setiap langkah biasanya diawali dengan kata kerja seperti “baca”, “hitung”, "masukkan, “bagi”, “ganti”, dan sebagainya, sedangkan pernyataan bersyarat dinyatakan dengan 'jika ... maka ...'.

Sebagai contoh pertama, kita akan menuliskan algoritma untuk mencari elemen terbesar (*maximum*) dari sebuah himpunan yang beranggotakan # buah bilangan bulat. Bilangan-bilangan bulat tersebut dinyatakan sebagai *a1*, *a2*, ..., *an*. Elemen terbesar akan disimpan di dalam peubah (*variable)* yang bernama *maks*.

Algoritma Cari Elemen Terbesar
1. Asumsikan *a1*, sebagai elemen terbesar sementara. Simpan *a1*, ke dalam *maks*.
2. Bandingkan *maks* dengan elemen *a2*. Jika *a2*, lebih besar dari *maks*, maka nilai *maks* diganti dengan *a2*.
3. Ulangi langkah 2 untuk elemen-elemen berikutnya (*a3*, *a4*, ... *an*).
4. Berhenti jika tidak ada lagi elemen yang dibandingkan. Dalam hal ini, *maks* berisi nilai dari elemen terbesar.

Notasi algoritma dengan kalimat deskriptif bagus untuk algoritma yang pendek, namun untuk masalah yang algoritmanya besar, notasi ini tidak mangkus. Selain itu, notasi kalimat deskriptif kadang-kadang dianggap kurang bisa menjelaskan sebuah algoritma.

Selain dengan notasi deksriptif, algoritma juga dapat digambarkan dalam notasi bahasa komputer lebih tepatnya bahasa pemrograman.

Sayangnya, setiap bahasa komputer memiliki aturan sintaks yang rumit yang membuat algoritma tersebut menjadi lebih sulit dipahami. Padahal, sebuah algoritma pada hakekatnya berisi abtraksi dari model penyelesaian masalah, sehingga algoritma seharusnya dibebaskan dari hal-hal teknis yang tidak perlu (misalnya tanda titik koma pada akhir setiap pernyataan, format masukan dan keluaran, dan lain-lain). Hal ini diperumit oleh kenyataan bahwa saat ini terdapat puluhan bahasa komputer, setiap bahasa tentu mempunyai aturan sintaks yang berbeda-beda.

Para ilmuwan komputer lebih menyukai menuliskan algoritma dalam notasi yang lebih praktis, yaitu notasi pseudo-code. Pseudo-code (pseudo artinya semu atau tidak sebenarnya) adalah notasi yang menyerupai notasi bahasa pemrograman tingkat tinggi, khususnya Bahasa Pascal dan C. Hasil pengamatan memperlihatkan bahwa bahasa pemrograman umumnya mempunyai notasi yang hampir mirip untuk beberapa instruksi, seperti notasi if-then-else, while-do, repeat-until, read, write, dan sebagainya. Berdasarkan pengamatan tersebut, maka beberapa penulis buku algoritma, termasuk penulis buku ini, mendefinisikan notasi algoritma yang disebut pseudo-code itu. Tidak seperti bahasa pemrograman yang direpotkan dengan tanda titik koma (semicolon), indeks, format keluaran, kata-kata khusus, dan sebagainya, sembarang versi pseudo-code dapat diterima asalkan perintahnya tidak membingungkan pembaca. Keuntungan menggunakan notasi pseudo-code adalah kemudahan mengkonversinya-lebih tepat disebut mentranslasi— ke notasi bahasa pemrograman, karena terdapat korespondensi antara setiap pseudocode dengan notasi bahasa pemrograman. Korespondensi ini dapat diwujudkan dengan tabel translasi dari notasi algoritmik ke notasi bahasa pemrograman apa pun,

Dengan menggunakan notasi pseudo-code, algoritma mencari elemen terbesar ditulis dengan notasi pseudocode seperti ditunjukkan pada berikut ini 
