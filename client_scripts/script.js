// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
  event.hide(`/powah:ender_gate_/`)
  event.hide(`/powah:furnator_/`)
  event.hide(`/powah:magmator_/`)
  event.hide(`/powah:thermo_generator_/`)
  event.hide(`/powah:solar_panel_(?!starter)/`)
  event.hide(`/powah:player_transmitter_/`)
  event.hide(`/powah:energy_hopper_/`)
  event.hide(`/powah:energy_discharger_/`)
  event.hide(`/powah:ender_cell_/`)
})

ItemEvents.tooltip(event => {
	
	event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (event.alt && item.nbt) {
      text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
    }
  })
})