
StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('kubejs:incomplete_glue','create:sequenced_assembly').maxStackSize(1).texture('create:item/super_glue.png')
    event.create('kubejs:pulp','create:sequenced_assembly').maxStackSize(1).texture('thermal:item/sawdust.png')
    
    event.create('zinc_dust').texture("kubejs:item/zinc_dust").displayName('Zinc Dust')
    event.create('brass_dust').texture("kubejs:item/brass_dust").displayName('Brass Dust')

    event.create('crystallizer').texture("createaddition:item/diamond_grit").displayName('Crystallizer Compound')

})