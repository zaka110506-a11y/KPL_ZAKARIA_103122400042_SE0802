/**
 * 1.Buatlah sebuah array yang berisi 3 minuman favoritmu. dan simpan dalam variabel
 * bernama listMinuman.
 * 2.setelah itu, tambahkan 2 element pertama menggunakan notasi kurung dan penugasan.
 * 3. Terakhir, tambahkan minuman baru di depan array.
 */

const listMinuman = ["teh", "kopi", "susu"];
listMinuman[0] = "jus";
listMinuman[1] = "air mineral";
listMinuman.unshift("es teh");
console.log(listMinuman);