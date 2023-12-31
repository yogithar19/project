let trackPic =document.querySelector('.trackPic');
let trackName =document.querySelector('.trackName');
let artistName = document.querySelector('.artistName');
let startTime = document.querySelector('.startTime');
let timeSlider = document.querySelector('.timeSlider');
let endTime  =  document.querySelector('.endTime');
let volumeUp = document.querySelector('.fa-volume-up');
let volumeDown = document.querySelector('.fa-volume-down');
let volumeSlider = document.querySelector('.volumeSlider');

let randomBtn = document.querySelector('.randomTrack');
let prevtrack = document.querySelector('.previousTrack')

let playPause_Btn = document.querySelector('.playPauseBtn');
let next_Track = document.querySelector('.nextTrack');
let repeattrack = document.querySelector('.repeatTrack');

// creating element audio to load up all the music elements
 let currentTrack =  document.createElement('audio');

// databse for the Playlists

const playList=[
  {
    Image: "static/music/1.png",
    track_Name: "song1",
    artist: "Sravanthi",
    music: "static/music/song1.mp3"
  },
  {
    Image: "static/music/1.png",
    track_Name: "song2",
    artist: "-",
    music: "static/music/song2.mp3"
  },
  {
    Image: "static/music/1.png",
    track_Name: "(song3)",
    artist: "Yash",
    music: "static/music/song3.mp3"
  },
  {
    Image: "static/music/1.png",
    track_Name: "(song4)",
    artist: "Rajeev",
    music: "static/music/song4.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song5)",
    artist: "Antalene",
    music: "static/music/song5.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song6)",
    artist: "Siri",
    music: "static/music/song6.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song7)",
    artist: "-",
    music: "static/music/song7.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song8)",
    artist: "-",
    music: "static/music/song8.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song9)",
    artist: "-",
    music: "static/music/song9.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song10)",
    artist: "-",
    music: "static/music/song10.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song11)",
    artist: "Sreeja",
    music: "static/music/song11.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song12)",
    artist: "Chaitanya",
    music: "static/music/song12.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song13)",
    artist: "Mahitha",
    music: "static/music/song13.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song14)",
    artist: "-",
    music: "static/music/song14.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song15)",
    artist: "-",
    music: "static/music/song15.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song16)",
    artist: "Rambha Satvik",
    music: "static/music/song16.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song17)",
    artist: "Rusna",
    music: "static/music/song17.mp3"
  },

{
    Image: "static/music/1.png",
    track_Name: "(song18)",
    artist: "-",
    music: "static/music/song18.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song19)",
    artist: "Anek",
    music: "static/music/song19.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song20)",
    artist: "-",
    music: "static/music/song20.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song21)",
    artist: "Sarvesh",
    music: "static/music/song21.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song22)",
    artist: "-",
    music: "static/music/song22.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song23)",
    artist: "-",
    music: "static/music/song23.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song24)",
    artist: "Tanmay",
    music: "static/music/song24.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song25)",
    artist: "-",
    music: "static/music/song25.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song26)",
    artist: "Anupama",
    music: "static/music/song26.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song27)",
    artist: "-",
    music: "static/music/song27.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song28)",
    artist: "Ved",
    music: "static/music/song28.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song29)",
    artist: "-",
    music: "static/music/song29.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song30)",
    artist: "Mayank",
    music: "static/music/song30.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song31)",
    artist: "Dushyant",
    music: "static/music/song31.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song32)",
    artist: "-",
    music: "static/music/song32.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song33)",
    artist: "-",
    music: "static/music/song33.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song34)",
    artist: "-",
    music: "static/music/song34.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song35)",
    artist: "-",
    music: "static/music/song35.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song36)",
    artist: "-",
    music: "static/music/song36.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song37)",
    artist: "-",
    music: "static/music/song37.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song38)",
    artist: "-",
    music: "static/music/song38.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song39)",
    artist: "-",
    music: "static/music/song39.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song40)",
    artist: "Meenakshi+Mahitha",
    music: "static/music/song40.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song41)",
    artist: "Snehil+Dushyant",
    music: "static/music/song41.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song42)",
    artist: "-",
    music: "static/music/song42.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song43)",
    artist: "-",
    music: "static/music/song43.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song44)",
    artist: "-",
    music: "static/music/song44.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song45)",
    artist: "-",
    music: "static/music/song45.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song46)",
    artist: "-",
    music: "static/music/song46.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song47)",
    artist: "-",
    music: "static/music/song47.mp3"
  },
{
    Image: "static/music/1.png",
    track_Name: "(song48)",
    artist: "-",
    music: "static/music/song48.mp3"
  },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
   // Set the background color of the music wrapper (assuming you've given it an ID)
  let musicWrapper = document.getElementById("music-wrapper");
  if (musicWrapper) {
    musicWrapper.style.backgroundColor = bgColor;
  }
}


