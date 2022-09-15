var btn = document.getElementsByTagName('button');
var span = document.getElementsByTagName('span');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        for (let i = 0; i < span.length; i++) {
            span[i].style.color = 'red';
        }
    })
}


