//still need to add luna, esiemo

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
        "cost": 16,
        "category": "Ultimate Lepic",
        "desc": "Modifies Grenade Throw to be charged up to 3 times. Grenade charges once whenever a certain amount of ammo is consumed."
        ,
        "skillOverrides": ["Explosive Stacks",0,0,0,0]
    },






    // "High-Voltage": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Ultimate Bunny",
    //     "desc": "Reduces the number of enemies that Thrill Bomb and Lightning Emission can strike. Increases Range and Damage instead.."
    // },
    // "Electric Charge": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 13,
    //     "category": "Ultimate Bunny",
    //     "desc": "Increases the landing damage after Rabbit Foot's Double Jump. Double Jump deals significantly increased damage after hitting enemies with the skill a certain number of times."
    // },
    // "Bionic Fuel": {
    //     "rarity": "Transcendant",
    //     "polarity": "Rutile",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Bunny",
    //     "desc": "Modifies Speed of Light to consume HP instead of MP."
    // },
    // "Superconductor": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Bunny",
    //     "desc": "Adds a debuff that reduces the enemy's ATK to the Electruction effect that Bunny inflicts."
    // },
    // "Electric Transition": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Bunny",
    //     "desc": "Modifies Speed of Light to recover Energy Shield continuously in proportion to the distance traveled."
    // },
    // "Electric Condense": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Bunny",
    //     "desc": "Changes Maximum Power into a form that causes damage around Bunny."
    // },





    // "Classic Chef": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Blair",
    //     "desc": "Pitmaster Skill Conversion. Modifies the increases to Firearm and Skill Critical Hit Rate to 5 based on the Flame Zone count. Using Deadly Cuisine increases the number of Flame Zones created to 4."
    // },
    // "Backdraft": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Blair",
    //     "desc": "Extinguish Skill Conversion. Flame Zone absorption significantly increases Weak Point ATK instead of Skill ATK."
    // },
    // "Truly Deadly Cuisine": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Blair",
    //     "desc": "Deadly Cuisine Skill Conversion. Significantly increases the damage of Giant Fireballs. When a Giant Fireball explodes, Small Fireballs and Flame Zones do not spawn."
    // },
    // "Incendiary Bomb": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Blair",
    //     "desc": "Blaze Up skill conversion. Throws a projectile forward that spawns a Flame Zone where it lands."
    // },
    // "Superconductive Bombing": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Kyle",
    //     "desc": "While airborne, continuously consumes Magnetic Force to drop bombs. The bombing stops when Magnetic Force is completely depleted, and additional damage from Magnetic Force is not triggered on collision."
    // },
    // "Diamagnetic Bulwark": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Kyle",
    //     "desc": "Instead of Magnetic Bulwark's projectile defense, knocks back enemies on contact. Recovers Magnetic Force based on the number of knockbacks."
    // },
    // "Self-Directed Eruption": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Kyle",
    //     "desc": "Consumes Magnetic Force every second when used to pull enemies in front of Kyle. Deals great damage to nearby enemies when the skill ends."
    // },
    // "Collision Instinct": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Kyle",
    //     "desc": "After a dash, inflicts Stun at the end of a knockback. However, stacks are removed and DEF Up effect is not applied."
    // },
    // "Singing Water": {
    //     "rarity": "Transcendant",
    //     "polarity": "Rutile",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Valby",
    //     "desc": "Laundry Bomb Skill Conversion. Spawns a Seduction of Water where the Launcher's bullet explodes. Until it is destroyed, the spawned Seduction of Water taunts surrounding monsters and inflicts the Laundry effect on them."
    // },
    // "Tidal Wave": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Valby",
    //     "desc": "Clean Up Skill Conversion. Does not leave watery trails when moving. When moving through a monster, inflicts skill damage on them. When the skill ends, deals AoE damage nearby."
    // },
    // "Supply Moisture": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Valby",
    //     "desc": "Water Intake Skill Conversion. While on water, increases Skill Critical Hit Rate, Skull Duration, and Firearm Attribute Status Effect Trigger Rate. Reduction of MP consumption does not apply."
    // },
    // "Water Play": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Valby",
    //     "desc": "Bubble Bullet skill conversion. Creates a rectangular-shaped pool of water in front."
    // },
    // "Spiral Tidal Wave": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Valby",
    //     "desc": "Bubbles no longer bounce off the ground, but are now projectiles fired forward. Attracts Gluttony's impurities."
    // },
    // "Hydro Pressure Bomb": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Valby",
    //     "desc": "Leaps forward without creating a Puddle and deals damage to the surrounding enemies on landing. The more enemies with Laundry, the more damage inflicted."
    // },
    // "Battlesuit Melting Nuts": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 13,
    //     "category": "Sharen",
    //     "desc": "Modifies Impact Rounds to be stackable. Modifies to reduce the enemys DEF instead of stunning them."
    // },
    // "Void Domination": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Sharen",
    //     "desc": "Increases the targeting range of Flash Shortsword. Increases enemy targeting speed."
    // },
    // "Overcharged Edge": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Sharen",
    //     "desc": "Modifies Active Camouflage to consue Energy Shields insted of MP. Ambush damage increase by the amount of Energy Shields consumed."
    // },
    // "Release Cutting Force": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Sharen",
    //     "desc": "Modifies Cutoff Beam so that it can be unleashed as Sword Aura."
    // },
    // "Absolute-Zero": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Ultimate Viessa",
    //     "desc": "When using skill, Ice Shackle is not inflicted. When the skill lands a Critical Hit, inflicts Frostbite on the target. Successfully inflicting Frostbite triggers Ice Sphere."
    // },
    // "Cold Cohesion": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Ultimate Viessa",
    //     "desc": "The number of Ice Spheres increases by 5, and the base cooldown is reduced by 5 seconds."
    // },
    // "Blood and Iron": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Gley",
    //     "desc": "Life Orbs can no longer be acquired with the Thirst effect. Instead, Power of Life can be obtained when attacks land Firearm or Skill Critical Hits."
    // },
    // "Predator Instinct": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Gley",
    //     "desc": "Modifies Firearm ATK to increase when firing a Firearm during Frenzied state."
    // },
    // "Massive Sanguification": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Gley",
    //     "desc": "Modifies Life Siphon to allow the absorption of Life Orbs during Non-Frenzied state."
    // },
    // "Super Senses": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 13,
    //     "category": "Gley",
    //     "desc": "Modifies the effects of Frenzied state's Maximize lethality during Increased Sensory. Fire Rate becomes fixed, but Weak Point ATK and Duration both increase."
    // },
    // "Demonic Modification": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 13,
    //     "category": "Ultimate Gley",
    //     "desc": "Unique Weapon has a fixed Fire Rate and consumes HP based on the duration of True Aim. Bullets deal additional damage proportional to the HP consumed, and attacking Weak Points increases chance of HP Recovery."
    // },
    // "Explosive Life": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Ultimate Gley",
    //     "desc": "The chance to create a Life Sphere is slightly increased. Detonates all nearby Life Spheres to deal damage instead of absorbing HP. Recovers Power of Life based on the number of Life Spheres exploded."
    // },
    // "Neurotoxin Synthesis": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Freyna",
    //     "desc": "Modifies the effects of Room 0 Trauma as follows: -Does not spread Poison. -Adds ATK reduction & Weaken Regeneration effects."
    // },
    // "Venom Synthesis": {
    //     "rarity": "Transcendant",
    //     "polarity": "Rutile",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Freyna",
    //     "desc": "Putrid Venom skill conversion. Leaves behind a Toxic Footprint after every step. Inflicts Poison on enemies coming in contact with Toxic Footprint."
    // },
    // "Toxic Stimulation": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Freyna",
    //     "desc": "Defense Mechanism skill conversion. Grants Plague Bodyarmor to surrounding allies."
    // },
    // "Contagion": {
    //     "rarity": "Transcendant",
    //     "polarity": "Rutile",
    //     "type": "Descendant",
    //     "cost": 17,
    //     "category": "Freyna",
    //     "desc": "When an enemy inflicted with Room 0 Trauma is killed, There is a contagion of Poison surrounding it."
    // },
    // "Attacking Compulsion": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Jayber",
    //     "desc": "Healing Turret skill conversion. When using skill, summons an Assault Turret. The summoned turret operates in the same way as the existing Assault Turrets."
    // },
    // "Medical Compulsion": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Jayber",
    //     "desc": "Assault Turret skill conversion. When using skill, summons a Healing Turret. The summoned turret operates in the same way as the existing Healing Turrets."
    // },
    // "Immedaite Purge Code": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Jayber",
    //     "desc": "Reactivate Skill Conversion. When using skill, instantly explodes all turrets and inflicts damage on nearby enemies. Creates Lightning AoE that deals continuous damage where the turrets exploded."
    // },
    // "Turret Engineering": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Jayber",
    //     "desc": "Multi-purpose Gun skill conversion. When using skill, recovers the HP of all summoned turrets and extends their duration. Does not switch turrets to Enhanced mode."
    // },
    
    // "Cold-Bloodedness": {
    //     "rarity": "Transcendant",
    //     "polarity": "Rutile",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Ultimate Viessa/Viessa",
    //     "desc": "Frost Road Skill Conversion. When using skill, increases Skill Power Modifier and decreases MP Cost and Skill Cooldown. Frost Roads are not created when moving."
    // },
    // "Cold Snap Watch": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Ultimate Viessa/Viessa",
    //     "desc": "Cold Snap skill conversion. Creates a Cold Snap zone in front that remains for a certain period of time. Enemies enterting the Cold Snap zone are inflicted wtih Ice Shackle and suffer continuous damage."
    // },
    // "Hypothermy": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Ultimate Viessa/Viessa",
    //     "desc": "When using skill, inflicts Ice Needle insted of Ice Shackle. When Ice Needle reaches a certain number of stacks, passive skills are triggered. Ice Needle: Continuous damage to the target. Damage increases as it stacks."
    // },
    // "Glacial Cloud": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Ultimate Viessa/Viessa",
    //     "desc": "Blizzard Skill conversion. Throws a projectile forward that spawns a blizzard where it lands."
    // },
    // "Void Barrier": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Ultimate Ajax",
    //     "desc": "Modifies Orbit Barrier to be portable. Changes barrier to be affected only by the caster's Skill Power."
    // },
    // "Life Barrier": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Ultimate Ajax",
    //     "desc": "Modifies the Orbit Barrier and Hyper Cube barrier to only be affected by the caster's HP."
    // },
    // "Body Enhancement": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 17,
    //     "category": "Ajax",
    //     "desc": "Void Energy is no longer available through Event Horizon. Increases DEF and Energy Shield proportionally to Max HP."
    // },
    // "Matrix Recomputation": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Ajax",
    //     "desc": "Modifies Expulsion to cast a buff that helps allies survive."
    // },
    // "Void Charge": {
    //     "rarity": "Transcendant",
    //     "polarity": "Almandine",
    //     "type": "Descendant",
    //     "cost": 15,
    //     "category": "Ajax",
    //     "desc": "Modifies Void Walk and Expulsion damage to increase proportionally to DEF."
    // },
    // "Void Explosion": {
    //     "rarity": "Transcendant",
    //     "polarity": "Cerulean",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Ajax",
    //     "desc": "On using Expulsion, decreases Sub Attack Cooldown and increases its Damage."
    // },
    


    // "Increased Efficiency": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Yujin",
    //     "desc": "Heals himself after using skill to heal allies a certain number of times."
    // },
    // "Duty and Sacrifice": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Yujin",
    //     "desc": "Grants Recovery and Recovery per Second to allies in the Squad and Party participating in the same mission."
    // },
    // "Increased Efficiency": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Yujin",
    //     "desc": "Inflicts Explosive Reaction. Deals damage to nearby enemies when the effect ends or the enemy dies. Inflicts the same effect to nearby enemies when the enemy dies."
    // },
    // "First Aid Kit": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Yujin",
    //     "desc": "Set up a First Aid Kit and grants First Aid to allies."
    // },




    // "First Aid Kit": {
    //     "rarity": "Transcendant",
    //     "polarity": "Xantic",
    //     "type": "Descendant",
    //     "cost": 16,
    //     "category": "Enzo",
    //     "desc": "Attaches a Combat Drone to himself. On Firearm Critical Hit attack, increases the drone's duration. Increases the Max Stacks of Explosive Drone."
    // },
    // "Reinforce Front Line": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Enzo",
    //     "desc": "Spawns a Front Line Reinforcement Device that grants a Firearm ATK Up to allies in range."
    // },
    // "Supply Firearm Enhancer": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Enzo",
    //     "desc": "Summons a Firearm Enhancement Device. Touching grants Weak Point Damage and Firearm Critical Hit Rate Up."
    // },
    // "Supply Tactical Armor": {
    //     "rarity": "Transcendant",
    //     "polarity": "Malachite",
    //     "type": "Descendant",
    //     "cost": 14,
    //     "category": "Enzo",
    //     "desc": "Whenever Enzo buffs an ally, he grants himself and all allies Incoming Damage DOWN and Movement Speed UP."
    // },
}