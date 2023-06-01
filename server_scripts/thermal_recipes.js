console.info('Loading THERMAL recipes...')

ServerEvents.recipes(event => {

  Ingredient.registerCustomIngredientAction("magnetize", (itemstack, index, inventory) => {
    itemstack.nbt.Energy = 0
    return itemstack;
  })

  event.remove({id: "thermal:phytogro_8"})
  event.remove({type: `minecraft:crafting_shaped`, output: '/^thermal:.*_gear$/'})
  event.remove({id: "createaddition:crushing/diamond"})

  event.remove({id: "thermal:energy_duct_4"})
  event.remove({id: "thermal:fluid_duct_4"})
  event.remove({id: "thermal:fluid_duct_windowed_4"})

  event.remove({id: `/^thermal:dynamo_.*/`})

  event.remove({id: "thermal:energy_cell"})
  event.remove({id: "thermal:energy_cell_frame"})
  event.remove({id: "thermal:fluid_cell"})
  event.remove({id: "thermal:fluid_cell_frame"})

  event.remove({id: "thermal:augments/machine_output_augment"})
  event.remove({id: "thermal:augments/machine_catalyst_augment"})

  event.remove({id: "thermal:tools/rf_potato"})
  event.remove({id: "thermal:flux_capacitor"})
  
  event.shapeless("2x minecraft:fire_charge", ["minecraft:blaze_powder", "minecraft:gunpowder", '2x thermal:sawdust'])

  event.replaceInput({id: "thermal:chiller_ball_cast"}, "thermal:bronze_plate", "thermal:gold_plate")
  event.replaceInput({id: "thermal:tools/satchel"}, "thermal:tin_ingot", "thermal:tin_gear")//!!!

  event.remove({id: "thermal:hazmat_fabric"})
  event.shaped(Item.of('thermal:hazmat_fabric'), 
    [ 
    'RSR', 
    'SLS', 
    'RSR'  
    ],{
    L: 'thermal:lead_plate',
    R: 'thermal:cured_rubber',
    S: 'minecraft:string'
  }) 

  event.remove({id: "thermal:drill_head"})
  event.shaped(Item.of("thermal:drill_head"), 
    [ 
    ' S ', 
    'SSS'  
    ],{
    S: 'thermal:steel_ingot'
  })
  
  event.remove({id: "thermal:flux_drill"})
  event.shaped(Item.of("thermal:flux_drill"), 
    [ 
    ' H ', 
    'RSR',
    'RCR' 
    ],{
    H: 'thermal:drill_head',
    R: 'thermal:cured_rubber',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo'
  })

  event.remove({id: "thermal:saw_blade"})
  event.shaped(Item.of("thermal:saw_blade"), 
    [ 
    ' I ', 
    'ICI',
    ' I '  
    ],{
    I: 'minecraft:iron_ingot',
    C: 'minecraft:copper_ingot'
  })
  
  event.remove({id: "thermal:flux_saw"})
  event.shaped(Item.of("thermal:flux_saw"), 
    [ 
    ' H ', 
    'RSR',
    'RCR' 
    ],{
    H: 'thermal:saw_blade',
    R: 'thermal:cured_rubber',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo'
  })

  event.remove({id: "thermal:fluid_reservoir"})
  event.shaped(Item.of("thermal:fluid_reservoir"), 
    [ 
    'RTR', 
    'RPC',
    ' B ' 
    ],{
    T: 'itank:tank',
    B: 'minecraft:bucket',
    R: 'thermal:cured_rubber',
    P: 'create:mechanical_pump',
    C: 'create:hand_crank'
  })

  event.remove({id: "/thermal:augments/upgrade_augment_./"})
  let augm_upgrade = (output, item1, item2, item3, item4) => 
    event.shaped(
      output,
      [
        'ABA', 
        'CDC', 
        'ABA'
      ],{
        A: item1,
        B: item2,
        C: item3,
        D: item4
      }
    )
  
  augm_upgrade('thermal:upgrade_augment_1', 'thermal:nickel_plate','powah:capacitor_basic_large','thermal:obsidian_glass', 'thermal:quartz_gear')
  augm_upgrade('thermal:upgrade_augment_2', 'thermal:signalum_plate','powah:capacitor_hardened','thermal:signalum_glass', 'thermal:upgrade_augment_1')
  augm_upgrade('thermal:upgrade_augment_3', 'thermal:enderium_plate','powah:capacitor_blazing','thermal:enderium_glass', 'thermal:upgrade_augment_2')
  /*
  event.shaped(Item.of('thermal:upgrade_augment_1'), 
    [ 
    'NCN', 
    'OGO', 
    'NCN'  
    ],{
    C: 'powah:capacitor_basic_large',
    G: 'thermal:quartz_gear',
    N: 'thermal:nickel_plate',
    O: 'thermal:obsidian_glass'
  })

  event.shaped(Item.of('thermal:upgrade_augment_2'), 
    [ 
    'NCN', 
    'OGO', 
    'NCN'  
    ],{
    C: 'powah:capacitor_hardened',
    G: 'thermal:upgrade_augment_1',
    N: 'thermal:signalum_plate',
    O: 'thermal:signalum_glass'
  })

  event.shaped(Item.of('thermal:upgrade_augment_3'), 
    [ 
    'NCN', 
    'OGO', 
    'NCN'  
    ],{
    C: 'powah:capacitor_blazing',
    G: 'thermal:upgrade_augment_2',
    N: 'thermal:enderium_plate',
    O: 'thermal:enderium_glass'
  })
*/
  event.remove({id: "thermal:augments/area_radius_augment"})
  event.shaped(Item.of('thermal:area_radius_augment'), 
  [ 
    ' P ', 
    'PGP', 
    ' P '  
    ],{
    G: 'thermal:lumium_gear',
    P: 'thermal:silver_plate'
  })

  event.remove({id: "thermal:augments/fluid_tank_augment"})
  event.shaped(Item.of("thermal:fluid_tank_augment"), 
  [ 
    ' P ', 
    'PGP', 
    ' P '  
    ],{
    G: 'itank:tank',
    P: 'thermal:silver_plate'
  })
  
  //CrisCrosCraft("thermal:fluid_cell", 'thermal:steel_plate', 'itank:tank', 'thermal:lapis_gear')
  event.shaped(Item.of("thermal:fluid_cell"), 
  [ 
    'PTP', 
    'TGT', 
    'PTP'  
    ],{
    T: 'itank:tank',
    G: 'thermal:lapis_gear',
    P: 'thermal:steel_plate'
  })

  event.remove({id: "thermal:augments/machine_cycle_augment"})
  //CrosCraft("thermal:machine_cycle_augment", 'thermal:silver_plate', 'thermal:steel_gear')
  event.shaped(Item.of("thermal:machine_cycle_augment"), 
  [ 
    ' P ', 
    'PGP', 
    ' P '  
    ],{
    G: 'thermal:steel_gear',
    P: 'thermal:silver_plate'
  })

  event.remove({id: "thermal:augments/dynamo_fuel_augment"})
  event.shaped(Item.of("thermal:dynamo_fuel_augment"), 
  [ 
    ' P ', 
    'PGP', 
    ' P '  
    ],{
    G: 'thermal:signalum_gear',
    P: 'thermal:lumium_plate'
  })

  event.remove({id: "thermal:augments/machine_speed_augment"})
  event.shaped(Item.of("thermal:machine_speed_augment"), 
  [ 
    ' P ', 
    'PGP', 
    ' P '  
    ],{
    G: 'thermal:lumium_gear',
    P: 'thermal:signalum_ingot'
  })

  event.remove({id: "thermal:augments/machine_efficiency_augment"})
  event.shaped(Item.of("thermal:machine_efficiency_augment"), 
  [ 
    ' P ', 
    'PGP', 
    ' P '  
    ],{
    G: 'thermal:signalum_gear',
    P: 'thermal:lumium_ingot'
  })

  event.remove({id: "thermal:augments/dynamo_output_augment"})
  event.shaped(Item.of("thermal:dynamo_output_augment"), 
  [ 
    ' P ', 
    'PGP', 
    ' P '  
    ],{
    G: 'thermal:lumium_gear',
    P: 'thermal:signalum_plate'
  })
  
  event.remove({id: "thermal:augments/xp_storage_augment"})
  event.shaped(Item.of("thermal:xp_storage_augment"), 
  [ 
    ' P ', 
    'PBP', 
    ' P '  
    ],{
    B: 'minecraft:writable_book',
    P: '#forge:plates/silver'
  })

  event.remove({id: "thermal:tools/xp_crystal"})
  event.shaped(Item.of("thermal:xp_crystal"), 
  [ 
    ' X ', 
    'XQX', 
    ' X '  
    ],{
    Q: 'minecraft:quartz',
    X: 'create:experience_nugget'
  })

  event.remove({id: "thermal:tinker_bench"})
  event.shaped(Item.of('thermal:tinker_bench'), [ 
    'PIP', 
    'GCG', 
    'PBP'  
    ],{
    B: 'minecraft:crafting_table',  
    C: 'create:andesite_casing',  
    G: '#forge:glass',
    I: '#forge:plates/iron',
    P: '#minecraft:planks'
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

    event.remove({id: "thermal:charge_bench"})
    event.shaped("thermal:charge_bench", [ 
        'ICI', 
        'AFA', 
        'IGI'  
        ],{
        C: 'createaddition:tesla_coil',
        F: 'thermal:machine_frame',
        A: 'createaddition:capacitor',
        I: 'thermal:iron_plate',
        G: 'thermal:electrum_gear'
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

  event.recipes.create.mechanicalCrafting('thermal:machine_press', [
    'PIP', 
    'PFP', 
    'CGS'  
    ],{
    F: 'thermal:machine_frame',
    G: 'thermal:steel_gear',
    I: 'minecraft:iron_block',
    P: 'thermal:invar_plate',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo'
  })

  event.remove({id: "thermal:machine_pulverizer"})
  event.recipes.create.mechanicalCrafting('thermal:machine_pulverizer', [ 
      'LPL', 
      'IFI', 
      'SGS'  
      ],{
      F: 'thermal:machine_frame',
      G: 'thermal:invar_gear',
      I: 'thermal:invar_plate',
      L: 'thermal:obsidian_glass',
      P: "minecraft:piston",
      S: 'thermal:redstone_servo'
    })

  event.remove({id: `thermal:machine_crafter`})
  event.recipes.create.mechanicalCrafting('thermal:machine_crafter', [ 
      'IOI', 
      'GAG', 
      'ISI'  
      ],{
      O: 'minecraft:glass',
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
    I: 'thermal:invar_plate',
    N: 'thermal:obsidian_glass',
    Y: 'powah:capacitor_blazing',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:signalum_gear'
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

  event.recipes.create.mechanicalCrafting('thermal:dynamo_compression', [ 
    'AOA', 
    'IFI', 
    'SGC'  
    ],{
    A: 'powah:capacitor_hardened',
    F: 'thermal:machine_frame',
    I: 'thermal:signalum_plate',
    O: 'thermal:obsidian_glass',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
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
    D: 'thermal:phytosoil',
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
    E: 'thermal:electrum_plate',
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
    'RAR', 
    'LFN', 
    'SGC'  
    ],{
    A: 'minecraft:amethyst_block',
    R: 'thermal:enderium_glass',
    F: 'thermal:machine_frame',
    L: 'thermal:lumium_gear',
    N: 'thermal:signalum_gear',
    C: 'thermal:rf_coil',
    S: 'thermal:redstone_servo',
    G: 'thermal:steel_gear'
  })

  let thermacryst = (outputItem, inputAmmount, inputItem1, inputItem2, energy) => {
    event.custom({
      "type": "thermal:crystallizer",
      "ingredients": [
        {
          "fluid": "minecraft:water",
          "amount": inputAmmount
        },
        {
          "item": inputItem1
        },
        {
          "item": inputItem2
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
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 1000
      },
      {
        "item": "thermal:quartz_dust"
      }
    ],
    "result": [
      {
        "item": "minecraft:quartz"
      }
    ],
    "energy": 5000
  })

  event.recipes.thermal.press("thermal:quartz_gear", [Item.of("minecraft:quartz", 6).toJson(), 'thermal:press_gear_die'])
  event.recipes.thermal.press("thermal:lapis_gear", [Item.of("minecraft:lapis_lazuli", 6).toJson(), 'thermal:press_gear_die'])

  event.recipes.thermal.centrifuge([Item.of("thermal:ender_pearl_dust").withChance(1.5)], "minecraft:end_stone").energy(5000)

  event.remove({id: "thermal:machines/refinery/refinery_heavy_oil"})
  event.recipes.thermal.refinery([Fluid.of("thermal:refined_fuel", 50)], [Fluid.of("thermal:heavy_oil", 100)])
  event.recipes.create.compacting([Item.of("thermal:coal_coke")], [Fluid.of("thermal:heavy_oil", 200)])

  event.recipes.thermal.refinery([Item.of("kubejs:crystallizer")], [Fluid.of('kubejs:solution_4', 125)]).energy(20000)
  event.recipes.thermal.refinery([Item.of("powah:uraninite")], [Fluid.of("thermal:refined_fuel", 1000)]).energy(20000)

  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_1", 1000)], [Item.of("minecraft:blaze_rod"), Fluid.of("minecraft:water",1000)]).energy(20000)
  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_2", 1000)], [Item.of("thermal:blitz_rod"), Fluid.of("kubejs:solution_1",1000)]).energy(20000)
  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_3", 1000)], [Item.of("thermal:basalz_rod"), Fluid.of("kubejs:solution_2",1000)]).energy(20000)
  event.recipes.thermal.brewer([Fluid.of("kubejs:solution_4", 1000)], [Item.of("thermal:blizz_rod"), Fluid.of("kubejs:solution_3",1000)]).energy(20000)

  event.remove({type: "thermal:crystallizer"})
  thermacryst("ae2:certus_quartz_crystal", 1000, "ae2:certus_quartz_dust", "kubejs:crystallizer", 10000)
  thermacryst("minecraft:diamond", 1000, "thermal:diamond_dust","kubejs:crystallizer", 10000)
  thermacryst("minecraft:emerald", 1000, "thermal:emerald_dust","kubejs:crystallizer", 10000)
  thermacryst("minecraft:prismarine_crystals", 1000, "thermal:quartz_dust", "minecraft:green_dye",5000)
  thermacryst("minecraft:amethyst_shard", 1000, "thermal:quartz_dust", "minecraft:purple_dye",5000)
  thermacryst("create:rose_quartz", 1000, "thermal:quartz_dust", "minecraft:redstone", 5000)
  thermacryst("minecraft:lapis_lazuli", 1000, "thermal:quartz_dust", "minecraft:blue_dye", 5000)

  event.remove({id: `thermal:machines/smelter/smelter_glass_signalum`})
  event.remove({id: `thermal:machines/smelter/smelter_glass_lumium`})
  event.remove({id: `thermal:machines/smelter/smelter_glass_enderium`})
  event.remove({id: "thermal:fire_charge/signalum_glass_2"})
  event.remove({id: "thermal:fire_charge/lumium_glass_2"})
  event.remove({id: "thermal:fire_charge/enderium_glass_2"})
  event.recipes.thermal.smelter("thermal:signalum_ingot", ["thermal:nickel_ingot", Item.of("minecraft:redstone", 5).toJson()]).energy(10000)
  event.recipes.thermal.smelter("thermal:lumium_ingot", ["minecraft:gold_ingot", Item.of("minecraft:glowstone_dust", 2).toJson()]).energy(10000)
  //event.recipes.thermal.smelter("thermal:enderium_ingot", ["thermal:gold_ingot", Item.of("minecraft:glowstone", 2).toJson()]).energy(15000)

  event.recipes.thermal.smelter('thermal:signalum_glass', ["thermal:signalum_ingot", "thermal:obsidian_glass"])
  event.recipes.thermal.smelter('thermal:lumium_glass', ["thermal:lumium_ingot", "thermal:obsidian_glass"])
  event.recipes.thermal.smelter('thermal:enderium_glass', ["thermal:enderium_ingot", "thermal:obsidian_glass"])

  event.recipes.thermal.smelter([Item.of("create:brass_ingot", 2)], ["minecraft:copper_ingot", "create:zinc_ingot"])
  event.recipes.thermal.smelter([Item.of("thermal:electrum_ingot", 2)], ["minecraft:gold_ingot", "thermal:silver_ingot"])
  event.recipes.thermal.smelter([Item.of("thermal:invar_ingot", 3)], ["2x minecraft:iron_ingot", "thermal:nickel_ingot"])

  event.recipes.thermal.smelter('thermal:steel_ingot', ["minecraft:iron_ingot", "thermal:coal_coke"])

  event.recipes.thermal.bottler('thermal:signalum_glass', [Fluid.of('thermal:redstone', 500), 'thermal:obsidian_glass'])
  event.recipes.thermal.bottler('thermal:lumium_glass', [Fluid.of('thermal:glowstone', 500), 'thermal:obsidian_glass'])
  event.recipes.thermal.bottler('thermal:enderium_glass', [Fluid.of('thermal:ender', 250), 'thermal:obsidian_glass'])

  event.recipes.thermal.bottler('minecraft:end_stone', [Fluid.of('thermal:ender', 1000), 'minecraft:stone'])

  event.remove({id: "thermal:machines/pulverizer/pulverizer_andesite"})
  event.remove({id: "thermal:machines/pulverizer/pulverizer_diorite"})
  event.remove({id: "thermal:machines/pulverizer/pulverizer_granite"})
  //event.remove({id: "thermal:machines/pulverizer/raw_silver"})//!!!
  //event.remove({id: "thermal:machines/pulverizer/raw_lead"})//!!!
  event.recipes.thermal.pulverizer(Item.of("thermal:quartz_dust"), Item.of("minecraft:andesite"))
  event.recipes.thermal.pulverizer(Item.of("thermal:quartz_dust"), Item.of("minecraft:diorite"))
  event.recipes.thermal.pulverizer(Item.of("thermal:quartz_dust"), Item.of("minecraft:granite"))

  event.recipes.thermal.pulverizer(Item.of("minecraft:prismarine_shard").withChance(2.5), 'minecraft:prismarine_crystals')//.energy(100)
  
  event.recipes.thermal.furnace(Item.of("thermal:ender_pearl_dust").withChance(0.25), 'minecraft:warped_wart_block')

  event.remove({id: "thermal:machines/pyrolyzer/pyrolyzer_logs"})
  event.remove({id: "thermal:machines/pyrolyzer/pyrolyzer_coal"})
  event.recipes.thermal.pyrolyzer(["minecraft:charcoal", Fluid.of("thermal:creosote", 200)], "2x #minecraft:logs").energy(1000)
  event.recipes.thermal.pyrolyzer(["thermal:coal_coke", Fluid.of("thermal:creosote", 200)], "2x minecraft:coal").energy(2000)

  event.recipes.thermal.crucible([Fluid.of("thermal:ender", 250)], "#forge:dusts/ender_pearl")
  event.recipes.thermal.crucible([Fluid.of("thermal:heavy_oil", 100)], "minecraft:charcoal").energy(20000)

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
  event.recipes.create.mixing(Item.of("thermal:invar_dust", 3), ["thermal:iron_dust", "thermal:iron_dust", "thermal:nickel_dust"])

  event.remove({id: "thermal:electrum_dust_2"})
  event.recipes.create.mixing(Item.of("thermal:electrum_dust", 2), ["thermal:gold_dust", "thermal:silver_dust"])

  event.remove({id: "thermal:press_gear_die"})
  let inter = 'kubejs:incomplete_gear_dye'
  event.recipes.createSequencedAssembly([ 
    "thermal:press_gear_die"
    ],'minecraft:iron_block',[
    event.recipes.createDeploying(inter,[inter,"create:cogwheel"]),
    event.recipes.createCutting(inter, inter),
    event.recipes.createFilling(inter,[inter, Fluid.of("minecraft:water", 1000)]),
    ]).transitionalItem(inter).loops(10)
})