console.info('Loading AE recipes...')

ServerEvents.recipes(event => {

  event.remove({id: "ae2:blasting/silicon_from_certus_quartz_dust"})
  event.remove({id: "ae2:smelting/silicon_from_certus_quartz_dust"})
  event.remove({type: "smelting", output: "ae2:sky_stone_block"})

  event.remove({id: "ae2:transform/certus_quartz_crystals"})

  event.remove({id: "ae2:inscriber/certus_quartz_dust"})

  event.remove({id: "ae2:inscriber/logic_processor_print"})
  event.remove({id: "ae2:inscriber/calculation_processor_print"})
  event.remove({id: "ae2:inscriber/engineering_processor_print"})
  event.remove({id: "ae2:inscriber/silicon_print"})

  event.remove({id: "ae2:network/blocks/inscribers"})
  event.remove({id: "ae2:network/blocks/crank"})
  event.remove({id: "ae2:network/cables/glass_fluix"})
  
  event.remove({id: `/ae2:tools/paintballs_.*/`})
  Color.DYE.forEach(color => {
    global.doughnut(`4x ae2:${color}_paint_ball`, `minecraft:${color}_dye`, "ae2:matter_ball")
    event.recipes.thermal.smelter(`ae2:${color}_lumen_paint_ball`,[`ae2:${color}_paint_ball`, "minecraft:redstone", "minecraft:glowstone_dust"]).energy(2000)
  })

  event.remove({id: "ae2:network/blocks/crystal_processing_charger"})
  event.remove({id: "ae2:network/blocks/io_condenser"})
  event.remove({id: "ae2:network/blocks/energy_energy_acceptor"})
  event.remove({id: "ae2:network/blocks/energy_vibration_chamber"})
  event.remove({id: "ae2:decorative/quartz_glass"})
  event.remove({id: "ae2:network/parts/quartz_fiber_part"})

  event.recipes.create.mixing("ae2:sky_dust", ["#forge:dusts/certus_quartz", "#forge:dusts/obsidian", "thermal:lead_dust", "thermal:lead_dust"])
  event.recipes.thermal.smelter("ae2:sky_stone_block", "ae2:sky_dust").energy(10000)
 
  event.remove({id: "ae2:tools/misctools_charged_staff"})
  event.shaped('ae2:charged_staff', [
    '  I',
    ' I ',
    'QC '], {
    I: 'minecraft:iron_ingot',
    Q: 'minecraft:quartz',
    C: "createaddition:capacitor"
  })

  event.remove({id: "ae2:network/parts/toggle_bus"})
  event.shaped('ae2:toggle_bus', [
    'G',
    'L',
    'R'], {
    G: 'ae2:fluix_glass_cable',
    L: 'minecraft:lever',
    R: "minecraft:redstone"
  })

  event.recipes.create.mechanicalCrafting('ae2:charger', [
    'IPI',
    'I  ',
    'ICI'], {
    I: 'minecraft:iron_ingot',
    P: 'ae2:calculation_processor',
    C: 'ae2:certus_quartz_crystal'
  })

  global.CrisCrosCraftMech('ae2:condenser', 'minecraft:iron_ingot', 'ae2:quartz_glass', 'ae2:annihilation_core')/*
  event.shaped('ae2:condenser', [
    'IGI',
    'GPG',
    'IGI'], {
    I: 'minecraft:iron_ingot',
    G: 'ae2:quartz_glass',
    P: 'ae2:annihilation_core'
  })*/

  global.CrisCrosCraftMech('ae2:energy_acceptor', 'minecraft:iron_ingot', 'ae2:quartz_glass', 'createaddition:gold_spool')/*
  event.shaped('ae2:energy_acceptor', [
    'IGI',
    'GCG',
    'IGI'], {
    I: 'minecraft:iron_ingot',
    G: 'ae2:quartz_glass',
    C: 'createaddition:copper_spool'
  })*/
 
  event.custom({
      "type": "ae2:transform",
      "circumstance": {
        "type": "fluid",
        "tag": "minecraft:water"
      },
      "ingredients": [
        {
          "item": "ae2:charged_certus_quartz_crystal"
        },
        {
          "item": "ae2:flawed_budding_quartz"
        }
      ],
      "result": {
        "item": "ae2:flawless_budding_quartz"
      }
  })

  event.recipes.thermal.smelter("2x ae2:quartz_glass", ['thermal:enderium_glass', "ae2:certus_quartz_dust"])
  event.recipes.thermal.smelter("4x ae2:quartz_fiber", ['thermal:enderium_glass', "ae2:fluix_dust"])
  event.recipes.thermal.smelter("2x ae2:fluix_glass_cable", ['ae2:quartz_fiber', "ae2:fluix_crystal"])

  event.recipes.thermal.furnace(Item.of("ae2:silicon"), "ae2:certus_quartz_dust").energy(5000)

  event.recipes.thermal.pulverizer(Item.of("ae2:certus_quartz_dust"), Item.of("ae2:certus_quartz_crystal"))
  event.recipes.thermal.pulverizer(Item.of("ae2:fluix_dust"), Item.of("ae2:fluix_crystal"))

  event.recipes.create.mechanicalCrafting('ae2:inscriber', [
    'IDI',
    'LNE',
    'IQI'], {
    I: 'thermal:iron_plate',
    D: 'minecraft:diamond',
    E: 'minecraft:emerald',
    L: 'minecraft:lapis_lazuli',
    Q: 'ae2:certus_quartz_crystal',
    N: 'minecraft:ender_pearl'
  })

  let printmaker = (input, output) => {
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "middle": {
            "item": input
          }
    },
    "mode": "inscribe",
    "result": {
      "item": output
      }
    })
  }

  printmaker("minecraft:book", "ae2:guide")
  printmaker("ae2:certus_quartz_crystal", "ae2:printed_calculation_processor")
  printmaker("minecraft:diamond", "ae2:printed_engineering_processor")
  printmaker("minecraft:emerald", "ae2:printed_logic_processor")
  printmaker("ae2:silicon", "ae2:printed_silicon")
})