// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

//const $SA = Java.loadClass('net.minecraft.world.item.Items.stone_axe')

StartupEvents.registry('enchantment', event => {
	// Register new items here
	
	//event.create('cust_enchant').displayName('Custom enchant').fishingRod.canEnchant(stack => stack.item instanceof $SA || stack.id == "minecraft:stone_axe")
})

//Item.of('minecraft:raw_iron').enchant('kubejs:washed', 1).weakNBT())