
ServerEvents.recipes(event => {

    Ingredient.registerCustomIngredientAction("magnetize", (itemstack, index, inventory) => {
        itemstack.nbt.Energy = 0
        return itemstack;
    })
  
 	event.shapeless("powah:steel_energized", ["minecraft:iron_ingot", Item.of('thermal:flux_magnet', '{Energy:50000}').weakNBT()])
        .customIngredientAction("thermal:flux_magnet", "magnetize")

    event.remove({id: "create:crafting/materials/rose_quartz"})
    event.recipes.create.mixing([Fluid.of('minecraft:milk', 500)], [Fluid.of('minecraft:water', 500), "minecraft:bone_meal"]).heated()
    
    event.remove({id: "create:crafting/materials/electron_tube"})
    event.shaped(
        Item.of('create:electron_tube'),
        [ 
          ' B ', 
          'QCG', 
          'WRW'  
        ],
        {
          B: 'minecraft:glass_bottle',
          Q: 'ae2:certus_quartz_cutting_knife',  
          C: 'create:polished_rose_quartz',
          G: 'create:super_glue',
          R: 'thermal:cured_rubber',
          W: 'createaddition:copper_wire'  
        }
      ).damageIngredient('create:super_glue', 5).damageIngredient('ae2:certus_quartz_cutting_knife', 5)

    event.recipes.create.compacting([Fluid.of('minecraft:water', 50)], '#minecraft:leaves')

    event.recipes.create.compacting(["minecraft:magma_block"], ["minecraft:cobblestone"]).superheated()

    event.recipes.create.compacting(["minecraft:spruce_slab", Fluid.of("thermal:resin", 100)], ["minecraft:spruce_planks"]).heated()

    event.recipes.create.compacting(["minecraft:jungle_slab", Fluid.of("thermal:latex", 100)], ["minecraft:jungle_planks"]).heated()

    event.recipes.create.milling(["minecraft:string"], '#thermal:rockwool')

    event.remove({id: "create:crafting/materials/rose_quartz"})
    event.recipes.create.mixing(["create:rose_quartz"], ["minecraft:quartz", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye", "minecraft:red_dye",])

    event.recipes.create.mixing([Fluid.of('minecraft:milk', 500)], [Fluid.of('minecraft:water', 500), "minecraft:bone_meal"]).heated()

    event.recipes.create.mixing([Fluid.of('minecraft:honey', 1000)], [Fluid.of('thermal:syrup', 1000), "minecraft:sugar", "minecraft:sugar", "minecraft:sugar", "minecraft:sugar"]).heated()

    event.remove({id: "create:crafting/kinetics/super_glue"})
    let inter = 'kubejs:incomplete_glue'
    event.recipes.createSequencedAssembly([ 
        Item.of('create:super_glue')
        ],'minecraft:bucket',[
        // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
        event.recipes.createCutting(inter, inter),
        event.recipes.createPressing(inter, inter),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createFilling(inter,[inter, Fluid.of("thermal:resin", 1000)]),
        event.recipes.createDeploying(inter,[inter,"#minecraft:wooden_buttons"])
        ]).transitionalItem(inter).loops(1) // set the transitional item and the loops (amount of repetitions)
        })