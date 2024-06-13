'use strict'; //esse modo aponta os erros 

//2 - criando o json que sera a configuracao para cada letra
const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'

}

//1 - construindo divs dinamicas

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key'); //colocando a classe na div(classe key)
    div.textContent = text; //conteudo que vira de text
    div.id = text;//adcionando o id 
    document.getElementById('container').appendChild(div); //
}

// 3 - Exibindo as letras dos sons na tela

const displaySounds = (sounds) => Object.keys(sounds).forEach(createDiv); //essa funcao retora um array com todas as chaves das letras, o foreach vai pegar cada letra e mandar para createDiv

//5 - criando a funcao de tocar o som (que foi declarada abaixo)

    const playSound = (letter)=>{
        const audio = new Audio(`../assets/sounds/${sounds[letter]}`) //` `concatena, aqui criamos uma variavel que chama os sons atribuidos as letras no json
        audio.play();
    }
// 6 - adcionando e removendo a classe para ativacao do hover nas letras
const addEfect = (letter) =>  document.getElementById(letter)//pegando o elemnto atraves do id
                                    .classList.add('active'); //add uma classe para ativar o efeito hover
const removeEfect = (letter) =>  {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive); //quando a acao click acabar ele remove

}


                                    // 4 - criando o evento de click sounds
const activateDiv = (event) => {

  /*if 
  let letter = '';
  (event.type == 'click'){
        letter = event.target.id; //target tras onde clicou
        }else{
           letter = event.key.toUpperCase();

        }*/

    const letter = event.type == 'click' ? event.target.id:event.key.toUpperCase();

    const letterOk = sounds.hasOwnProperty(letter);//existe essa letra? tras true or false quando clicar no container
    //fazendo validacao se a letra foi selecionada

    if (letterOk){
        addEfect(letter); //add efeito na letra
    playSound(letter);
    removeEfect(letter);
    }
} 

displaySounds(sounds);
document.getElementById('container')
        .addEventListener('click', activateDiv); //qaundo clicar no container vai ativar a div

// 7 - capturando as teclas
window.addEventListener('keydown', activateDiv);