console.info('Loading Booking...')

ServerEvents.recipes(event => {

    event.shapeless("create:experience_nugget", "minecraft:book")
    event.recipes.create.mixing([Fluid.of("cofh_core:experience", 125)], "create:experience_nugget").heated()

  let book_maker = (item, ench, lvl) => {
    let output = []

    for (let i=1; i<=lvl; i++) {
      output.push(Item.of("minecraft:enchanted_book").enchant(ench, i).withChance(lvl-i+1))
    }
    let inter = 'kubejs:incomplete_book'
    event.recipes.createSequencedAssembly( 
      output
      ,'minecraft:book',[
        event.recipes.createDeploying(inter,[inter,item]),
        event.recipes.createFilling(inter,[inter,Fluid.of("cofh_core:experience", 1000)])//,
        //event.recipes.createFilling(inter,[inter,Fluid.of("cofh_core:experience", 1000)])
      ]).transitionalItem(inter).loops(1)
  }

    book_maker("minecraft:bucket", "cofh_core:holding", 4)
    book_maker("thermal:iron_gear", "minecraft:efficiency", 5)
    book_maker("minecraft:anvil", "minecraft:mending", 1)
    book_maker("create:fluid_tank", "create:capacity", 3)
    book_maker("minecraft:minecart", "minecraft:protection", 4)
    book_maker("minecraft:blaze_rod", "minecraft:fire_protection", 4)
    book_maker("thermal:saw_blade", "minecraft:sharpness", 4)
    book_maker("ae2:fluix_block", "minecraft:fortune", 3)
    book_maker("thermal:potato_block", "create:potato_recovery", 3)
    book_maker("minecraft:tnt", "minecraft:power", 5)
})