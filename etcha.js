let cuadricula= document.querySelector('.cuadricula')
let remove= document.getElementById('remove')
let buttons= document.querySelectorAll ('.color')
let color='black'



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for(c = 0; c < (rows * cols); c++)  {
    let cell = document.createElement("div");
    container.appendChild(cell).classList.add('cuadricula')
   
    //let cuadricula= document.querySelectorAll('.cuadricula')
  
};}
makeRows(16, 16);

function eraseGrid(){
  container.innerHTML= ''
  makeRows(16,16)
  
}



function selectColor(event){
  console.log('cambia color')
  switch (event.target.dataset.color) { 
    case 'rainbow':
        color = 'rainbow';
        break;  
    case 'black':
        color = 'black';
        break;
    default:'black'
}

}

function colorSelection(e){
  switch (color) {
    case 'rainbow':
      e.target.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        break;  
    case 'black':
      e.target.style.backgroundColor = 'black'
      break

 }
}

function userColorSelection(event) {
  color = event.target.value;
}

buttons.forEach(buttons =>{
  buttons.addEventListener("click",selectColor)})

remove.addEventListener('click', () => {
  eraseGrid()})

  //container.addEventListener('mouseover', colorSelection)
  container.addEventListener('mouseover', colorSelection)
  //function(e){
    //cuadricula.style.backgroundColor = 'black'
    //e.target.style.backgroundColor = 'black'
    
  
