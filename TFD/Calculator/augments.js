//still need to add luna, esiemo

let localInsertionAugments = localCheck ? {} : customAugmentsLocal;
const augments = {
    "": {
        "rarity": "Empty",
        "polarity": "Empty",
        "type": "Descendant",
        "cost": 0,
        "category": "",
        "desc": "Select a mod in the dropdown above.",
        "stats": {},
        "usesConditional": {},
        "skillOverrides": [0,0,0,0,0]
    },

    //Lepic
    "Nerve Infiltration": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 14,
        "category": "Lepic",
        "desc": "Overclock no longer inflicts Burn. Inflicts Weaken Regeneration instead.",
        "skillOverrides": [0,"Nerve Infiltration",0,0,0]
    },
    "Regenerative Braking": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 15,
        "category": "Lepic",
        "desc": "Chance to recover MP when using a skill.",
        "skillOverrides": [0,0,0,0,"Regenerative Braking"]
    },
    "Power Unit Change": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 15,
        "category": "Lepic",
        "desc": "Overclock no longer increases Skill Power Modifier. Increases Firearm ATK instead.",
        "skillOverrides": [0,"Power Unit Change",0,0,0]
    },
    "Increased Efficiency": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 17,
        "category": "Lepic",
        "desc": "MP is no longer consumed while Overkill is active. It consumes MP when attacking with Unique Weapon. It recovers MP when Unique Weapon lands a Critical Hit.",
        "skillOverrides": [0,0,0,"Increased Efficiency",0]
    },
    "Firearm Master": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 15,
        "category": "Ultimate Lepic",
        "desc": "Reloading weapon increases Skill Range.<br>Changing weapon increases Skill Power Modifier.<br><br>Remove's Close Call's effect",
        "stats": {
            "PowerModifierBase": 0.39,
        },
        "skillOverrides": [0,0,0,0,"Firearm Master"]
    },
    "Explosive Stacks": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 6,
        "category": "Ultimate Lepic",
        "desc": "Modifies Grenade Throw to be charged up to 3 times. Grenade charges once whenever a certain amount of ammo is consumed.",
        "skillOverrides": ["Explosive Stacks",0,0,0,0]
    },
    
    //Bunny
    "High-Voltage": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 15,
        "category": "Ultimate Bunny",
        "desc": "Reduces the number of enemies that Thrill Bomb and Lightning Emission can strike. Increases Range and Damage instead.",
        "skillOverrides": ["High-Voltage",0,"High-Voltage",0,0]
    },
    "Electric Charge": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 13,
        "category": "Ultimate Bunny",
        "desc": "Increases the landing damage after Rabbit Foot's Double Jump. Double Jump deals significantly increased damage after hitting enemies with the skill a certain number of times.",
        "skillOverrides": [0,0,0,0,"Electric Charge"]
    },
    "Bionic Fuel": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Bunny",
        "desc": "Decreases speed of Speed of Light, but consumes HP instead of MP.",
        "skillOverrides": [0,"Bionic Fuel",0,0,0]
    },
    "Superconductor": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Bunny",
        "desc": "Adds an effect that reduces the enemy's ATK to the Electrocution effect that Bunny inflicts.",
        "skillOverrides": ["Superconductor",0,"Superconductor",0,0]
    },
    "Electric Transition": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 14,
        "category": "Bunny",
        "desc": "Decreases Electricity Charge amount during Speed of Light, but recovers Shield continuously in proportion to the distance traveled.",
        "skillOverrides": [0,"Electric Transition",0,0,0]
    },
    "Electric Condense": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Bunny",
        "desc": "Changes Maximum Power into a form that causes damage around Bunny.",
        "skillOverrides": [0,0,0,"Electric Condense",0]
    },
    //Kyle
    "Superconductive Bombing": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Kyle",
        "desc": "While airborne, continuously consumes Magnetic Force to drop bombs. The bombing stops when Magnetic Force is completely depleted, and additional damage from Magnetic Force is not triggered on collision. Airborne duration increases as the Skill Duration increases, but the base airborne duration decreases.",
        "skillOverrides": [0,0,0,"Superconductive Bombing",0]
    },
    "Diamagnetic Bulwark": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 14,
        "category": "Kyle",
        "desc": "Instead of Magnetic Bulwark's projectile defense, knocks back enemies on contact. Recovers Magnetic Force based on the number of knockbacks.",
        "skillOverrides": [0,"Diamagnetic Bulwark",0,0,0]
    },
    "Self-Directed Eruption": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 15,
        "category": "Kyle",
        "desc": "Consumes Magnetic Force every second when used to pull enemies in front of Kyle. Deals great damage to nearby enemies when the skill ends, but removes the ally Shield recovery effect.",
        "skillOverrides": [0,0,"Self-Directed Eruption",0,0]
    },
    "Collision Instinct": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Kyle",
        "desc": "After a dash, inflicts Stun at the end of a knockback. However, DEF increase is not applied.",
        "skillOverrides": ["Collision Instinct",0,0,0,0]
    },
    //Esiemo
    "Explosive Evade": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Esiemo",
        "desc": "Spawns a Guided Landmine when rolling.",
        "skillOverrides": [0,0,0,0,"Explosive Evade"]
    },
    "Cluster Bomb": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 14,
        "category": "Esiemo",
        "desc": "Detonating an attached bomb creates additional Explosives at the detonated location.",
        "skillOverrides": [0,"Cluster Bomb",0,0,0]
    },
    "Explosive Propaganda": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 14,
        "category": "Esiemo",
        "desc": "Generates Explosive Propaganda. The generated Explosive Propaganda taunts nearby monsters until destroyed, upon which it explodes and causes great damage to nearby enemies.",
        "skillOverrides": [0,0,"Explosive Propaganda",0,0]
    },
    "Creative Explosion": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Esiemo",
        "desc": "After a dash, uses up all available bombs to inflict great damage to nearby enemies. The more bombs available, the greater the damage inflicted.",
        "skillOverrides": [0,"Creative Explosion",0,"Creative Explosion",0]
    },

    //Freyna
    "Neurotoxin Synthesis": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 6,
        "category": "Freyna",
        "desc": "Modifies the effects of Room 0 Trauma. Does not spread Poison, but inflicts ATK reduction and Weaken Regeneration.",
        "skillOverrides": ["Neurotoxin Synthesis","Neurotoxin Synthesis","Neurotoxin Synthesis","Neurotoxin Synthesis","Neurotoxin Synthesis"]
    },
    "Venom Synthesis": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 4,
        "category": "Freyna",
        "desc": "Putrid Venom skill conversion. Each time you move, create Toxic Footprints in the area you traversed. Enemies that touch the Toxic Footprints are afflicted with Room 0 Trauma.",
        "skillOverrides": [0,0,"Venom Synthesis",0,0]
    },
    "Toxic Stimulation": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 5,
        "category": "Freyna",
        "desc": "Defense Mechanism skill conversion. Grants Plague Bodyarmor to surrounding allies.",
        "skillOverrides": [0,"Toxic Stimulation",0,0,0]
    },
    "Venom Injection": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 4,
        "category": "Ultimate Freyna",
        "desc": "When using skill, continuously consumes resources to give self Toxic Sense. While Toxic Sense is active, hitting an enemy with a firearm or a Skill inflicts Corrosion.",
        "skillOverrides": [0,"Venom Injection",0,0,0]
    },
    "Contagion": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 7,
        "category": "Freyna",
        "desc": "When an enemy inflicted with Room 0 Trauma is killed, it infects nearby enemies with Room 0 Trauma.",
        "skillOverrides": ["Contagion","Contagion","Contagion","Contagion","Contagion"]
    },
    "Toxic Mixture": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 6,
        "category": "Ultimate Freyna",
        "desc": "NOT CALCULATED. YET.<br>Modifies the Room 0 Trauma effect to Necrosis. Firearm ATK increases with the number of Necrosis stacks.",
        "skillOverrides": [0,0,0,0,0]
    },

    //JAYBER
    "Attacking Compulsion": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 9,
        "category": "Jayber",
        "desc": "When using skill, summons an Assault Turret instead. The summoned turret operates in the same way as your other Assault Turret.",
        "skillOverrides": ["Attacking Compulsion","Attacking Compulsion",0,0,0]
    },
    "Medical Compulsion": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Jayber",
        "desc": "When using skill, summons a Medical Turret instead. The summoned turret operates in the same way as your other Medical Turret.",
        "skillOverrides": ["Medical Compulsion","Medical Compulsion",0,0,0]
    },
    "Immediate Purge Code": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 6,
        "category": "Jayber",
        "desc": "When using skill, instantly explodes all turrets and inflicts damage on nearby enemies. Creates Lightning AoE that deals continuous damage where the turrets exploded.",
        "skillOverrides": [0,0,0,"Immediate Purge Code",0]
    },
    "Turret Engineering": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 4,
        "category": "Jayber",
        "desc": "When using skill, recovers the HP of all summoned turrets and extends their duration.",
        "skillOverrides": [0,0,"Turret Engineering",0,0]
    },

    //HAILEY
    "Supercooled Kuiper Round": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 3,
        "category": "Hailey",
        "desc": "Equipping a Unique Weapon decreases Additional Firearm ATK and Fire Rate, but increases Weak Point Damage and successfully attacking Weak Points recovers Shield instead of MP. The increase in Weak Point Damage decreases when firing a Unique Weapon, but increases again on a successful Weak Point Attack.",
        "skillOverrides": [0,0,0,"Supercooled Kuiper Round",0]
    },
    "Cryogenic Cluster Shot": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 6,
        "category": "Hailey",
        "desc": "Modifies the Cryo effect to Cryogenic, reducing the number of maximum stacks and effect strength, but dealing additional AoE damage to nearby enemies when the effect is removed.",
        "skillOverrides": ["Cryogenic Cluster Shot",0,0,0,0]
    },

    //VIESSA
    "Absolute-Zero": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 4,
        "category": "Ultimate Viessa",
        "desc": "When using skill, Ice Shackle is not inflicted. When the skill lands a Critical Hit, inflicts Frostbite on the target. Successfully inflicting Frostbite triggers Ice Sphere.",
        "skillOverrides": ["Absolute-Zero","Absolute-Zero","Absolute-Zero","Absolute-Zero","Absolute-Zero"]
    },
    "Cold Cohesion": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 4,
        "category": "Ultimate Viessa",
        "desc": "The number of Ice Spheres increases to 5, and the base cooldown is reduced by 5 seconds.",
        "skillOverrides": [0,0,0,0,"Cold Cohesion"]
    },
    "Cold-Bloodedness": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 5,
        "category": "Viessa",
        "desc": "When using skill, increases Skill Power and decreases Skill Cost and Skill Cooldown. Frost Roads are not created when moving.",
        "skillOverrides": [0,"Cold-Bloodedness",0,0,0]
    },
    "Cold Snap Watch": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 5,
        "category": "Viessa",
        "desc": "Creates a Cold Snap zone in front that remains for a certain period of time. Enemies enterting the Cold Snap zone are inflicted wtih Ice Shackle and suffer continuous damage.",
        "skillOverrides": [0,0,"Cold Snap Watch",0,0]
    },
    "Hypothermia": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 6,
        "category": "Viessa",
        "desc": "When using skill, inflicts Ice Needle instead of Ice Shackle. When Ice Needle reaches a certain number of stacks, passive skills are triggered.<br>Ice Needle: Continuous damage to the target. Damage increases as it stacks.",
        "skillOverrides": ["Hypothermia","Hypothermia","Hypothermia","Hypothermia","Hypothermia"]
    },
    "Glacial Cloud": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 4,
        "category": "Viessa",
        "desc": "Throws a projectile forward that spawns a blizzard where it lands.",
        "skillOverrides": [0,0,0,"Glacial Cloud",0]
    },

    //LUNA
    "Singer's Mercy": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 5,
        "category": "Luna",
        "desc": "When using skill, sets up a Speaker that grants buffs to allies within range.",
        "skillOverrides": [0,"Singer's Mercy","Singer's Mercy","Singer's Mercy",0]
    },
    "Aggressive Melody": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 5,
        "category": "Luna",
        "desc": "Changes Passionate Stage and Delightful Stage effects to increase Firearm Damage and Weak Point Damage.",
        "skillOverrides": [0,"Aggressive Melody",0,"Aggressive Melody",0]
    },
    "Nimble Footsteps": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 4,
        "category": "Luna",
        "desc": "Granting a buff to allies increases Luna's Movement Speed and Skill Range.",
        "skillOverrides": [0,0,0,0,"Nimble Footsteps"]
    },
    "Noise Surge": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 7,
        "category": "Luna",
        "desc": "When using skills, deals damage to nearby enemies but doesn't buff allies. Grants a stackable buff to Luna that is enhanced with each stack.",
        "skillOverrides": ["Noise Surge","Noise Surge","Noise Surge","Noise Surge","Noise Surge"]
    },

    //SHAREN
    "Battlesuit Melting Rounds": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 3,
        "category": "Sharen",
        "desc": "Modifies to stackable skill. Decreases the enemy's Electric Resistance and DEF instead of stunning them.",
        "skillOverrides": [0,0,"Battlesuit Melting Rounds",0,0]
    },
    "Void Domination": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 4,
        "category": "Sharen",
        "desc": "Increases the targeting range of Flash Shortsword. Increases enemy targeting speed.",
        "skillOverrides": [0,0,0,"Void Domination",0]
    },
    "Overcharged Edge": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 4,
        "category": "Sharen",
        "desc": "Modifies Active Camouflage to consume Shields insted of MP. Ambush damage increases by the amount of Shields consumed.",
        "skillOverrides": [0,"Overcharged Edge",0,0,"Overcharged Edge"]
    },
    "Release Cutting Force": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 6,
        "category": "Sharen",
        "desc": "Modifies Cutoff Beam so that it can be unleashed as Sword Aura.",
        "skillOverrides": ["Release Cutting Force",0,0,0,0]
    },
    "Ambushed": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 3,
        "category": "Ultimate Sharen",
        "desc": "Modifies so that killing an enemy in Active Camouflage returns the user to the same state. In Active Camouflage, agility increases, and Shock Bomb skill is converted to an attack skill.",
        "skillOverrides": [0,"Ambushed","Ambushed",0,"Ambushed"]
    },
    "Area Suppression": {
        "rarity": "Transcendant",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 3,
        "category": "Ultimate Sharen",
        "desc": "Changes the skill to scatter Shortswords around. Each Shortsword deals independent damage.",
        "skillOverrides": [0,0,0,"Area Suppression",0]
    },

    //BLAIR
    "Classic Chef": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 6,
        "category": "Blair",
        "desc": "Modifies the increase to Skill Critical Hit Rate to 7 based on the Flame Zone count. Using Deadly Cuisine increases the number of Flame Zones created to 5.",
        "skillOverrides": ["Classic Chef",0,0,"Classic Chef","Classic Chef"]
    },
    "Backdraft": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 4,
        "category": "Blair",
        "desc": "MP Heal increases Weak Point Damage and Firearm ATK instead of Skill Power. Flame Zones increase Firearm Crit factors instead of Skill.",
        "skillOverrides": ["Backdraft","Backdraft",0,"Backdraft","Backdraft"]
    },
    "Truly Deadly Cuisine": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 5,
        "category": "Blair",
        "desc": "Significantly increases the damage of Giant Fireball. When Giant Fireball explodes, Small Fireballs and Flame Zones do not spawn.",
        "skillOverrides": [0,0,0,"Truly Deadly Cuisine",0]
    },
    "Incendiary Bomb": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 6,
        "category": "Blair",
        "desc": "Throws a projectile forward that spawns a Flame Zone where it lands.",
        "skillOverrides": ["Incendiary Bomb",0,0,0,0]
    },

    //INES
    "Plasma Ball": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 3,
        "category": "Ines",
        "desc": "Removes the increase Skill Critical Hit Rate bonus. Instead, creates a barrier of plasma at regular intervals.",
        "skillOverrides": [0,0,0,0,"Plasma Ball"]
    },
    "Time of the Hunting Hounds": {
        "rarity": "Transcendant",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 5,
        "category": "Ines",
        "desc": "Changes to a skill that quickly dashes toward enemies. Deals damage and inflicts Conductor on all enemies in the path. Reduces the number of bounces on Chain Lighthing and modifies it to be stackable. Modifies the arches type of the modified skills to Tech.",
        "skillOverrides": ["Time of the Hunting Hounds",0,"Time of the Hunting Hounds",0,0]
    },

    //GLEY
    "Predator Instinct": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 6,
        "category": "Gley",
        "desc": "Using a firearm while Frenzied gradually increases Firearm ATK.",
        "skillOverrides": ["Predator Instinct",0,0,0,0]
    },
    "Blood and Iron": {
        "rarity": "Transcendant",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 5,
        "category": "Gley",
        "desc": "Life Spheres can no longer be acquired with the Thirst effect. Instead, Power of Life can be obtained when attacks land Firearm Critical Hits.",
        "skillOverrides": [0,0,0,0,"Blood and Iron"]
    },
    "Massive Sanguification": {
        "rarity": "Transcendant",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 6,
        "category": "Gley",
        "desc": "Modifies Life Siphon to allow the absorption of Life Spheres during the Non-Frenzied state.",
        "skillOverrides": [0,"Massive Sanguification",0,0,0]
    },
    "Explosive Life": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 6,
        "category": "Gley",
        "desc": "The chance to create a Life Sphere is slightly increased. Detonates all nearby Life Spheres to deal damage instead of absorbing HP. Recovers Power of Life based on the number of spheres exploded.",
        "skillOverrides": [0,"Explosive Life",0,0,"Explosive Life"]
    },
    "Demonic Modification": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 3,
        "category": "Gley",
        "desc": "Unique Weapon has a fixed Fire Rate and consumes HP based on the duration of True Aim. Bullets deal additional damage proportional to the HP consumed, and attacking Weak Points increases the chance of HP Recovery.",
        "skillOverrides": [0,0,0,"Demonic Modification",0]
    },
    "Super Senses": {
        "rarity": "Transcendant",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 3,
        "category": "Gley",
        "desc": "Modifies the effects of Frenzied state's Maximize Lethality. Fire Rate becomes fixed, but Duration increases significantly.",
        "skillOverrides": [0,0,"Super Senses",0,0]
    },



    //SERENA
    // "Divine Surge": {
    //     "rarity": "Transcendant",
    //     "polarity": "Rutile",
    //     "type": "Descendant",
    //     "cost": 3,
    //     "category": "Serena",
    //     "desc": "Flies forward, inflicting Knockback on enemnies in the path and deals large amounts of damage on landing. Additionally, creates a path of fire in her wake that deals continuous damage to enemies within range.",
    //     "skillOverrides": [0,0,0,0,0] //0,0,0,"Divine Surge",0
    // },
    // "Hymn": {
    //     "rarity": "Transcendant",
    //     "polarity": "Rutile",
    //     "type": "Descendant",
    //     "cost": 5,
    //     "category": "Serena",
    //     "desc": "When used on the ground, creates a zone that increases the Jump of allies. When used in midair, temporarily increases the Movement Speed of nearby allies.",
    //     "skillOverrides": [0,0,0,0,0] //0,0,"Hymn",0,0
    // },
    ...localInsertionAugments
}