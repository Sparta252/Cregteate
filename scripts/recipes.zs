import crafttweaker.api.recipe.type.SmeltingRecipe;
import crafttweaker.api.recipe.CraftingTableRecipeManager;

furnace.addRecipe("glass", <item:minecraft:glass>, <tag:items:minecraft:smelts_to_glass>, 1.0, 30);
craftingTable.addShaped("better_chest", <item:minecraft:chest>*2, [ [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>], [<tag:items:minecraft:logs>, <item:minecraft:air>, <tag:items:minecraft:logs>], [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>]]);
#craftingTable.addShaped("better_chest", <item:minecraft:arrow>, [
#    [<item:minecraft:diamond>, <item:minecraft:diamond>],
#    [<item:minecraft:air>, <item:minecraft:flint>],
#    [<item:minecraft:air>, <item:minecraft:flint>]
#]);
