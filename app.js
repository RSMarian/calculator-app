(function() {
    // variabile
    let result = document.querySelector(".result");
    let buttons = document.querySelectorAll(".buttons");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");

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

    equal.addEventListener('click', function(e){
        if(result.value === ''){
            result.value = "";
        }else{
            let answer = eval(result.value);
            result.value = answer;
        }
    });

    clear.addEventListener('click', function(e){
        result.value = "";
    })

})();
