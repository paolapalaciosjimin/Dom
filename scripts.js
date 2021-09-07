const play_btn = document.getElementById("play")
const audio = document.getElementById("audio")
const pause_btn = document.getElementById("pause")
const stop_btn = document.getElementById("stop")
const img = document.getElementById("img")
const barra = document.getElementById("barra")
const volume_up_btn = document.getElementById("volume-up")
const volume_down_btn = document.getElementById("volume-down")
let isplaying = false;

play_btn.addEventListener('click',()=>{
    audio.play();
    img.style.animationPlayState = "running"
})
stop_btn.addEventListener('click',()=>{
    audio.pause();
    audio.currentTime = 0;
   img.style.animationPlayState = "paused"
})
pause_btn.addEventListener('click',()=>{
    audio.pause();
    img.style.animationPlayState = "paused"
})
window.addEventListener("load",()=>{
    barra.max = audio.duration;
    setInterval(() => {
        barra.value = audio.currentTime;
    
    }, 500)
})
barra.addEventListener("change", ()=>{
    audio.currentTime = barra.value;

})
volume_up_btn.addEventListener('click', () =>{
    audio.volume = audio.volume + 0.1;
})
volume_down_btn.addEventListener('click', () =>{
    audio.volume = audio.volume - 0.1;
})
document.addEventListener("keyup", (event) =>{
    if(event.key == "ArrowUp"){
        audio.volume = audio.volume + 0.1;
    }
    else if(event.key == "ArrowDown"){
        audio.volume = audio.volume - 0.1;
    }
})
document.addEventListener("keyup", (event)=> {
    if(event.keyCode == 32){
        if(isplaying){
            audio.pause();
            img.style.animationPlayState = "paused"
            isplaying = false;
        }
        else{
            audio.play();
            img.style.animationPlayState = "running"
            isplaying = true;
        }
    }


})

