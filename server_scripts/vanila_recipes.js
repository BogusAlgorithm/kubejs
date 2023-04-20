// priority: 0
//const $EnchantmentHelper = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentHelper')
//const $RandomSource = Java.loadClass('net.minecraft.util.RandomSource')

console.info('Loading VANILA recipes...')

ServerEvents.recipes(event => {
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

    event.smelting('minecraft:soul_sand', 'minecraft:soul_soil')

    event.smelting('create:brass_ingot', 'kubejs:brass_dust')

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
    //event.remove({ id: 'minecraft:torch'})
    event.shapeless('minecraft:torch', ['minecraft:stick', 'minecraft:flint_and_steel']).damageIngredient('minecraft:flint_and_steel')

    event.remove({ id: 'minecraft:iron_bars'})
    event.shapeless('minecraft:iron_bars', ['createaddition:iron_rod', 'createaddition:iron_rod', 'createaddition:iron_rod', 'createaddition:iron_rod'])

    event.replaceInput({ id: 'minecraft:campfire'}, '#minecraft:coals', 'minecraft:torch')

    //event.shapeless(Item.of("minecraft:book").enchant('kubejs:cust_enchant', 1), ["minecraft:book", 'minecraft:diamond'])

})