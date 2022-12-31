const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    // Se estiver preenchido

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal, parabéns!";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade grau III. Cuidado!";
    }

    resultado.textContent = `Olá ${nome}, o seu IMC é ${valorIMC}, e você está ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos, por favor!!";
  }
}

calcular.addEventListener("click", imc);

/* var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
} */
