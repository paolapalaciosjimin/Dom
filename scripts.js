const play_btn = document.getElementById("play")
const audio = document.getElementById("audio")
const pause_btn = document.getElementById("pause")
const stop_btn = document.getElementById("stop")
const img = document.getElementById("img")
 play_btn.addEventListener('click', ()=>{
    audio.play();
    img.style.animationPlayState = "running"
})
pause_btn.addEventListener('click', ()=>{
    audio.pause();
    img.style.animationPlayState = "paused"
})
stop_btn.addEventListener('click', ()=>{
    audio.load();
    img.style.animationPlayState = "paused"
})

