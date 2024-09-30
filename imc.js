const prompt = require('prompt-sync')({ sigint: true });
console.log("====================================");
const peso = 90;//prompt('Qual seu peso em quilos (Kg)? ');
const altura = 170;//prompt('Qual sua altura em centímetros (cm)? ');

// Cálculo do IMC

const imc = peso / (altura**2) * 1e4;

console.log("Seu IMC é: ${imc.toFixed(2)}:2 kg/m²");