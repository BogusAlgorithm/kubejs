// priority: 1

console.info('Loading POWAH recipes...')

ServerEvents.recipes(event => {
    
    const powah_tiers = ["starter", "basic", "hardened", "blazing", "niotic", "spirited", "nitro"]

    event.remove({id: "powah:crafting/dielectric_paste"})
    event.remove({id: "powah:crafting/dielectric_paste_2"})

    event.remove({id: "powah:energizing/energized_steel"})
    event.remove({id: "powah:energizing/charged_snowball"})

    event.remove({id: `/powah:crafting\/ender_gate_.*/`})
    event.remove({id: `/powah:crafting\/furnator_.*/`})
    event.remove({id: `/powah:crafting\/magmator_.*/`})
    event.remove({id: `/powah:crafting\/thermo_generator_.*/`})
    event.remove({id: `/powah:crafting\/solar_panel_/`})
    event.remove({id: `/powah:crafting\/player_tranmitter_.*/`})
    event.remove({id: `/powah:crafting\/energy_hopper_.*/`})
    event.remove({id: `/powah:crafting\/energy_discharger_.*/`})
    event.remove({id: `/powah:crafting\/ender_cell_.*/`})
    event.remove({id: `/powah:crafting\/energy_cell_.*/`})
    event.remove({id: `/powah:crafting\/battery_.*/`})
    event.remove({id: `/powah:crafting\/energizing_rod_.*/`})
    event.remove({id: `/powah:crafting\/reactor_.*/`})

    event.remove({id: `/powah:crafting\/capacitor_.*/`})
    event.remove({id: `/powah:energizing\/.*_crystal/`})
    event.remove({id: `/powah:crafting\/cable_.*/`})

    event.replaceInput({id: "powah:crafting/dielectric_casing"}, "minecraft:iron_ingot", "thermal:lead_ingot")

    /*powah_tiers.forEach((val) => 
        {
            event.shapeless(`powah:energy_cell_${val}`, [`powah:battery_${val}`, "powah:dielectric_casing"])
        })*/

    let energize1 = (output, input1, energy) => {
        event.custom({
            "type": "powah:energizing",
            "ingredients": [
                {"item": input1}
                ],
                "energy": energy.toString(),
                "result": {
                "item": output
            }}
        )
    }   
    
    let energize2 = (output, input1, input2, energy) => {
        event.custom({
            "type": "powah:energizing",
            "ingredients": [
                {"item": input1},
                {"item": input2}
                ],
                "energy": energy.toString(),
                "result": {
                "item": output
            }}
        )
    }

    event.shaped(
        Item.of('powah:energizing_rod_basic'), 
            [ 
            ' Q ', 
            'ACA', 
            'DDD'  
            ],{
            A: 'createaddition:capacitor',
            C: 'powah:dielectric_casing',    
            Q: 'minecraft:quartz_block',
            D: 'powah:dielectric_rod'
        })    

    event.shaped(
        Item.of('powah:solar_panel_starter'), 
            [ 
            'LLL', 
            'ACA', 
            'DDD'  
            ],{
            A: 'powah:capacitor_basic_large',
            C: 'powah:dielectric_casing',
            D: 'powah:dielectric_rod',
            L: 'minecraft:daylight_detector'
        })
    
    event.recipes.thermal.bottler("powah:lens_of_ender", ["minecraft:glass", Fluid.of("thermal:ender", 1000)])

    event.recipes.create.mixing("8x powah:dielectric_paste", ["minecraft:clay_ball", "minecraft:clay_ball", "minecraft:clay_ball", "minecraft:clay_ball", "minecraft:blaze_powder", "create:powdered_obsidian", "create:powdered_obsidian"])

    energize2("powah:capacitor_hardened", 'powah:capacitor_basic_large', 'powah:steel_energized', 5000)
    energize2("powah:capacitor_blazing",  'powah:capacitor_basic_large', 'powah:crystal_blazing', 10000)
    energize2("powah:capacitor_niotic", 'powah:capacitor_basic_large', 'powah:crystal_niotic', 20000)
    energize2("powah:capacitor_spirited", 'powah:capacitor_basic_large', 'powah:crystal_spirited', 40000)
    energize2("powah:capacitor_nitro", 'powah:capacitor_basic_large', 'powah:crystal_nitro', 80000)

    global.CrisCrosCraft("powah:battery_starter", "thermal:cured_rubber", "powah:dielectric_paste", "createaddition:capacitor")
    energize2("powah:battery_basic", 'powah:battery_starter', 'powah:capacitor_basic_large', 10000)

    energize1("powah:steel_energized", "thermal:steel_ingot", 10000)
    energize2("powah:crystal_niotic", 'minecraft:emerald', "powah:crystal_blazing", 20000)
    energize2("powah:crystal_spirited", 'minecraft:diamond', "powah:crystal_niotic", 40000)
    energize2("powah:crystal_nitro", 'minecraft:nether_star', "powah:crystal_spirited", 80000)

    global.CrisCrosCraft2("4x powah:reactor_starter", "ae2:sky_stone_block", "createaddition:capacitor", "thermal:invar_plate", 'powah:dielectric_casing')
    global.CrisCrosCraft("4x powah:reactor_basic", "powah:reactor_starter", 'powah:capacitor_basic_large', 'powah:dielectric_casing')

    global.CrisCrosCraft("powah:energy_cell_basic", "powah:dielectric_paste", 'powah:capacitor_basic_large', 'powah:dielectric_casing')

    global.sandwich('12x powah:energy_cable_starter', "powah:dielectric_paste", 'kubejs:silver_wire')
    global.doughnut('8x powah:energy_cable_basic', "powah:energy_cable_starter", 'thermal:electrum_plate')
    global.doughnut(`8x powah:energy_cable_hardened`, "powah:energy_cable_basic", `powah:steel_energized`)

    powah_tiers.forEach((val, ind) => 
    {
        if (ind>1) energize2(`powah:battery_${val}`, `powah:battery_${powah_tiers[ind-1]}`, `powah:capacitor_${val}`, ((ind*ind)*1000).toString())
        if (ind>1) global.CrisCrosCraft(`4x powah:reactor_${val}`, `powah:reactor_${powah_tiers[ind-1]}`, `powah:capacitor_${val}`, 'powah:dielectric_casing')
        if (ind>1) global.CrisCrosCraft(`powah:energy_cell_${val}`, "powah:dielectric_paste", `powah:capacitor_${val}`, 'powah:dielectric_casing')
        if (ind>2) global.doughnut(`8x powah:energy_cable_${val}`, "powah:energy_cable_basic", `powah:crystal_${val}`)
        if (ind>1) event.shapeless(`powah:energizing_rod_${val}`, [`powah:energizing_rod_${powah_tiers[ind-1]}` , `2x powah:capacitor_${val}`])
    })

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "minecraft:blaze_rod"},
            {"item": "thermal:blitz_rod"},
            {"item": "thermal:basalz_rod"},
            {"item": "thermal:blizz_rod"}
            ],
            "energy": "10000",
            "result": {
            "item": "powah:crystal_blazing"
        }}
    )

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "powah:dielectric_paste"},
            {"item": "thermal:electrum_plate"},
            {"item": "thermal:electrum_plate"},
            {"item": "minecraft:redstone"},
            {"item": "minecraft:redstone"},
            {"item": "minecraft:redstone"}
            ],
            "energy": "10000",
            "result": {
            "item": "powah:capacitor_basic_large"
        }}
    )
    /*
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"tag": "forge:dusts/certus_quartz"},
            {"tag": "forge:dusts/obsidian"},
            {"item": "thermal:lead_dust"}
            ],
            "energy": "50000",
            "result": {
            "item": "ae2:sky_dust"
        }}
    )*/

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "minecraft:end_stone"}
            ],
            "energy": "100000",
            "result": {
            "item": "minecraft:end_stone",
            "count": 2
        }}
    )

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "minecraft:end_stone"},
            {"item": "minecraft:end_stone"}
            ],
            "energy": "180000",
            "result": {
            "item": "minecraft:end_stone",
            "count": 4
        }}
    )

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "minecraft:end_stone"},
            {"item": "minecraft:end_stone"},
            {"item": "minecraft:end_stone"},
            {"item": "minecraft:end_stone"}
            ],
            "energy": "320000",
            "result": {
            "item": "minecraft:end_stone",
            "count": 8
        }}
    )

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "minecraft:snowball"},
            {"item": "minecraft:snowball"},
            {"item": "minecraft:snowball"},
            {"item": "minecraft:snowball"},
            {"item": "minecraft:snowball"},
            {"item": "minecraft:snowball"}
            ],
            "energy": "18000",
            "result": {
            "item": "powah:charged_snowball",
            "count": 6
        }}
    )
})