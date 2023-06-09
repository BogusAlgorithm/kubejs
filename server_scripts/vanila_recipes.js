// priority: 0

console.info('Loading VANILA recipes...')

ServerEvents.recipes(event => {

    event.remove({id: "minecraft:enchanting_table"})
    
    event.remove({type: `minecraft:smelting`, input: '#forge:ores'})
    event.remove({type: `minecraft:smelting`, input: '/.*:raw_.*/', output: '#forge:ingots'})
    event.remove({type: `minecraft:blasting`, input: '/.*:raw_.*/', output: '#forge:ingots'})

    event.remove({type: `create:crushing`, input: '#forge:raw_materials'})
    event.remove({input: '#create:crushed_ores'})

    event.remove({input: `/.*_dust/`, output: '#forge:ingots'})

    const materials = [
        ['minecraft', 'iron'],
        ['minecraft', 'gold'],
        ['create', 'zinc'],
        ['thermal', 'lead'],
        ['thermal', 'silver'],
        ['thermal', 'nickel'],
        ['thermal', 'tin']
    ]

    materials.forEach(mat => {
        event.smelting(`8x ${mat[0]}:${mat[1]}_nugget`, `${mat[0]}:raw_${mat[1]}`)    
    })
    event.smelting('8x create:copper_nugget', 'minecraft:raw_copper')

    materials.forEach(mat => {
        event.recipes.create.milling(`2x create:crushed_${mat[1]}_ore`, `${mat[0]}:raw_${mat[1]}`)
    })
    event.recipes.create.milling("2x create:crushed_copper_ore", "minecraft:raw_copper")

    materials.forEach(mat => {
        event.recipes.create.crushing(`4x thermal:${mat[1]}_dust`, `${mat[0]}:raw_${mat[1]}`)
    })
    event.recipes.create.crushing("4x thermal:copper_dust", "minecraft:raw_copper")

    materials.forEach(mat => {
        event.smelting(`5x ${mat[0]}:${mat[1]}_nugget`, `create:crushed_${mat[1]}_ore`)
    })
    event.smelting('5x create:copper_nugget', 'create:crushed_copper_ore')

    materials.forEach(mat => {
        event.recipes.create.milling(`4x thermal:${mat[1]}_dust`, `create:crushed_${mat[1]}_ore`)
    })
    event.recipes.create.milling("4x thermal:copper_dust", "create:crushed_copper_ore")

    materials.forEach(mat => {
        event.smelting(`3x ${mat[0]}:${mat[1]}_nugget`, `thermal:${mat[1]}_dust`)
    })
    event.smelting('3x create:copper_nugget', 'thermal:copper_dust')
        
    event.smelting('3x create:brass_nugget', 'thermal:brass_dust')
    event.smelting('3x thermal:electrum_nugget', 'thermal:electrum_dust')
    event.smelting('3x thermal:invar_nugget', 'thermal:invar_dust')

    event.shaped(
        Item.of('minecraft:turtle_egg'), 
          [ 
          'KKK', 
          'KEK', 
          'KBK'  
          ],{
          B: 'minecraft:water_bucket',
          E: 'minecraft:egg',
          K: 'minecraft:kelp'
          }
    ).replaceIngredient("minecraft:water_bucket", "minecraft:bucket")    

    let summonegg = (output, ingr1, ingr2) => {
        event.shaped(
            output, 
              [ 
              'AAA', 
              'AEA', 
              'ABA'  
              ],{
              A: ingr1,
              B: ingr2,
              E: 'minecraft:egg'
              }
        )
    }

    summonegg("minecraft:cow_spawn_egg", "minecraft:beef", "minecraft:wheat")
    summonegg("minecraft:pig_spawn_egg", "minecraft:porkchop", "minecraft:beetroot")
    summonegg("minecraft:sheep_spawn_egg", "minecraft:mutton", "minecraft:grass")
    summonegg("minecraft:cat_spawn_egg", "minecraft:rotten_flesh", "#forge:foods/fish/raw")
    summonegg("minecraft:wolf_spawn_egg", "minecraft:rotten_flesh", "minecraft:bone")
    summonegg("2x minecraft:bee_spawn_egg", "minecraft:honey_bottle", "#minecraft:flowers")
    summonegg("minecraft:rabbit_spawn_egg", "minecraft:rabbit", "minecraft:carrot")
    summonegg("minecraft:magma_cube_spawn_egg", "minecraft:magma_cream", "minecraft:magma_cream")

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

    event.remove({ id: 'minecraft:powered_rail'})
    event.shaped(
        Item.of('minecraft:powered_rail', 6), 
            [ 
            'GSG', 
            'GRG', 
            'GSG'  
            ],{
            G: 'createaddition:gold_rod',
            S: 'minecraft:stick',
            R: 'minecraft:redstone'
    })

    event.remove({ id: 'itank:tank'})
    event.shaped(
        'itank:tank', 
            [ 
            'IGI', 
            'G G', 
            'IGI'  
            ],{
            G: 'minecraft:glass',
            I: 'minecraft:iron_ingot'
    })

    event.shaped(
        'minecraft:name_tag', 
            [ 
            '  S', 
            ' P ', 
            'P  '  
            ],{
            S: 'minecraft:string',
            P: 'minecraft:paper'
    })

    event.shaped(
        'kubejs:kubit_16', 
            [ 
            'QWE', 
            'R T', 
            'YUI'  
            ],{
            Q: 'kubejs:kubit_0',
            W: 'kubejs:kubit_1',
            E: 'kubejs:kubit_2',
            R: 'kubejs:kubit_3',
            T: 'kubejs:kubit_4',
            Y: 'kubejs:kubit_5',
            U: 'kubejs:kubit_6',
            I: 'kubejs:kubit_7'
    })

    event.shaped(
        'kubejs:kubit_17', 
            [ 
            'QWE', 
            'R T', 
            'YUI'  
            ],{
            Q: 'kubejs:kubit_8',
            W: 'kubejs:kubit_9',
            E: 'kubejs:kubit_10',
            R: 'kubejs:kubit_11',
            T: 'kubejs:kubit_12',
            Y: 'kubejs:kubit_13',
            U: 'kubejs:kubit_14',
            I: 'kubejs:kubit_15'
    })

    event.shaped(
        `minecraft:end_portal_frame`, 
            [ 
            'SBS', 
            'SQS', 
            'SSS'  
            ],{
            B: 'thermal:ender_bucket',
            Q: 'kubejs:kubit_18',
            S: 'minecraft:end_stone'
    }).replaceIngredient("thermal:ender_bucket", Item.of("minecraft:bucket"))

    event.shaped(
        `kubejs:befurnace`, 
            [ 
            ' S ', 
            'WCM', 
            ' E '  
            ],{
            C: 'thermal:machine_frame',
            E: 'thermal:ender_bucket',
            M: 'minecraft:lava_bucket',
            S: 'minecraft:brewing_stand',
            W: 'minecraft:water_bucket'
    })

    event.shapeless("kubejs:kubit_18", ["kubejs:kubit_16" ,"kubejs:kubit_17" ])

    event.remove({ type: 'minecraft:smelting', output: 'minecraft:charcoal' })
    event.shapeless('minecraft:torch', ['minecraft:stick', 'minecraft:flint_and_steel']).damageIngredient('minecraft:flint_and_steel')

    event.remove({ id: 'minecraft:iron_bars'})
    event.shapeless('minecraft:iron_bars', ['4x createaddition:iron_rod'])

    event.shapeless('minecraft:dirt', ['#forge:tools/hoes', 'minecraft:coarse_dirt']).damageIngredient('#forge:tools/hoes', 2)

    event.shapeless("4x minecraft:pointed_dripstone", "minecraft:dripstone_block")

    event.replaceInput({ id: 'minecraft:campfire'}, '#minecraft:coals', 'minecraft:torch')
    
    //misc
    event.recipes.create.cutting(["minecraft:leather", Item.of("minecraft:leather").withChance(0.25)], "minecraft:leather_helmet")
    event.recipes.create.cutting(["2x minecraft:leather"], "minecraft:leather_chestplate")
    event.recipes.create.cutting(["minecraft:leather", Item.of("minecraft:leather").withChance(0.75)], "minecraft:leather_leggings")
    event.recipes.create.cutting(["minecraft:leather"], "minecraft:leather_boots")

    event.shapeless("minecraft:verdant_froglight", "minecraft:pearlescent_froglight")
    event.shapeless("minecraft:pearlescent_froglight", "minecraft:ochre_froglight")
    event.shapeless("minecraft:ochre_froglight", "minecraft:verdant_froglight")

    //Kubits
    Ingredient.registerCustomIngredientAction("lumen_transform", (itemstack, index, inventory) => {
        let rand_val = Math.random()
        const colors_array = ["magenta", "pink", "green", "lime", "light_gray", "yellow", "black", "light_blue", "brown", "cyan", "orange", "red", "gray", "white", "blue", "purple"]

        let current_color = /^ae2:(.+)_lumen_paint_ball$/.exec(itemstack.id)[1]

        if (rand_val<0.3) 
        {
            itemstack = Item.of(`kubejs:kubit_${colors_array.indexOf(current_color, 0)}`)
        }
        else if (rand_val<0.9) 
        {
            let rc = Math.floor(Math.random()*15)//16
            if (rc >= colors_array.indexOf(current_color)) rc++
            itemstack = Item.of(`ae2:${colors_array[rc]}_paint_ball`)
        }
        else itemstack = Item.of('minecraft:air')

        return itemstack;
    })

    event.shaped("thermal:blizz_powder", ["powah:charged_snowball", `#minecraft:lumen_balls`]).customIngredientAction(`#minecraft:lumen_balls`, "lumen_transform").id('kubejs:kubit_reacipe_manual_only')

    //Ore refinement
    event.remove({ id: `thermal:machines/pulverizer/pulverizer_raw_iron`})
    event.remove({ id: `thermal:machines/pulverizer/pulverizer_raw_copper`})

    event.recipes.thermal.pulverizer([Item.of(`thermal:nickel_dust`).withChance(3)], "minecraft:raw_iron").energy(4000)
    event.recipes.thermal.pulverizer([Item.of(`thermal:tin_dust`).withChance(3)], "create:raw_zinc").energy(4000)
    event.recipes.thermal.pulverizer([Item.of(`thermal:gold_dust`).withChance(3)], "minecraft:raw_copper").energy(4000)

    //CC
    //Computers, alt Computers , modems, wires
    //Remove turtles, handhelds

    //Calculator
    event.remove({id: "jecalculation:item_calculator_craft"})
    event.remove({id: "jecalculation:item_calculator_math"})

    event.shaped(
        "jecalculation:item_calculator_craft", 
            [ 
            'BGB', 
            'WRW', 
            'BPB'  
            ],{
            B: '#minecraft:wooden_buttons',
            G: 'minecraft:glass',
            P: '#forge:plates/iron',
            R: 'minecraft:redstone',
            W: 'createaddition:copper_wire'
    })
})

ServerEvents.blockLootTables (event => {
    event.addBlock('minecraft:tall_grass', table => {
        table.addPool(pool => {
            pool.addItem("thermal:hops")
        })
    })
})

BlockEvents.rightClicked('minecraft:end_portal_frame', event => { 
    const {item, block} = event
    if(item.id == 'create:wrench') {
        block.popItem("minecraft:end_portal_frame")
        if (block.properties.eye == "true") block.popItem("minecraft:ender_eye")
    }
})
