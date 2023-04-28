console.info('Loading TAGS recipes...')

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('thermal:frame_component', 'thermal:silver_gear')
    event.add('thermal:frame_component', 'thermal:lead_gear')
})