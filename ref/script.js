var header = document.getElementsByTagName('h1');

function color(){
    
    if (header[1].style.color == 'green') {
        header[1].style.color = 'orange';
    } else {
        header[1].style.color = 'green'; 
    }
}