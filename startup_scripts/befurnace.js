// priority: 0

const stones = [
    ["minecraft:cobblestone", 1],
    ["minecraft:granite", 1],
    ["minecraft:diorite", 1],
    ["minecraft:andesite", 1],
    ["minecraft:deepslate", 1],
    ["minecraft:tuff", 1],
    ["minecraft:calcite", 1],
    ["minecraft:sandstone", 1]
  ];

const ores = [
    ["minecraft:iron_ore", 1],
    ["minecraft:copper_ore", 1],
    ["minecraft:gold_ore", 1],
    ["create:zinc_ore", 1],
    ["thermal:tin_ore", 1],
    ["thermal:lead_ore", 1],
    ["thermal:silver_ore", 1],
    ["thermal:nickel_ore", 1]
  ];

const organics = [
    ["minecraft:slime_ball", 1],
    //["minecraft:rotten_flesh", 1],
    ["minecraft:spider_eye", 1],
    ["minecraft:ink_sac", 1],
    ["minecraft:leather", 1],
    ["minecraft:string", 1],
    ["minecraft:feather:", 1]//,
    //["thermal:", 1]
  ];

const plants = [
    ["minecraft:oak_leaves", 1],
    ["minecraft:wheat_seeds", 1],
    ["minecraft:pumpkin_seeds", 1],
    ["minecraft:melon_seeds", 1],
    //["minecraft:bamboo", 1],
    ["minecraft:sugar_cane", 1],
    ["minecraft:kelp", 1]//,
    //["thermal:", 1]
  ];

const trees = [
    ["minecraft:oak_sapling", 1],
    ["minecraft:dark_oak_sapling", 1],
    ["minecraft:birch_sapling", 1],
    ["minecraft:spruce_sapling", 1],
    ["minecraft:jungle_sapling", 1],
    ["minecraft:acacia_sapling", 1],
    ["minecraft:mangrove_propagule", 1],
    ["minecraft:azalea", 1]
  ];

const food = [
    ["minecraft:bread", 1],
    ["minecraft:apple", 1],
    ["minecraft:potato", 1],
    ["minecraft:carrot", 1],
    ["minecraft:beetroot", 1]//,
    //["minecraft:acacia_sapling", 1],
    //["minecraft:mangrove_propagule", 1],
    //["minecraft:azalea", 1]
  ];

  const soils = [
    ["minecraft:grass_block", 1],
    ["minecraft:podzol", 1],
    ["minecraft:mycelium", 1],
    ["minecraft:crimson_nylium", 1],
    ["minecraft:warped_nylium", 1]//,
    //["minecraft:sugar_cane", 1],
    //["minecraft:kelp", 1]//,
    //["thermal:", 1]
  ];

  const crops_2 = [
    /*
    ["thermal:amaranth", 1],
    ["thermal:barley", 1],
    ["thermal:bell_pepper", 1],
    ["thermal:coffee", 1],
    ["thermal:corn", 1],
    ["thermal:eggplant", 1],
    ["thermal:flax", 1],
    ["thermal:green_bean", 1],
    ["thermal:onion", 1],
    ["thermal:peanut", 1],
    ["thermal:radish", 1],
    ["thermal:rice", 1],
    ["thermal:sadiroot", 1],
    ["thermal:spinach", 1],
    ["thermal:strawberry", 1],
    ["thermal:tea", 1],
    ["thermal:tomato" 1]
    */
  ];


//const morph = ["minecraft:iron_ore", "minecraft:nether_quartz_ore", "minecraft:egg", "minecraft:cactus"]
//const modes = [stones, ores, organics, plants]
const modes = [ [stones, 0.02, "minecraft:iron_ore", 64, 4, 0.5],
                [ores, 0.02, "minecraft:nether_quartz_ore", 64, 3, 0.5],
                [organics, 0.02, "minecraft:egg", 16, 4, 0.5],
                [plants, 0.02, "minecraft:cactus", 64, 4, 0.5],
                [trees, 0.02, "minecraft:bamboo", 64, 4, 0.5],
                [food, 0, "minecraft:air", 64, 8, 0.5],
                [soils, 0.02, "minecraft:soul_soil", 64, 4, 0.5]]

function GetModeFor(id) {
    for (let i = 0; i < modes.length; i++) {
        let v = []
        //modes[i].forEach(pair => v.push(pair[0]))
        modes[i][0].forEach(pair => v.push(pair[0]))//** */
        if (v.includes(id)) return i
      }
    return -1
}

