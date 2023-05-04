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

BlockEvents.rightClicked('minecraft:grass', event => { 
    const {item, block} = event
    if(item.id == 'thermal:compost') {
        item.shrink(1)
        
        let tblock = event.level.getBlock([block.x, block.y, block.z])
        const m = ["minecraft:dandelion", "minecraft:sunflower", "minecraft:poppy", "minecraft:rose_bush", "minecraft:cornflower"]
        let r = Math.floor(Math.random()*m.length)
        tblock.up.set(m[r])	

    }
})