

// THIS IS JUST A DRAFT
// THIS SCRIPT MUST BE CHANGED


// TEST FUNCTIONS

let testBtnWood = document.getElementById('test-button-wood');
let testBtnStone = document.getElementById('test-button-stone');
let inventory = document.getElementById('hud-inventory');

//Items at start of game
let woodAmount = 0;
let stoneAmount = 0;
let doesPlayerHaveWood = false;
let doesPlayerHaveStone = false;


// Add wood
testBtnWood.onclick = function(){
	if (!doesPlayerHaveWood) {
		let columnForNewItemName = document.createElement('div');
		let columnForNewItemAmount = document.createElement('div');
		let newItemName = document.createTextNode('wood');
		woodAmount++;
		
		inventory.appendChild(columnForNewItemName);
		inventory.appendChild(columnForNewItemAmount);
		
		columnForNewItemAmount.setAttribute('id', 'amount-of-wood')
		columnForNewItemAmount.innerHTML += woodAmount;
		columnForNewItemName.appendChild(newItemName);
		
		doesPlayerHaveWood = true;
	} else {
		woodAmount++
		let currentAmountOfWood = document.getElementById('amount-of-wood')
		currentAmountOfWood.innerHTML = woodAmount;
	}

}

// Add stone
testBtnStone.onclick = function(){
	if (!doesPlayerHaveStone) {
		let columnForNewItemName = document.createElement('div');
		let columnForNewItemAmount = document.createElement('div');
		let newItemName = document.createTextNode('stone');
		stoneAmount++;
		
		inventory.appendChild(columnForNewItemName);
		inventory.appendChild(columnForNewItemAmount);
		
		columnForNewItemAmount.setAttribute('id', 'amount-of-stone')
		columnForNewItemAmount.innerHTML += stoneAmount;
		columnForNewItemName.appendChild(newItemName);
		
		doesPlayerHaveStone = true;
	} else {
		stoneAmount++
		let currentAmountOfStone = document.getElementById('amount-of-stone')
		currentAmountOfStone.innerHTML = stoneAmount;
	}

}

