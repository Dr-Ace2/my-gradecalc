let percent =document.getElementById("percent");
let percentmark =document.getElementById("percentmark");
let grade =document.getElementById("grade");
let grademark =document.getElementById("grademark");
let butt =document.getElementById("butt");
let but =document.getElementById("but");
let maths =document.getElementById("maths");
let english =document.getElementById("english");
let physics =document.getElementById("physics");
let chemistry =document.getElementById("chemistry");
let pass = document.getElementById("pass");
let set = document.getElementById("set");

    let a;
    let b;
    let c;
    let d;
    let marksobt;
    let total;
    let calcuAns;


function runit(){

    
    a = Number(maths.value);
    b = Number(english.value);
    c = Number(physics.value);
    d = Number(chemistry.value);
    marksobt = a+b+c+d;
    total=400;
    calcuAns = (marksobt/total)*100;

    
    
    if( calcuAns===70 || calcuAns> 70){

        percent.innerHTML="Your percentage is:";
        percentmark.innerHTML=calcuAns +"%";
        grade.innerHTML="Your grade is"
        grademark.innerHTML="A";
        pass.innerHTML="Congratulations you passed!";
        return false;

    }else if( calcuAns >59.9 && calcuAns <70 ){
        percent.innerHTML="Your percentage is:";
        percentmark.innerHTML=calcuAns +"%";
        grade.innerHTML="Your grade is:"
        grademark.innerHTML="B";
        pass.innerHTML="Congratulations you passed!";
        return false;
    }
    else if( calcuAns ===59.9 || calcuAns >49.9){
        percent.innerHTML="Your percentage is:";
        percentmark.innerHTML=calcuAns +"%";
        grade.innerHTML="Your grade is:"
        grademark.innerHTML="C";
        pass.innerHTML="Congratulations you passed!";
        return false;
    }
    else if( calcuAns >39.9 && calcuAns < 50){
        percent.innerHTML="Your percentage is:";
        percentmark.innerHTML=calcuAns +"%";
        grade.innerHTML="Your grade is:"
        grademark.innerHTML="D";
        pass.innerHTML="Congratulations you passed!";
        return false;
    }
    else if( calcuAns ===39.9 || calcuAns >30 ){
        percent.innerHTML="Your percentage is:";
        percentmark.innerHTML=calcuAns +"%";
        grade.innerHTML="Your grade is:"
        grademark.innerHTML="E";
        pass.innerHTML="Sorry, you failed";
        return false;
    }
    else if( calcuAns ===30 ){
        percent.innerHTML="Your percentage is:";
        percentmark.innerHTML=calcuAns +"%";
        grade.innerHTML="Your grade is:"
        grademark.innerHTML="F";
        pass.innerHTML="Sorry, you failed";
        return false;
    }
    
    
    else{
        percent.innerHTML="your percentage is:";
        percentmark.innerHTML=calcuAns +"%";
        grade.innerHTML="your grade is"
        grademark.innerHTML="F";
        pass.innerHTML="Sorry, you failed";
        return true;
    }

    

}

but.addEventListener("click" , runit);

function reset(){
    maths.value="";
    english.value="";
    physics.value="";
    chemistry.value="";

    percent.innerHTML="";
    percentmark.innerHTML="";
    grade.innerHTML=""
    grademark.innerHTML="";
    pass.innerHTML="";
}
set.addEventListener("click" , reset)

