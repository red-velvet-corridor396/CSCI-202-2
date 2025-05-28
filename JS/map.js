let modalBack = document.getElementById("modal_background")
// let modalBox = document.getElementById("modal_box")
let genre = document.getElementById("genre")
let desc = document.getElementById("desc")

fetch('taxonomy.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    genres = data;
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });


function testFunction(){
    alert('hiii')
}

function genreBox(genreNum){
    // remove the hide class from the modal and modal box
    // feed the genre into the function
    // Parse JSON and select the correct genre information and include it in the modal box
    modalBack.classList.remove('hide')
    // modalBox.classList.remove('hide')
    genre.innerText = genres[genreNum].genre
    desc.innerText = genres[genreNum].desc
}

function modalClose(){
    modalBack.classList.add('hide')
    // modalBox.classList.add('hide')
}