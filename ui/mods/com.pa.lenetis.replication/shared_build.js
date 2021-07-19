var newBuild = {
	"/pa/units/orbital/orbital_fabrication_bot_adv/orbital_fabrication_bot_adv.json": ["orbital", 0, { row: 0, column: 4 }],
	"/pa/units/orbital/l_orbital_fabrication_bot_adv/l_orbital_fabrication_bot_adv.json": ["L_orbital", 0, { row: 0, column: 4 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}