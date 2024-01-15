var elDiceOne = document.getElementById('dice1');
var elCoins = document.getElementById('coins');
var elBetAmount = document.getElementById('betAmount');
var elUserGuess = document.getElementById('userGuess');
var elPopupWin = document.getElementById('winPopup');
var elPopupImageWin = document.getElementById('popupImageWin');
var elPopupResultWin = document.getElementById('result_win');

var elPopupLoss = document.getElementById('lossPopup');
var elPopupImageLoss = document.getElementById('popupImageLoss');
var elPopupResultLoss = document.getElementById('result_loss');

var maxBet = 10;
var totalCoins = 50;

function rollDice() {
    

    var diceOne = Math.floor((Math.random() * 6+ 1) );

    console.log(diceOne);

    for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    
    var userGuess = parseInt(elUserGuess.value);
    var sum = diceOne;

    if (userGuess === sum) {
        var bet = parseInt(elBetAmount.value);
        totalCoins += bet * 2;
        showPopup(true);
    } else {
        var bet = parseInt(elBetAmount.value);
        totalCoins -= bet;
        showPopup(false);
    }

    
    elCoins.textContent = "Coins: " + totalCoins;

    
    elBetAmount.value = '';
    elUserGuess.value = '';
}

function placeBet() {
    
    var bet = parseInt(elBetAmount.value);

    if (bet > maxBet) {
        alert("Maximum bet allowed is " + maxBet);
    } else if (bet <= totalCoins) {
        rollDice();
    } else {
        alert("You don't have enough coins to place this bet.");
    }
}

function showPopup(isWin) {
    closePopup(isWin);

    if (isWin) {
        elPopupWin.style.display = 'block';
        elPopupImageWin.src = 'win.gif';
        elPopupResultWin.textContent = 'You Win!';
    } else {
        elPopupLoss.style.display = 'block';
        elPopupImageLoss.src = 'loss.gif';
        elPopupResultLoss.textContent = 'You Lose!';
    }

    setTimeout(function() {
        closePopup(isWin);
    }, 3000);
}

function closePopup(isWin) {
    if (isWin) {
        elPopupImageWin.src = '';
        elPopupResultWin.textContent = '';
        elPopupWin.style.display = 'none';
    } else {
        elPopupImageLoss.src = '';
        elPopupResultLoss.textContent = '';
        elPopupLoss.style.display = 'none';
    }
}