let trackIndex =0; // to iterate via indexes of the array of objects
let isPlaying = false; //to toggle, like switch
let isRandom = false;

// it'll be the important thing  to set timers and for slider to sync with 
let updateTime ;

//  to load all the tracks
loadTracks(trackIndex);


function loadTracks(trackIndex){
    clearInterval(updateTime); // will stop the set interval;
    reset(); // this will reset everthing to scratch

    currentTrack.src= playList[trackIndex].music;
    currentTrack.load(); // basic HTML load() function for the media
    trackPic.style.backgroundImage = "url(" + playList[trackIndex].Image+ " )";
    trackName.textContent = playList[trackIndex].track_Name;
    artistName.textContent =playList[trackIndex].artist;
    // Load the GIF for the current track
    //to start the musci count down and calling setUpDate function to sync with the music and show exact music time on the silder and sync  the slider thumb with it aswell

    updateTime =setInterval(setUpDate,1000);

    //at the end of the song when it got ended it'll change to new one
    currentTrack.addEventListener('ended',nextTrack)
    random_bg_color();
}

function reset(){
    startTime.textContent = "00:00";
    endTime.textContent = "00:00";
    timeSlider.value = 0;
}



function repeatTrack(){
    let currentTrackIndex = trackIndex;
    loadTracks(currentTrackIndex);
    playTrack();
}

// making playing button as switch
function playPauseBtn(){

    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    currentTrack.play();
    isPlaying =true;
    playPause_Btn.innerHTML ='<i class="fa fa-pause-circle fa-3x"></i>';
}
function pauseTrack(){
    currentTrack.pause();
    isPlaying =false;
    playPause_Btn.innerHTML = '<i class="fa fa-play-circle  fa-3x" ></i>';
}

function randomTrack(){

    isRandom ? stopRandom() : playRandom();
    
}

// making random button as switch
function playRandom(){
    isRandom = true;
    randomBtn.classList.add('activateRandom');
}

function stopRandom(){
    isRandom = false;
    randomBtn.classList.remove('activateRandom');
}


function nextTrack(){
    if(trackIndex<playList.length-1 && isRandom === false){
        trackIndex++;
    } else if(trackIndex<playList.length-1 && isRandom === true)
    {
       let  randomTrackIndex = Math.round(Math.random()*playList.length);

       trackIndex =randomTrackIndex;
    } else{
        trackIndex = 0 ;
    }

    loadTracks(trackIndex);
    playTrack();
}


function previousTrack(){
    if(trackIndex>0 && isRandom === false){
        trackIndex--;
    } else if(trackIndex>0 && isRandom === true){
        let  randomTrackIndex = Math.round(Math.random()*playList.length);

       trackIndex =randomTrackIndex;
    } else{
        trackIndex = playList.length-1;
    }
    loadTracks(trackIndex);
    playTrack();
}



function timeSlide(){

    // when to change the slider position manually music start from there then it'll sync with the current time then
    let trackTime = currentTrack.duration*(timeSlider.value/100);
    currentTrack.currentTime =trackTime;
}

function volume(){
    // to set volume slider,as volume in html sound track ranges from 0-1
    currentTrack.volume =volumeSlider.value/100;
}

//  to sync the track slider with the timimgs
function setUpDate(){
    let beginTime =0;
    if ( typeof currentTrack.duration === 'number'  ){
        
        beginTime =currentTrack.currentTime*(100/currentTrack.duration);
        timeSlider.value = beginTime;
        
        // to Segregate the minutes and seconds for both start/current and end time

        let currentMins = Math.floor(currentTrack.currentTime/60);
        let currentSecs = Math.floor(currentTrack.currentTime -currentMins*60);
        let endTimeMins = Math.floor(currentTrack.duration/60);
        let endTimeSecs = Math.floor(currentTrack.duration -endTimeMins*60);
        
        // to get  start/current time and end time of the track in the format of 00:00
         if(currentMins<10)
        {currentMins = "0" + currentMins};
        if(currentSecs<10)
        {currentSecs = "0" + currentSecs};
        if(endTimeMins<10)
        {endTimeMins = "0" + endTimeMins;}
        if(endTimeSecs<10)
        {endTimeSecs = "0" + endTimeSecs};


        startTime.textContent =currentMins + ":" + currentSecs;
        endTime.textContent = endTimeMins + ":" + endTimeSecs;


    }
    
}
