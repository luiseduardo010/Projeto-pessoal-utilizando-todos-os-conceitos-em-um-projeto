//preço
function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){  
    var sep = 0;  
    var key = '';  
    var i = j = 0;  
    var len = len2 = 0;  
    var strCheck = '0123456789';  
    var aux = aux2 = '';  
    var whichCode = (window.Event) ? e.which : e.keyCode;  
    if (whichCode == 13 || whichCode == 8) return true;  
    key = String.fromCharCode(whichCode); // Valor para o código da Chave  
    if (strCheck.indexOf(key) == -1) return false; // Chave inválida  
    len = objTextBox.value.length;  
    for(i = 0; i < len; i++)  
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;  
    aux = '';  
    for(; i < len; i++)  
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);  
    aux += key;  
    len = aux.length;  
    if (len == 0) objTextBox.value = '';  
    if (len == 1) objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;  
    if (len == 2) objTextBox.value = '0'+ SeparadorDecimal + aux;  
    if (len > 2) {  
        aux2 = '';  
        for (j = 0, i = len - 3; i >= 0; i--) {  
            if (j == 3) {  
                aux2 += SeparadorMilesimo;  
                j = 0;  
            }  
            aux2 += aux.charAt(i);  
            j++;  
        }    
        objTextBox.value = '';  
        len2 = aux2.length;  
        for (i = len2 - 1; i >= 0; i--)  
        objTextBox.value += aux2.charAt(i);  
        objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);  
    }  
    return false;  
}  
//index
function fazervenda() {
    const name = document.getElementById('name').value
    const Turm = document.getElementById('Turm').value
    const Typefood = document.getElementById('Typefood').value
    const number = document.getElementById('number').value
    const Pag = document.getElementById('Pag').value

    const confirmation = confirm(`
    Realizar Venda com o cliente ${name},
    com a Turma ${Turm}
    com a comida ${Typefood}
    com a Quantidade ${number}
    com a forma de Pagamento ${Pag}?`
    )

    if (confirmation) {
        const list = document.getElementById('list2')
        const playerItem = document.createElement('li')

        playerItem.id = 'player-' + number
        playerItem.innerHTML = `${name}: ${Turm} ${Typefood} ${number} ${Pag}`

        list.appendChild(playerItem)

        document.getElementById('name').value = ''
        document.getElementById('Turm').value = ''
        document.getElementById('Typefood').value = ''
        document.getElementById('number').value = ''
        document.getElementById('Pag').value = ''
    }
}

function fiado() {
    const name = document.getElementById('name').value
    const Turm = document.getElementById('Turm').value
    const Typefood = document.getElementById('Typefood').value
    const number = document.getElementById('number').value
    const valor = document.getElementById('valor').value
    const Pag = document.getElementById('Pag').value

    const confirmation = confirm(`
    Realizar Venda com o cliente ${name},
    com a Turma ${Turm}
    com a comida ${Typefood}
    com a Quantidade ${number}
    com o valor ${valor}
    com a forma de Pagamento ${Pag}?`
    )

    if (confirmation) {
        const list = document.getElementById('team-list')
        const playerItem = document.createElement('li')

        playerItem.id = 'player-' + number
        playerItem.innerHTML = 
        `Nome: ${name} 
        Turma: ${Turm} 
        Comida: ${Typefood} 
        Quantidade: ${number} 
        Pagamento: ${Pag}`

        list.appendChild(playerItem)

        document.getElementById('name').value = ''
        document.getElementById('Turm').value = ''
        document.getElementById('Typefood').value = ''
        document.getElementById('number').value = ''
        document.getElementById('Pag').value = ''
    }

}

function pagarpendencia() {
    const list = document.getElementById('list2')
    const playerItem = document.createElement('li')
    const name = document.getElementById('name').value
    const number = document.getElementById('Pagar').value
    const valor = document.getElementById('valor').value
    const Pagar = document.getElementById('player-' + number)

    const confirmation = confirm(`
    Pagar a conta de ${name.innerText}
    com o valor de ${number.innerText}?`)

    if (confirmation) {
        playerItem.id = 'player-' + number
        playerItem.innerHTML = `${name}: ${Turm} ${Typefood} ${number} ${Pag}`

        list.appendChild(playerItem)

        document.getElementById('team-list').removeChild(Pagar)
        document.getElementById('list2').addChild(Pagar)
        document.getElementById('Pagar').value = ''
    }
}

