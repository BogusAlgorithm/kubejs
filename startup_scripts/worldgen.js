

WorldgenEvents.remove(event => {
    event.removeOres(ores => {
      ores.blocks = [ 'thermal:nickel_ore', 'thermal:apatite_ore', 'thermal:niter_ore' ]})
})