console.log("Welcome to Spotify");
//variable Initialization
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let miniPlay=document.getElementById('1');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('MasterSongName')
let songs=[
    {songName:"Bones-Imagine Dragons",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Demons-Imagine Dragons",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Numb-Linkin Park",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Nothing Else Matters-Metallica",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Coming back to Life-Pink Floyd",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Battle Symphony-Linkin Park",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Take me Home,Country Road-John Denver",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Carnival Rust-Pink Floyd",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Starboy-The Weekend",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
   

]
songitems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
    
})

// audioElement.play()
//handle play box click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
        
    })
    



 }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays()
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName;
        songIndex=parseInt(e.target.id)
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=8;
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}
)
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

one.forEach((element) => {
    element.addEventListener('click', () => {
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
        }
    });
});