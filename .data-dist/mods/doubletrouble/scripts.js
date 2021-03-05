"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } const Scripts = {
	init() {
		const newMoves = (mon, moves, removedMoves, events) => {
			for (const move of moves) {
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["8M"];
			}
			if (_optionalChain([removedMoves, 'optionalAccess', _ => _.length])) {
				for (const move of removedMoves) {
					delete this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)];
				}
			}
			if (_optionalChain([events, 'optionalAccess', _2 => _2.length])) {
				for (const event of events) {
					if (!this.modData('Learnsets', this.toID(mon)).eventData) {
						this.modData('Learnsets', this.toID(mon)).eventData = [];
					}
					this.modData('Learnsets', this.toID(mon)).eventData.push(event);
					const index = this.modData('Learnsets', this.toID(mon)).eventData.indexOf(event);
					if (event.moves) {
						for (const eventMove of event.moves) {
							if (!this.modData('Learnsets', this.toID(mon)).learnset[this.toID(eventMove)]) {
								this.modData('Learnsets', this.toID(mon)).learnset[this.toID(eventMove)] = [];
							}
							this.modData('Learnsets', this.toID(mon)).learnset[this.toID(eventMove)].push(`8S${index}`);
						}
					}
				}
			}
		};
		newMoves('arcanine', ['followme', 'recover', 'healbell']);
		newMoves('delibird', ['uturn', 'drainpunch']);
		newMoves('vanilluxe', ['muddywater']);
		newMoves('vileplume', ['calmmind', 'ragepowder', 'spore']);
		newMoves('salazzle', ['uturn', 'snarl', 'mysticalfire', 'focusblast', 'grassknot', 'darkpulse', 'solarbeam']);
		newMoves('drapion', ['uturn', 'suckerpunch', 'playrough', 'coil', 'gunkshot', 'firstimpression', 'stoneedge']);
		newMoves('cramorant', ['bodyslam', 'hypervoice', 'helpinghand', 'followme', 'healpulse', 'tackle'], ['bravebird']);
		newMoves('pyukumuku', ['wideguard', 'watergun', 'tackle', 'waterfall', 'brine', 'snatch', 'snore', 'nightshade', 'healingwish']);
		newMoves('togedemaru', ['fakeout', 'icepunch', 'firepunch', 'closecombat']);
		newMoves('hitmontop', ['knockoff', 'slackoff', 'drainpunch']);
		newMoves('stunfisk', ['tailwind', 'helpinghand', 'slackoff', 'icebeam', 'blizzard', 'focusblast']);
		newMoves('jolteon', ['icebeam', 'blizzard', 'aurasphere']);
		newMoves('primarina', ['slackoff']);
		newMoves('golurk', ['trickroom', 'spiritshackle', 'slackoff']);
		newMoves('gastrodon', ['powergem', 'flamethrower', 'fireblast']);
		newMoves('ninetales', ['voltswitch', 'aurasphere', 'moonblast', 'shockwave', 'dazzlinggleam', 'focusblast', 'healingwish']);
		newMoves('meltan', [
			'recover', 'refresh', 'calmmind', 'wideguard', 'healpulse', 'rapidspin', 'icebeam', 'triattack', 'lifedew', 'autotomize', 'ironhead', 'rockslide', 'powergem', 'rage', 'dragondance', 'followme',
		]);
		newMoves('mawile', ['trickroom', 'lifedew'], null, [
			{generation: 8, abilities: ["steelworker"], moves: ["followme"], shiny: 1},
			{generation: 8, abilities: ["hugepower"], moves: ["tackle"], shiny: 1},
		]);
		newMoves('toxicroak', ['closecombat', 'thunderpunch']);
		newMoves('noivern', ['triattack', 'fireblast', 'mysticalfire', 'icywind']);
		newMoves('weezinggalar', ['recover', 'followme']);
		newMoves('alcremie', ['reflect', 'moonblast', 'wish', 'willowisp']);
		newMoves('ninetalesalola', ['hypervoice', 'energyball', 'earthpower']);
		newMoves('gallade', ['partingshot', 'machpunch', 'sacredsword', 'meteormash']);
		newMoves('orbeetle', ['thunderbolt', 'icebeam', 'wideguard', 'pollenpuff']);
		newMoves('goodra', ['heatwave', 'wish', 'calmmind', 'nastyplot']);
		newMoves('keldeo', ['fakeout', 'calmmind']);
		newMoves('blastoise', ['thunderwave']);
		newMoves('marowakalola', ['bodypress']);
		newMoves('araquanid', ['trickroom', 'helpinghand', 'coaching', 'defog', 'flipturn']);
		newMoves('dhelmise', ['trickroom']);
		newMoves('obstagoon', ['fakeout', 'extremespeed']);
		newMoves('vikavolt', ['powergem']);
		newMoves('exeggutor', ['focusblast', 'thunder', 'surf']);
		newMoves('exeggutoralola', ['closecombat', 'zapcannon', 'earthquake']);
	},
}; exports.Scripts = Scripts;

 //# sourceMappingURL=sourceMaps/scripts.js.map