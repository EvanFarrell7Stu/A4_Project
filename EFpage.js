
var x=1;
var y=1;
var z=1;

function p7p(){

    var pic1=document.getElementById("p7p");
    x++;

    if(x%2==1){
    pic1.src="pixel-7-pro.avif";
    pic1.height= "300px";
     pic1.width= auto;
    }
    else{
    pic1.src="pixel-7-pro-back.avif";
    pic1.height= "300px";
     pic1.width= auto;
    }
}

function p8(){
    var pic2=document.getElementById("p8");
    y++

    if(y%2==1){
    pic2.src="pixel-8.avif";
    pic2.height= "300px";
    pic2.width= auto;
    }
    else{
    pic2.src="pixel-8-front.avif";
    pic2.height= "300px";
    pic2.width= auto;
    }
}

function p8p(){
    var pic3=document.getElementById("p8p");
    z++

    if(z%2==1){
    pic3.src="pixel-8-pro.avif";
    pic3.height= "300px";
    pic3.width= auto;
    }
    else{
    pic3.src="pixel-8-pro-back.avif";
    pic3.height= "300px";
    pic3.width= auto;
    }
}




var price = [499, 315, 273];
var a = [38, 23 , 12];
var num=0;
var total=0;





function addCart1(){
    total+=price[0];
    document.getElementById("Total").innerHTML=total;
    a[0]-=1;
    numCart();
    stock1();

}

function addCart2(){
    total+=price[1];
    document.getElementById("Total").innerHTML=total;
    a[1]-=1;
    numCart();
    stock2();   
}

function addCart3(){    
    total+=price[2];
    document.getElementById("Total").innerHTML=total;
    a[2]-=1;
    numCart();
    stock3();
}

function numCart(){
    num+=1;
    document.getElementById("NumCart").innerHTML=num;
 
}

function stock1(){ 
    var x;
    x=a[0];
    console.log(x);
    document.getElementById("stock1").innerHTML=x+' in stock';
}
function stock2(){ 
    var x;
    x=a[1];
    console.log(x);
    document.getElementById("stock2").innerHTML=x+' in stock';
}
function stock3(){ 
    var x;
    x=a[2];
    console.log(x);
    document.getElementById("stock3").innerHTML=x+' in stock';
}


