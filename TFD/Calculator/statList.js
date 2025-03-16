const greatTableKnowerOfAll = {
    "": 0,
    "HP": 0,"HP%": 0,
    "HPRecovery": 0,
    "HPHeal": 0,//same as outgoing heal
    "isHPSetTo1": 0,
    "boostHPFromShield": 0,

    "DEF": 0,"DEF%": 0,
    "boostDEFFromHP": 0,

    "Shield": 0,"Shield%": 0,
    "ShieldRecovery": 0,
    "ShieldInCombat": 0, "ShieldOutCombat": 0,
    "isShieldSetTo1": 0,
    "boostShieldFromHP": 0,

    "IncomingDamage": 1,//same as incdmgfinal
    "CritResist": 0,

    "MP": 0,"MP%": 0,
    "MPRecovery": 0,
    "MPInCombat": 0, "MPOutCombat": 0,

    "SprintSpeedBonus": 0,

    //SKILL LOGISTICS
    "SkillCost": 0,
    "SkillCooldown": 0,
    "SkillDuration": 0,
    "SkillRange": 0,

    //OBSCUR MOD REFERENCES FOR CHECKS
    "LastStandActive": 0,

    "SkillPowerBaseValue": 0,
    //BASE OPTIMIZATION POWER BONUS
    "PowerOptimization": 0,"PowerOptimizationCORE": 0,//core bonuses are not applied to unique weapons. This isn't actually from a core, rather something like Secret Garden, but it needs to skip unique weapons so we use CORE suffix here
    "CharacterSkillMultiplier": 0,//for use with dynamic scaling skill dependent modifiers for the getTotalSkillPower function. Otherwise, this stat should always be 0, shit will break if that is not the case.
    //SKILL ATK BONUSES
    "SkillAttackColossus": 0,
    "SkillAttackColossus%": 0,
    //SKILL POWER BOOST RATIOS
    "PowerRatioBase": 0,
    "PowerRatioNonAttribute": 0,"PowerRatioElectric": 0,"PowerRatioToxic": 0,"PowerRatioChill": 0,"PowerRatioFire": 0,
    "PowerRatioTech": 0,"PowerRatioDimension": 0,"PowerRatioSingular": 0,"PowerRatioFusion": 0,
    //SKILL POWER MODIFIER BOOSTS
    "PowerModifierBase": 0,
    "PowerModifierTech": 0,"PowerModifierDimension": 0,"PowerModifierSingular": 0,"PowerModifierFusion": 0,
    "PowerModifierFire": 0,"PowerModifierChill": 0,"PowerModifierToxic": 0,"PowerModifierElectric": 0,"PowerModifierNonAttribute": 0,

    //SKILL CRIT
    "SkillCritRate": 0,"SkillCritDamage": 0,
    "SkillCritRateBaseBonus": 0,"SkillCritDamageBaseBonus": 0,
    
    "OutgoingDamageMod": 1,


    //RESISTANCE AND IMMUNITY
    "ResistanceFire": 0,"ResistanceFire%": 0,"ImmunityBurn": 0,
    "ResistanceElectricity": 0,"ResistanceElectricity%": 0,"ImmunityElectrocution": 0,
    "ResistanceToxin": 0,"ResistanceToxin%": 0,"ImmunityPoison": 0,
    "ResistanceChill": 0,"ResistanceChill%": 0,"ImmunityFrostbite": 0,



    "EnemyRecovery": 1,
    "SubAttackPower": 0,



    //GUNS
    "ColossusATK": 0,"ColossusATKCORE": 0,
    "ColossusATK%": 0,"ColossusATK%CORE": 0,
    "VulgusATK": 0,"VulgusATKCORE": 0,
    "VulgusATK%": 0,"VulgusATK%CORE": 0,
    "FirearmATK%": 0,"FirearmATK%CORE": 0,
    "ExplosiveATK%": 0,"ExplosiveATK%CORE": 0,
    "ExplosionRadius%": 0,"ExplosionRadius%CORE": 0,
    "FirearmATK%OnHit": 0,"FirearmATK%OnHitCORE": 0,
    "TypeBonus": 0,"TypeBonusCORE": 0,
    "BaseWeakPointBonus": 0,"BaseWeakPointBonusCORE": 0,
    "WeakPointDamage%": 0,"WeakPointDamage%CORE": 0,
    "WeakPointOverride": 0,"WeakPointOverrideCORE": 0,

    "MultiShotChance": 0,"MultiShotChanceCORE": 0,
    "MultiShotChanceBASE": 0,"MultiShotChanceBASECORE": 0,
    "MultiShotDamage": 0,"MultiShotDamageCORE": 0,
    "MultiShotDamageBASE": 0,"MultiShotDamageBASECORE": 0,

    "WeaponUniqueMultiplier": 0,"WeaponUniqueMultiplierCORE": 0,//this is for stuff like hailey's zenith or beam multipliers
    "independentScalar": 0,"independentScalarCORE": 0,//this is for flat nonscaling amounts that get added in after type and faction, but before crit and weak point, like last dagger
    "BulletCostWeaponMagazineOverride": 0,"BulletCostWeaponMagazineOverrideCORE": 0,

    "BulletCostWeapon": 1,"BulletCostWeaponCORE": 0,
    "ShellCapacity": 0,"ShellCapacityCORE": 0,
    "ShellCapacityBase": 0,"ShellCapacityBaseCORE": 0,
    "StatusTriggerRate": 0,"StatusTriggerRateCORE": 0,
    "StatusTriggerRateBase": 0,"StatusTriggerRateBaseCORE": 0,

    "FireRate": 0,"FireRateCORE": 0,
    "FireRateOverride": 0,
    "FireRateMulti": 0,"FireRateMultiCORE": 0,
    "BeamChargeSpeed": 0,"BeamChargeSpeedCORE": 0,
    "Accuracy": 1,"AccuracyCORE": 1,
    "Recoil": 1,"RecoilCORE": 1,
    "ReloadSpeed": 0,"ReloadSpeedCORE": 0,
    "MagazineSize": 0,"MagazineSizeCORE": 0,
    "SkipReload": 0,"SkipReloadCORE": 0,

    "SwapSpeed": 0,"SwapSpeedCORE": 0,

    "FireATK": 0,"FireATKCORE": 0,
    "FireATK%": 0,"FireATK%CORE": 0,//% only is conversion btw
    "FireATK%Bonus": 0,"FireATK%BonusCORE": 0,
    "ToxicATK": 0,"ToxicATKCORE": 0,
    "ToxicATK%": 0,"ToxicATK%CORE": 0,
    "ToxicATK%Bonus": 0,"ToxicATK%BonusCORE": 0,
    "ChillATK": 0,"ChillATKCORE": 0,
    "ChillATK%": 0,"ChillATK%CORE": 0,
    "ChillATK%Bonus": 0,"ChillATK%BonusCORE": 0,
    "ElectricATK": 0,"ElectricATKCORE": 0,
    "ElectricATK%": 0,"ElectricATK%CORE": 0,//enhancement
    "ElectricATK%Bonus": 0,"ElectricATK%BonusCORE": 0,//priority/gunbarrel

    "FirearmCritRate": 0,"FirearmCritRateCORE": 0,
    "FirearmCritRateBase": 0,"FirearmCritRateBaseCORE": 0,
    "FirearmCritDamage": 0,"FirearmCritDamageCORE": 0,
    "FirearmCritDamageBase": 0,"FirearmCritDamageBaseCORE": 0,

    //COLOSSUS/ENEMY MODIFIERS APPLIED BY PLAYERS
    "enemyCritResistReductionFirearm": 0,
    "enemyCritResistReductionSkill": 0,

    "enemyDEFResistanceReduction": 0,"enemyDEFResistanceReductionCORE": 0,
    "enemyNonAttributeResistanceReduction": 0,"enemyNonAttributeResistanceReductionCORE": 0,
    "enemyElectricResistanceReduction": 0,"enemyElectricResistanceReductionCORE": 0,
    "enemyToxicResistanceReduction": 0,"enemyToxicResistanceReductionCORE": 0,
    "enemyChillResistanceReduction": 0,"enemyChillResistanceReductionCORE": 0,
    "enemyFireResistanceReduction": 0,"enemyFireResistanceReductionCORE": 0,

}