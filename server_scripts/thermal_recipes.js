console.info('Loading THERMAL recipes...')

ServerEvents.recipes(event => {

  Ingredient.registerCustomIngredientAction("magnetize", (itemstack, index, inventory) => {
    itemstack.nbt.Energy = 0
    return itemstack;
  })

  event.remove({id: "thermal:phytogro_8"})
  event.remove({type: `minecraft:crafting_shaped`, output: '/^thermal:.*_gear$/'})
  event.remove({id: "createaddition:crushing/diamond"})

  //event.remove({id: "minecraft:fire_charge"})
  event.shapeless("2x minecraft:fire_charge", ["minecraft:blaze_powder", "minecraft:gunpowder", '2x thermal:sawdust'])

  event.remove({id: "thermal:hazmat_fabric"})
  event.shaped(
    Item.of('thermal:hazmat_fabric'), 
      [ 
      'RSR', 
      'SLS', 
      'RSR'  
      ],{
      L: 'thermal:lead_plate',
      R: 'thermal:cured_rubber',
      S: 'minecraft:string'
    }) 

  event.remove({id: "thermal:device_tree_extractor"})
  event.shaped(Item.of('thermal:device_tree_extractor'), [ 
      'PBP', 
      'GCG', 
      'PIP'  
      ],{
      B: 'minecraft:bucket',  
      C: 'create:copper_casing',  
      G: '#forge:glass',
      I: 'create:fluid_pipe',
      P: '#minecraft:planks'
  })

  event.remove({id: "thermal:device_composter"})
  event.shaped(
    Item.of('thermal:device_composter'), 
      [ 
      'PCP', 
      'GAG', 
      'PHP'  
      ],{
      A: 'create:andesite_casing',
      C: 'minecraft:composter',  
      G: '#forge:glass',
      H: 'minecraft:hopper',
      P: '#minecraft:planks'
  })

  event.remove({id: "thermal:device_water_gen"})
  event.shaped(
    Item.of('thermal:device_water_gen'), 
      [ 
      'PBP', 
      'GCG', 
      'PUP'  
      ],{
      B: 'minecraft:iron_bars',  
      C: 'create:copper_casing', 
      G: '#forge:glass',
      U: 'minecraft:bucket',
      P: '#minecraft:planks'
  })

  event.remove({id: "thermal:device_fisher"})
  event.shaped(
    Item.of('thermal:device_fisher'), 
      [ 
      'PBP', 
      'GCG', 
      'PUP'  
      ],{
      B: 'minecraft:iron_bars',  
      C: 'create:copper_casing', 
      G: '#forge:glass',
      U: 'minecraft:fishing_rod',
      P: '#minecraft:planks'
  })

  event.remove({id: "thermal:redstone_servo"})
  event.shaped('thermal:redstone_servo', [
    'RIR',
    ' IM',
    'RIR'], {
    I: 'thermal:iron_plate',
    M: Item.of('thermal:flux_magnet', '{Energy:50000}').weakNBT(),
    R: 'minecraft:redstone'
  }).customIngredientAction("thermal:flux_magnet", "magnetize").id('kubejs:redstone_servo_manual_only')  

  event.remove({id: "thermal:rf_coil"})
  event.shaped('thermal:rf_coil', [
    ' RG',
    'RGR',
    'GRM'], {
    G: 'thermal:gold_plate',
    M: Item.of("thermal:flux_magnet", '{Energy:50000}').weakNBT(),
    R: 'minecraft:redstone'
  }).customIngredientAction("thermal:flux_magnet", "magnetize").id('kubejs:rf_coil_manual_only')

  event.remove({id: "thermal:flux_magnet"})
  event.shaped('thermal:flux_magnet', [
    'L L',
    'L L',
    'WCW'], {
    L: 'thermal:lead_ingot',
    C: 'createaddition:capacitor',
    W: 'kubejs:silver_wire'
  })

  event.remove({id: "thermal:machine_frame"})
  event.shaped('thermal:machine_frame', [ 
      'DIT', 
      'IDI', 
      'CID'  
      ],{
      C: '#thermal:frame_component',
      D: 'powah:dielectric_paste',
      I: 'thermal:iron_plate',
      T: 'thermal:tin_gear'
    })

  event.remove({id: "thermal:machine_press"})
  event.recipes.create.mechanicalCrafting('thermal:machine_press', [ 
      'MPM', 
      'S S', 
      'SIS'  
      ],{
      I: 'minecraft:iron_block',
      M: 'createaddition:electric_motor',
      P: 'create:mechanical_press',
      S: 'create:sturdy_sheet'
    })

  event.remove({id: "thermal:machine_pulverizer"})
  event.recipes.create.mechanicalCrafting('thermal:machine_pulverizer', [ 
      'LPL', 
      'IFI', 
      'SGS'  
      ],{
      F: 'thermal:machine_frame',
      G: 'thermal:invar_gear',
      I: 'thermal:iron_plate',
      L: 'thermal:obsidian_glass',
      P: "minecraft:piston",
      S: 'thermal:redstone_servo'
    })

  event.remove({id: `thermal:machine_crafter`})
  event.recipes.create.mechanicalCrafting('thermal:machine_crafter', [ 
      ' A ', 
      'IFI', 
      'GSG'  
      ],{
      F: 'thermal:machine_frame',
      G: 'thermal:silver_gear',
      I: 'thermal:iron_plate',
      A: "create:mechanical_crafter",
      S: 'thermal:redstone_servo'
    })

  event.remove({id: "thermal:machine_furnace"})
  event.recipes.create.mechanicalCrafting('thermal:machine_furnace', [ 
    'NUN', 
    'IFI', 
    'CGC'  
    ],{
    F: 'thermal:machine_frame',
    I: 'thermal:invar_plate',
    N: 'minecraft:nether_bricks',
    U: "minecraft:furnace",
    G: 'thermal:invar_gear',
    C: 'thermal:rf_coil'
  })  

  event.remove({id: "thermal:machine_pyrolyzer"})
  event.recipes.create.mechanicalCrafting('thermal:machine_pyrolyzer', [ 
    'NBN', 
    'IFI', 
    'SEC'  
    ],{
    B: 'minecraft:blaze_rod',
    F: 'thermal:machine_frame',
    E: 'thermal:electrum_gear',
    I: 'thermal:signalum_plate',
    N: 'minecraft:nether_bricks',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo'
  })

  event.remove({id: "thermal:machine_smelter"})
  event.recipes.create.mechanicalCrafting('thermal:machine_smelter', [ 
    'GBG', 
    'IFI', 
    'STC'  
    ],{
    B: 'minecraft:blast_furnace',
    F: 'thermal:machine_frame',
    I: 'thermal:signalum_plate',
    G: 'thermal:obsidian_glass',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    T: 'createaddition:tesla_coil'
  })

  event.remove({id: "thermal:machine_refinery"})
  event.recipes.create.mechanicalCrafting('thermal:machine_refinery', [ 
    'TOT', 
    'LFL', 
    'SGC'  
    ],{
    F: 'thermal:machine_frame',
    G: 'thermal:electrum_gear',
    L: 'thermal:lumium_plate',
    O: 'thermal:obsidian_glass',
    T: 'create:fluid_tank',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo'
  })

  event.remove({id: "thermal:machine_crucible"})
  event.recipes.create.mechanicalCrafting('thermal:machine_crucible', [ 
    'NYN', 
    'IFI', 
    'SGC'  
    ],{
    F: 'thermal:machine_frame',
    I: 'thermal:signalum_plate',
    N: 'thermal:signalum_glass',
    Y: 'powah:blazing_crystal_block',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  event.remove({id: "thermal:device_rock_gen"})
  event.recipes.create.mechanicalCrafting('thermal:device_rock_gen', [ 
    ' P ', 
    'IFI', 
    'GSG'  
    ],{
    P: 'minecraft:piston',
    F: 'thermal:machine_frame',
    G: 'thermal:steel_gear',
    I: 'thermal:iron_plate',
    S: 'thermal:redstone_servo'
  })
  
  event.remove({id: "thermal:device_nullifier"})
  event.recipes.create.mechanicalCrafting('thermal:device_nullifier', [ 
    ' B ', 
    'IFI', 
    'GSG'  
    ],{
    B: "minecraft:lava_bucket",
    F: 'thermal:machine_frame',
    G: 'thermal:silver_gear',
    I: 'thermal:iron_plate',
    S: 'thermal:redstone_servo'
  })

  event.remove({id: "thermal:device_collector"})
  event.recipes.create.mechanicalCrafting('thermal:device_collector', [ 
    ' E ', 
    'IFI', 
    'GSG'  
    ],{
    E: "minecraft:ender_pearl",
    F: 'thermal:machine_frame',
    G: 'thermal:electrum_gear',
    I: 'thermal:iron_plate',
    S: 'thermal:redstone_servo'
  })
  
  event.remove({id: "thermal:machine_bottler"})
  event.recipes.create.mechanicalCrafting('thermal:machine_bottler', [ 
    'OPO', 
    'LFL', 
    'SGC'  
    ],{
    F: 'thermal:machine_frame',
    L: 'thermal:lumium_plate',
    O: 'thermal:obsidian_glass',
    P: 'create:spout',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  event.remove({id: "thermal:machine_insolator"})
  event.recipes.create.mechanicalCrafting('thermal:machine_insolator', [ 
    'UDU', 
    'EFE', 
    'SGC'  
    ],{
    D: 'minecraft:grass',
    F: 'thermal:machine_frame',
    E: 'thermal:electrum_plate',
    U: 'thermal:lumium_glass',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:lumium_gear'
  })

  event.remove({id: "thermal:device_soil_infuser"})
  event.recipes.create.mechanicalCrafting('thermal:device_soil_infuser', [ 
    'DDD', 
    'EFE', 
    'SGC'  
    ],{
    D: "thermal:phytosoil",
    F: 'thermal:machine_frame',
    G: 'thermal:lumium_gear',
    E: 'thermal:electrum_plate',
    S: 'thermal:redstone_servo',
    C: 'thermal:rf_coil'
  })

  event.remove({id: "thermal:machine_chiller"})
  event.recipes.create.mechanicalCrafting('thermal:machine_chiller', [ 
    'EIE', 
    'LFN', 
    'SGC'  
    ],{
    F: 'thermal:machine_frame',
    I: 'minecraft:packed_ice',  
    L: 'thermal:lumium_gear',
    N: 'thermal:signalum_gear',
    V: 'thermal:electrum_plate',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  event.remove({id: "thermal:machine_centrifuge"})
  event.recipes.create.mechanicalCrafting('thermal:machine_centrifuge', [ 
    'UBI', 
    'LFN', 
    'SGC'  
    ],{
    B: 'minecraft:bucket',
    F: 'thermal:machine_frame',
    L: 'thermal:lumium_gear',
    U: 'thermal:lumium_glass',
    N: 'thermal:signalum_gear',
    I: 'thermal:signalum_glass',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  event.remove({id: "thermal:machine_brewer"})
  event.recipes.create.mechanicalCrafting('thermal:machine_brewer', [ 
    'UBI', 
    'LFN', 
    'SGC'  
    ],{
    B: 'minecraft:brewing_stand',
    F: 'thermal:machine_frame',
    L: 'thermal:lumium_gear',
    U: 'thermal:lumium_glass',
    N: 'thermal:signalum_gear',
    I: 'thermal:signalum_glass',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  event.remove({id: "thermal:machine_crystallizer"})
  event.recipes.create.mechanicalCrafting('thermal:machine_crystallizer', [ 
    'RYR', 
    'LFN', 
    'SGC'  
    ],{
    Y: 'kubejs:crystallizer',
    R: 'thermal:enderium_glass',
    F: 'thermal:machine_frame',
    L: 'thermal:lumium_gear',
    N: 'thermal:signalum_gear',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  event.remove({id: "thermal:machines/centrifuge/centrifuge_oil_red_sand"})
  event.remove({id: "thermal:machines/centrifuge/centrifuge_oil_sand"})
  event.recipes.thermal.centrifuge([Fluid.of("thermal:crude_oil",200)], "thermal:oil_sand").energy(5000)

  let thermacryst = (outputItem, inputAmmount, inputItem, energy) => {
    event.custom({
      "type": "thermal:crystallizer",
      "ingredients": [
        {
          "fluid": "minecraft:water",
          "amount": inputAmmount
        },
        {
          "item": inputItem
        },
        {
          "item": "kubejs:crystallizer"
        }
      ],
      "result": [
        {
          "item": outputItem
        }
      ],
      "energy": energy
  })}

  event.recipes.thermal.refinery([Item.of("kubejs:crystallizer")], [Fluid.of('kubejs:solution_4', 125)]).energy(20000)

  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_1", 1000)], [Item.of("minecraft:blaze_rod"), Fluid.of("minecraft:water",1000)]).energy(20000)
  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_2", 1000)], [Item.of("thermal:blitz_rod"), Fluid.of("kubejs:solution_1",1000)]).energy(20000)
  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_3", 1000)], [Item.of("thermal:basalz_rod"), Fluid.of("kubejs:solution_2",1000)]).energy(20000)
  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_4", 1000)], [Item.of("thermal:blizz_rod"), Fluid.of("kubejs:solution_3",1000)]).energy(20000)

  event.remove({type: "thermal:crystallizer"})
  thermacryst("ae2:certus_quartz_crystal", 1000, "ae2:certus_quartz_dust", 20000)
  thermacryst("minecraft:diamond", 1000, "thermal:diamond_dust", 20000)
  thermacryst("minecraft:emerald", 1000, "thermal:emerald_dust", 20000)

  event.remove({id: `thermal:machines/smelter/smelter_glass_signalum`})
  event.remove({id: `thermal:machines/smelter/smelter_glass_lumium`})
  event.remove({id: `thermal:machines/smelter/smelter_glass_enderium`})
  event.remove({id: "thermal:fire_charge/signalum_glass_2"})
  event.remove({id: "thermal:fire_charge/lumium_glass_2"})
  event.remove({id: "thermal:fire_charge/enderium_glass_2"})
  event.recipes.thermal.smelter('thermal:signalum_glass', ["thermal:signalum_ingot", "thermal:obsidian_glass"])
  event.recipes.thermal.smelter('thermal:lumium_glass', ["thermal:lumium_ingot", "thermal:obsidian_glass"])
  event.recipes.thermal.smelter('thermal:enderium_glass', ["thermal:enderium_ingot", "thermal:obsidian_glass"])

  event.recipes.thermal.smelter('thermal:steel_ingot', ["minecraft:iron_ingot", "thermal:coal_coke"])

  event.recipes.thermal.bottler('thermal:signalum_glass', [Fluid.of('thermal:redstone', 500), 'thermal:obsidian_glass'])
  event.recipes.thermal.bottler('thermal:lumium_glass', [Fluid.of('thermal:glowstone', 500), 'thermal:obsidian_glass'])
  event.recipes.thermal.bottler('thermal:enderium_glass', [Fluid.of('thermal:ender', 500), 'thermal:obsidian_glass'])

  event.recipes.thermal.bottler('minecraft:clay_ball', [Fluid.of('minecraft:water', 250), 'minecraft:sand'])

  event.recipes.thermal.pulverizer(Item.of("thermal:bitumen"), 'thermal:oil_sand')//.energy(100)
  
  event.recipes.thermal.furnace(Item.of("thermal:ender_pearl_dust").withChance(0.25), 'minecraft:warped_wart_block')

  event.recipes.thermal.smelter([Item.of("create:brass_ingot", 2)], ["minecraft:copper_ingot", "create:zinc_ingot"])
  event.recipes.thermal.smelter([Item.of("thermal:electrum_ingot", 2)], ["minecraft:gold_ingot", "thermal:silver_ingot"])
  event.recipes.thermal.smelter([Item.of("thermal:invar_ingot", 3)], ["2x minecraft:iron_ingot", "thermal:nickel_ingot"])

  event.recipes.thermal.crucible([Fluid.of("thermal:ender", 250)], "#forge:dusts/ender_pearl")

  event.remove({type: "thermal:pulverizer_catalyst"})
  event.recipes.thermal.pulverizer_catalyst("minecraft:flint").primaryMod(1.0).secondaryMod(1.0).energyMod(0.9).minChance(0.0).useChance(1.0)

  event.recipes.create.crushing(["thermal:sawdust", Item.of("thermal:sawdust").withChance(0.5)], "#minecraft:planks")

  event.remove({id: "thermal:lumium_dust_4"})
  event.recipes.create.mixing("thermal:lumium_ingot", ["thermal:gold_dust", "thermal:gold_dust", "thermal:gold_dust", 
    "thermal:tin_dust", "minecraft:glowstone_dust", "minecraft:glowstone_dust"]).superheated()

  event.remove({id: "thermal:signalum_dust_4"})
  event.recipes.create.mixing("thermal:signalum_ingot", ["thermal:nickel_dust", "thermal:nickel_dust", "thermal:nickel_dust", 
    "thermal:tin_dust", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone"]).superheated()

  event.remove({id: "thermal:invar_dust_3"})
  event.recipes.create.mixing(Item.of("thermal:invar_dust", 3), ["2x thermal:iron_dust", "thermal:nickel_dust"])

  event.remove({id: "thermal:electrum_dust_2"})
  event.recipes.create.mixing(Item.of("thermal:electrum_dust", 2), ["thermal:gold_dust", "thermal:silver_dust"])

  //event.remove({id: "thermal:obsidian_glass"})
  //event.recipes.create.mixing("thermal:obsidian_glass", ["minecraft:obsidian", "minecraft:obsidian", "thermal:quartz_dust", "thermal:quartz_dust"]).superheated()

  //event.recipes.create.mixing([Fluid.of('thermal:redstone', 500)], 'minecraft:redstone_block').superheated()
  //event.recipes.create.mixing([Fluid.of('thermal:glowstone', 500)], 'minecraft:glowstone').superheated()

  event.remove({id: "thermal:press_gear_die"})
  let inter = 'minecraft:heavy_weighted_pressure_plate'
  event.recipes.createSequencedAssembly([ 
    "thermal:press_gear_die"
    ],'minecraft:iron_block',[
    event.recipes.createDeploying(inter,[inter,"create:cogwheel"]),
    event.recipes.createCutting(inter, inter),
    event.recipes.createFilling(inter,[inter, Fluid.of("minecraft:water", 1000)]),
    ]).transitionalItem(inter).loops(10)
})