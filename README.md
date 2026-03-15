🌊 **Sunnee – Progetto Beachwear Sostenibile**

Questo progetto simula un sistema di gestione ordini e produzione per il brand Sunnee, un’azienda ipotetica di costumi da bagno realizzati con plastica riciclata.

📖 **Descrizione del Brand**

Nome: Sunnee

Origine dell’idea:
La fondatrice, surfista e amante del mare, ha assistito al crescente inquinamento delle acque. Consapevole del problema, ha deciso di creare costumi che non rilasciano microplastiche e trasformano materiali inquinanti in risorse riutilizzabili.

Vision:
🌊 Innovare il settore del beachwear sostenibile, utilizzando esclusivamente filati ricavati da plastica riciclata.

Mission:
Costruire una filiera produttiva etica e rigenerativa, garantendo la sostenibilità in ogni fase della produzione dei costumi.

Chi siamo:
Lanciata nel 2018, Sunnee oggi è un team operativo e strutturato nel settore del beachwear sostenibile, che condivide i valori della fondatrice: amore per il mare e attenzione all’ambiente.

Come funziona:
I costumi Sunnee sono realizzati con materiali brevettati a partire da rifiuti plastici marini, come reti da pesca dismesse.

Le collezioni includono modelli per uomo e donna:

Relax – comfort quotidiano

Active – sport acquatici

Extreme – atleti e professionisti

Kids – linea in arrivo per i più piccoli

💻 **Struttura del progetto**

Il progetto è implementato in TypeScript e simula tre entità principali:

1️⃣ **Prodotto (Prodotto / IProdotto)**

Rappresenta un costume. Ogni prodotto ha:

id: numero identificativo

taglia: S, M, L, XL, XXL

colore: colore del costume

stato: booleano, indica se il prodotto è ordinato

cliente: riferimento opzionale al cliente che ha ordinato

Funzionalità principali:

assegnaCliente(cliente: ICliente) → associa il prodotto a un cliente e cambia lo stato in ordinato.

2️⃣ **Cliente (Cliente / ICliente)**

Rappresenta un cliente del brand. Ogni cliente ha:

nome, cognome, email, metodoPagamento

Funzionalità principali:

ordinaProdotto(prodotto: IProdotto) → ordina un prodotto disponibile, assegnandolo a sé.

3️⃣ **Processo di Produzione (ProcessoProduzione / IProcessoProduzione)**

Rappresenta un processo produttivo sostenibile del brand. Ogni processo ha:

nomeProcesso

descrizione

prodottiInProduzione: array di prodotti

Funzionalità principali:

aggiungiProdotto(prodotto: IProdotto) → aggiunge un nuovo prodotto alla produzione.

🛠 **Funzionamento del progetto**

Si istanziano diversi prodotti di beachwear sostenibile.

Si creano diversi clienti del brand.

Si crea un processo produttivo e si aggiungono i prodotti ad esso.

I clienti possono ordinare prodotti disponibili.

Lo stato dei prodotti e i clienti associati possono essere verificati.

⚡ Tecnologie utilizzate

TypeScript – per tipizzazione e controllo logico

Browser – per eseguire il codice

🔹 Conclusione

Il progetto dimostra come gestire prodotti sostenibili, clienti e processi di produzione in modo semplice e strutturato, simulando la logica di ordini e assegnazione prodotti di un brand sostenibile come Sunnee.
