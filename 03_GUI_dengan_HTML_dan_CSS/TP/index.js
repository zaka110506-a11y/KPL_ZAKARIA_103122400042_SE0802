// Mengambil elemen-elemen dari HTML
const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");     // total huruf
const upperCountElement = document.getElementById("hb");    // huruf besar
const lowerCountElement = document.getElementById("hk");    // huruf kecil

editorElement.addEventListener("input", (event) => {
  const text = event.target.value;
  
  charCountElement.textContent = text.length;

  let jumlahBesar = 0;
  let jumlahKecil = 0;

  for (let i = 0; i < text.length; i++) {
    let huruf = text[i];
    if (huruf >= 'A' && huruf <= 'Z') {
      jumlahBesar = jumlahBesar + 1;
    
    } else if (huruf >= 'a' && huruf <= 'z') {
      jumlahKecil = jumlahKecil + 1;
    }
  }

  upperCountElement.textContent = jumlahBesar;
  lowerCountElement.textContent = jumlahKecil;
});