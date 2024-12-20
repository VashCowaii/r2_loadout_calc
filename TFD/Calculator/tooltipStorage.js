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


    "weakPointHitRateExplainer": "This modifies the rate at which you actually hit the weakpoint you are targeting. As such, it will act like crit rate does to crit damage, but to weak point damage, meaning your weak point hit rate will be averaged against your weak point damage that exceeds the base 1x multiplier.<br><br>This method of approximating hit rate is semi-flawed, but there aren't really any other reasonable ways to do this short of letting you specify on an individual level: which bullets hit or didn't.<br>This is the best compromise I can offer for now.",
    // "reactorNonAttribute": "Non-Attribute",
    // "reactorFire": "Fire",
    // "reactorElectric": "Electric",
    // "reactorChill": "Chill",
    // "reactorToxic": "Toxic",

    "queryType": "Choose what type of comparision you want to do. Leave it on abilities if you want to see ability related comparisons, or switch to Stat if you want to see character related statistics like MP or Shield/HP etc.<br><br>When left blank, the default type will be Abilities.",


    // "reactorDimension": "Dimension",
    // "reactorFusion": "Fusion",
    // "reactorSingular": "Singular",
    // "reactorTech": "Tech",


    "haileyZenithATKMulti": "Zenith gives a % multiplier to FirearmATK but it doesn't apply in the way you would think it should.<br><br>The multiplier applies after the attribute conversion base is calculated and only applies to physical damage so attributes will never benefit from the multiplier, and then it applies BEFORE faction ATK or type bonuses get added",
};  