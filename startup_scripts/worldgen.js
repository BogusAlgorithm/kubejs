

WorldgenEvents.remove(event => {
  
    event.removeOres(props => {
      //much like ADDING ores, this supports filtering by worldgen layer...
      props.worldgenLayer = 'underground_ores'
  
      props.blocks = ['thermal:nickel_ore', 'thermal:apatite_ore', 'thermal:niter_ore',]
    })
})