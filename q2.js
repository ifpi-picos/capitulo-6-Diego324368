// Função para concatenar duas strings
function concat(string1, string2) {
    let result = string1.concat(string2);
    console.log(result);
}

// Função para converter texto para maiúsculo
function upperCase(texto) {
    let textoMaiusculo = texto.toUpperCase();
    console.log(textoMaiusculo);
}

// Função para converter texto para minúsculo
function lowCase(texto) {
    let textoMinusculo = texto.toLowerCase();
    console.log(textoMinusculo);
}

// Função para obter a letra em uma posição específica
function posicaoDaLetra(texto, posicao) {
    let caractere = texto.charAt(posicao);
    console.log(caractere);
}

// Testando as funções
concat("Hello ", "World"); // Exibe "Hello World"
upperCase("hello world!"); // Exibe "HELLO WORLD!"
lowCase("HELLO WORLD!"); // Exibe "hello world!"
posicaoDaLetra("Hello World", 7); // Exibe "W" (caractere na posição 7)
