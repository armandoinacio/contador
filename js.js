const seg=document.getElementById("s");
var hora=0;
var minuto=0;
var soma=0;
function segundo(){
    var limiteSegundo=0;
  
tempo=  setInterval(()=>{
         var s=document.getElementById("s").innerHTML;
          soma=parseInt(s)+1
         limiteSegundo=soma;
        if(limiteSegundo>59){
       soma=0;
        minuto+=1
            if(minuto>59){
                hora+=1;
            }
           
        }
addEventListener('click',function cancelar(){
    soma=0;
    minuto=0;
    hora=0;
});
   


        document.getElementById("s").innerHTML=soma;
        document.getElementById("m").innerHTML=minuto;
        document.getElementById("h").innerHTML=hora;
         
},1000);

}
function parar(){
    clearInterval(tempo);
}
