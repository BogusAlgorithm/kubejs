console.info('Loading AE recipes...')

ServerEvents.recipes(event => {

    event.remove({id: "ae2:blasting/silicon_from_certus_quartz_dust"})
    event.remove({id: "ae2:smelting/silicon_from_certus_quartz_dust"})

    event.remove({id: "ae2:transform/certus_quartz_crystals"})

    event.remove({id: "ae2:inscriber/logic_processor_print"})
    event.remove({id: "ae2:inscriber/calculation_processor_print"})
    event.remove({id: "ae2:inscriber/engineering_processor_print"})
    event.remove({id: "ae2:inscriber/silicon_print"})

    event.remove({id: "ae2:network/blocks/inscribers"})
    event.remove({id: "ae2:network/blocks/crank"})

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