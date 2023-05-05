console.info('Loading POWAH recipes...')

ServerEvents.recipes(event => {
    
    event.remove({id: "powah:crafting/dielectric_paste"})
    event.remove({id: "powah:crafting/dielectric_paste_2"})

    event.remove({id: "powah:crafting/cable_starter"})
    event.shaped(
        Item.of('powah:energy_cable_starter', 12), 
            [ 
            'DDD', 
            'SSS', 
            'DDD'  
            ],{
            D: 'powah:dielectric_paste',
            S: 'kubejs:silver_wire'
            }) 

    event.recipes.create.mixing("8x powah:dielectric_paste", ["minecraft:clay_ball", "minecraft:clay_ball", "minecraft:blaze_powder", "create:powdered_obsidian", "create:powdered_obsidian"])

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "minecraft:cobblestone"},
            {"tag": "forge:dusts/ender_pearl"},
            {"tag": "forge:dusts/ender_pearl"},
            {"tag": "forge:dusts/ender_pearl"},
            {"tag": "forge:dusts/ender_pearl"}
            ],
            "energy": "10000",
            "result": {
            "item": "minecraft:end_stone"
        }}
    )
    
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {"item": "minecraft:cobblestone"},
            {"tag": "forge:dusts/certus_quartz"},
            {"tag": "forge:dusts/certus_quartz"},
            {"tag": "forge:dusts/certus_quartz"},
            {"tag": "forge:dusts/certus_quartz"}
            ],
            "energy": "10000",
            "result": {
            "item": "ae2:sky_stone_block"
        }}
    )
})