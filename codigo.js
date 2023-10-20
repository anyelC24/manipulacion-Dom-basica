const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCacular');
const pResult = document.querySelector('#result');

//escucha cada vez que suceda cierto evento//para Submit, desde Html si no hahcemos esto se nos reinicia la pagina

//  form.addEventListener('submit', sumarInputValues);


// use el number para transformar el string en numero

//para escuchar envento de submit

//  function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaImputs = Number(input1.value) + Number(input2.value);
//      pResult.innerText = "Resultado: " + sumaImputs;
//     }



//esta es la otra forma de resolver el Form, se va a Html y se le coloca a botton un type="button", para que no se nos reinicie la pagina tambien

//mas sin embargo para enviar, se deberia utilizazr botton de submit con //event.preventDefault(); y su parametro dentro de la función 
    btn.addEventListener('click', sumarInputValues);

    function sumarInputValues(event) {
        //console.log({event});
        //event.preventDefault();
        const sumaImputs = Number(input1.value) + Number(input2.value);
         pResult.innerText = "Resultado: " + sumaImputs;
        }