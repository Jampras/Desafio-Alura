document.getElementById('btnCriptografar').addEventListener('click', criptografar);
document.getElementById('btnDescriptografar').addEventListener('click', descriptografar);
document.getElementById('btnCopiar').addEventListener('click', copiar);

function criptografar() {
    const texto = document.getElementById('inputText').value;
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = textoCriptografado;
    togglePlaceholder(textoCriptografado);
}

function descriptografar() {
    const texto = document.getElementById('inputText').value;
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = textoDescriptografado;
    togglePlaceholder(textoDescriptografado);
}

function copiar() {
    const texto = document.getElementById('outputText');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

function togglePlaceholder(text) {
    const placeholder = document.querySelector('.placeholder');
    if (text.trim()) {
        placeholder.style.display = 'none';
    } else {
        placeholder.style.display = 'block';
    }
}
