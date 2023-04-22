console.info('Loading POWAH recipes...')

ServerEvents.recipes(event => {
    
    event.remove({id: "powah:crafting/dielectric_paste"})
    event.remove({id: "powah:crafting/dielectric_paste_2"})

    event.recipes.create.mixing("8x powah:dielectric_paste", ["minecraft:clay_ball", "minecraft:clay_ball", "minecraft:blaze_powder", "create:powdered_obsidian", "create:powdered_obsidian"])
})