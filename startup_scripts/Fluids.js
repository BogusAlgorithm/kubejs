console.info('Loading Fluid registris...')

StartupEvents.registry('fluid', event => {

    event.create('kubejs:solution_1').color(0x0000FF).stillTexture('thermal:block/fluids/crude_oil_still')/*.noBucket()*/.noBlock().displayName('Solution I')
    event.create('kubejs:solution_2').color(0x3C00FF).stillTexture('thermal:block/fluids/crude_oil_still')/*.noBucket()*/.noBlock().displayName('Solution II')
    event.create('kubejs:solution_3').color(0x7800FF).stillTexture('thermal:block/fluids/crude_oil_still')/*.noBucket()*/.noBlock().displayName('Solution III')
    event.create('kubejs:solution_4').color(0xB400FF).stillTexture('thermal:block/fluids/crude_oil_still')/*.noBucket()*/.noBlock().displayName('Solution IV')

})