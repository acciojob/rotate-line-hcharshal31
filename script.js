let line = document.getElementById("line");
let degree = 0;
setInterval(()=>{
	degree+=2;
	line.style.transform = `rotate(${degree}deg)`
}, 200);