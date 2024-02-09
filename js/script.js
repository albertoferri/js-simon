// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di lunedì!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

// Funzione per aggiornare il countdown ogni secondo
function Countdown() {
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
    console.log(quantoManca)
  
    
}

// eseguo la funzione
Countdown();  