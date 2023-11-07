let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let shuffle_btn = document.querySelector(".shuffle-button");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let isShuffle = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
  },
  {
    name: "Ukelele",
    artist: "unknown",
    image: "static/images/1.jpeg",
    path: "static/music/ukulele.mp3"
  },
  {
    name: "Enthusiast",
    artist: "Tours",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
  },
  {
    name: "Shipping Lanes",
    artist: "Chad Crouch",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },
  {
    name: "Lovely",
    artist: "Billie Eilish, Khalid",
    image: "static/images/lovely.jpg",
    path: "static/music/Lovely.mp3",
  },
  {
    name: "Happyrock",
    artist: "unknown",
    image: "static/images/images.jpeg",
    path: "static/music/happyrock.mp3",
  },
  {
    name: "Sleepy Cat",
    artist: "unknown",
    image: "static/images/cat.jpg",
    path: "static/music/sleepycat.mp3",
  },
  {
    name: "Night Sky",
    artist: "unknown",
    image: "static/images/nightsky.jpeg",
    path: "static/music/Night Sky.mp3",
  },
  {
    name: "Breeze",
    artist: "unknown",
    image: "static/images/breeze.jpeg",
    path: "static/music/acousticbreeze.mp3",
  },
  {
    name: "Slow Day",
    artist: "unknown",
    image: "static/images/slow.jpeg",
    path: "static/music/Slow Day.mp3",
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  if (isShuffle) {
    shuffleArray(track_list);
    track_index = 0;
    loadTrack(track_index);
    playTrack();
    shuffle_btn.classList.add("active");
  } else {
    track_list = [
      {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
      },
      {
        name: "Ukelele",
        artist: "unknown",
        image: "static/images/1.jpeg",
        path: "static/music/ukulele.mp3"
      },
      {
        name: "Enthusiast",
        artist: "Tours",
        image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
      },
      {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
      },
      {
        name:

