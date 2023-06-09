// priority: 0

const stones = [
    ["minecraft:cobblestone", 1],
    ["minecraft:granite", 1],
    ["minecraft:diorite", 1],
    ["minecraft:andesite", 1],
    ["minecraft:deepslate", 1],
    ["minecraft:tuff", 1],
    ["minecraft:calcite", 1],
    ["minecraft:sandstone", 1],
    ["minecraft:dripstone_block", 1]
  ];

const ores = [
    ["minecraft:raw_iron", 2],
    ["minecraft:raw_copper", 3],
    ["create:raw_zinc", 2],
    ["thermal:raw_lead", 1],
    ["thermal:raw_silver", 1]
  ];

const organics = [
    ["minecraft:slime_ball", 1],
    ["minecraft:spider_eye", 2],
    ["minecraft:ink_sac", 2],
    ["minecraft:feather:", 2],
	  ["minecraft:honeycomb", 2],
    ["minecraft:frogspawn", 2]
  ];

const plants = [
    ["minecraft:oak_leaves", 1],
    ["thermal:tea", 1],
    ["thermal:coffee_seeds", 1],
    ["minecraft:wheat_seeds", 1],
    ["minecraft:sugar_cane", 1],
    ["minecraft:kelp", 1],
    ["minecraft:cocoa_beans", 1]
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
    ["minecraft:pumpkin", 1],
    ["minecraft:melon", 1],
    ["minecraft:sweet_berries", 1],
    ["minecraft:beetroot", 2]
  ];

  const soils = [
    ["minecraft:grass_block", 1],
    ["minecraft:podzol", 2],
    ["minecraft:mycelium", 2],
    ["minecraft:crimson_nylium", 2],
    ["minecraft:warped_nylium", 2],
    ["minecraft:moss_block", 1]
  ];

  
  const crops_2 = [
    ["thermal:amaranth_seeds", 1],
    ["thermal:barley_seeds", 1],
    ["thermal:bell_pepper_seeds", 1],
    ["thermal:corn_seeds", 1],
    ["thermal:eggplant_seeds", 1],
    ["thermal:flax_seeds", 1],
    ["thermal:green_bean_seeds", 1],
    ["thermal:onion_seeds", 1],
    ["thermal:peanut_seeds", 1],
    ["thermal:radish_seeds", 1],
    ["thermal:rice_seeds", 1],
    ["thermal:sadiroot_seeds", 1],
    ["thermal:spinach_seeds", 1],
    ["thermal:strawberry_seeds", 1],
    ["thermal:tomato_seeds", 1],
    ["thermal:frost_melon_seeds", 1]
  ];

  const protein = [
    ['minecraft:rotten_flesh',1],
    ['minecraft:beef',1],
    ['minecraft:porkchop',1],
    ['minecraft:chicken',1],
    ['minecraft:mutton',1],
    ['minecraft:rabbit',1],
    ['minecraft:cod',1],
    ['minecraft:salmon',1]
  ];

  const minerals = [
    ['minecraft:clay_ball',1],
    ['thermal:cinnabar',2],
    ['thermal:niter',2],
    ['thermal:sulfur',2], 
    ['thermal:apatite',2]
  ];

  const gems = [
    ['thermal:quartz_dust',1],
    ['thermal:diamond_dust',1],
    ['thermal:emerald_dust',1]//,
    //['ae2:certus_quartz_dust',2]
  ];

  const stones2 = [
    ['create:scoria',1],
    ['create:asurine',1],
    ['create:crimsite',1],
    ['create:limestone',1],
    ['create:veridium',1]
  ];

  const colors = [
    ['minecraft:black_dye',1],
    ['minecraft:red_dye',1],
    ['minecraft:green_dye',1],
    ['minecraft:brown_dye',1],
    ['minecraft:blue_dye',1],
    ['minecraft:purple_dye',1],
    ['minecraft:cyan_dye',1],
    ['minecraft:light_gray_dye',1],
    ['minecraft:cyan_dye',1],
    ['minecraft:gray_dye',1],
    ['minecraft:pink_dye',1],
    ['minecraft:lime_dye',1],
    ['minecraft:yellow_dye',1],
    ['minecraft:light_blue_dye',1],
    ['minecraft:magenta_dye',1],
    ['minecraft:orange_dye',1],
    ['minecraft:white_dye',1]
  ];
  
