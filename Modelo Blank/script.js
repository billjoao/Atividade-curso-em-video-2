function gerar() {
    // pegar os valores
    let num = document.getElementById('txtn').value; // Pega o valor do input como string
    let tab = document.getElementById('selecttab');  // Seleciona o dropdown

    // verificar se o valor é valido
    if (num === "" || isNaN(num)) { // Verifica se o campo está vazio ou não é um número
        window.alert('Digite um número válido');
    } else {
        // converter o valor em inteiro
        let n = Number(num); // Converte o valor para número
        tab.innerHTML = "";   // Limpa o conteúdo anterior da tabuada
        
        // Gera a tabuada
        for (let x = 1; x <= 10; x++) { // Loop de 1 a 10
            let item = document.createElement('option'); // Cria um novo elemento <option>
            item.innerText = `${n} x ${x} = ${n * x}`; // Define o texto da opção
            tab.appendChild(item); // Adiciona o item ao dropdown
        }
    }
}
