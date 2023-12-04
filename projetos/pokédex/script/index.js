//variavel global

const pokemonName = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')
const pokemonimage = document.querySelector('.pokemon-image')
const form = document.querySelector('form')
const input = document.querySelector('input')
const buttonbtnprev = document.querySelector('.buttonbtn-prev')
const buttonbtnnext = document.querySelector('.buttonbtn-next')
let searchPokemon = 0;
 



const fetchPokemon = async(pokemon)=>{
 
    const Apiresponse =  await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}` ) 

    
    
if (Apiresponse.status===200) {
    const data = await Apiresponse.json();
   return data





}}

//renderizar dados Pokemon

const renderPokemon = async(pokemon)=>{

 pokemonName.innerHTML = "carregando..."

 pokemonNumber.innerHTML = ''; 

 





const data = await fetchPokemon(pokemon);
console.log(data);

if ('data') {
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonimage.src =  data['sprites']['versions'] ['generation-v']['black-white']['animated'] ['front_default']
    searchPokemon = data.id
    
    
} else {

    pokemonimage.src = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/07/pokemon-go_8.jpg'

    pokemonName.innerHTML = 'não encontrado..'
    input.value = '';

    
}








};


//procura pokemon pelo input

form.addEventListener('submit', (event)=>{
   event.preventDefault()

   renderPokemon(input.value.toLowerCase())



   
    



})

//eventos dos botoes Prev e Next

buttonbtnprev.addEventListener('click', ()=>{

   

if(searchPokemon> 1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon)

}

    



});

buttonbtnnext.addEventListener('click', ()=>{
   
    searchPokemon += 1;
   renderPokemon(searchPokemon) 


});









renderPokemon(25)

















