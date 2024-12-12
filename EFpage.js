
function checker(rndm){
   
    var  i;
    
    console.log(rndm);
    

    var n1=document.getElementById("myNum1").value;
    var num1=parseInt(n1);
    if(num1===rndm){
        document.getElementById("result2").innerHTML=+num;

    }
    if (num1<rndm){
        document.getElementById("Success").style.display="none";
        document.getElementById("Too low").style.background="white";
        document.getElementById("Too low").style.display="block";
        document.getElementById("Too high").style.display="none";
    } 
    if (num1>rndm){
        document.getElementById("Success").style.display="none";
        document.getElementById("Too high").style.background="white";
        document.getElementById("Too low").style.display="none";
        document.getElementById("Too high").style.display="block";
    }

}

function stockgen(){
    var x, rndm;
    x=Math.random()*50;
    rndm = Math.ceil(x);

    return rndm;

}

function stock3(){
    var x;
    x=stockgen();
    console.log(x);
    document.getElementById("stock3").innerHTML=x;
}
