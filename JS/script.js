let songPlay = true

fetch('CDs.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    albumInfo = data;
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });

function openCD(record){
    let blurbList = document.getElementById("info")
    blurbList.children[0].innerText = "Artist: " + albumInfo[record].artist
    blurbList.children[1].innerText = "Album: " + albumInfo[record].album
    blurbList.children[2].innerText = "Year: " + albumInfo[record].year
    blurbList.children[3].innerText = "Country: " + albumInfo[record].country
    blurbList.children[4].innerText = "Genre: " + albumInfo[record].genre
    blurbList.children[5].innerText = "Commentary:"

    document.getElementById("commentary").src = albumInfo[record].comment

    document.getElementById("albumcover").src = albumInfo[record].cover 

    document.getElementById("playback").src = albumInfo[record].song
}

function playSong(){
  if(songPlay == true){
    let position = 0;
    let intervalID = setInterval(() => {
            position += 5;
            document.getElementById("disc").style.left = position + 'px';
            if (position > 99) {
                clearInterval(intervalID)
            }
    
        }, 50);
  
    document.getElementById("disc").classList.add("spin")
    document.getElementById("playback").play()
    songPlay = false;
  }
  else{
    document.getElementById("disc").classList.remove("spin")
    document.getElementById("playback").pause()
    let position = 100;
    let intervalID = setInterval(() => {
            position -= 5;
            document.getElementById("disc").style.left = position + 'px';
            if (position < 1) {
                clearInterval(intervalID)
            }
    
        }, 50);
    songPlay = true;
  }
}

// 'https://raw.githubusercontent.com/red-velvet-corridor396/CSCI-202-2/main/Assignment-6/CDs.json'
