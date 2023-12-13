console.log("welcome to spotify clone")
//initialiaze the variable
let songIndex=0;
let audioElement = new Audio("songs/1.mp3")
let masterPlay= document.getElementById("masterPlay")
let myProgress = document.getElementById("myProgress")
let gif = document.getElementById("gif")
let songItems=Array.from(document.getElementsByClassName("songItem"))

let songs =[
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"huma huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"xyz", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"lala", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"daku", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
]
songItems.forEach((element ,i)=> {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
    
});

//handle play pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0)
{
    audioElement.play();
    masterPlay.classList.remove( 'fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1;

}
else{
    audioElement.pause();
    masterPlay.classList.remove( 'fa-pause-circle')
    masterPlay.classList.add('fa-play-circle')
    gif.style.opacity=0;
}
}
)

//listen to events
audioElement.addEventListener('timeupdate' , ()=>{
    console.log("timeupdate")
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgress.value=progress

}
)
myProgress.addEventListener('change',()=>{
    audioElement.currentTime = myProgress.value * audioElement.duration/100;
} )
const makeAllPlay= ()=>{
 Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-pause")
    element.classList.add("fa-circle-play")
 })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       console.log(e);
      makeAllPlay();
       e.target.classList.remove("fa-circle-play")
       e.target.classList.add("fa-circle-pause")
    })
})