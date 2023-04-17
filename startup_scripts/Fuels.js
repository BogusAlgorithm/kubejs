console.info('Hello, World! (You will only see this line once in console, during startup)')

ItemEvents.modification(event => {
    event.modify(/minecraft:(oak|birch|spruce|jungle|acacia|dark_oak|mangrove|crimson|warped)_slab/, item => {
    //event.modify("#minecraft:wooden_slabs", item => {
      item.burnTime = 100
    })
  })