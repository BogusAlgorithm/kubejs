BlockEvents.rightClicked('minecraft:mycelium', event => { 
    const {item, block} = event
    if(item.id == 'thermal:compost') {
        item.shrink(1)
        
        let tblock = event.level.getBlock([block.x, block.y, block.z])
        const m = ["minecraft:brown_mushroom", "minecraft:red_mushroom", "minecraft:crimson_fungus", "minecraft:warped_fungus", "thermal:gunpowder_mushroom", "thermal:redstone_mushroom", "thermal:slime_mushroom", "thermal:glowstone_mushroom"]
        let r = Math.floor(Math.random()*m.length)
        //tblock.up.set(m[r])	
        //event.player.tell(r)
        tblock.up.set(m[r])	

    }
})

BlockEvents.rightClicked('minecraft:flower_pot', event => { 
    const {item, block} = event
    if(item.id == 'thermal:compost' || item.id == 'minecraft:bone_meal') {
        item.shrink(1)
        
        let tblock = event.level.getBlock([block.x, block.y, block.z])
        const m = ["minecraft:potted_dandelion", "minecraft:potted_poppy","minecraft:potted_blue_orchid", "minecraft:potted_allium", "minecraft:potted_azure_bluet", 
        "minecraft:potted_red_tulip", "minecraft:potted_orange_tulip", "minecraft:potted_white_tulip", "minecraft:potted_pink_tulip", "minecraft:potted_oxeye_daisy", 
        "minecraft:potted_cornflower", "minecraft:potted_lily_of_the_valley"]
        let r = Math.floor(Math.random()*m.length)
        tblock.set(m[r])
    }
})