function main () {
    // variabile
    let result = document.querySelector(".result");
    let buttons = document.querySelectorAll(".buttons");
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");

    // functie atasata pe fiecare 'button' din .buttons (toate butoanele)
    buttons.forEach(function(button){
        // adaugam click event pe fiecare buton
        button.addEventListener('click', function(e){
            // targetam numarul atasat (prin proprietatea data-num) de elementul care a triggeruit eventul si il punem intr-o variabila
            let value = e.target.dataset.num;
            // console.log(value);
            // transferam valoarea din variabila value in valoarea variabilei result, care este afisata pe 'ecranul' calculatorului
            result.value += value;
        })
    })
}
main ();