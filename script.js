const isStatus = document.querySelector('h5');
const btn = document.querySelector('#btn-add');

let count = 0;
btn.addEventListener('click', function(){
    if(count === 0){
        isStatus.innerHTML = 'Friends';
        isStatus.style.color = 'green';
        btn.innerHTML = 'Remove Friend'
        count = 1;
    } 
    else{
        isStatus.innerHTML = 'Strangers';
        isStatus.style.color = 'red';
        btn.innerHTML =  'Add Friends';
        count = 0;
    }
});

