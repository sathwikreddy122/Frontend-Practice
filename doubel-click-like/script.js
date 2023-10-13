const container = document.querySelector('#container');
const love_icon = document.querySelector('#icon');

container.addEventListener('dblclick', function(){
    love_icon.style.transform = 'translate(-50%, -50%) scale(1)';
    love_icon.style.opacity = 0.8;
    setTimeout(function(){
        love_icon.style.opacity = 0;
    }, 1000)
    setTimeout(function(){
        love_icon.style.transform = 'translate(-50%, -50%) scale(0)';
    },2000);
})