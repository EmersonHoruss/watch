import helloWorld from "./dom/helloWorld.js";
import hamburMenu from "./dom/hamburMenu.js";
import {clock,alarm} from "./dom/clockAndAlarm.js"

helloWorld();
const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburMenu('.panel-btn','.panel','.menu a');
    
    clock('#clock', '#turn-on-clock', '#turn-off-clock');
    alarm('../assets/DOMMaterial/casting.mp3', '#turn-on-alarm', '#turn-off-alarm');
})