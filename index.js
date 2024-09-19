// 1
const couleur = document.querySelectorAll(".red");
for (let i = 0; i < couleur.length; i++) {
  couleur[i].classList.remove('red');
  couleur[i].classList.add('blue'); 
}
// 2
const police = document.querySelectorAll(".refrain");
for (let i = 0; i < police.length; i++) {
  police[i].style.fontStyle = 'italic';
  
}
/// 3
const couleurs = document.querySelectorAll(".blue");
for (let i = 0; i < couleurs.length; i++) {
  couleurs[i].style.backgroundColor = ' #6495EB';
}
// 4
const para = document.querySelectorAll('p');
para.forEach(element => {
  element.style.margin = '0'; 
});  

