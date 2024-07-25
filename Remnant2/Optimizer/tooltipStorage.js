const tooltipStorage = {
    //"elementID": "tooltip text here",
    "threadCountTooltip": "How many CPU threads should we use to speed up the query?<br>More = Faster, most of the time.<br><br>Refer to your CPU core count as a general rule of thumb. Too many threads opened when your computer can't handle it, will only slow it down. Monitor your CPU and RAM usage while a query is in effect, to see if you're using too much.",
    "lastFound": "This is simply a number that represents within the total possible combos, when the last loadout was found with an equivalent or better value. The number might change between query to query due to how multithreading works, it might be found sooner or later under performance considerations at the time.",
    "currentlySupportedDamageCalcs": `Breakdowns will be visible when the target stat is <b>DPS (Custom)</b> or <b>Total Damage (Custom)</b>
    <br><br>Breakdowns toggles will NOT display unless the item is <b>LOCKED</b>, or the ability is selected.<br>
    <ul>
    <li>Melee Damage</li>
    <li>Havoc Form (Archon)</li>
    <li>Way of Kaeula (Invoker)</li>
    <li>Heavy Weapon: Vulcan (Engineer)</li>
    <li>Heavy Weapon: Flamethrower (Engineer)</li>
    <li>Heavy Weapon: Impact Cannon (Engineer)</li>
    <li>Firestorm (mod)</li>
    <li>Heatwave (mod)</li>
    <li>Sandstorm (Monolith mod)</li>
    </ul>IF YOU WANT MORE BREAKDOWNS JOIN MY DISCORD AND HELP ME. I am NOT going to do all the damage breakdowns by myself, I can very much use help with in-game testing.`,
    "evaluatedExplainer": "This is the amount of combinations that actually got calculated all the way through, due to either the combos not having any dependencies, or if they did then all dependencies were met, unlike Smart Skips.",
    "smartSkipExplainer": `<span>Smart Skips</span> are basically failed dependencies.<br><br>Say a combo uses an item, but the item has a conditional that wouldn't be met using the other items in that combo, it will skip it and move on to the next combo because there is no point trying to evaluate/calculate what is guaranteed to be a suboptimal combination, right? I'll give some examples:
    <ul>
    <li>Generating Band needs shield in order to provide healing. No shield = skip</li>
    <li>Anastasija's Inspiration needs healing in order to provide Haste. No healing = skip</li>
    <li>Hardened Coil needs 50%HP to give a full bonus. No half-health restriction item = skip</li>
    <li>Difference Engine needs shield in order to give damage/lifesteal. No shield = skip</li>
    </ul>
    And many, MANY other such cases, you get the idea.<br><br>
    Right now I only have dependencies set up for the following effects/requirements:
    <ul>
    <li>HalfHealthSource</li>
    <li>Burden</li>
    <li>Status</li>
    <li>Shield</li>
    <li>Healing</li>
    <li>Relic Healing</li>
    <li>Lifesteal</li>
    <li>Bulwark</li>
    <li>Active Summons</li>
    <li>Team Members</li>
    <li>Perfect Dodge</li>
    <li>Grey Health Active</li>
    <li>Bleed</li>
    <li>Elemental</li>
    <li>Acid</li>
    <li>Shock</li>
    <li>Fire</li>
    </ul>
    `,
    "swingsMeleeHolder": "<span>This only matters when an attack type has BOTH a regular swing AND a bonus effect.</span><br>If that is the case, then while this is toggled, it will still include the main swings of the physical attacks themselves. If this is disabled, then only when an attack has bonus effects, will it exclude the regular attacks from calculations. You'd turn this off if you want to see how much a bonus effect does without the physical swings skewing the numbers. Turning this off will automatically turn on the Effects toggle, as at least one form of damage must be factored at all times.",
    "bonusEffectMeleeHolder": "When an attack type has both a regular physical swing AND a bonus effect, leaving this toggled will include bonus effects within damage calculations. If you want to know the damage of a special weapon without its special effects, turn this off. Turning this off will automatically turn on the Swings toggle, as at least one form of damage must be factored at all times.",
    "weakspotEnableHolderBox": "Determines if Weakspot damage will be factored into calculations or not. If toggled on, all damage will be assumed as weakspot damage where applicable.<br>Will not force weakspot damage on items or attacks that cannot weakspot to begin with.<br><br><span>Burden of the Gambler</span> will disable weakspots and this toggle while equipped and enabled.<br><span>Godsplitter</span> will still assume weakspot hits even if this toggle is disabled by any means.",
    "critEnableHolderBox": "Determines if crit chance and crit damage will be factored into calculations or not. If toggled on, crit damage bonuses are <span>averaged</span> against your applicable crit chance, before being applied as a damage bonus.",
    "turretModeExplainer": "If you have a turret-based skill active, leaving this off will assume the calcs should work out Carried damage as though the user were actively firing the weapon.<br>When toggled on, calcs will always work out the turret mode's damage instead."
};