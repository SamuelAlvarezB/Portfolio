let icons=document.getElementsByClassName('social-icon');

for(let i=0;i<icons.length;i++){
    icons[i].addEventListener('mouseenter',function(e){
        e.target.style.width='60px';
        console.log(e.target.getAttribute('alt'));
    });
    icons[i].addEventListener('mouseleave',function(e){
        e.target.style.width='48px';
    });
}