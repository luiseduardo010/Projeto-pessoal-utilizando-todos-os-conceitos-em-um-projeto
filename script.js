// Classe para representar uma Venda
class Venda {
    constructor(name, turm, typeFood, number, pag, valor) {
        this.name = name;
        this.turm = turm;
        this.typeFood = typeFood;
        this.number = number;
        this.pag = pag;
        this.valor = valor;
    }

    // Método para confirmar e exibir a venda
    confirmar() {
        return confirm(`
        Realizar Venda com o cliente ${this.name},
        com a Turma ${this.turm}
        com a comida ${this.typeFood}
        com a Quantidade ${this.number}
        com o Valor ${this.valor}
        com a forma de Pagamento ${this.pag}?`);
    }

    // Método para gerar o item da lista
    gerarItem() {
        return `${this.name}: ${this.turm} ${this.typeFood} ${this.number} ${this.valor} ${this.pag}`;
    }
}

// Classe para gerenciar a aplicação
class VendaManager {
    constructor() {
        this.vendas = [];
        this.listElement = document.getElementById('list2');
    }

    // Método para adicionar uma venda
    adicionarVenda(venda) {
        if (venda.confirmar()) {
            this.vendas.push(venda);
            this.atualizarLista();
            this.limparCampos();
        }
    }

    // Método para atualizar a lista de vendas
    atualizarLista() {
        this.listElement.innerHTML = ''; // Limpa a lista existente
        this.vendas.forEach((venda, index) => {
            const playerItem = document.createElement('li');
            playerItem.id = `player-${index}`;
            playerItem.innerHTML = venda.gerarItem();
            this.listElement.appendChild(playerItem);
        });
    }

    // Método para limpar os campos de entrada
    limparCampos() {
        document.getElementById('name').value = '';
        document.getElementById('Turm').value = '';
        document.getElementById('Typefood').value = '';
        document.getElementById('number').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('Pag').value = '';
    }
}

// Instancia o gerenciador de vendas
const vendaManager = new VendaManager();

// Função para fazer a venda
function fazervenda() {
    const name = document.getElementById('name').value;
    const turm = document.getElementById('Turm').value;
    const typeFood = document.getElementById('Typefood').value;
    const number = document.getElementById('number').value;
    const valor = document.getElementById('valor').value;
    const pag = document.getElementById('Pag').value;

    const novaVenda = new Venda(name, turm, typeFood, valor, number, pag);
    vendaManager.adicionarVenda(novaVenda);
}

// Função para realizar uma venda "fiado"
function fiado() {
    const name = document.getElementById('name').value;
    const turm = document.getElementById('Turm').value;
    const typeFood = document.getElementById('Typefood').value;
    const number = document.getElementById('number').value;
    const valor = document.getElementById('valor').value;
    const pag = document.getElementById('Pag').value;

    const novaVendaFiado = new Venda(name, turm, typeFood, number, pag, valor);
    vendaManager.adicionarVenda(novaVendaFiado);
}

// Função para pagar pendência
function pagarpendencia() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('Pagar').value;
    const Pagar = document.getElementById(`player-${number}`);

    if (Pagar) {
        const confirmation = confirm(`Pagar a conta de ${name}?`);
        if (confirmation) {
            vendaManager.listElement.removeChild(Pagar);
            alert('Pagamento realizado com sucesso!');
        }
    } else {
        alert('Venda não encontrada!');
    }
}
