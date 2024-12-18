const tooltipStorage = {
    //"elementID": "tooltip text here",

    "character": "Remove the input in order to select another character",
    "immobileUptimeExplainer": "This directly modifies the bonus of the Dangerous Ambush (Immobile) module within the calculator.<br><br>If you only deal damage when the boss is downed, then you have 100% uptime and as such get the full benefit. If you only deal damage 20% of the time when the boss is downed then the base power ratio bonus is adjusted to 20% of its normal value.<br><br>Doing this doesn't get us realistic damage numbers on an individual level, but it does help us better see on an average perspective the actual value of the mod.",

    "allowWPExplainer": "This only means that if a weak point hit can happen, you will let it.<br><br>Say you select body shots on Devourer under Enemy Settings, it obviously isn't possible for weak point hits to happen anymore so they are disabled by default.<br>However, if you swap to Devourer's Shoulder as your target, the shoulder itself is a weak point and unless you disable this toggle, it will always assume a shot against the shoulder IS a weak point hit.<br><br>So again, weak point hits will be automatically determined by the calculator based on your enemy and part selections available, this setting only exists to forcibly turn off weak point hits in every possible scenario if you want that.",
    "allowCritsExplainer": "Crits are automatically determined by your crit rate and crit damage, so if you have a crit rate of 0 then the averaged damage for any given source will automatically disable crits.<br><br>HOWEVER, if for whatever reason you want to assume that no crits can happen ever even if you had 100% crit rate, you can toggle this off to completely disable crits on both skills and firearms.",
    "allowTypeBonusExplainer": "Similar to the weak point toggle, physical Type bonuses such as Crush, Pierce, or Burst are automatically factored into all weapon math based on your enemy and part selected under the Enemy tab.<br>This also means the calculator will adjust the amount of the bonus based on whether you're targeting a colossi or not which is important.<br><br>HOWEVER, if for whatever reason you want to assume that no type bonus can occur, and it's a horrible fuckin idea to ever do this, but you can disable this toggle to completely turn off all type bonuses anywhere in the calculator.",

    "totalShotsFiredWeapons": "The total amount of shots fired by the weapon in the given interval or magazine.<br><br>Note that the total shots fired CAN be different than the actual magazine size due to effects that reduce bullet costs or give infinite ammo within a certain duration.",
    "totalMagazineWeapons": "The total magazine size of this weapon after bonuses. Even if this shows a decimal, the true magazine value is floored so a mag of 33.5 will round down to 33 usable shots instead.<br><br><span>totalMagazine = Floor(weaponBaseMag * (1 + RoundsPerMagazineBonuses))</span>",
    "avgPerShotWeapons": "This is the averaged damage per shot of the already averaged damage of all shots fired. That may sound like a silly distinction but the average damage per shot CAN change as time goes on and other effects are applied or expired.",
    "totalAVGWeapons": "This is the sum total of all averaged damage between every shot including attribute bonuses, added together.",
    "playerCountExplainer": "The amount of players active in a session can directly modify various stats on enemies, such as Max HP and Shield",
    "gunCritResExplainer": "This is the enemy's resistance to Firearm-based critical hits, acting as a multiplier against you.<br><br>So if you have 50% crit chance, then a 10% crit res would take away 10% of 50% so 5%, leaving you with 45% instead.<br>Crit res from your target is automatically factored against your end total crit chance.",
    "skillCritResExplainer": "This is the enemy's resistance to Skill-based critical hits, acting as a multiplier against you.<br><br>So if you have 50% crit chance, then a 10% crit res would take away 10% of 50% so 5%, leaving you with 45% instead.<br>Crit res from your target is automatically factored against your end total crit chance.",
    "resistTargetExplainer": "This allows you to target an enemy and the calculator will automatically use the target's resistances, crit resistances, and so forth and apply them to damage calculations as needed.",
    "partTargetExplainer": "This allows you to target a specific part on the enemy. So say you're shooting Devourer, what part are you shooting? His body? His shoulder? Specify it.<br><br>If you select a weak point as your target, then the weapon damage will be assumed as weak point hits.<br><br>Physical type bonuses(crush, pierce, burst) are automatically adjusted and factored based on the enemy type and part selected.",


    "reactorLevelExplainer": "Reactors can range from level 0, unenhanced, up to level 5. Both regular reactors and ultimate reactors can reach level 2, but only ultimate reactors can reach level 5.",
    "ultimateReactorExplainer": "When toggled on this tells the calculator your reactor is Ultimate, meaning the optimization bonus will be 60% instead of 40%.<br><br>When swapping to a new weapon selection in the Weapon tab, this toggle will be flipped on or off automatically based on the weapon's rarity.",
    "weaponConditionExplainer": "Leave this toggled on if you want to include the weapon optimization condition. On regular reactors, this is a 40% bonus whereas on Ultimate reactors a 60% bonus.",
    "reactorAmmoTypeExplainer": "This is automatically adjusted as you select new weapons in the calculator.<br>To select a weapon, open the \"Weapon\" tab.<br><br>However, there are some skills that can be modified by this selection, like Lepic's Overkill or Freyna's Baptism that have ammotype dependent fire rate options.",


    // "reactorNonAttribute": "Non-Attribute",
    // "reactorFire": "Fire",
    // "reactorElectric": "Electric",
    // "reactorChill": "Chill",
    // "reactorToxic": "Toxic",


    // "reactorDimension": "Dimension",
    // "reactorFusion": "Fusion",
    // "reactorSingular": "Singular",
    // "reactorTech": "Tech",




    "currentlySupportedDamageCalcs": `Breakdowns will not display unless the item is equipped<br>
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
    "weakspotEnableHolderBox": "Determines if Weakspot damage will be factored into calculations or not. If toggled on, all damage will be assumed as weakspot damage where applicable.<br>Will not force weakspot damage on items or attacks that cannot weakspot to begin with.<br><br><span>Burden of the Gambler</span> will disable weakspots and this toggle while equipped and enabled.<br><span>Godsplitter</span> will still assume weakspot hits even if this toggle is disabled by any means.",
    "critEnableHolderBox": "Determines if crit chance and crit damage will factored into calculations or not. If toggled on, crit damage bonuses are <span>averaged</span> against your applicable crit chance, before being applied as a damage bonus.",
    "averageDPSExplainerMelee": "<span>This is averaged in two ways.</span><br>The first of which is that we average the damage of the entire combo and all its entities(projectiles, bonus effects, whatever you left enabled), across the entire duration of the combo. This means that technically the DPS is ONLY true when you evaluate the full combo, but if you evaluate any other length, shorter or longer, it can and will likely be wrong.<br>The second of which is that we are taking any active crit damage bonuses, and averaging them against your applicable crit rate before adding it in as another multiplicative damage bonus.<br><br>On top of that, we don't account for time limits on certain bonuses yet. So if you have Invader's 'Wormhole' ability selected and enabled, it will skew the numbers quite drastically on the DPS side, but will be fully accurate on the 'Highest Hit/Crit' statistic display.<br><br>TLDR: You still need to use at least two brain cells when considering these stats.",
    "highestHitMeleeHolder": "This is the highest hit any single attack(or bonus effect) can do within this given combo type. Does include weakspot factors if enabled, but does NOT include crit bonuses.",
    "highestCritMeleeHolder": "<span>NEEDS CRITS ENABLED</span><br>This is the highest hit any single attack(or bonus effect) can do within this given combo type. Includes weakspot bonuses if enabled, and includes MAXIMUM crit damage bonuses available from your loadout, this not averaged against your crit chance. This way it will display the actual highest crit value you would see on screen within your game.",
    "swingsMeleeHolder": "<span>This only matters when an attack type has BOTH a regular swing AND a bonus effect.</span><br>If that is the case, then while this is toggled, it will still include the main swings of the physical attacks themselves. If this is disabled, then only when an attack has bonus effects, will it exclude the regular attacks from calculations. You'd turn this off if you want to see how much a bonus effect does without the physical swings skewing the numbers. Turning this off will automatically turn on the Effects toggle, as at least one form of damage must be factored at all times.",
    "bonusEffectMeleeHolder": "When an attack type has both a regular physical swing AND a bonus effect, leaving this toggled will include bonus effects within damage calculations. If you want to know the damage of a special weapon without its special effects, turn this off. Turning this off will automatically turn on the Swings toggle, as at least one form of damage must be factored at all times.",
    "meleeComboDurationHolder": "This is the shortest possible, BASE length for this combo of the given attack type. Shortest meaning this value is the length of the combo when continuously chained into other combos, with no excess animations.<br><br>If this attack type is a backstep variant, then this time also includes the duration of the backstep itself. If you're in the flop range, the evade length is somewhere around 1.266s, otherwise the length is around 0.4s.",
    "meleeModifiedDurationHolder": "This is the base duration, modified by attack speed.<br><span>EndDuration = BaseDuration/(1+AttackSpeed)</span><br><br>If the attack type is a backstep variant, then you subtract the duration of the evade action from the base duration first, then modify the duration by attack speed, then add the evade duration back into the equation while modifying it by Evade Speed.<br><span>EndDuration = ((BaseDuration-EvadeDuration)/(1+AttackSpeed)) + EvadeDuration/(1+EvadeSpeed)</span>"

};  