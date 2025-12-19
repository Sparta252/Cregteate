// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.tags('item', event => {
  event.add('createdeco:internal/plates/brass_plates', 'gtceu:brass_plate')
  event.add('createdeco:internal/nuggets/brass_nuggets', 'gtceu:brass_nugget')
  event.add('forge:dusts/salt', 'chemlib:sodium_chloride_dust')
})

ServerEvents.tags('fluid', event => {
  event.add('forge:fluorine', 'chemlib:fluorine_fluid')
  event.add('forge:gases', 'chemlib:fluorine_fluid')
})

console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    [Fluid.of('gtceu:fluorine', 1000)],   // OUTPUT
    [Fluid.of('chemlib:fluorine_fluid', 1000)]  // INPUT
  );
  event.recipes.create.mixing(
    [Fluid.of('gtceu:fluorine', 1000)],
    ['16x chemlib:fluorine']
  );
});
