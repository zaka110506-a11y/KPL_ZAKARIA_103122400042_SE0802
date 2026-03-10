const KotaDikunjungi = ["Surabaya", "Yogyakarta", "Bali"];
KotaDikunjungi.unshift("Medan");
KotaDikunjungi.push("Makassar");
KotaDikunjungi.pop();
//KotaDikunjungi.reverse();
KotaDikunjungi.splice(0, 1);
KotaDikunjungi[1] = "purwokerto";
console.log(KotaDikunjungi);