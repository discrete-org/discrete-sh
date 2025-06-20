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

