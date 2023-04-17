const $Event = Java.loadClass('net.minecraftforge.eventbus.api.Event')
ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$CreateFluidSourceEvent', event => {
  console.info('Water')

  event.setResult($Event.Result.DENY)
})