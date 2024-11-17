let customDate = new Date("November 20, 2024 00:00:00").getTime();
let timer = setInterval(timing,1000);
function timing(){
    let now = new Date().getTime();
    let x =customDate - now;
    if(x > 0){
        let days = Math.floor(x / (1000*60*60*24));
        let hours = Math.floor((x % (1000*60*60*24)) / (1000*60*60));
        let mins = Math.floor((x % (1000*60*60)) / (1000*60));
        let secs = Math.floor((x % (1000*60)) / 1000);

        let time = `${days}d : ${hours}h : ${mins}m : ${secs}s`;
        document.querySelector(".timing").innerHTML = time;
    } else{
        clearInterval(timer);
        document.querySelector('.text').textContent = 'HAPPY BIRTHDAY';
        window.open('https://tamil182005.github.io/MIKASA/pro1.html');
    }
}
//button animation
let btn = document.querySelector('a');
btn.onmouseover = function(e){
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--x',x+'px');
    btn.style.setProperty('--y',y+'px')
}