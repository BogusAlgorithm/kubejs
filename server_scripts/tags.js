console.info('Loading TAGS ...')

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('thermal:frame_component', 'thermal:silver_gear')
    event.add('thermal:frame_component', 'thermal:lead_gear')
})

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', "minecraft:end_portal_frame")
    //event.add("minecraft:mineable/pickaxe", "minecraft:end_portal_frame")
})

ServerEvents.loaded(e => e.server.runCommandSilent('reload'))