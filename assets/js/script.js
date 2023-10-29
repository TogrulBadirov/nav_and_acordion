// Task 1. Toggle Navbar

// Icon ve subMenu deyisenlerinin teyin edilmedsi
const icon = document.querySelector('#icon')
const subMenu = document.querySelector('.sub-menu')

// Icon'a click etdikde yerine yetirilecek funksiyani yazilmasi
icon.addEventListener('click',()=>{
    subMenu.classList.toggle('active') //navBar'in acilib baglanmasi ucun yaziriq.
    icon.classList.toggle('fa-bars') //iconun deyismesi ucun istifade edirk. Bu class yoxdursa elave edir, varsa silir
    icon.classList.toggle('fa-xmark') //iconun deyismesi ucun istifade edirk. Bu class yoxdursa elave edir, varsa silir
})


// Task 2. Collapsibles / Accordion

// Accodion'un basliq content ve icon'unu deyisenler teyin edirik
const contentHeader = document.querySelectorAll('.content-header')
const content = document.querySelectorAll('.content')
const arrows = document.querySelectorAll('.fa-chevron-down')

// Her bir Accordion'u for ile loop'a salir
contentHeader.forEach(element => {
    element.addEventListener('click',()=>{ //Accordion'a click etdikde diger Accordion'lari baglamasi ucun
        contentHeader.forEach(elemen =>{
            if (element !== elemen) {
            elemen.lastElementChild.classList.remove('rotate-animation') // Ozunden basqa diger icon'larin 'rotate-animation' classini silir
            }
        })
        content.forEach(e => {
            
            if (element.nextElementSibling!==e) {
                e.classList.remove('open') // Ozunden basqa diger Accordion'larin 'open' classini silir
            }
            
        });
        element.lastElementChild.classList.toggle('rotate-animation') 
        element.nextElementSibling.classList.toggle('open')
    })
});

























// // Her bir Accordion'u for ile loop'a salir
// contentHeader.forEach(element => {
//     element.addEventListener('click',()=>{ //Accordion'a click etdikde diger Accordion'lari baglamasi ucun
//         element.lastElementChild.classList.remove('rotate-animation')

//         content.forEach(e => {
            
//             if (element.nextElementSibling!==e) {
//                 e.classList.remove('open') // Ozunden basqa diger Accordion'larin 'open' classini silir
//             }
            
//         });
//         element.lastElementChild.classList.toggle('rotate-animation') 
//         element.nextElementSibling.classList.toggle('open')
//     })
// });