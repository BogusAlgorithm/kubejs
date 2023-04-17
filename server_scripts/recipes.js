// priority: 0
const $EnchantmentHelper = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentHelper')
const $RandomSource = Java.loadClass('net.minecraft.util.RandomSource')

console.info('Hello, World! (You will only see this line once in console, during startup)')

ServerEvents.recipes(event => {

    event.shapeless("minecraft:wooden_pickaxe", ["minecraft:stick", 'minecraft:wooden_pickaxe']).modifyResult((inventory, itemstack) => {
        let item = inventory.find(Item.of("minecraft:wooden_pickaxe").ignoreNBT())

        item.nbt.Damage = item.nbt.Damage - 1;
        return item
    })

//    event.shapeless('minecraft:wooden_pickaxe', ['minecraft:wooden_pickaxe', 'minecraft:book']).modifyResult((grid, result) => {
//        return $EnchantmentHelper.enchantItem($RandomSource.create(), result, 30, false)
//        })

    Ingredient.registerCustomIngredientAction("apply_enchantment", (itemstack, index, inventory) => {
        return  $EnchantmentHelper.enchantItem($RandomSource.create(), itemstack, 30, false);
    })

    event.shapeless('minecraft:paper', ['minecraft:wooden_pickaxe', 'minecraft:book']).customIngredientAction("minecraft:wooden_pickaxe", "apply_enchantment")

    event.remove({ type: 'minecraft:smelting', output: 'minecraft:charcoal' })

/*    event.shapeless("minecraft:wooden_pickaxe", ["minecraft:book", 'minecraft:wooden_pickaxe']).modifyResult((inventory, itemstack) => {
        let item = inventory.find(Item.of("minecraft:wooden_pickaxe").ignoreNBT())
        let e
        let l
        let r=Math.floor(Math.random()*3)
        switch (r) {
            case 0:
                e='minecraft:fortune'
                l=1
              break;
            case 1:
                e='minecraft:fortune'
                l=2
              break;
            default:
                e='minecraft:fortune'
                l=3
          }
          return item.enchant(e, l)
    })*/


    //event.shapeless(Item.of("minecraft:book").enchant('kubejs:cust_enchant', 1), ["minecraft:book", 'minecraft:diamond'])

    /*event.shapeless("spirit:soul_crystal", [Item.of("spirit:soul_crystal").ignoreNBT(), 'minecraft:stick']).modifyResult((inventory, itemstack) => {
        let item = inventory.find(Item.of('spirit:soul_crystal').ignoreNBT())
        let nbt = item.nbt
        if (nbt == null)
            nbt = {}
        else {
            let entity = nbt.StoredEntity
            entity.Souls = entity.Souls + 1
            nbt.StoredEntity = entity
        }
        return item.withNBT(nbt)
    })*/

/*
    let ban=[
        'minecraft:wooden_shovel',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe',
        'minecraft:wooden_sword'
        ];
    for(let i=0; i<ban.length; i++)
        {
        console.info({output:ban[i]})
        event.remove({output:ban[i]});
        //event.remove("output:"+ban[i]);
    }*/
})