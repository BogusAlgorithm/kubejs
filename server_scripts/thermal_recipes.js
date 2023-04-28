console.info('Loading THERMAL recipes...')

ServerEvents.recipes(event => {

  Ingredient.registerCustomIngredientAction("magnetize", (itemstack, index, inventory) => {
    itemstack.nbt.Energy = 0
    return itemstack;
  })

  event.remove({id: "thermal:phytogro_8"})

  //event.remove({id: "minecraft:fire_charge"})
  //event.shapeless("2x minecraft:fire_charge", ["minecraft:blaze_powder", "minecraft:gunpowder", 'thermal:sawdust'])

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
    W: 'createaddition:copper_wire'
  })

  //event.remove({id: "thermal:machine_frame"})
  event.recipes.create.mechanicalCrafting('thermal:machine_frame', [ 
      'DIT', 
      'IDI', 
      'CID'  
      ],{
      C: '#thermal:frame_component',
      D: 'powah:dielectric_paste',
      I: 'thermal:iron_plate',
      //S: 'thermal:silver_gear',//#FrameComponent
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

  event.remove({id: "thermal:machine_pyrolyzer"})
  event.recipes.create.mechanicalCrafting('thermal:machine_pyrolyzer', [ 
    'NBN', 
    'IFI', 
    'SEC'  
    ],{
    B: 'minecraft:blaze_rod',
    F: 'thermal:machine_frame',
    E: 'thermal:electrum_gear',//Check later if available
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
    G: 'thermal:invar_gear',
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
    Y: 'powah:crystal_blazing',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  //event.remove({id: "thermal:machine_extruder"})
  //event.remove({id: "thermal:machine_nullyfier"})
  
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
    'LFL', 
    'SGC'  
    ],{
    D: 'minecraft:dirt',
    F: 'thermal:machine_frame',
    L: 'thermal:silver_plate',
    U: 'thermal:lumium_glass',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:lumium_gear'
  })
  //event.remove({id: "thermal:machine_phytostation"})

  event.remove({id: "thermal:machine_chiller"})
  event.recipes.create.mechanicalCrafting('thermal:machine_chiller', [ 
    'VIV', 
    'LFN', 
    'SGC'  
    ],{
    F: 'thermal:machine_frame',
    I: 'minecraft:packed_ice',  
    L: 'thermal:lumium_gear',
    N: 'thermal:signalum_gear',
    V: 'thermal:silver_plate',
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
    'URI', 
    'LFN', 
    'SGC'  
    ],{
    R: 'kubejs:crystallizer',
    F: 'thermal:machine_frame',
    L: 'thermal:lumium_gear',
    U: 'thermal:lumium_glass',
    N: 'thermal:signalum_gear',
    I: 'thermal:signalum_glass',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  event.remove({id: "thermal:machines/centrifuge/centrifuge_oil_red_sand"})
  event.remove({id: "thermal:machines/centrifuge/centrifuge_oil_sand"})
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
          "item": "thermal:oil_sand"
        },
        "result": [
//          {
//            "item": "minecraft:sand",
//            "chance": 0.5
//          },
          {
            "fluid": "thermal:crude_oil",
            "amount": 200
          }
        ],
        "energy": 20000
    })


  let thermabrew = (outputFluid, outputAmmount, inputItem, inputFluid, inputAmmount, energy) => {
    event.custom({
      "type": "thermal:brewer",
      "ingredients": [
        {
          "fluid": inputFluid,
          "amount": inputAmmount
        },
        {
          "item": inputItem
        }
      ],
      "result": [
        {
          "fluid": outputFluid,
          "amount": outputAmmount
        }
      ],
      "energy": energy
  })}

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

  event.custom({
      "type": "thermal:refinery",
      "ingredient": {
        "fluid": "kubejs:solution_4",
        "amount": 250
      },
      "result": 
        {
          "item": "kubejs:crystallizer",
        },
        "energy": 20000
  })

  thermabrew("kubejs:solution_1", 1000, "minecraft:blaze_powder", "minecraft:water", 1000, 20000)
  thermabrew("kubejs:solution_2", 1000, "thermal:blitz_powder", "kubejs:solution_1", 1000, 20000)
  thermabrew("kubejs:solution_3", 1000, "thermal:basalz_powder", "kubejs:solution_2", 1000, 20000)
  thermabrew("kubejs:solution_4", 1000, "thermal:blizz_powder", "kubejs:solution_3", 1000, 20000)

  event.remove({type: "thermal:crystallizer"})
  thermacryst("ae2:certus_quartz_crystal", 1000, "ae2:certus_quartz_dust", 20000)
  thermacryst("minecraft:diamond", 1000, "thermal:diamond_dust", 20000)
  thermacryst("minecraft:emerald", 1000, "thermal:emerald_dust", 20000)

  event.recipes.thermal.bottler('thermal:signalum_glass', [Fluid.of('thermal:redstone', 500), 'thermal:obsidian_glass'])
  event.recipes.thermal.bottler('thermal:lumium_glass', [Fluid.of('thermal:glowstone', 500), 'thermal:obsidian_glass'])
  event.recipes.thermal.bottler('thermal:enderium_glass', [Fluid.of('thermal:ender', 500), 'thermal:obsidian_glass'])

  event.recipes.thermal.pulverizer(Item.of("thermal:bitumen"), 'thermal:oil_sand')//.energy(100)

  event.recipes.create.crushing(["thermal:sawdust", Item.of("thermal:sawdust").withChance(0.5)], "#minecraft:planks")

  event.remove({id: "thermal:lumium_dust_4"})
  event.recipes.create.mixing("thermal:lumium_ingot", ["thermal:gold_dust", "thermal:gold_dust", "thermal:gold_dust", 
    "thermal:tin_dust", "minecraft:glowstone_dust", "minecraft:glowstone_dust"]).superheated()

  event.remove({id: "thermal:signalum_dust_4"})
  event.recipes.create.mixing("thermal:signalum_ingot", ["thermal:nickel_dust", "thermal:nickel_dust", "thermal:nickel_dust", 
    "thermal:tin_dust", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone"]).superheated()

  //event.remove({id: "thermal:obsidian_glass"})
  event.recipes.create.mixing("thermal:obsidian_glass", ["minecraft:obsidian", "minecraft:obsidian", 
  "thermal:quartz_dust", "thermal:quartz_dust"]).superheated()

  event.recipes.create.mixing([Fluid.of('thermal:redstone', 500)], 'minecraft:redstone_block').superheated()

  event.recipes.create.mixing([Fluid.of('thermal:glowstone', 500)], 'minecraft:glowstone').superheated()

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