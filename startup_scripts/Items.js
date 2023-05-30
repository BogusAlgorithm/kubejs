
StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('kubejs:incomplete_glue','create:sequenced_assembly').maxStackSize(1)//.texture('create:item/super_glue.png')
    event.create('kubejs:incomplete_sturdy_plate','create:sequenced_assembly').maxStackSize(1)//.texture('thermal:item/lead_plate.png')
    event.create('kubejs:incomplete_gear_dye','create:sequenced_assembly').maxStackSize(1)
    event.create('kubejs:pulp','create:sequenced_assembly').maxStackSize(1)//.texture('thermal:item/sawdust.png')
    event.create('kubejs:incomplete_book').maxStackSize(1).displayName('Incomplete book').texture("minecraft:item/book")//.modelJson({"parent": "item/generated","textures": {"layer0" : "createaddition:item/iron_wire"}})
    
    //event.create('zinc_dust').texture("kubejs:item/zinc_dust").displayName('Zinc Dust')
    //event.create('brass_dust').texture("kubejs:item/brass_dust").displayName('Brass Dust')
    event.create('thermal:zinc_dust').texture("kubejs:item/zinc_dust").displayName('Zinc Dust')
    event.create('thermal:brass_dust').texture("kubejs:item/brass_dust").displayName('Brass Dust')

    event.create('silver_wire').texture("createaddition:item/silver_wire").modelJson({"parent": "item/generated","textures": {"layer0" : "createaddition:item/iron_wire"}}).displayName('Silver wire')

    event.create('crystallizer').texture("createaddition:item/diamond_grit").displayName('Crystallizer Compound')

    for (let i=0; i<16; i++)
    {
        event.create(`kubit_${i}`).texture(`kubejs:item/kubit_${i}`).displayName(`KubBit (${i})`).maxStackSize(1)
    }
    event.create(`kubit_16`).texture(`kubejs:item/kubit_16`).displayName(`KubByte (1)`).maxStackSize(1)
    event.create(`kubit_17`).texture(`kubejs:item/kubit_17`).displayName(`KubByte (2)`).maxStackSize(1)
    event.create(`kubit_18`).texture(`kubejs:item/kubit_18`).displayName(`Double KubByte`).maxStackSize(1)
})

ItemEvents.modification(event => {
    event.modify(/^ae2:.*_paint_ball$/, item => {
        item.maxStackSize = 1
    })

    event.modify("powah:charged_snowball", item => {
        item.maxStackSize = 1
    })
})