'use strict';

let deck = Array.from(Array(52).keys());

const shuffle = function(deck){
    let currentIndex = deck.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}

deck = shuffle(deck);
console.log(deck);

let player_1 = []
let player_2 = []
let players = [player_1,player_2];

const initialize = function(deck, player_1, player_2, number){
    player_1 = deck.slice(0,number);
    player_2 = deck.slice(number+1,number*2);
    return([player_1, player_2]);
}

const dhagla_baaji = function(players){
    let turn = 0;
    let i = players[turn][0]
    let table = [i];
    players[turn] = players[turn].slice(1,-1);//shift();
    turn = (turn+1)%2 // in future len of players
    while(players[0].length!=0 || players[1].length!=0){
        while(players[turn][0]%13!=table[-1]%13){
            console.log(players[turn][0], "current table top")
            i = players[turn][0];
            table.push(players[turn][0]);
            players[turn] = players[turn].slice(1,-1);//hift();
            turn = (turn+1)%2 // in future len of players
        }
        table.push(players[turn][0]);
        players[turn].shift();
            
        players[turn] = players[turn].concat(table)
        table = [];
        i = players[turn][0]
        table = [i];
        players[turn].shift();
        turn = (turn+1)%2
    }
    if(players[0].length==0){
        console.log("player 2 wins");
    }
    else{
        console.log("player 1 wins");
    }
}
players = initialize(deck, [], [], 26);
console.log(players[0], "player 1");
console.log(players[1], "player 2");
//dhagla_baaji(players);
/*

const roll_dice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const new_game = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const total0 = document.querySelector('#score--0');
const total1 = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0').classList;
const player1 = document.querySelector('.player--1').classList;

let turn = 0;
let game = 0;

const change_turn = function() {
    if(game===1){ return };
    player0.remove('player--active');
    player1.remove('player--active');
    turn===0 ? player1.add('player--active') : player0.add('player--active')
    turn = (turn+1)%2;
    current0.textContent = 0;
    current1.textContent = 0;
};

roll_dice.addEventListener('click', function (){
    if(game==1){ return };
    let num = Math.floor(Math.random()*6)+1;
    dice.src = 'dice-'+num+'.png';
    if(num===1){
        change_turn();
        return;
    }
    if(turn===0){
        current0.textContent = Number(current0.textContent)+num;
    }
    else{
        current1.textContent = Number(current1.textContent)+num;
    }
});

hold.addEventListener('click', function (){
    if(game==1){ return };
    total0.textContent = Number(total0.textContent)+Number(current0.textContent);
    total1.textContent = Number(total1.textContent)+Number(current1.textContent);
    if(total0.textContent>=10){
        player0.add('player--winner');
        game = 1;
    }
    else if(total1.textContent>=10){
        player1.add('player--winner');
        game = 1;
    }
    change_turn();
});

new_game.addEventListener('click', function() {
    total0.textContent = 0;
    total1.textContent = 0;
    turn = 1;
    game = 0;
    change_turn();
    player0.remove('player--winner');
    player1.remove('player--winner');
});

*/