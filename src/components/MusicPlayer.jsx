const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_unisysinfo/20230816131729000/0194548408807/1692188114616/resources/0194548408807.jpg",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431969415_20231027141317/8903431969415/1698397206663/resources/8903431969415.jpg",
    },
    // Add more tracks as needed
  ];
  import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
  
  const MusicPlayer = () => {
    const musicElement=useRef(null);
    const [isPlaying,setIsPlaying]=useState(false);
    const [trackProgress,setTrackProgress]=useState(0);
    const [duration,setDuration]=useState(0);
    const [currentPlayer,setCurrentPlayer]=useState(0);
    const [isMute,setIsMute]=useState(false);
    const [volumePercentage,setVolumePercentage]=useState(75)
    const [playbackRate, setPlaybackRate] = useState(1);
const handleClickBackward=()=>{
if(currentPlayer===0){
  setCurrentPlayer(tracks.length-1)
}
else{
  setCurrentPlayer(prevState=>prevState-1)
}
}
const handleClickForward=()=>{
if(currentPlayer===tracks.length-1){
  setCurrentPlayer(0)
}
else{
  setCurrentPlayer(prevState=>prevState+1)
}

}
useEffect(()=>{
  if(!isPlaying){
    // console.log("isplaying",0)
    musicElement.current.pause()
  }else{
    musicElement.current.play()
    // console.log("isplaying",1)
  }
},[isPlaying])
useEffect(() => {
  const audio = musicElement.current;
  const updateDuration = () => {
    setDuration(audio.duration);
  };
  const updateCurrentTime = () => {
    setTrackProgress(audio.currentTime);
  };

  audio.addEventListener('loadedmetadata', updateDuration);
 const intervalId=setInterval(() => {
  updateCurrentTime();
 }, 1000);

  audio.load();
  if (isPlaying) {
    audio.play().catch(error => {
      console.error("Failed to play audio:", error);
    });
  }
  return () => {
    audio.removeEventListener('loadedmetadata', updateDuration);
    clearInterval(intervalId)
  };
}, [currentPlayer]);
const progressBarWidth = duration ? (trackProgress / duration) * 100 : 0;
const handleClickMute=()=>{
 musicElement.current.muted=!isMute;
 setIsMute(!isMute)
}
const changePlaybackRate = (rate) => {
  musicElement.current.playbackRate = rate;
  setPlaybackRate(rate);
};
const skipForward = () => {
  musicElement.current.currentTime += 10;
};

const skipBackward = () => {
  musicElement.current.currentTime -= 10;
};
    return (
      <>
      <h1>{tracks[currentPlayer].title}</h1>
      <h4>{trackProgress}<br/>{duration}</h4>
<img src={tracks[currentPlayer].image} alt={tracks[currentPlayer].title}/>
<div>
<button onClick={handleClickBackward}>backward</button>
  <button onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying?"pause":"play"}</button>
<button onClick={handleClickForward}>forward</button>
</div>
<audio  controls ref={musicElement} src={tracks[currentPlayer].source}></audio>
<button onClick={handleClickMute}>{isMute? "unmute":"mute"}</button>
<input type="range" min='0' max='100' value={volumePercentage} onChange={(e)=>{
  setVolumePercentage(e.target.value);
  musicElement.current.volume = e.target.value/100;
}}/>
<div className="progerss" style={{height:'15px',width:'100vw',border:'2px solid blue',borderRadius:'10px',}}>
<div style={{backgroundColor:'red',width:`${progressBarWidth}%`,height:'100%'}}></div>
</div>
 <div>
          <label>Speed: </label>
          <button onClick={() => changePlaybackRate(1)}>1x</button>
          <button onClick={() => changePlaybackRate(1.5)}>1.5x</button>
          <button onClick={() => changePlaybackRate(2)}>2x</button>
          <button onClick={() => changePlaybackRate(3)}>3x</button>
          <span>{playbackRate}x</span>
        </div>
<button onClick={skipBackward}>skipBackward</button>
<button onClick={skipForward}>skipForward</button>
<h1>working progress</h1>
<input type="range" min='0' max={duration} value={trackProgress} onChange={(e)=>{
  musicElement.current.currentTime =e.target.value;
}}/>
      </>
    )
  }
  
  export default MusicPlayer;
  