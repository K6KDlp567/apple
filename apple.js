function mettreAJourHorloge(){
    const dateActuelle = new Date();

    let heures = dateActuelle.getHours();
    let minutes = dateActuelle.getMinutes(); // 1. Correction : getMinutes()

    heures = heures.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');

    // 2. Correction : On crée la variable manquante
    const heureComplete = heures + ":" + minutes; 

    // 3. Correction : On injecte l'heure uniquement dans les horloges
    document.getElementById('iosClock').textContent = heureComplete;
    document.getElementById('lockClock').textContent = heureComplete; 

    // 4. Correction : toLocaleDateString pour avoir le français
    const optionsDate = { weekday: 'long', day: 'numeric', month: 'long' };
    let dateEnFrancais = dateActuelle.toLocaleDateString('fr-FR', optionsDate);

    dateEnFrancais = dateEnFrancais.charAt(0).toUpperCase() + dateEnFrancais.slice(1);
    document.getElementById('lockDate').textContent = dateEnFrancais;
}

// 5. Correction : On lance et on programme la répétition HORS de la fonction
mettreAJourHorloge();
setInterval(mettreAJourHorloge, 1000);
