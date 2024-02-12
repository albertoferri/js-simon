// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di lunedì!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

// Funzione per aggiornare il countdown ogni secondo
function countdown() {
    const now = new Date();
    const monday = new Date();
    
    // Imposta il prossimo lunedì alle 9:30 AM come obiettivo
    // Calcola quanti giorni mancano a lunedì
    const untilMonday = (1 + (7 - now.getDay())) % 7;
    // Aggiungo questi giorni alla data attuale per ottenere la data del prossimo lunedì
    monday.setDate(now.getDate() + untilMonday);
    // console.log(untilMonday)

    // Imposta l'ora a 9:30 
    monday.setHours(9, 30, 0, 0); 
    
    // Calcola la differenza di tempo tra adesso e lunedì
    const quantoManca = monday - now;
    // console.log(quantoManca)
  
    // Converto la differenza in giorni, ore, minuti e secondi
    // utilizzo Math.floor per arrotondare il numero per difetto
    // per convertire i giorni ho diviso la differenza per il numero di ms che ci sono in un giorno
    const giorni = Math.floor(quantoManca / (1000 * 60 * 60 * 24));

    // per convertire le ore calcolo il resto della divisione tra il "quantoManca" per il numero massimo di ms in un giorno
    const ore = Math.floor((quantoManca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // per convertire i minuti faccio la stessa cosa ma calcolandoli per quanti ms ci sono in un ora
    const minuti = Math.floor((quantoManca % (1000 * 60 * 60)) / (1000 * 60));

    // per convertire i secondi faccio la stessa cosa delle ore ma per quanti ms ci sono in un minuto
    const secondi = Math.floor((quantoManca % (1000 * 60)) / 1000);
  
    // stampo in pagina il countdown
    document.getElementById("timer").innerHTML = "Mancano esattamente: <br> " + giorni + " giorni <br>" + ore + " ore <br> " + minuti + " minuti <br> e " + secondi + " secondi a lunedì.";

    // Se il countdown è terminato, mostra un messaggio
    if (quantoManca <= 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = "TIMER SCADUTO!!!!!!!";
    }
}

// Aggiorna il countdown ogni secondo
const updateCountdown = setInterval(countdown, 1000);

// eseguo la funzione
countdown();  