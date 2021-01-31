let plus=document.querySelector(".plus");
let qte=document.getElementsByClassName("qte") ;
plus[0].addEventListener("click",function()){
for(let i=0;i<plus.lenght;i++){
    qte[i]++
}
}
