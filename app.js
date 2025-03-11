document.querySelector (".calcu").addEventListener("click", function () {
    let peso = parseFloat (document.getElementById ("Peso").value);
    let altura = parseFloat(document.getElementById("Altura").value) / 100; /*Linha para converter cm para metros */

    /*Adicionamos a tag if e else para determinar verdadeiro ou falto. Por exemplo, adicionamos a tag if e else, caso a afirmação seja verdadeira a tag if será executada. Mas se for quem vai ser executada é a tag else*/
    if (!peso || !altura) {
        document.getElementById("resultado").innerText = "Por favor, preencha os campos corretamente!";
        return;
} 
    let imc = peso / (altura * altura);
    let mensagem = `Seu IMC é ${imc.toFixed(2)}-`;
        if (imc < 18.5) {
            mensagem += "Abaixo do peso";
        } else if (imc < 24.9) {
            mensagem += "Peso normal";
        } else if (imc < 29.9) {
            mensagem += "Sobrepeso";
        } else {
            mensagem += "Obsidade"
        }
        document.getElementById("resultado").innerText = mensagem;
    });

    const botaoHomem = document.querySelector(".male");
    const botaoMulher = document.querySelector(".female");

    let generoSelecionado = "";

    botaoHomem.addEventListener("click", () => {
        generoSelecionado = "Homem";
        botaoHomem.style.backgroundColor = "rgb(152, 216, 239)"; // Destacar botão selecionado
        botaoMulher.style.backgroundColor = "rgb(246, 233, 107)"; // Resetar outro botão
        console.log("Gênero selecionado:", generoSelecionado);
    });

    // Adicionando evento de clique para o botão "Mulher"
    botaoMulher.addEventListener("click", () => {
    generoSelecionado = "Mulher";
    botaoMulher.style.backgroundColor = "rgb(236, 127, 169)"; // Destacar botão selecionado
    botaoHomem.style.backgroundColor = "rgb(246, 233, 107)"; // Resetar outro botão
    console.log("Gênero selecionado:", generoSelecionado);
});