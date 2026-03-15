const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    charCountElement.textContent = text.length;
    
    const lowerCaseMatch = text.match(/[a-z]/g);
    lowerCountElement.textContent = lowerCaseMatch ? lowerCaseMatch.length : 0;
    
    const upperCaseMatch = text.match(/[A-Z]/g);
    upperCountElement.textContent = upperCaseMatch ? upperCaseMatch.length : 0;
});

const operasiTeks = {
    "huruf-besar": (teks) => teks.toUpperCase(),
    "huruf-kecil": (teks) => teks.toLowerCase()
};

const jalankanKonversi = (tipeOperasi) => {
    editorElement.value = operasiTeks[tipeOperasi](editorElement.value);
    editorElement.dispatchEvent(new Event('input')); 
};

document.getElementById("huruf-besar").addEventListener("click", () => jalankanKonversi("huruf-besar"));
document.getElementById("huruf-kecil").addEventListener("click", () => jalankanKonversi("huruf-kecil"));

const stateTema = {
    "terang": () => document.documentElement.classList.remove("mode-gelap"),
    "gelap": () => document.documentElement.classList.add("mode-gelap")
};

document.getElementById("tombol-terang").addEventListener("click", stateTema["terang"]);
document.getElementById("tombol-gelap").addEventListener("click", stateTema["gelap"]);