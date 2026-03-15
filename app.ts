interface IProdotto{
    id: number;
    taglia: string;
    colore: string;
    stato: boolean;
    cliente?: ICliente;

    assegnaCliente(cliente:ICliente):void;

}

interface ICliente{
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  ordinaProdotto(prodotto:IProdotto):void;
}

interface IProcessoProduzione{
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    aggiungiProdotto(prdotto:IProdotto):void;
}

class Prodotto implements IProdotto{
    id: number;
    taglia: string;
    colore: string;
    stato: boolean;
    cliente?: ICliente;
    
    assegnaCliente(cliente:ICliente):void {
        this.cliente = cliente;
        this.stato = true;
    }

    constructor(id: number, taglia: string, colore: string, stato: boolean) {
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }


}

class Cliente implements ICliente{
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

 
    constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    ordinaProdotto(prodotto:IProdotto):void {
        if (!prodotto.stato) {
            prodotto.assegnaCliente(this);
            console.log("Prodotto ordinato con successo");
        } else {
            console.log("Prodotto già ordinato");
        }

    }
}

class ProcessoProduzione implements IProcessoProduzione{
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

  
    constructor(nomeProcesso: string, descrizione: string, prodottiInProduzione: IProdotto[]) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }

    aggiungiProdotto(prodotto:IProdotto):void {
        this.prodottiInProduzione.push(prodotto);
    }
    
}

const prodotti: Prodotto[] =[
    new Prodotto(1, "S", "Nero", false),
    new Prodotto(2, "M", "Bianco", false),
    new Prodotto(3, "L", "Rosso", false),
    new Prodotto(4, "XL", "Verde", false), 
    new Prodotto(5, "XXL", "Nero", false),  
];

const clienti: Cliente[] =[
    new Cliente("Mario", "Rossi", "mario.rossi@gmail.com", "PayPal"),
    new Cliente("Luigi", "Bianchi", "luigi.bianchi@gmail.com", "Carta di credito"),
    new Cliente("Giuseppe", "Verdi", "giuseppe.verdi@gmail.com", "PayPal"),
    new Cliente("Marco", "Neri", "marco.neri@gmail.com", "Bonifico bancario"),
    new Cliente("Andrea", "Blu", "andrea.blu@gmail.com", "PayPal"),
];

const processoProduzione = new ProcessoProduzione(
 "Produzione BeachWear riciclato",
 "Produzione di costumi da bagno con plastica riciclata recuperata dagli oceani",
 []
);

prodotti.forEach(prodotto => {
    processoProduzione.aggiungiProdotto(prodotto);
});

console.log("Prodotti in produzione:");
console.log(processoProduzione.prodottiInProduzione);

// Alcuni clienti ordinano prodotti
clienti[0]!.ordinaProdotto(prodotti[0]!); // Mario ordina il prodotto 1
clienti[1]!.ordinaProdotto(prodotti[1]!); // Luigi ordina il prodotto 2
clienti[2]!.ordinaProdotto(prodotti[2]!); // Giuseppe ordina il prodotto 3

// Testare un prodotto già ordinato
clienti[3]!.ordinaProdotto(prodotti[0]!); // Marco prova a ordinare il prodotto 1 già ordinato

processoProduzione.prodottiInProduzione.forEach(p => {
    const cliente = p.cliente ? `${p.cliente.nome} ${p.cliente.cognome}` : "Nessuno";
    console.log(`Prodotto ${p.id} (${p.colore}, ${p.taglia}) - Stato: ${p.stato ? "Ordinato" : "Disponibile"} - Cliente: ${cliente}`);
});
