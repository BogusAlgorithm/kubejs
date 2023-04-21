console.info('Loading CREATE recipes...')

ServerEvents.recipes(event => {

  Ingredient.registerCustomIngredientAction("magnetize", (itemstack, index, inventory) => {
      itemstack.nbt.Energy = 0
      return itemstack;
  })
  
 	event.shapeless("powah:steel_energized", ["minecraft:iron_ingot", Item.of('thermal:flux_magnet', '{Energy:50000}').weakNBT()])
    .customIngredientAction("thermal:flux_magnet", "magnetize")

  event.shapeless("create:blaze_cake", ["create:blaze_cake_base", "3x minecraft:magma_cream"])

  event.shapeless("createaddition:alternator", "createaddition:electric_motor")
  event.shapeless("createaddition:electric_motor", "createaddition:alternator")

  /*
  event.shaped(
    Item.of('create:blaze_burner'), 
      [ 
      'RRR', 
      'RER', 
      'RCR'  
      ],{
      C: 'create:empty_blaze_burner',
      E: 'minecraft:egg',
      R: 'minecraft:blaze_rod'
      }
    )
  */  
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

  event.recipes.create.compacting([Fluid.of('minecraft:water', 50)], '#minecraft:leaves')

  event.recipes.create.compacting(["minecraft:magma_block"], ["minecraft:basalt"]).superheated()

  event.recipes.create.compacting(["minecraft:spruce_slab", Fluid.of("thermal:resin", 100)], ["minecraft:spruce_planks"]).heated()

  event.recipes.create.compacting(["minecraft:jungle_slab", Fluid.of("thermal:latex", 100)], ["minecraft:jungle_planks"]).heated()

  event.recipes.create.cutting('thermal:chiller_rod_cast', 'thermal:bronze_plate').processingTime(500)

  event.recipes.create.milling(["minecraft:string"], '#thermal:rockwool')

  event.recipes.create.milling(["kubejs:zinc_dust"], 'create:zinc_ingot')//~~~
  event.recipes.create.milling(["thermal:copper_dust"], 'minecraft:copper_ingot')//~~~

  event.remove({id: "create:milling/calcite"})
  event.recipes.create.milling(["minecraft:bone_meal"], 'minecraft:calcite')

  event.remove({id: "create:crafting/materials/rose_quartz"})
  event.recipes.create.mixing(["create:rose_quartz"], ["minecraft:quartz", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye",])

  event.recipes.create.mixing([Fluid.of('minecraft:milk', 500)], [Fluid.of('minecraft:water', 500), "minecraft:bone_meal"]).heated()

  event.recipes.create.mixing([Fluid.of('create:honey', 1000)], [Fluid.of('thermal:syrup', 1000), "minecraft:sugar", "minecraft:sugar", "minecraft:sugar", "minecraft:sugar"]).heated()

  event.recipes.create.mixing("2x kubejs:brass_dust", ["thermal:copper_dust", "kubejs:zinc_dust"])

  event.remove({id: "create:crafting/materials/rose_quartz"})
  event.recipes.create.mixing([Fluid.of('minecraft:milk', 500)], [Fluid.of('minecraft:water', 500), "minecraft:bone_meal"]).heated()
  
  event.recipes.create.splashing('minecraft:clay_ball', 'minecraft:sand')

  event.remove({id: "create:splashing/gravel"})
  event.recipes.create.splashing([Item.of('thermal:apatite').withChance(0.2), Item.of('thermal:niter').withChance(0.2), Item.of('minecraft:redstone').withChance(0.1)], 'minecraft:gravel')
  //event.recipes.create.splashing([Item.of('thermal:appatite')], 'minecraft:gravel')

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

  /*inter = 'thermal:chiller_rod_cast'
  event.recipes.createSequencedAssembly([ 
    Item.of('minecraft:blaze_rod').withChance(9), Item.of('thermal:bronze_dust', 3), Item.of('thermal:bronze_dust', 2), Item.of('thermal:bronze_dust')
    ],'thermal:chiller_rod_cast',[
    event.recipes.createDeploying(inter,[inter,"minecraft:blaze_powder"]),
    event.recipes.createDeploying(inter,[inter,"minecraft:blaze_powder"]),
    event.recipes.createDeploying(inter,[inter,"minecraft:blaze_powder"]),
    event.recipes.createDeploying(inter,[inter,"minecraft:blaze_powder"]),
    event.recipes.createFilling(inter,[inter, Fluid.of("thermal:resin", 1000)]),
    event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1) // set the transitional item and the loops (amount of repetitions)
  */
})