BlockEvents.rightClicked('minecraft:mycelium', event => { 
    const {item, block} = event
    if(item.id == 'thermal:phytogro') {
        item.shrink(1)
        //item.count--
        const m = ["minecraft:air", "minecraft:brown_mushroom", "minecraft:red_mushroom", "minecraft:crimson_fungus", "minecraft:warped_fungus", "thermal:gunpowder_mushroom_spores", "thermal:redstone_mushroom_spores", "thermal:slime_mushroom_spores", "thermal:glowstone_mushroom_spores"]

        block.up.set(m[Math.floor(Math.random()*m.length)])	
    }
})