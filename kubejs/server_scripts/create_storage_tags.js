ServerEvents.tags('block', event => {
  event.add('create:chest_mounted_storage', [
    'ironchest:obsidian_chest',
    'ironchest:crystal_chest',
    'ironchest:diamond_chest',
    'ironchest:gold_chest',
    'ironchest:iron_chest',
    'ironchest:copper_chest'
  ])
})
