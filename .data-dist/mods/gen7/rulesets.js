"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Formats = {
	standard: {
		inherit: true,
		ruleset: ['Obtainable', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		minSourceGen: 0, // auto
	},
	standarddoubles: {
		inherit: true,
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Abilities Clause', 'Evasion Moves Clause', 'Gravity Sleep Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		minSourceGen: 0, // auto
	},
	obtainablemoves: {
		inherit: true,
		banlist: [
			// Leaf Blade: Gen 6+ Nuzleaf level-up
			// Sucker Punch: Gen 4 Shiftry tutor
			'Shiftry + Leaf Blade + Sucker Punch',

			// Aura Break Zygarde can't be changed to 10% forme in gen 7
			// making moves only obtainable from gen 6 illegal
			'Zygarde-10% + Aura Break + Rock Smash',
			'Zygarde-10% + Aura Break + Secret Power',
			'Zygarde-10% + Aura Break + Strength',
		],
	},
	gravitysleepclause: {
		effectType: 'ValidatorRule',
		name: 'Gravity Sleep Clause',
		desc: "Bans Gravity + sleep moves below 100% accuracy",
		banlist: ['Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder'],
		onBegin() {
			this.add('rule', 'Gravity Sleep Clause: The combination of Gravity and sleep-inducing moves with imperfect accuracy are banned');
		},
	},
	teampreview: {
		inherit: true,
		onBegin() {
			this.add('clearpoke');
			for (const pokemon of this.getAllPokemon()) {
				const details = pokemon.details.replace(', shiny', '')
					.replace(/(Arceus|Gourgeist|Genesect|Pumpkaboo|Silvally|Urshifu)(-[a-zA-Z?-]+)?/g, '$1-*');
				this.add('poke', pokemon.side.id, details, pokemon.item ? 'item' : '');
			}
		},
	},
}; exports.Formats = Formats;

 //# sourceMappingURL=sourceMaps/rulesets.js.map