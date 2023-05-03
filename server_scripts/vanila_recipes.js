// priority: 0
//const $EnchantmentHelper = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentHelper')
//const $RandomSource = Java.loadClass('net.minecraft.util.RandomSource')

console.info('Loading VANILA recipes...')

/*
event.smelting('minecraft:raw_iron', '2x create:crushed_iron_ore')
event.smelting('minecraft:raw_copper', '2x create:crushed_copper_ore')
event.smelting('minecraft:raw_gold', '2x create:crushed_gold_ore')

event.smelting('create:raw_zinc', '2x create:crushed_zinc_ore')

event.smelting('thermal:raw_lead', '2x create:crushed_lead_ore')
event.smelting('thermal:raw_silver', '2x create:crushed_silver_ore')
event.smelting('thermal:raw_nickel', '2x create:crushed_nickel_ore')
event.smelting('thermal:raw_tin', '2x create:crushed_tin_ore')
*/

ServerEvents.recipes(event => {

     //let metals = ["iron", "gold", "copper", "zinc", "lead", "silver", "nickel", "tin"]

    event.remove({type: `minecraft:smelting`, input: '#forge:ores'})
    event.remove({type: `minecraft:smelting`, input: '/.*:raw_.*/', output: '#forge:ingots'})
    event.remove({type: `minecraft:blasting`, input: '/.*:raw_.*/', output: '#forge:ingots'})
    
    event.smelting('8x minecraft:iron_nugget', 'minecraft:raw_iron')
    event.smelting('8x minecraft:gold_nugget', 'minecraft:raw_gold')
    event.smelting('8x create:copper_nugget', 'minecraft:raw_copper')
    event.smelting('8x create:zinc_nugget', 'create:raw_zinc')
    event.smelting('8x thermal:lead_nugget', 'thermal:raw_lead')
    event.smelting('8x thermal:silver_nugget', 'thermal:raw_silver')
    event.smelting('8x thermal:nickel_nugget', 'thermal:raw_nickel')
    event.smelting('8x thermal:tin_nugget', 'thermal:raw_tin')

    event.remove({type: `create:crushing`, input: '#forge:raw_materials'}) 

    event.recipes.create.milling("2x create:crushed_iron_ore", "minecraft:raw_iron")
    event.recipes.create.milling("2x create:crushed_gold_ore", "minecraft:raw_gold")
    event.recipes.create.milling("2x create:crushed_copper_ore", "minecraft:raw_copper")
    event.recipes.create.milling("2x create:crushed_zinc_ore", "create:raw_zinc")
    event.recipes.create.milling("2x create:crushed_lead_ore", "thermal:raw_lead")
    event.recipes.create.milling("2x create:crushed_silver_ore", "thermal:raw_silver")
    event.recipes.create.milling("2x create:crushed_nickel_ore", "thermal:raw_nickel")
    event.recipes.create.milling("2x create:crushed_tin_ore", "thermal:raw_tin")

    event.recipes.create.crushing("4x thermal:iron_dust", "minecraft:raw_iron")
    event.recipes.create.crushing("4x thermal:gold_dust", "minecraft:raw_gold")
    event.recipes.create.crushing("4x thermal:copper_dust", "minecraft:raw_copper")
    event.recipes.create.crushing("4x kubejs:zinc_dust", "create:raw_zinc")
    event.recipes.create.crushing("4x thermal:lead_dust", "thermal:raw_lead")
    event.recipes.create.crushing("4x thermal:silver_dust", "thermal:raw_silver")
    event.recipes.create.crushing("4x thermal:nickel_dust", "thermal:raw_nickel")
    event.recipes.create.crushing("4x thermal:tin_dust", "thermal:raw_tin")
     
    event.remove({input: '#create:crushed_ores'})
    
    event.smelting('5x minecraft:iron_nugget', 'create:crushed_iron_ore')
    event.smelting('5x minecraft:gold_nugget', 'create:crushed_gold_ore')
    event.smelting('5x create:copper_nugget', 'create:crushed_copper_ore')
    event.smelting('5x create:zinc_nugget', 'create:crushed_zinc_ore')
    event.smelting('5x thermal:lead_nugget', 'create:crushed_lead_ore')
    event.smelting('5x thermal:silver_nugget', 'create:crushed_silver_ore')
    event.smelting('5x thermal:nickel_nugget', 'create:crushed_nickel_ore')
    event.smelting('5x thermal:tin_nugget', 'create:crushed_tin_ore')

    event.recipes.create.milling("4x thermal:iron_dust", "create:crushed_iron_ore")
    event.recipes.create.milling("4x thermal:gold_dust", "create:crushed_gold_ore")
    event.recipes.create.milling("4x thermal:copper_dust", "create:crushed_copper_ore")
    event.recipes.create.milling("4x kubejs:zinc_dust", "create:crushed_zinc_ore")
    event.recipes.create.milling("4x thermal:lead_dust", "create:crushed_lead_ore")
    event.recipes.create.milling("4x thermal:silver_dust", "create:crushed_silver_ore")
    event.recipes.create.milling("4x thermal:nickel_dust", "create:crushed_nickel_ore")
    event.recipes.create.milling("4x thermal:tin_dust", "create:crushed_tin_ore")

    event.remove({input: `/.*_dust/`, output: '#forge:ingots'})

    event.smelting('3x minecraft:iron_nugget', 'thermal:iron_dust')
    event.smelting('3x minecraft:gold_nugget', 'thermal:gold_dust')
    event.smelting('3x create:copper_nugget', 'thermal:copper_dust')
    event.smelting('3x create:zinc_nugget', 'kubejs:zinc_dust')
    event.smelting('3x thermal:lead_nugget', 'thermal:lead_dust')
    event.smelting('3x thermal:silver_nugget', 'thermal:silver_dust')
    event.smelting('3x thermal:nickel_nugget', 'thermal:nickel_dust')
    event.smelting('3x thermal:tin_nugget', 'thermal:tin_dust')
    event.smelting('3x create:brass_nugget', 'kubejs:brass_dust')
    event.smelting('3x thermal:electrum_nugget', 'thermal:electrum_dust')
    event.smelting('3x thermal:invar_nugget', 'thermal:invar_dust')

    //event.shapeless("3x thermal:invar_ingot", ["thermal:nickel_ingot", "2x minecraft:iron_ingot", "minecraft:fire_charge"])
    //event.shapeless("2x thermal:electrum_ingot", ["minecraft:gold_ingot", "thermal:silver_ingot", "minecraft:fire_charge"])

    event.shaped(
        Item.of('minecraft:turtle_egg'), 
          [ 
          'KSK', 
          'KEK', 
          'KBK'  
          ],{
          B: 'minecraft:water_bucket',
          E: 'minecraft:egg',
          K: 'minecraft:kelp',
          S: 'minecraft:sand'
          }
    ).replaceIngredient("minecraft:water_bucket", "minecraft:bucket")    

    event.remove({ id: 'minecraft:rail'})
    event.shaped(
        Item.of('minecraft:rail', 16), 
            [ 
            'RSR', 
            'RSR', 
            'RSR'  
            ],{
            R: 'createaddition:iron_rod',
            S: 'minecraft:stick'
            }) 

    //event.smelting('minecraft:soul_sand', 'minecraft:soul_soil')

    //event.smelting('create:brass_ingot', 'kubejs:brass_dust')

/*  event.shapeless("minecraft:wooden_pickaxe", ["minecraft:stick", 'minecraft:wooden_pickaxe']).modifyResult((inventory, itemstack) => {
        let item = inventory.find(Item.of("minecraft:wooden_pickaxe").ignoreNBT())

        item.nbt.Damage = item.nbt.Damage - 1;
        return item
    })
*/

/*    event.shapeless('minecraft:wooden_pickaxe', ['minecraft:wooden_pickaxe', 'minecraft:book']).modifyResult((grid, result) => {
        return $EnchantmentHelper.enchantItem($RandomSource.create(), result, 30, false)
        })

    Ingredient.registerCustomIngredientAction("apply_enchantment", (itemstack, index, inventory) => {
        return  $EnchantmentHelper.enchantItem($RandomSource.create(), itemstack, 30, false);
        })

    event.shapeless('minecraft:paper', ['minecraft:wooden_pickaxe', 'minecraft:book']).customIngredientAction("minecraft:wooden_pickaxe", "apply_enchantment")
*/
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:charcoal' })
    event.shapeless('minecraft:torch', ['minecraft:stick', 'minecraft:flint_and_steel']).damageIngredient('minecraft:flint_and_steel')

    event.remove({ id: 'minecraft:iron_bars'})
    event.shapeless('minecraft:iron_bars', ['createaddition:iron_rod', 'createaddition:iron_rod', 'createaddition:iron_rod', 'createaddition:iron_rod'])

    event.shapeless('minecraft:dirt', ['#forge:tools/hoes', 'minecraft:coarse_dirt']).damageIngredient('#forge:tools/hoes', 2)


    event.replaceInput({ id: 'minecraft:campfire'}, '#minecraft:coals', 'minecraft:torch')

    //event.shapeless(Item.of("minecraft:book").enchant('kubejs:cust_enchant', 1), ["minecraft:book", 'minecraft:diamond'])

    //event.recipes.create.compacting(Item.of("minecraft:iron_pickaxe").enchant("efficiency", 5), ["minecraft:iron_pickaxe", "minecraft:iron_block"])
    event.shapeless(Item.of("minecraft:iron_pickaxe").enchant("efficiency", 5), [Item.of("minecraft:iron_pickaxe").strongNBT(), "minecraft:iron_block"])

    event.shapeless("minecraft:crimson_nylium", ["minecraft:netherrack", "thermal:compost", "thermal:slag", "minecraft:crimson_fungus"])
    event.shapeless("minecraft:warped_nylium", ["minecraft:netherrack", "thermal:compost", "thermal:slag", "minecraft:warped_fungus"])

    //Ore refinement
    event.remove({ id: `thermal:machines/pulverizer/pulverizer_raw_iron`})
    event.remove({ id: `thermal:machines/pulverizer/pulverizer_raw_copper`})

    event.recipes.thermal.pulverizer([Item.of(`thermal:nickel_dust`).withChance(0.75)], "minecraft:raw_iron").energy(4000)
    event.recipes.thermal.pulverizer([Item.of(`thermal:tin_dust`).withChance(0.75)], "create:raw_zinc").energy(4000)
    event.recipes.thermal.pulverizer([Item.of(`thermal:gold_dust`).withChance(0.75)], "minecraft:raw_copper").energy(4000)
})