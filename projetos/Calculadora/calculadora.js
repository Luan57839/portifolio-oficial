const visor = document.getElementById("resultado");



function insert (num){

    visor.innerHTML += num;
};
function clean (){

    visor.innerHTML = ""
}
function back(){
 
    let resultado = visor.innerHTML;
    visor.innerHTML = resultado.substring(0, resultado.length -1 )
}
function calcular(){

    let resultado = visor.innerHTML;
    visor.innerHTML = eval(resultado)
    
    if(resultado != '' && resultado.length > 2){
        document.getElementById('resultado').innerHTML(resultado);
    
    }else{
        document.getElementById('resultado').textContent = 'ERROR !!!'

        const myTimeuot =  setTimeout(clean, 1000);

    }

}


