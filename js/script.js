/* ibg */
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
            for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
    
    ibg();


/********  MENU BURGER ***********/

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.mobile-nav').classList.toggle('active');

}

/******************/

/**********  QUANTITY **************/


let quantityButtons = document.querySelectorAll('.quantity__button')

if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function(e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            console.log(value)
            if (quantityButton.classList.contains('quantity__button-plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        })
    }
}