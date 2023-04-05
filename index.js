console.log("Welcome to Clone of SPOTIFY");

let songindex=0;
let audioElement = new Audio(('../songs/1.mp3'));
let mainPlay = document.getElementById('mainPlay');
let progressbar = document.getElementById('progressbar');
let giff = document.getElementById('giff');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname: "Song1", filepath: "songs/1.mp3", coverpath:"cover3.jpg"},
    {songname: "Song2", filepath: "songs/2.mp3", coverpath:"logo2.png"},
    {songname: "Song3", filepath: "songs/3.mp3", coverpath:"logo3.webp"},

]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})


//play n pause the song

mainPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        mainPlay.classList.remove('fa-play-circle');
        mainPlay.classList.add('fa-pause-circle'); 
        giff.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        mainPlay.classList.remove('fa-pause-circle');
        mainPlay.classList.add('fa-play-circle');
        giff.style.opacity=0;
    }

})

// progress bar seek
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})

progressbar.addEventListener('change',() => {
  audioElement.currentTime = progressbar.value*audioElement.duration/100;
})