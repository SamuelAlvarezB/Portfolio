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