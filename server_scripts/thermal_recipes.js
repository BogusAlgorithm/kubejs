console.info('Loading THERMAL recipes...')

ServerEvents.recipes(event => {

  event.remove({id: "thermal:phytogro_8"})

  event.remove({id: "thermal:device_tree_extractor"})
    event.shaped(
      Item.of('thermal:device_tree_extractor'), 
        [ 
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


  event.replaceInput({ id: 'thermal:phytosoil'}, 'minecraft:charcoal', 'thermal:compost')

  event.recipes.create.crushing(["thermal:sawdust", Item.of("thermal:sawdust").withChance(0.5)], "#minecraft:planks")
})