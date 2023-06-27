console.info('Loading TAGS ...')

ServerEvents.tags('item', event => {
    event.add('thermal:frame_component', 'thermal:silver_gear')
    event.add('thermal:frame_component', 'thermal:lead_gear')

    event.add('thermal:plates', `/^thermal:.*_plate$/`)                 //for quest

    //event.add('thermal:adv_glass', `/thermal:((?!obsidian).)*_glass/`)  //for quest
    event.add('thermal:adv_glass', `/thermal:(?!obsidian).*_glass/`)  //for quest


    event.add('thermal:crystal', `minecraft:diamond`)                   //for quest
    event.add('thermal:crystal', `minecraft:emerald`)                   //for quest
    event.add('thermal:crystal', `minecraft:lapis_lazuli`)              //for quest
    event.add('thermal:crystal', `ae2:certus_quartz_crystal`)           //for quest

    event.add('powah:pocket_battery', `/powah:battery_.*/`)             //for quest

    event.add('ae2:cell_components', `/ae2:cell_component_*/`)           //for quest
    event.add('ae2:spatial_cell_components', `/ae2:spatial_cell_component_*/`)           //for quest
    event.add('ae2:upgrade_cards', `/^ae2:(?!(basic|advanced|biometric|memory|debug)).*_card$/`)           //for quest
    event.add('ae2:storage_cells', `/^ae2:(item|fluid)_storage_cell_.*/`)           //for quest
    event.add('ae2:spatial_storage_cells', `/^ae2:spatial_storage_cell_.*/`)           //for quest

    event.add('kubejs:kubits', `/kubejs:kubit_(?!(16|17|18))/`)  //for quest

    event.add('teamod:brewable', 'thermal:tea')
    event.add('teamod:brewable', 'thermal:coffee_seeds')
    event.add('teamod:brewable', 'teamod:roasted_coffee_bean')
    event.add('teamod:ready', 'teamod:full_coffee_cup')
    event.add('teamod:ready', 'teamod:full_tea_cup')

    Color.DYE.forEach(col => {
        event.add("minecraft:lumen_balls", `ae2:${col}_lumen_paint_ball`)
    })
})

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', "minecraft:end_portal_frame")
    event.add("create:wrench_pickup", "minecraft:end_portal")

    event.add('minecraft:dampens_vibrations', '/^thermal:.*_rockwool$/')
    event.add('minecraft:occludes_vibration_signals', /^thermal:.*_rockwool$/)
})

ServerEvents.loaded(e => e.server.runCommandSilent('reload'))