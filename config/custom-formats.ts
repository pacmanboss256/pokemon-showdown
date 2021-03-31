// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
export const Formats: FormatList = [
	{
		section: "National Dex",
	},
	{
		name: "[Gen 8] National Dex RR OU",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause'],
		banlist: [
			// ubers
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Complete',
			// abilities
			'Moody', 'Power Construct', 'Shadow Tag', 'Arena Trap',
			// moves
			'Swagger', 'Baton Pass', 'Dark Hole', 'Misty Explosion',
		],
	},
	{
		name: "[Gen 8] National Dex RR Ubers",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause'],
		banlist: [
			// AG
			'Rayquaza-Mega', 'Zacian-Crowned',
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
			'Magearna', 'Spectrier', 'Cinderace', 'Tornadus-Therian', 'Landorus-Therian', 'Zapdos-Base', 'Gliscor', 'Heatran', 'Dragapult', 'Tapu Bulu', 'Tapu Fini', 'Tapu Lele', 'Clefable', 'Kartana', 'Hydreigon', 'Lopunny-Mega', 'Ferrothorn', 'Tangrowth', 'Magnezone', 'Dracovish', 'Centiskorch-Mega', 'Corviknight', 'Darmanitan-Galar', 'Latias-Mega', 'Garchomp', 'Garchomp-Mega', 'Excadrill', 'Tyranitar-Mega', 'Infernape', 'Blissey', 'Toxtricity-Mega', 'Greninja', 'Greninja-Ash', 'Medicham-Mega', 'Swampert-Mega', 'Pelipper', 'Regieleki', 'Rotom-Heat', 'Slowbro-Base', 'Slowbro-Mega', 'Volcarona', 'Mawile-Mega', 'Moltres-Galar',
			// uubl (add mons after nduubl)
			'nduubl',
			// abilities
			'Moody', 'Power Construct', 'Shadow Tag', 'Arena Trap',
			// moves
			'Swagger', 'Baton Pass', 'Dark Hole', 'Misty Explosion',
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
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
];
