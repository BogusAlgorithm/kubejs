console.info('Loading TAGS ...')

ServerEvents.tags('item', event => {
    event.add('thermal:frame_component', 'thermal:silver_gear')
    event.add('thermal:frame_component', 'thermal:lead_gear')
    event.add('thermal:plates', `/^thermal:.*_plate$/`)                 //for quest

    event.add('thermal:adv_glass', `/thermal:((?!obsidian).)*_glass/`)  //for quest

    event.add('powah:pocket_battery', `/powah:battery_.*/`)             //for quest

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
})

ServerEvents.loaded(e => e.server.runCommandSilent('reload'))