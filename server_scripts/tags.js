console.info('Loading TAGS ...')

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('thermal:frame_component', 'thermal:silver_gear')
    event.add('thermal:frame_component', 'thermal:lead_gear')
})

ServerEvents.loaded(e => e.server.runCommandSilent('reload'))