let player1 = {
    name: 'Liukang',
    hp: 40,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['weap1', 'weap2', 'weap3'],
    attack() {
        console.log(`${this.name} 'Fight'`);
    }
}

let player2 = {
    name: 'Subzero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weap1', 'weap2', 'weap3'],
    attack() {
        console.log(`${this.name} 'Fight'`);
    }
}

//player1.attack();
//player2.attack();

function createPlayer(clName, player) {

    //wrapper
    const $playerWrapper = document.createElement('div');
    $playerWrapper.className = clName;


    //progressbar
    const $playerProgressbar = document.createElement('div');
    $playerProgressbar.className = 'progressbar';

    const $playerLife = document.createElement('div');
    $playerLife.className = 'life';
    $playerLife.style.width = '100%';

    const $playerName = document.createElement('div');
    $playerName.className = 'name';
    $playerName.innerText = player.name;

    $playerProgressbar.appendChild($playerLife);
    $playerProgressbar.appendChild($playerName);


    //character
    const $playerCharacter = document.createElement('div');
    $playerCharacter.className = 'character';

    const $playerImg = document.createElement('img');
    $playerImg.src = player.img;

    $playerCharacter.appendChild($playerImg);


    //add progressbar and character to the wrapper
    $playerWrapper.appendChild($playerProgressbar);
    $playerWrapper.appendChild($playerCharacter);


    //add player to arenas
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($playerWrapper);
}

createPlayer('player1', player1);
createPlayer('player2', player2);

