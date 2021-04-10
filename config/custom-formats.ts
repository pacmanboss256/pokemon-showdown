// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
export const Formats: FormatList = [
	{
		section: "National Dex",
	},
	{
		name: "[Gen 8] National Dex RRDL",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause'],
		banlist: [
			// mons
			'Alakazam-Mega', 'Arceus', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chandelure', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Latias-Mega', 'Latios-Mega', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Complete',
			// abilities
			'Moody', 'Power Construct', 'Battle Bond',
			// moves
			'Swagger', 'Baton Pass', 'Dark Hole', 'Misty Explosion', 'Explosion', 'Self-Destruct',
			// complex bans
			'Darkrai + Dark Hole', 'Blastoise-Mega + Shell Smash', 'Blaziken + Speed Boost', 'Kangaskhan-Mega + Seismic Toss', 'Greninja + Protean', 'Cinderace + Libero',
		],
		searchShow: false,
	},
	{
		name: "[Gen 8] National Dex RR OU",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause'],
		banlist: [
			// ubers
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Urshifu-Base', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Complete',
			// abilities
			'Moody', 'Power Construct', 'Shadow Tag', 'Arena Trap',
			// moves
			'Swagger', 'Baton Pass', 'Dark Hole', 'Misty Explosion',
			// custom mons
			'Tyrogunk',
		],
	},
	{
		name: "[Gen 8] National Dex RR Ubers",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause', 'Mega Rayquaza Clause'],
		banlist: [
			// AG
			'Zacian-Crowned', 'Tyrogunk', 'Clefpex',
			// moves
			'Baton Pass', 'Dark Hole',
			// abilities
			'Moody',
		],
	},
	{
		name: "[Gen 8] National Dex RR UU",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause'],
		banlist: [
			// ou
			'Magearna', 'Spectrier', 'Cinderace', 'Tornadus-Therian', 'Landorus-Therian', 'Zapdos-Base', 'Gliscor', 'Heatran', 'Dragapult', 'Tapu Bulu', 'Tapu Fini', 'Tapu Lele', 'Clefable', 'Kartana', 'Hydreigon', 'Lopunny-Mega', 'Ferrothorn', 'Tangrowth', 'Magnezone', 'Dracovish', 'Centiskorch-Mega', 'Corviknight', 'Darmanitan-Galar', 'Latias-Mega', 'Garchomp', 'Garchomp-Mega', 'Excadrill', 'Tyranitar-Mega', 'Infernape', 'Blissey', 'Greninja', 'Greninja-Ash', 'Medicham-Mega', 'Swampert-Mega', 'Pelipper', 'Regieleki', 'Rotom-Heat', 'Slowbro-Base', 'Slowbro-Mega', 'Volcarona', 'Mawile-Mega', 'Moltres-Galar', 'Toxtricity-Mega', 'Toxtricity-Low-Key-Mega',
			// uubl (add mons after nduubl)
			'nduubl',
			// abilities
			'Moody', 'Power Construct', 'Shadow Tag', 'Arena Trap',
			// moves
			'Swagger', 'Baton Pass', 'Dark Hole', 'Misty Explosion',
			// customs
			'Tyrogunk', 'Clefpex',
		],
	},
	{
		name: "[Gen 8] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex'],
		banlist: [
			'Tyrogunk', 'Clefpex',
		],
	},
	{
		name: "[Gen 8] Custom Game",
		mod: 'gen8',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions,for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		section: "RR Doubles",
	},
	{
		name: "[Gen 8] RRC",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Natdex', 'Item Clause', 'Species Clause', 'Z-Move Clause', 'CFZ Clause', 'Dynamax Clause'],
		banlist: [
			'Arceus', 'Cosmoem', 'Cosmog', 'Calyrex', 'Cresselia', 'Darkrai', 'Deoxys', 'Dialga', 'Eternatus', 'Giratina', 'Groudon', 'Heatran', 'Ho-Oh', 'Kyogre', 'Kyurem', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Regigigas', 'Mewtwo', 'Necrozma', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin', 'Solgaleo', 'Unown', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde',
			'Tyrogunk', 'Clefpex',
		],
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
	},
];
