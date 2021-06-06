const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.arenas .button');

const player1 = {
    player: 1,
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['weap1', 'weap2', 'weap3'],
    attack() {
        console.log(`${this.name} 'Fight'`);
    }
}

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weap1', 'weap2', 'weap3'],
    attack() {
        console.log(`${this.name} 'Fight'`);
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if(className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {

    const $playerWrapper = createElement('div', 'player'+playerObj.player);
    const $playerProgressbar = createElement('div', 'progressbar');
    const $playerCharacter = createElement('div', 'character');
    const $playerLife = createElement('div', 'life');
    const $playerName = createElement('div', 'name');
    const $playerImg = createElement('img');

    $playerLife.style.width = `${playerObj.hp}%`;
    $playerName.innerText = playerObj.name;
    $playerImg.src = playerObj.img;

    $playerProgressbar.appendChild($playerName);
    $playerProgressbar.appendChild($playerLife);

    $playerCharacter.appendChild($playerImg);

    $playerWrapper.appendChild($playerProgressbar);
    $playerWrapper.appendChild($playerCharacter);

    return $playerWrapper;
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name+' lose';

    return $loseTitle;
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name+' wins';

    return $loseTitle;
}

function getRandom(max) {
    const num = Math.ceil(Math.random() * max);
    console.log(num);
    return num;
}

function changePlayer(player) {
    if(player.player === 1) {
        return player2.name;
    } else {
        return player1.name;
    }
}

function changeHP (player) {
    $playerLife = document.querySelector('.player'+player.player+' .life');

    if (player.hp <= 0) {
        player.hp = 0;
    } else {
        player.hp -= getRandom(20);
    }

    $playerLife.style.width = player.hp+'%';

    if(player.hp < 0) {
        playerWinName = changePlayer(player);
        $arenas.appendChild(playerWin(playerWinName));
        /*$arenas.appendChild(playerLose(player.name));*/
        $randomButton.disabled = true;
    }
}

$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));






