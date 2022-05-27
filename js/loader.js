var loader = document.getElementById('wrapper');
var content = document.getElementById('content');
var menu = document.getElementById('menu');

setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'flex';
    menu.style.display = 'flex';
}, 3500);
