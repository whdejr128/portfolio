const h1_4=document.querySelectorAll('.h1_4')
const intro=document.querySelector('.intro')
const skill_img=document.querySelectorAll('.skill_img')
const photo=document.querySelector('.photo')
const h1_1=document.querySelector('.h1_1')
const h1_2=document.querySelector('.h1_2')
const h1_3=document.querySelector('.h1_3')
const road=document.querySelectorAll('.road')
const project=document.querySelectorAll('.project')
const banner_img=document.querySelectorAll('.banner_img')
const address=document.querySelectorAll('.address')
const banner_button=document.querySelectorAll('.banner_button')
const circle=document.querySelectorAll('circle')

window.addEventListener('scroll',()=>{//img
if(scrollY<610){
photo.style.animationName='photo';
h1_1.style.animationName='h1_1';
h1_2.style.animationName='h1_2';
h1_3.style.animationName='h1_3';

}
else{
photo.style.animationName='stop';
h1_1.style.animationName='stop';
h1_2.style.animationName='stop';
h1_3.style.animationName='stop';
}
});

window.addEventListener('scroll',()=>{ //introduce
console.log(scrollY);
if(scrollY>300){
h1_4[0].style.animationName='h1_4';
intro.style.animationName='intro';
}
else{
h1_4[0].style.animationName='stop';
intro.style.animationName='stop';


}
});

window.addEventListener('scroll',()=>{ //skills
if(scrollY>1050){
h1_4[1].style.animationName='h1_4';

}
else{
h1_4[1].style.animationName='stop';
}
});

window.addEventListener('scroll',()=>{ //HTML
if(scrollY>1275){
skill_img[0].style.animationName='skill_img'
circle[0].style.animationName='circle'
}

else{
skill_img[0].style.animationName='stop'
circle[0].style.animationName='stop'
}

});

window.addEventListener('scroll',()=>{ //CSS
if(scrollY>1536){
skill_img[1].style.animationName='skill_img'
circle[1].style.animationName='circle'
}

else{
skill_img[1].style.animationName='stop'
circle[1].style.animationName='stop'
}

});

window.addEventListener('scroll',()=>{ //JS
if(scrollY>1810){
skill_img[2].style.animationName='skill_img'
circle[2].style.animationName='circle_js'
}

else{
skill_img[2].style.animationName='stop'
circle[2].style.animationName='stop'
}

});

window.addEventListener('scroll',()=>{ //BOOTSTRAP
if(scrollY>2080){
skill_img[3].style.animationName='skill_img'
circle[3].style.animationName='circle_bt'
}

else{
skill_img[3].style.animationName='stop'
circle[3].style.animationName='stop'
}

});

window.addEventListener('scroll',()=>{ //결과물
if(scrollY>2650){
h1_4[2].style.animationName='h1_4';

}

else{
h1_4[2].style.animationName='stop';

}

});

window.addEventListener('scroll',()=>{ //starbucks
if(scrollY>2855){
project[0].style.animation='skill_img 2s';

}
else{
project[0].style.animation='stop';
}

});

window.addEventListener('scroll',()=>{
if(scrollY>3175){
project[1].style.animation='pro2 2s';

}
else{
project[1].style.animation='stop';
}

});

window.addEventListener('scroll',()=>{
if(scrollY>3475){
project[2].style.animation='skill_img 2s';

}
else{
project[2].style.animation='stop';
}

});

banner_button[0].addEventListener('click',()=>{
if(banner_button[0].value=='close'){
banner_button[0].value='open';
banner_img[0].src="./portfolio_img/mail_open.png";
address[0].style.height='30px';
}

else if(banner_button[0].value=='open'){
banner_button[0].value='close';
banner_img[0].src="./portfolio_img/mail_close.png";
address[0].style.height='0px';
}
});

banner_button[1].addEventListener('click',()=>{
if(banner_button[1].value=='close'){
banner_button[1].value='open';
banner_img[1].src="./portfolio_img/phone_open.png";
address[1].style.height='30px';
}
else if(banner_button[1].value=='open'){
banner_button[1].value='close';
banner_img[1].src="./portfolio_img/phone_close.png";
address[1].style.height='0px';
}
});

