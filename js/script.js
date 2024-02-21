
const costoKm = 0.21;
const nameSurname = document.querySelector ('.inputNs');
const kmPercorrere = document.querySelector ('.inputKm');
const utenteEta = document.querySelector ('.selectEta');
const btn1 = document.querySelector ('.btn1');
const btn2 = document.querySelector ('.btn2');
let price = kmPercorrere * costoKm;

btn1.addEventListener('click',function(){
 // leggo il contenuto dell'input
  console.log(nameSurname.value);
  console.log(kmPercorrere.value);
  console.log(utenteEta.value);

  if (utenteEta.value === 'utenteJung') {
    let discount = price * 20 / 100;
    price = price - discount;
   } else if (utenteEta.value === 'utenteSenior') {
    let discount = price * 40 / 100;
    price = price - discount;
   }
});

console.log(price);