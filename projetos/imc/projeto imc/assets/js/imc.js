const form= document.getElementById('form')
form.addEventListener('submit', function(event){
// previne o comportamento padrão do evento do submite do js, ou seja impedi o recarregamento da pagina.

event.preventDefault();

const peso = document.getElementById('weight'). value;

const altura = document.getElementById('height'). value;

const imc = peso / (altura * altura)

document.getElementById('infos').classList.remove('hidden');

// condições do imc.

const campoImc = document.getElementById('value'); // Aonde aparece o imc

let descricao; 

// campoImc.classList.add('attention');

campoImc.style.color = 'red';

if(imc < 18.5){
    descricao = 'Cuidado voce esta a baixo do Peso'

}

else if((imc>= 18.5)&&(imc<= 25)){
       descricao = 'voce! esta no peso ideal'
       

      campoImc.style.color = 'green'

}

else if((imc>25)&& (imc>=30)){
    descricao = 'cuidado voce esta com sobre peso'
     
}

else if((imc> 30) && (imc<= 35)){
       descricao = 'cuidado voce esta com obesidade moderada'

} 

else if((imc> 35) && (imc<= 40)){
       descricao = 'cuidado esta com obesidade severa'
}

else{

    descricao = 'cuidado voce esta com obesidade morbida'
}






campoImc.textContent = imc.toFixed(2)
document.getElementById('description').textContent = descricao

















});