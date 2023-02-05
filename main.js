// tady je místo pro náš program

let vysledek = document.querySelectorAll('.uzivatel');
let tlacitko = document.querySelectorAll('button');

function zobrazitText () {
    let jmeno = prompt('Zadejte své jméno:');

    if (jmeno == '') {
        alert('Jméno je povinný údaj');
    } else {
        let prijmeni = prompt('Zadejte své příjmení:');

        if (prijmeni == '') {
            alert('Příjmení je povinný údaj');
        } else {
            const rok = Number(prompt('Zadejte svůj rok narození:'));
            const vek = new Date().getFullYear() - rok;
            if (vek == '' || vek == new Date().getFullYear()) {
                alert('Rok je povinný údaj');
            } else {
                for (i = 0; i < vysledek.length; i++) {
                    vysledek[i].innerHTML = '<em>' + jmeno + ' ' + prijmeni + ' ' + vek + '</em>';
                }
                tlacitko[1].style.visibility = ('visible');
            }
        }
    }
}    

function obarvitText () {
    let color = prompt('Zadejte svou oblíbenou barvu:');

    for (i = 0; i < vysledek.length; i++) {
        vysledek[i].style.color = color;
    }
    vysledek[1].style.visibility = ('visible');
}