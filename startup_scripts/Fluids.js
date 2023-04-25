console.info('Loading Fluid registris...')

StartupEvents.registry('fluid', event => {

    event.create('Solution_B', fluid => {
        fluid.color(0xFF0000)
        fluid.noBucket()
        fluid.noBlock()
        fluid.displayName('Solution Base')
   })

    event.create('Solution_B', fluid => {
        fluid.color(0xFFFF00)
        fluid.noBucket()
        fluid.noBlock()
        fluid.displayName('Solution Concentrate')
    })

})