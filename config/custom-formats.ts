// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	{
		section: "National Dex",
	},
	{
		name: "[Gen 8] National Dex RR OU",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
];
