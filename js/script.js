
const costoKm = 0.21;
const nameSurname = document.querySelector ('.inputNs');
const kmPercorrere = document.querySelector ('.inputKm');
const utenteEta = document.querySelector ('.selectEta');
const btn1 = document.querySelector ('.btn1');
const btn2 = document.querySelector ('.btn2');
const textTicket = document.querySelector ('.text-biglietto');
const ticket = document.querySelector ('.biglietto');


btn1.addEventListener('click',function(){
 // leggo il contenuto dell'input
  console.log(nameSurname.value);
  console.log(kmPercorrere.value);
  console.log(utenteEta.value);
  let price = kmPercorrere.value * costoKm;

  if (utenteEta.value === 'utenteJung') {
    let discount = price * 20 / 100;
    price = price - discount;
   } else if (utenteEta.value === 'utenteSenior') {
    let discount = price * 40 / 100;
    price = price - discount;
   }

   document.getElementById ('outputNameSurname').innerHTML = nameSurname.value;
   document.getElementById ('outputUtenteEta').innerHTML = utenteEta.value;
   document.getElementById ('price').innerHTML = price.toFixed(2);

   textTicket.classList.remove('d-none');
   ticket.classList.remove('d-none');
});



btn2.addEventListener('click',function(){
  // resetto il value dell'input
  utenteEta.value = '';
  kmPercorrere.value = '';
  nameSurname.value = '';

  textTicket.classList.add('d-none');
  ticket.classList.add('d-none');
})

