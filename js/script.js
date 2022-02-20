window.addEventListener('DOMContentLoaded', function(){

    let tabheader = document.querySelector('.tabheader'),
        tabContentDescrs = document.querySelectorAll('.tabcontent__descr'),
        tabContents = document.querySelectorAll('.tabcontent'),
        tabHeaderItems = document.querySelectorAll('.tabheader__item');

    for(let i=0; i<4; i++){
        tabContents[i].style.display = 'none';
        tabContentDescrs[i].style.display = 'none';
    }

    tabContents[0].style = 'block';
    tabContentDescrs[0].style.display = 'block';
    tabHeaderItems[0].classList.add('tabheader__item_active');

    tabHeaderItems.forEach(function(item, i){

        item.addEventListener('click', function(){
            item.classList.add('tabheader__item_active');
            tabContents[i].style.display = 'block';
            tabContentDescrs[i].style.display = 'block';
            
            for(let j=0; j<4; j++){
                if(i!=j){
                    tabContents[j].style.display = 'none';
                    tabContentDescrs[j].style.display = 'none';
                    tabHeaderItems[j].classList.remove('tabheader__item_active');
                }
            }
     
        })

    })
    

})