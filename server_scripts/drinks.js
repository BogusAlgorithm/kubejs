console.info('Loading Drinks recipes...')

ServerEvents.recipes(event => {
  event.remove({id: "drinkbeer:trade_box_normal"})

  event.remove({id: `/drinkbeer:beer_mug.*/`})

  let brewbeer = (output, input1, input2, input3) => {
    event.custom({
      "type": "drinkbeer:brewing",
      "ingredients": [
          { "item": "thermal:hops" },
          { "item": input1 },
          { "item": input2 },
          { "item": input3 }
      ],
      "cup": {
        "item": "drinkbeer:empty_beer_mug",
        "count": 4
      },
      "brewing_time": 6000,
      "result": output
    })
  }
  
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:1,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:water_bucket", "minecraft:wheat", "minecraft:wheat")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:2,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:water_bucket","minecraft:wheat", "minecraft:blaze_powder")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:3,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:water_bucket","minecraft:sugar", "minecraft:blaze_powder")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:4,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:water_bucket","minecraft:wheat", "minecraft:apple")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:5,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:water_bucket","minecraft:wheat", "minecraft:sweet_berries")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:6,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:water_bucket","minecraft:wheat", "minecraft:ice")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:7,spiceList:[I;14,12,6]}}}').toJson(), "minecraft:water_bucket","minecraft:bread", "minecraft:pumpkin")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:8,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:milk_bucket","minecraft:egg", "minecraft:beetroot")
  brewbeer(Item.of('drinkbeer:mixed_beer', 4, '{BlockEntityTag:{MixedBeer:{beerId:9,spiceList:[I;5,5,6]}}}').toJson(), "minecraft:water_bucket","minecraft:bread", "minecraft:bone")
  
  //TeaMod
  event.remove({id: "teamod:mortar_and_pestle"})
  event.recipes.create.filling("teamod:water_cup", [Fluid.of("minecraft:water", 500), "teamod:empty_cup"])
  event.replaceInput({id: "teamod:full_tea_cup"}, "teamod:ground_tea_leaves", "thermal:tea")
  event.replaceInput({id: "teamod:full_coffee_cup"}, "teamod:coffee_grounds", "thermal:coffee_seeds")
  //Drops from mod plants change!!!
})