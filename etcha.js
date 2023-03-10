



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for(c = 0; c < (rows * cols); c++)  {
    let cell = document.createElement("div");
    container.appendChild(cell).classList.add('cuadricula')
    //let cuadricula= document.querySelectorAll('.cuadricula')
    container.addEventListener('mouseover', function(e){
      //cuadricula.style.backgroundColor = 'black'
      e.target.style.backgroundColor = 'black'
    })
  };
};
makeRows(16, 16);
let cuadricula= document.querySelector('.cuadricula')
function eraseGrid(){
  container.innerHTML= ''
  makeRows(16,16)
  
}

let remove= document.getElementById('remove')
remove.addEventListener('click', () => {
  eraseGrid()
})