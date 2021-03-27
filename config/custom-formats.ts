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
			'Alakazam-Mega', 'Arceus', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chandelure', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Latias-Mega', 'Latios-Mega', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Spectrier', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Complete',
			// abilities
			'Moody', 'Power Construct', 'Battle Bond',
			// moves
			'Swagger', 'Baton Pass', 'Dark Hole', 'Misty Explosion', 'Explosion', 'Self-Destruct',
		],
	},

	{
		name: "[Gen 8] National Dex RR OU",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause'],
		banlist: [
			// mons
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Latias-Mega', 'Latios-Mega', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Complete',
			// abilities
			'Moody', 'Power Construct', 'Battle Bond', 'Shadow Tag',
			// moves
			'Swagger', 'Baton Pass', 'Dark Hole', 'Misty Explosion',
		],
	},
	{
		name: "[Gen 8] National Dex RR Ubers",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'CFZ Clause', 'Z-Move Clause'],
		banlist: [
			// mons
			'Rayquaza-Mega', 'Zacian-Crowned',
			// moves
			'Baton Pass', 'Dark Hole',
		],
	},
];
