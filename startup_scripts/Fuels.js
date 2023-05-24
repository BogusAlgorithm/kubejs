console.info('Loading Fuels...')

ItemEvents.modification(event => {
    event.modify(/minecraft:(oak|birch|spruce|jungle|acacia|dark_oak|mangrove|crimson|warped)_slab/, item => { item.burnTime = 100 })

    event.modify("createaddition:biomass_pellet", item => { item.burnTime = 2400 })
  })