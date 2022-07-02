console.log('connected')
 
var restart = document.querySelector("#butt");
 
var squares = document.querySelectorAll('td');
 
function clearBoard(){
    for(var i = 0; i< 9; i++){
        squares[i].textContent = '';
    }
}
restart.addEventListener('click', clearBoard);

for(var i=0; i< 9 ; i++){
    squares[i].addEventListener('click', changeMarker)
}

function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }
    else if(this.textContent ==='X'){
        this.textContent ='O';
    }
    else{
        this.textContent ='';
    }
}

 
