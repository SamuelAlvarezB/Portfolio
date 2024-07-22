let profilePic=document.getElementById('profile-img');

let messageProfilePic='I can\'t deny it, I love cats';

let test=profilePic.offsetWidth;

let newParagraph=document.createElement('p');
let newNode=document.createTextNode(messageProfilePic);
newParagraph.appendChild(newNode);
newParagraph.id='para'
newParagraph.style.position='absolute';
newParagraph.style.left=('75px');
newParagraph.style.top=('125px');
newParagraph.style.color=('white');



profilePic.onmouseenter=function (){
    profilePic.style.filter='blur(4px) brightness(40%)';    
    document.getElementById('profile-pic-div').appendChild(newParagraph);
}

profilePic.onmouseleave=function (){
    profilePic.style.filter='none';
    newParagraph.remove();
}

let projectImages=document.getElementsByClassName('project-img');


for (let i=0;i<projectImages.length;i++){
    projectImages[i].addEventListener('mouseenter',function(e){
        e.target.style.filter='blur(4px) brightness(40%)';
        if(e.target.id==='project-random'){
            document.getElementById('hidden-random').style.display='block';
        } else if(e.target.id==='project-portfolio'){
            document.getElementById('hidden-portfolio').style.display='block';
        } else if(e.target.id==='project-wip'){
            document.getElementById('hidden-wip').style.display='block';
        } else if(e.target.id==='project-wip2'){
            document.getElementById('hidden-wip2').style.display='block';
        }
    });
    projectImages[i].addEventListener('mouseleave',function(e){
        e.target.style.filter='none';
        document.getElementById('hidden-random').style.display='none';
        document.getElementById('hidden-portfolio').style.display='none';
        document.getElementById('hidden-wip').style.display='none';
        document.getElementById('hidden-wip2').style.display='none';
    })
}

