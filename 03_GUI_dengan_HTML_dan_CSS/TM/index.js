const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf"); 
const upperCountElement = document.getElementById("hb"); 
const lowerCountElement = document.getElementById("hk"); 

const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;

    charCountElement.textContent = text.length;

    const lowerCaseMatch = text.match(/[a-z]/g);
    lowerCountElement.textContent = lowerCaseMatch ? lowerCaseMatch.length : 0;

    const upperCaseMatch = text.match(/[A-Z]/g);
    upperCountElement.textContent = upperCaseMatch ? upperCaseMatch.length : 0;
});

btnBesarkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    
    editorElement.dispatchEvent(new Event('input'));
});

btnKecilkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    
    editorElement.dispatchEvent(new Event('input'));
});