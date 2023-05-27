DimensionSkillEvents.register((event) => {
    // Player cannot access the nether
    event.restrict("minecraft:the_nether", (restrict) =>
      restrict.inaccessible()
    );
})