console.info('Loading AE recipes...')

ServerEvents.recipes(event => {

  event.remove({id: "ae2:blasting/silicon_from_certus_quartz_dust"})
  event.remove({id: "ae2:smelting/silicon_from_certus_quartz_dust"})

  event.remove({id: "ae2:transform/certus_quartz_crystals"})

  event.remove({id: "ae2:inscriber/certus_quartz_dust"})

  event.remove({id: "ae2:inscriber/logic_processor_print"})
  event.remove({id: "ae2:inscriber/calculation_processor_print"})
  event.remove({id: "ae2:inscriber/engineering_processor_print"})
  event.remove({id: "ae2:inscriber/silicon_print"})

  event.remove({id: "ae2:network/blocks/inscribers"})
  event.remove({id: "ae2:network/blocks/crank"})

/*
quartz fiber */
  event.remove({id: "ae2:network/blocks/crystal_processing_charger"})
  event.remove({id: "ae2:network/blocks/io_condenser"})
  event.remove({id: "ae2:network/blocks/energy_energy_acceptor"})
  event.remove({id: "ae2:network/blocks/energy_vibration_chamber"})
  event.remove({id: "ae2:decorative/quartz_glass"})
  event.remove({id: "ae2:network/parts/quartz_fiber_part"})

  event.remove({id: "ae2:tools/misctools_charged_staff"})
  event.shaped('ae2:charged_staff', [
    '  I',
    ' I ',
    'QC '], {
    I: 'minecraft:iron_ingot',
    Q: 'minecraft:quartz',
    C: "powah:capacitor_basic_large"
  })

  event.shaped('ae2:charger', [
    'IPI',
    'I  ',
    'ICI'], {
    I: 'minecraft:iron_ingot',
    P: 'ae2:calculation_processor',
    C: 'ae2:certus_quartz_crystal'
  })

  event.shaped('ae2:condenser', [
    'IGI',
    'GPG',
    'IGI'], {
    I: 'minecraft:iron_ingot',
    G: 'ae2:quartz_glass',
    P: 'ae2:annihilation_core'
  })

  event.shaped('ae2:energy_acceptor', [
    'IGI',
    'GCG',
    'IGI'], {
    I: 'minecraft:iron_ingot',
    G: 'ae2:quartz_glass',
    C: 'createaddition:copper_spool'
  })

  event.recipes.thermal.smelter("ae2:quartz_glass", ['thermal:enderium_glass', "ae2:certus_quartz_dust"])
  /*event.shaped('4x ae2:quartz_glass', [
    'GDG',
    'DED',
    'GDG'], {
    D: '#ae2:all_quartz_dust',
    E: 'thermal:ender_pearl_dust',
    G: '#forge:glass'
  })*/

  event.recipes.thermal.smelter("ae2:quartz_fiber", ['thermal:enderium_glass', "ae2:fluix_dust"])
  /*event.shaped('3x ae2:quartz_fiber', [
    'GGG',
    'DED',
    'GGG'], {
    D: '#ae2:all_quartz_dust',
    E: 'thermal:enderium_glass',
    G: '#forge:glass'
  })*/

  event.shaped('ae2:inscriber', [
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

  printmaker("ae2:certus_quartz_crystal", "ae2:printed_calculation_processor")
  printmaker("minecraft:diamond", "ae2:printed_engineering_processor")
  printmaker("minecraft:emerald", "ae2:printed_logic_processor")
  printmaker("ae2:silicon", "ae2:printed_silicon")

  event.recipes.thermal.furnace(Item.of("ae2:silicon"), "ae2:certus_quartz_dust").energy(5000)
})