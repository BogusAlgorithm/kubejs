console.info('Loading CREATE recipes...')

ServerEvents.recipes(event => {

  event.replaceInput({ id: 'create:crafting/kinetics/steam_engine'}, '#forge:plates/gold', 'create:brass_sheet')
  event.replaceInput({ id: 'create:crafting/kinetics/goggles'}, '#forge:plates/gold', 'create:brass_sheet')
  event.replaceInput({ id: 'create:crafting/kinetics/wrench'}, '#forge:plates/gold', 'create:brass_sheet')

  event.shapeless("create:blaze_cake", ["create:blaze_cake_base", "3x minecraft:magma_cream"])

  event.remove({id: "createaddition:crafting/connector"})
  event.remove({id: "createaddition:crafting/redstone_relay"})
  event.remove({id: "createaddition:crafting/spool"})
  event.remove({id: "createaddition:mechanical_crafting/tesla_coil"})
  event.remove({id: "createaddition:mechanical_crafting/alternator"})
  event.remove({id: "createaddition:mechanical_crafting/electric_motor"})

  event.remove({id: "create:crushing/prismarine_crystals"})

  event.replaceInput({ id: 'createaddition:crafting/modular_accumulator'}, 'createaddition:gold_wire', 'createaddition:copper_wire')
  event.replaceInput({ id: 'createaddition:crafting/copper_spool'}, 'createaddition:spool', 'minecraft:stick')
  event.replaceInput({ id: 'createaddition:crafting/gold_spool'}, 'createaddition:spool', 'minecraft:stick')
  //event.remove({id: "createaddition:crafting/materials/ createaddition:electric_motor"})
  //event.remove({id: "createaddition:crafting/materials/ createaddition:alternator"})
  event.shapeless("createaddition:alternator", "createaddition:electric_motor")
  event.shapeless("createaddition:electric_motor", "createaddition:alternator")
  
  event.remove({id: "create:crafting/materials/electron_tube"})
  event.shaped(
    Item.of('create:electron_tube'), 
      [ 
      ' B ', 
      'QCG', 
      'WRW'  
      ],{
      B: 'minecraft:glass_bottle',
      Q: 'ae2:nether_quartz_cutting_knife',  
      C: 'create:polished_rose_quartz',
      G: 'create:super_glue',
      R: 'thermal:cured_rubber',
      W: 'createaddition:copper_wire'  
      }
    ).damageIngredient('create:super_glue', 5).damageIngredient('ae2:nether_quartz_cutting_knife', 5)

  event.remove({id: "create:crafting/kinetics/belt_connector"})
  event.shaped(
    Item.of('create:belt_connector', 3), 
      [ 
      ' G ', 
      'RRR', 
      'RRR'  
      ],{
      G: 'create:super_glue',
      R: 'thermal:cured_rubber',
      }
    ).damageIngredient('create:super_glue', 5)

  event.shaped(
    Item.of('create:belt_connector'), 
      [ 
      ' G ', 
      'KKK', 
      'KKK'  
      ],{
      G: 'create:super_glue',
      K: 'minecraft:dried_kelp',
      }
    ).damageIngredient('create:super_glue', 5)

  event.remove({id: "createaddition:crafting/capacitor_1"})
  event.remove({id: "createaddition:crafting/capacitor_2"})
  event.shaped(
      Item.of("createaddition:capacitor"), 
        [ 
        ' GQ', 
        'ZDS', 
        'W W'  
        ],{
        D: 'powah:dielectric_paste',
        G: 'create:super_glue',
        Q: 'ae2:nether_quartz_cutting_knife',
        S: '#forge:plates/silver',
        W: 'createaddition:copper_wire',
        Z: '#forge:plates/zinc'
        }
      ).damageIngredient('create:super_glue', 5).damageIngredient('ae2:nether_quartz_cutting_knife', 5)

  event.remove({id: "create:crafting/kinetics/spout"})
  event.shaped(
      Item.of("create:spout"), 
        [ 
        'GCG', 
        ' P ', 
        ' K '  
        ],{
        C: 'create:copper_casing',
        G: '#forge:glass',
        P: 'create:fluid_pipe',
        K: 'minecraft:dried_kelp'
        }
      ).damageIngredient('create:super_glue', 5).damageIngredient('ae2:nether_quartz_cutting_knife', 5)

  event.remove({id: "create:crafting/kinetics/mechanical_drill"})
  event.shaped(
    Item.of("create:mechanical_drill"), 
      [ 
      ' I ', 
      'ILI', 
      ' A '  
      ],{
      A: 'create:andesite_casing',
      I: 'minecraft:iron_ingot',
      L: 'create:andesite_alloy'
    })

  event.remove({id: "createaddition:liquid_burning/biofuel"})
  event.custom({
    "type":"createaddition:liquid_burning",
    "input": {
          "fluidTag": "forge:biofuel",
          "amount": 1000
    },
    "burnTime": 320,
    "superheated": true
  })

  event.custom({
    "type":"createaddition:rolling",
    "input": {
          "item": "thermal:silver_plate"
    },
    "result": {
      "item": "kubejs:silver_wire",
      "count": 2
    }
  })
  
  event.remove({id: "createaddition:crafting/modular_accumulator"})
  event.recipes.create.mechanicalCrafting('createaddition:modular_accumulator', [
      'LDL', 
      'LBL', 
      'STS'  
      ],{
      B: 'create:brass_casing',
      D: 'powah:dielectric_paste',
      L: 'thermal:lead_plate',
      S: 'thermal:sulfur',
      T: 'create:fluid_tank'
    })

  event.recipes.create.mechanicalCrafting('createaddition:tesla_coil', [
    'SSS',
    'CRC',
    'BEB'], {
    B: 'create:brass_sheet',
    C: 'createaddition:capacitor',
    E: 'create:electron_tube',
    R: 'create:railway_casing',
    S: 'createaddition:copper_spool'
  })
      
  event.recipes.create.mechanicalCrafting('createaddition:alternator', [
    'BCB',
    'SOS',
    'BRB'], {
    B: 'create:brass_sheet',
    C: 'createaddition:capacitor',
    O: 'minecraft:iron_ingot',
    R: 'create:railway_casing',
    S: 'createaddition:copper_spool'
  })

  event.recipes.create.compacting([Fluid.of('minecraft:water', 100)], '#minecraft:leaves')

  event.recipes.create.compacting(["minecraft:magma_block"], ["minecraft:basalt"]).superheated()

  event.recipes.create.compacting(["minecraft:spruce_slab", Fluid.of("thermal:resin", 100)], ["minecraft:spruce_planks"]).heated()

  event.recipes.create.compacting(["minecraft:jungle_slab", Fluid.of("thermal:latex", 100)], ["minecraft:jungle_planks"]).heated()

  //event.recipes.create.cutting('thermal:chiller_rod_cast', 'thermal:bronze_plate').processingTime(500)

  event.recipes.create.milling(["minecraft:string"], '#thermal:rockwool')

  event.recipes.create.milling(["kubejs:zinc_dust"], 'create:zinc_ingot')//~~~
  event.recipes.create.milling(["thermal:copper_dust"], 'minecraft:copper_ingot')//~~~

  event.remove({id: "create:milling/calcite"})
  event.recipes.create.milling(["minecraft:bone_meal"], 'minecraft:calcite')

  event.recipes.create.crushing("thermal:iron_dust", "minecraft:iron_ingot")

  event.remove({id: "create:crafting/materials/rose_quartz"})
  event.recipes.create.mixing(["create:rose_quartz"], ["minecraft:quartz", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye"])
  event.recipes.create.mixing(["create:rose_quartz"], ["minecraft:quartz", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone"])
  event.recipes.create.mixing(["minecraft:amethyst_shard"], ["minecraft:quartz", "minecraft:purple_dye", "minecraft:purple_dye", "minecraft:purple_dye", "minecraft:purple_dye"])

  event.recipes.create.mixing([Fluid.of('minecraft:milk', 500)], [Fluid.of('minecraft:water', 500), "minecraft:bone_meal"]).heated()

  event.recipes.create.mixing([Fluid.of('create:honey', 1000)], [Fluid.of('thermal:syrup', 1000), "minecraft:sugar", "minecraft:sugar", "minecraft:sugar", "minecraft:sugar"]).heated()

  event.recipes.create.mixing("2x kubejs:brass_dust", ["thermal:copper_dust", "kubejs:zinc_dust"])

  event.recipes.create.mixing([Fluid.of('minecraft:milk', 250)], [Fluid.of('minecraft:water', 250), "minecraft:bone_meal"]).heated()

  event.recipes.create.pressing(["thermal:lead_plate"], ["thermal:lead_ingot"])
  event.recipes.create.pressing(["thermal:silver_plate"], ["thermal:silver_ingot"])

  event.remove({id: "create:splashing/red_sand"})
  event.recipes.create.splashing([Item.of('minecraft:redstone').withChance(0.1)], 'minecraft:red_sand')

  event.recipes.create.splashing([Item.of("thermal:tin_dust", 1).withChance(0.5)], Item.of("kubejs:zinc_dust"))
  event.recipes.create.splashing([Item.of("thermal:nickel_dust", 1).withChance(0.5)], Item.of("thermal:iron_dust"))
  event.recipes.create.splashing([Item.of("thermal:gold_dust", 1).withChance(0.5)], Item.of("thermal:copper_dust"))

  event.remove({id: "create:crafting/kinetics/super_glue"})
  let inter = 'kubejs:incomplete_glue'
  event.recipes.createSequencedAssembly([ 
    Item.of('create:super_glue')
    ],'minecraft:bucket',[
    // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
    event.recipes.createCutting(inter, inter),
    event.recipes.createPressing(inter, inter),
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    event.recipes.createFilling(inter,[inter, Fluid.of("thermal:resin", 1000)])
    ]).transitionalItem(inter).loops(1) // set the transitional item and the loops (amount of repetitions)

  event.remove({id: "create:sequenced_assembly/sturdy_sheet"})
  inter = 'create:iron_sheet'
  event.recipes.createSequencedAssembly([ 
    "create:sturdy_sheet"
    ],'thermal:lead_plate',[
    event.recipes.createDeploying(inter,[inter,"powah:dielectric_paste"]),
    event.recipes.createDeploying(inter,[inter,"powah:dielectric_paste"]),
    event.recipes.createPressing(inter, inter),
    event.recipes.createFilling(inter,[inter, Fluid.of("thermal:resin", 1000)]),
    event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1) // set the transitional item and the loops (amount of repetitions)
  
  inter = 'kubejs:pulp'
  event.recipes.createSequencedAssembly([ 
    "minecraft:paper"
    ],'thermal:sawdust',[
    event.recipes.createFilling(inter,[inter, Fluid.of("minecraft:water", 1000)]),
    event.recipes.createPressing(inter, inter),
    event.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(1) // set the transitional item and the loops (amount of repetitions)

  event.remove({id: "create:sequenced_assembly/precision_mechanism"})
  inter = 'create:incomplete_precision_mechanism'
  event.recipes.createSequencedAssembly([ 
    "create:precision_mechanism"
    ],'create:brass_sheet',[
      event.recipes.createDeploying(inter,[inter,"create:cogwheel"]),
      event.recipes.createDeploying(inter,[inter,"create:large_cogwheel"]),
      event.recipes.createDeploying(inter,[inter,"minecraft:iron_nugget"])
    ]).transitionalItem(inter).loops(5) // set the transitional item and the loops (amount of repetitions)
})