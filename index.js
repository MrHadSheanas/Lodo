
let btn = document.querySelector('.btn');
let img =document.querySelectorAll('.img-one');
let btn1 = document.querySelector('.btn1');
let collcationone=0;
let imgsad=document.getElementById('sad');
let imggood=document.getElementById('good');


btn.addEventListener('click', function() { 
     document.getElementById('dice').style.display ='none'; 

if(collcationone >collcationtwo){
     document.getElementById('sad').src="img/sad.jpeg"
     document.getElementById('good').src="img/good.jpeg"
      document.getElementById('star1').src="img/star (1).png"
         document.getElementById('star2').src="img/star (1).png"
          document.getElementById('star3').src="img/star (1).png"

}
else{
document.getElementById('good').src ="img/sad.jpeg"
document.getElementById('sad').src ="img/good.jpeg"
 document.getElementById('star1');
 document.getElementById('star2');
 document.getElementById('star3');



}


let randomindex=Math.floor(Math.random()*6);
document.getElementById('img-test').src=`img/img${randomindex +1}.png`;
let i=randomindex +1;
document.getElementById('span-one').innerText=i;
   document.getElementById('love1').style.display='none';

if(i==6){
    document.getElementById('love').style.display='block';
    document.getElementById('love1').style.display='block';
   btn1.style.display='none';
    btn.style.display='block';
     collcationone +=randomindex+1;

document.getElementById('div-one').style.transform='scale(1.2)';
   
}
else{
      document.getElementById('love').style.display='none';
    document.getElementById('love1').style.display='none';
  
    document.getElementById('div-one').style.transform='scale(1)';

     btn.style.display='none';
    btn1.style.display='block';
    collcationone +=randomindex+1;
   document.getElementById('div-big').style.backgroundColor='rgba(175, 197, 197, 0.755)';
   document.getElementById('div-small').style.backgroundColor=' rgb(108, 122, 169) ';

}
document.getElementById('h-one').innerText=collcationone;
}
)



let collcationtwo=0;

btn1.addEventListener('click', function() { 

document.getElementById('dice').style.display ='none';


if(collcationone >collcationtwo){
     document.getElementById('sad').src="img/sad.jpeg"
     document.getElementById('good').src="img/good.jpeg"
      document.getElementById('star5').src="img/star (1).png"
         document.getElementById('star4').src="img/star (1).png"
          document.getElementById('star6').src="img/star (1).png"

}
else{
document.getElementById('good').src ="img/sad.jpeg"
document.getElementById('sad').src ="img/good.jpeg"


}

if(collcationone >collcationtwo){
     imgsad.innerHTML.src='img/good.jpeg';
     imggood.innerHTML.src='img/sad.jpeg';
     
}
else{
    imggood.innerHTML.src='img/good.jpeg';
    imgsad.innerHTML.src='img/good.gpeg';
    



}


let randomindex=Math.floor(Math.random()*6);
document.getElementById('img-test').src=`img/img${randomindex +1}.png`;
let y=randomindex +1;   
document.getElementById('love').style.display='none';
document.getElementById('span-two').innerText=y;
if(y==6){
 btn.style.display='none';
    btn1.style.display='block';
     collcationtwo +=randomindex+1;

document.getElementById('div-two').style.transform='scale(1.2)';

  
   }
   else{
   document.getElementById('div-two').style.transform='scale(1)';


     collcationtwo +=randomindex+1;
     btn1.style.display='none';
    btn.style.display='block';
       document.getElementById('div-small').style.backgroundColor='rgba(175, 197, 197, 0.755)';
        document.getElementById('div-big').style.backgroundColor=' rgb(108, 122, 169) ';
    
   }
    document.getElementById('h-two').innerText=collcationtwo;
}
)