const tier = 0;
const chnc = 1;
const bons = 2;
const mstk = 3;
const decr = 4;
const mltp = 5;
const modes = [ [stones, 0.02, "minecraft:raw_iron", 64, 3, 0.5],
                [ores, 0.02, "minecraft:quartz", 64, 3, 0.5],
                [organics, 0.02, "minecraft:egg", 16, 4, 0.5],
                [plants, 0.02, "minecraft:cactus", 64, 4, 0.5],
                [trees, 0.02, "minecraft:bamboo", 64, 4, 0.5],
                [food, 0.00, "minecraft:air", 64, 6, 0.5],
                [soils, 0.02, "minecraft:soul_soil", 64, 4, 0.5],
                [protein, 0.00, "minecraft:air", 64, 16, 0.5],
                [minerals, 0.01, "minecraft:coal", 64, 2, 0.25],
                [gems, 0.00, "minecraft:air", 64, 8, 0.25],
                [crops_2, 0.00, "minecraft:air", 64, 4, 0.5],
                [stones2, 0.00, "minecraft:air", 64, 8, 0.5],
                [gems, 0.00, "minecraft:air", 64, 4, 0.5],
                [colors, 0.00, "minecraft:air", 64, 2, 0.5],
              ]

function GetModeFor(id) {
  for (let i = 0; i < modes.length; i++) {
    let v = []
    //modes[i].forEach(pair => v.push(pair[0]))
    modes[i][tier].forEach(pair => v.push(pair[0]))//** */
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
            let item = items.getContainer(0)
            //level.server.tell(item.getStackInSlot(0).id) 
            //level.server.tell(items.getContainer(1).getStackInSlot(0).id) 					
            if (item.getStackInSlot(0).id == "minecraft:air" || items.getContainer(1).getStackInSlot(0).id == "minecraft:air") return
            //level.server.tell("Progress") 
            let mode = GetModeFor(items.getContainer(1).getStackInSlot(0).id)
            if (mode < 0) return  
            //level.server.tell(item.getStackInSlot(0).id)
            //level.server.tell(mode) 
            //level.server.tell(GetModeFor(items.getContainer(1).getStackInSlot(0).id))
            //let item = items.getContainer(1)
                    
            //valids.forEach(id => items.isItemValid(0, Item.of(id)))
            //item.isItemValid(0, Item.of('minecraft:stone'))
            let valids = []
            //modes[mode][0].forEach(pair => valids.push(pair[0]))
            modes[mode][tier].forEach(pair => valids.push(pair[0]))
            //level.server.tell(valids)
                
            if (valids.includes(item.getStackInSlot(0).id) && item.getStackInSlot(0).count>modes[mode][decr])
            {
              let adv_chance = be.persistentData.getFloat('adv_cha')
              //level.server.tell(adv_chance)
              //level.server.tell("Last ID "+be.persistentData.getString('last_sid')+ "Last Cnt "+be.persistentData.getInt('last_cnt')) 
              if (item.getStackInSlot(0).id == be.persistentData.getString("last_sid") && item.getStackInSlot(0).count == be.persistentData.getInt("last_cnt"))
              {
                adv_chance += modes[mode][chnc]
                //level.server.tell("Accumulation") 
              }
              else
              {
                adv_chance = modes[mode][chnc]
                //level.server.tell("Reset") 
              }
              be.persistentData.putFloat('adv_cha', adv_chance)
              let ra = Math.random()
              //level.server.tell(adv_chance+" to "+modes[mode][bons]+ " min " + Math.min(modes[mode][mstk]) + " r="+ra)
                         
              if (ra < adv_chance)
              {
                //level.server.tell("MORPH")
                item.setStackInSlot(0, Item.of(modes[mode][bons], Math.min(modes[mode][mstk], Math.floor((item.getStackInSlot(0).count - modes[mode][decr]) * modes[mode][mltp]))))
              }
              else
              {
                let total_mass = 0
                modes[mode][tier].forEach(pair => total_mass+=pair[1])
                let rand_mass = Math.floor(Math.random()*total_mass)
                let ind=-1
                do
                {
                  ind+=1
                  rand_mass-=modes[mode][tier][ind][1]
                }
                while (rand_mass>=0) 
                            
                item.setStackInSlot(0, Item.of(modes[mode][tier][ind][0], item.getStackInSlot(0).count-modes[mode][decr]))
                //item.setStackInSlot(0, Item.of(valids[Math.floor(Math.random()*valids.length)], item.getStackInSlot(0).count-4))
                //level.server.tell("Chance = "+adv_chance)
              }
                        
              be.persistentData.putString("last_sid", item.getStackInSlot(0).id)
              be.persistentData.putInt("last_cnt", item.getStackInSlot(0).count)          
              //be.setChanged()
              //level.server.tell()
            }
            
            //level.server.tell('stack invalid')
					  //item.setStackInSlot(0, Item.of("minecraft:stone", level.levelData.gameTime % 33))
            //item.setStackInSlot(0, Item.of("minecraft:diamond", 1))
					  //console.info(item.getStackInSlot(0))    
          }
        }
  })
  .defaultValues(tag => tag = { adv_cha: 0, last_cnt: 0, last_sid: 'minecraft:air'})                                                                                                          // [1st param: CompoundTag consumer]
  //.addValidBlock('befurnace') // adds a valid block this can attach to, useless in normal circumstances (except if you want to attach to multiple blocks or are building the BE separately)
  .itemHandler(1) // adds a basic item handler to this block entity, [1st param: slot count]
  .itemHandler(1)
})

//BlockReg END
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
