let textElement = document.querySelector('.text');
let textContent = textElement.textContent;
textElement.innerHTML = '';

let spans = [];
for (let char of textContent){
    let span =document.createElement('span');
    span.textContent = char;
    textElement.appendChild(span);
    spans.push(span);
}

window.addEventListener('scroll', () =>{
    let scrollDistance = window.scrollY;
    spans.forEach((span,index) =>{
        if (scrollDistance >=(index + 1) * 50){
            span.style.transform = `translate(${index * 20}px,0)`;
            span.classList.add('active');
        } else{
            span.style.transform = `translate(${Math.random() * 100 - 50}vw,${Math.random() * 100 - 50}vh)`;
            span.classList.remove('active');
        }
    })
})


const getTransitionValue = () => {
    return `${Math.random() *400 - 200 }px`
}

document.addEventListener("mousemove", (event) => {
    let i = document.createElement("div");
    i.className="star"
    i.style.left = (event.pageX)+"px";
    i.style.top = (event.pageY)+"px";
    i.style.scale = `${Math.random() * 2 + 1 }`;
    i.style.setProperty('--x',getTransitionValue());
    i.style.setProperty('--y',getTransitionValue());
    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    },2000);
})