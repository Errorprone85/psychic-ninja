(function() {
	var app = angular.module('characterizer', []);
	
	app.controller('CharacterController', function() {
		this.character= characters;
	});
	
	app.controller('NewCharacterController', function() {
		this.newChar = {};
		
		this.addChar = function(n) {
			characters.push(this.newChar);
			this.newChar = {};
		};
	});
	
	app.controller('TabController', function() {
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSet = function(input) {
			return this.tab === input;
		};
	});
	
	var characters = [
		{
			name: 'Hrothgar the Barbarian',
			characterClass: 'Fighter',
			attack: 20,
			defence: 10
		},
		{
			name: 'Ionia of Glass Isle',
			characterClass: 'Mage',
			attack: 5,
			defence: 5
		},
		{
			name: 'Jon the Grouch',
			characterClass: 'Warrior',
			attack: 23,
			defence: 12
		}
	];
})();