StartupEvents.registry('block', event => {
	event.create('befurnace', 'entity').displayName('befurnace')
	.entity(builder => { // adds a BlockEntity onto this block
	    builder.ticker((level, pos, state, be) => { 
            if(!level.clientSide) { // ALWAYS check side, the tick method is called on both CLIENT and SERVER
				if(level.levelData.gameTime % 60 == 0) {
					let items = be.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
					let mode = GetModeFor(items.getContainer(1).getStackInSlot(0).id)
                    //level.server.tell(item.getStackInSlot(0).id)
                    //level.server.tell(mode)
                    if (mode < 0) return
                    //level.server.tell(GetModeFor(items.getContainer(1).getStackInSlot(0).id))
                    //let item = items.getContainer(1)

                    let item = items.getContainer(0)
                    /*let valids = ['minecraft:stone', 
                    'minecraft:granite', 
                    'minecraft:diorite', 
                    'minecraft:andesite', 
                    'minecraft:deepslate', 
                    'minecraft:tuff', 
                    'minecraft:calcite', 
                    'minecraft:dripstone_block']*/
                    //level.server.tell(valids)
                    
                    //valids.forEach(id => items.isItemValid(0, Item.of(id)))
                    //item.isItemValid(0, Item.of('minecraft:stone'))
                    let valids = []
                    //modes[mode][0].forEach(pair => valids.push(pair[0]))
                    modes[mode][0].forEach(pair => valids.push(pair[0]))
                    //level.server.tell(valids)
                
                    if (valids.includes(item.getStackInSlot(0).id) && item.getStackInSlot(0).count>modes[mode][4])
                    {
                        let adv_chance = be.persistentData.getFloat('adv_cha')
                        level.server.tell(adv_chance)
                        if (item.getStackInSlot(0).id == be.persistentData.getString("last_sid") && item.getStackInSlot(0).count == be.persistentData.getInt("last_cnt"))
                        {
                            adv_chance += modes[mode][1]
                        }
                        else
                        {
                            adv_chance = modes[mode][1]
                        }
                        be.persistentData.putFloat('adv_cha', adv_chance)
                        let ra = Math.random()
                        level.server.tell(adv_chance+" to "+modes[mode][2]+ " min " + Math.min(modes[mode][3]) + " r="+ra)
                         
                        if (ra < adv_chance)
                        {
                            //level.server.tell("MORPH")
                            item.setStackInSlot(0, Item.of(modes[mode][2], Math.min(modes[mode][3], Math.floor((item.getStackInSlot(0).count - modes[mode][4]) * modes[mode][5]))))    ///!!!
                        }
                        else
                        {
                            let mass = 0
                            modes[mode][0].forEach(pair => mass+=pair[1])
                            let r = Math.floor(Math.random()*mass)
                            let ind=-1
                            do
                            {
                                ind+=1
                                r-=modes[mode][0][ind][1]
                            }
                            while (r>=0) 
                            
                            item.setStackInSlot(0, Item.of(modes[mode][0][ind][0], item.getStackInSlot(0).count-modes[mode][4]))
                            //item.setStackInSlot(0, Item.of(valids[Math.floor(Math.random()*valids.length)], item.getStackInSlot(0).count-4))
                            //level.server.tell("Chance = "+adv_chance)
                        }
                        
                        be.persistentData.putString("last_sid", item.getStackInSlot(0).id)
                        be.persistentData.putInt("last_cnt", item.getStackInSlot(0).count)
                        
                        //level.server.tell()
                    }
                    //level.server.tell('stack invalid')
					//item.setStackInSlot(0, Item.of("minecraft:stone", level.levelData.gameTime % 33))
                    //item.setStackInSlot(0, Item.of("minecraft:diamond", 1))
					//console.info(item.getStackInSlot(0))
				
                /*if(level.levelData.gameTime % 20 == 0) { // only .levelData.gameTime works for some reason??
                    if(level.getBlockState(pos.above()) === Blocks.AIR.defaultBlockState()) {
                        level.setBlock(pos.above(), Blocks.GLASS.defaultBlockState(), 3)
                      	be.persistentData.putBoolean("placed", true)
                    } else {
                        level.setBlock(pos.above(), Blocks.AIR.defaultBlockState(), 3)
                        be.persistentData.putBoolean("placed", false)
                    }
                  	console.info("placed: " + be.persistentData.getBoolean("placed"))*/
                }
            }
    	})
        .defaultValues(tag => tag = { adv_cha: 0, last_cnt: 0, last_sid: 'minecraft:air'})                                                                                                          // [1st param: CompoundTag consumer]
        //.addValidBlock('befurnace') // adds a valid block this can attach to, useless in normal circumstances (except if you want to attach to multiple blocks or are building the BE separately)
        .itemHandler(1) // adds a basic item handler to this block entity, [1st param: slot count]
        .itemHandler(1)
    })
})

StartupEvents.registry('menu', event => {
    event.create('befurnace' , 'block_entity')
    //.backroundTexture('minecraft:textures/gui/container/anvil.png', new Rectangle(0, 0, 176, 166))
    .addSlot(2, 18, 0, 0)
    .addSlot(20, 18, 0, 1)
    //.drawable(72, 35, new Rectangle(0, 0, 16, 16), 'minecraft:textures/item/apple.png', 0xFFFFFF)
    //.button(new Rectangle(20, 2, 120, 95), Component.string("Disabled Item!"), button => {console.info("Click")})
    
    //z.addOutputSlot(54, 30, 0, 0, 1, null)

    //addOutputSlot(40, 10, 2, 0)
        //.addSlot(-10, -10) // adds a slot into this x,y position on the texture
        //.addSlot(10, 200)
//        .loop(builder => {
//            for(let x = 0; x < 9; x++) {
//                for (let y = 0; y < 4; y++) {
//                    builder.addSlot(x * 18 , y * 18, x + y * 4, 0)
//                }
//            }
//        })
        //.addOutputSlot(118, 118, 0, 0, 1, 'minecraft:smelting') // adds a slot you can't put an item into, but can pull an item from
  																// LAST PARAMETER CAN BE NULL FOR NO OUTPUT HANDLING
//  		.inputSlotIndices(0) // sets a list of ITEM HANDLER indexes to handle as slotChanged callback input
        .playerInventoryY(100) // marks the start of the player's inventory on the texture
        //.tintColor(0xFF00FF00) // a color to tint the whole inventory texture, in hexadecimal [a, r, g, b]
        //.progressDrawable(50, 50, new Rectangle(0, 0, 10, 30), 'forge:textures/white.png', 'up', 'energy') // displays an energy bar from the blockentity's FE capability
  		//.slotChanged((menu, level, player, itemHandlers) => {
      	//	console.info('' + player)
    	//})
        .tintColor(0xFF00FF00)
        .setBlockEntity('kubejs:befurnace') // the block entity type that should open this GUI on right-click
})
