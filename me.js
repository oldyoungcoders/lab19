let company = {
    ajiltan1: {
        ner: 'Munh-Od',
        nas: 15,
        utas: 85858585,
        email: 'Munh-Odcloud.com',
        huis: 'er'
    },
    ajiltan2: {
        ner: 'Haliun',
        nas: 34,
        utas: 89768976,
        email: 'Haliuncloud.com',
        huis: 'em'
    },
    ajiltan3: {
        ner: 'Gun-Margad',
        nas: 54,
        utas: 82344543,
        email: 'Gun-Margadcloud.com',
        huis: 'er'
    },
    ajiltan4: {
        ner: 'NamuunGegee',
        nas: 28,
        utas: 85768786,
        email: 'NamuunGegeecloud.com',
        huis: 'em'
    },
    ajiltan5: {
        ner: 'Anhliun',
        nas: 29,
        utas: 87858584,
        email: 'Anhliuncloud.com',
        huis: 'em'
    },
    ajiltan6: {
        ner: 'Bat',
        nas: 27,
        utas: 87848584,
        email: 'Batcloud.com',
        huis: 'er'
    },
    ajiltan7: {
        ner: 'Uinga',
        nas: 2897,
        utas: 87838584,
        email: 'Uingacloud.com',
        huis: 'em'
    },
    ajiltan8: {
        ner: 'Nandin',
        nas: 1665,
        utas: 87818584,
        email: 'Nandinicloud.com',
        huis: 'em'
    },
    ajiltan9: {
        ner: 'Gan',
        nas: 23,
        utas: 87868584,
        email: 'Gancloud.com',
        huis: 'er'
    },
    ajiltan10: {
        ner: 'Batka',
        nas: 16,
        utas: 87868584,
        email: 'Batkacloud.com',
        huis: 'er'
    },
}

var c = '';
console.log('Companiiin ajiltnuudiin ners!');
console.log(c);


console.log(c);
console.log('Companiiin emegtei ajiltanuudiin ners bol...');
console.log(c);

// Emegtei eseh && 25>age

for(key in company){
    if(company[key].nas>25 && 'em' == company[key].huis){
        console.log(company[key].name);
    } 
}