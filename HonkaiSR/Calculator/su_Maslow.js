const allNeedsKeys = [
    "SPD",

    "Quantum","Wind","Physical","Lightning","Fire","Ice","Imaginary",

    "EffectRES","EHR",

    "HP",
    "DEF","RES",
    "ATK",
    "CritDMG","CritRate",
    "Skill","Ultimate","Basic","FUA","DOT","All",
    "Break",

    "FUASource","MemoSource","HealingSource","ShieldSource","SummonSource","SummonAssign","ReviveSource","AdditionalDMG","True",
    "ConsumeSource",
    "WeaknessImplant",

    "Shred","PEN","Vuln","Debuff","Buff",
    "TargetAllies","Aggro",

    "Advance",
    "Shield","Healing","EnergyRegen","Cleanse",
    "SkillPoints",
    "TeamCountChange",
    "DamageReduction",
]



const maslowFrontFacingTags = {
    "SPD": "SPD",

    "Quantum": "Damage: Quantum",
    "Wind": "Damage: Wind",
    "Physical": "Damage: Physical",
    "Lightning": "Damage: Lightning",
    "Fire": "Damage: Fire",
    "Ice": "Damage: Ice",
    "Imaginary": "Damage: Imaginary",

    "EffectRES": "Effect RES",
    "EHR": "Effect Hit Rate",

    "HP": "HP",
    "DEF": "DEF",
    "ATK": "ATK",
    "CritDMG": "Crit Damage",
    "CritRate": "Crit Rate",
    "Skill": "Damage: Skill",
    "Ultimate": "Damage: Ultimate",
    "Basic": "Damage: Basic ATK",
    "FUA": "Damage: Follow-up Attack",
    "DOT": "Damage: DOT",
    "All": "Damage: All",
    "Break": "Break Effect Bonuses",

    "FUASource": "Can use Follow-ups",
    "MemoSource": "Can use Memosprites",
    "HealingSource": "Can Heal",
    "ShieldSource": "Can Shield",
    "SummonSource": "Has Summon",
    "SummonAssign": "Can assign Summon",
    "ReviveSource": "Can Revive",

    "Shred": "DEF Shred",
    "PEN": "RES PEN/Reduction",
    "Vuln": "Vulnerability",
    "Debuff": "Debuff Source",
    "Buff": "Buff Source",
    "TargetAllies": "Targets Allies",

    "Advance": "Action Advance",
    "Shield": "Shield Bonus",
    "Healing": "Healing Bonus",
    "EnergyRegen": "Energy Regeneration",
    "Cleanse": "Cleanse Source",
    "SkillPoints": "Skill Point Modification",
    "TeamCountChange": "Team Count Modification",
    "DamageReduction": "Damage Reduction",
}
const maslowDisplayTagsReversed = {};
for (let maslowKey in maslowFrontFacingTags) {
    const currentValue = maslowFrontFacingTags[maslowKey];
    maslowDisplayTagsReversed[currentValue] = maslowKey;
}




// const isGeneralSupport = ["HP","DEF","EffectRES"];
const isGeneralSupport = ["HP","EffectRES"];
const isHealer = ["Healing"];
const isShielder = ["Shield"];
const isCritCharacter = ["CritDMG","CritRate"];
const characterDealsDamage = ["Shred","PEN","Vuln","Debuff","Buff","All","True"];
const wantsBreak = ["Break"];
const generalCharacterWants = ["Advance","SPD"];
const characterHasEnergy = ["EnergyRegen"];
const DOTATKBased = ["ATK","EHR","DOT"];
const hasFUA = ["FUA"];





const maslowCategoryRelics = {
    "Genius of Brilliant Stars": {
        2: {
            gives: ["Quantum"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Shred"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Eagle of Twilight Line": {
        2: {
            gives: ["Wind"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Advance"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Sacerdos\' Relived Ordeal": {
        2: {
            gives: ["SPD"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["CritDMG"],
            wants: [],
            // wants: ["TargetAllies"],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Wavestrider Captain": {
        2: {
            gives: ["CritDMG"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["ATK"],
            givesTeam: [],
            wants: [],
            wantsTeam: ["TargetAllies"],
            addTeamWant: [],
        }
    },
    "Scholar Lost in Erudition": {
        2: {
            gives: ["CritRate"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Skill","Ultimate"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Watchmaker, Master of Dream Machinations": {
        2: {
            gives: ["Break"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["Break"],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Champion of Streetwise Boxing": {
        2: {
            gives: ["Physical"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["ATK"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Band of Sizzling Thunder": {
        2: {
            gives: ["Lightning"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["ATK"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Musketeer of Wild Wheat": {
        2: {
            gives: ["ATK"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["SPD","Basic"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Firesmith of Lava-Forging": {
        2: {
            gives: ["Fire"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Skill","Fire"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Hunter of Glacial Forest": {
        2: {
            gives: ["Ice"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["CritDMG"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Knight of Purity Palace": {
        2: {
            gives: ["DEF"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Shield"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Passerby of Wandering Cloud": {
        2: {
            gives: ["Healing"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["SkillPoints"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Messenger Traversing Hackerspace": {
        2: {
            gives: ["SPD"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["SPD"],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Poet of Mourning Collapse": {
        2: {
            gives: ["Quantum"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["CritRate"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Prisoner in Deep Confinement": {
        2: {
            gives: ["ATK"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Shred"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "The Ashblazing Grand Duke": {
        2: {
            gives: ["FUA"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["ATK"],
            givesTeam: [],
            wants: ["FUASource"],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "The Wind-Soaring Valorous": {
        2: {
            gives: ["ATK"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["CritRate","Ultimate"],
            givesTeam: [],
            wants: ["FUASource"],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Iron Cavalry Against the Scourge": {
        2: {
            gives: ["Break"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Shred"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Hero of Triumphant Song": {
        2: {
            gives: ["ATK"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["SPD","CritDMG"],
            givesTeam: [],
            wants: ["MemoSource"],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Guard of Wuthering Snow": {
        2: {
            gives: ["DamageReduction"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Healing"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Thief of Shooting Meteor": {
        2: {
            gives: ["Break"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Break","EnergyRegen"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Wastelander of Banditry Desert": {
        2: {
            gives: ["Imaginary"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["CritRate","All"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Longevous Disciple": {
        2: {
            gives: ["HP"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["CritRate"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Pioneer Diver of Dead Waters": {
        2: {
            gives: ["All"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["CritRate","CritDMG"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Warrior Goddess of Sun and Thunder": {
        2: {
            gives: ["SPD"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["SPD"],
            givesTeam: ["CritDMG"],
            wants: ["HealingSource"],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "World-Remaking Deliverer": {
        2: {
            gives: ["CritRate"],
            givesTeam: [],
            wants: [],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["HP","All"],
            wants: ["MemoSource"],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
    "Self-Enshrouded Recluse": {
        2: {
            gives: ["Shield"],
            givesTeam: [],
            wants: ["ShieldSource"],
            wantsTeam: [],
            addTeamWant: [],
        },
        4: {
            gives: ["Shield"],
            givesTeam: ["CritDMG"],
            wants: ["ShieldSource"],
            wantsTeam: [],
            addTeamWant: [],
        }
    },
}

const maslowCategoryPlanars = {
    //PLANAR SETS
    "Rutilant Arena": {
        gives: ["CritRate","Basic","Skill"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Inert Salsotto": {
        gives: ["CritRate","FUA","Ultimate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Broken Keel": {
        gives: ["EffectRES"],
        givesTeam: ["CritDMG"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Lushaka, the Sunken Seas": {
        gives: ["EnergyRegen"],
        givesTeam: ["ATK"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Penacony, Land of the Dreams": {
        gives: ["EnergyRegen"],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Sprightly Vonwacq": {
        gives: ["EnergyRegen","Advance"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Forge of the Kalpagni Lantern": {
        gives: ["SPD","Break"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Belobog of the Architects": {
        gives: ["DEF"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Talia: Kingdom of Banditry": {
        gives: ["Break"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Space Sealing Station": {
        gives: ["ATK"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Fleet of the Ageless": {
        gives: ["HP"],
        givesTeam: ["ATK"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Izumo Gensei and Takama Divine Realm": {
        gives: ["ATK","CritRate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Bone Collection's Serene Demesne": {
        gives: ["HP","CritDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Pan-Cosmic Commercial Enterprise": {
        gives: ["EHR","ATK"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Celestial Differentiator": {
        gives: ["CritDMG","CritRate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Duran, Dynasty of Running Wolves": {
        gives: ["CritDMG","FUA"],
        givesTeam: [],
        wants: ["FUASource"],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Sigonia, the Unclaimed Desolation": {
        gives: ["CritDMG","CritRate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Firmament Frontline: Glamoth": {
        gives: ["ATK","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Giant Tree of Rapt Brooding": {
        gives: ["SPD","Healing"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Revelry by the Sea": {
        gives: ["ATK","DOT"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Wondrous BananAmusement Park": {
        gives: ["CritDMG"],
        givesTeam: [],
        // wants: ["SummonSource"],
        // wantsTeam: ["SummonAssign"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Arcadia of Woven Dreams": {
        gives: ["All"],
        givesTeam: [],
        wants: [],
        wantsTeam: ["TeamCountChange"],
        addTeamWant: [],
    },
    "Amphoreus, The Eternal Land": {
        gives: ["CritRate"],
        givesTeam: ["SPD"],
        wants: ["MemoSource"],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Tengoku@Livestream": {
        gives: ["CritDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },



    
}

const maslowLightconesDestruction = {
    //DESTRUCTION
    //5star
    "A Thankless Coronation": {
        gives: ["CritDMG","ATK"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Brighter Than the Sun": {
        gives: ["CritRate","ATK","EnergyRegen"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Dance at Sunset": {
        gives: ["CritDMG","FUA"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Flame of Blood, Blaze My Path": {
        gives: ["HP","Healing","ConsumeSource","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "I Shall Be My Own Sword": {
        gives: ["CritDMG","Shred"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "On the Fall of an Aeon": {
        gives: ["ATK","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Something Irreplaceable": {
        gives: ["ATK","All","HealingSource"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Unreachable Side": {
        gives: ["HP","All","CritRate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Thus Burns the Dawn": {
        gives: ["SPD","Shred","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Whereabouts Should Dreams Rest": {
        gives: ["Break","Vuln","Debuff"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //4star
    "A Secret Vow": {
        gives: ["All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "A Trail of Bygone Blood": {
        gives: ["CritRate","Skill","Ultimate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Flames Afar": {
        gives: ["All","HealingSource"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Indelible Promise": {
        gives: ["Break","CritRate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Ninja Record: Sound Hunt": {
        gives: ["HP","CritDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Nowhere to Run": {
        gives: ["ATK","HealingSource"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Moles Welcome You": {
        gives: ["ATK"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Under the Blue Sky": {
        gives: ["ATK","CritRate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Woof! Walk Time!": {
        gives: ["ATK","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //3star
    "Collapsing Sky": {
        gives: ["Basic","Skill"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Mutual Demise": {
        gives: ["CritRate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Shattered Home": {
        gives: ["All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
}
const maslowLightconesHarmony = {
    //DESTRUCTION
    //5star
    "A Grounded Ascent": {
        gives: ["EnergyRegen"],
        givesTeam: ["All","SkillPoints"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "But the Battle Isn't Over": {
        gives: ["EnergyRegen"],
        givesTeam: ["All","SkillPoints"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Earthly Escapade": {
        gives: ["CritDMG"],
        givesTeam: ["CritDMG","CritRate"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Epoch Etched in Golden Blood": {
        gives: ["ATK"],
        givesTeam: ["Skill","SkillPoints"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Flowing Nightglow": {
        gives: ["ATK","EnergyRegen"],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "If Time Were a Flower": {
        gives: ["CritDMG","EnergyRegen"],
        givesTeam: ["CritDMG"],
        wants: ["FUASource"],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Past Self in Mirror": {
        gives: ["Break"],
        givesTeam: ["All","SkillPoints","EnergyRegen"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //4star
    "Carve the Moon, Weave the Clouds": {
        gives: [],
        givesTeam: ["ATK","CritDMG","EnergyRegen"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Dance! Dance! Dance!": {
        gives: ["Advance"],
        givesTeam: ["Advance"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Dreamville Adventure": {
        gives: [],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "For Tomorrow's Journey": {
        gives: ["ATK","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "In Pursuit of the Wind": {
        gives: [],
        givesTeam: ["Break"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Memories of the Past": {
        gives: ["Break","EnergyRegen"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Past and Future": {
        gives: [],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Planetary Rendezvous": {
        gives: [],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Poised to Bloom": {
        gives: ["ATK"],
        givesTeam: ["CritDMG"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Forever Victual": {
        gives: ["ATK"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //3star
    "Chorus": {
        gives: [],
        givesTeam: ["ATK"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Mediation": {
        gives: [],
        givesTeam: ["SPD"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Meshing Cogs": {
        gives: ["EnergyRegen"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
}
const maslowLightconesPreservation = {
    //DESTRUCTION
    //5star
    "Inherently Unjust Destiny": {
        gives: ["DEF","CritDMG"],
        givesTeam: ["Debuff","Vuln"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Moment of Victory": {
        gives: ["DEF","EHR","Aggro"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "She Already Shut Her Eyes": {
        gives: ["HP","EnergyRegen"],
        givesTeam: ["HealingSource","All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Texture of Memories": {
        gives: ["EffectRES","DamageReduction","ShieldSource"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Though Worlds Apart": {
        gives: ["ATK"],
        givesTeam: ["All","HealingSource"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //4star
    "Concert for Two": {
        gives: ["DEF","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Day One of My New Life": {
        gives: ["DEF","RES"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Destiny's Threads Forewoven": {
        gives: ["EffectRES","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Journey, Forever Peaceful": {
        gives: ["Shield"],
        givesTeam: ["All"],
        wants: ["ShieldSource"],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Landau's Choice": {
        gives: ["Aggro","DamageReduction"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "This Is Me!": {
        gives: ["DEF","Ultimate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Trend of the Universal Market": {
        gives: ["DEF"],
        givesTeam: ["Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "We Are Wildfire": {
        gives: [],
        givesTeam: ["DamageReduction","HealingSource"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //3star
    "Amber": {
        gives: ["DEF"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Defense": {
        gives: ["HealingSource"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Pioneering": {
        gives: ["HealingSource"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
}
const maslowLightconesErudition = {
    //5star
    "An Instant Before A Gaze": {
        gives: ["CritDMG","Ultimate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Before Dawn": {
        gives: ["CritDMG","Skill","Ultimate","FUA"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Eternal Calculus": {
        gives: ["ATK","SPD"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Into the Unreachable Veil": {
        gives: ["CritRate","Skill","Ultimate"],
        givesTeam: ["SkillPoints"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Life Should Be Cast to Flames": {
        gives: ["EnergyRegen","All"],
        givesTeam: ["Shred"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Night on the Milky Way": {
        gives: ["ATK","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Ninjutsu Inscription: Dazzling Evilbreaker": {
        gives: ["Break","EnergyRegen","Advance"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Yet Hope Is Priceless": {
        gives: ["CritRate","FUA","Shred"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //4star
    "A Dream Scented in Wheat": {
        gives: ["CritRate","Ultimate","FUA"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "After the Charmony Fall": {
        gives: ["Break","SPD"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Geniuses' Repose": {
        gives: ["ATK","CritDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Make the World Clamor": {
        gives: ["EnergyRegen","Ultimate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Birth of the Self": {
        gives: ["FUA"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Day The Cosmos Fell": {
        gives: ["ATK","CritDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Great Cosmic Enterprise": {
        gives: ["ATK","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Seriousness of Breakfast": {
        gives: ["ATK","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Today Is Another Peaceful Day": {
        gives: ["All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //3star
    "Data Bank": {
        gives: ["Ultimate"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Passkey": {
        gives: ["EnergyRegen"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Sagacity": {
        gives: ["ATK"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
}
const maslowLightconesRemembrance = {
    //5star
    "Long May Rainbows Adorn the Sky": {
        gives: ["SPD"],
        givesTeam: ["ConsumeSource","Vuln"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Make Farewells More Beautiful": {
        gives: ["HP","Shred","Advance"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Memory's Curtain Never Falls": {
        gives: ["SPD"],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "This Love, Forever": {
        gives: ["SPD"],
        givesTeam: ["Vuln","CritDMG"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Time Woven Into Gold": {
        gives: ["SPD","CritDMG","Basic"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "To Evernight's Stars": {
        gives: ["HP","All","EnergyRegen"],
        givesTeam: ["Shred"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //4star
    "Fly Into a Pink Tomorrow": {
        gives: ["CritDMG"],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Geniuses' Greetings": {
        gives: ["ATK","Basic"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Sweat Now, Cry Less": {
        gives: ["CritRate","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Flower Remembers": {
        gives: ["CritDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "The Flower Remembers": {
        gives: ["HP","Healing"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Victory In a Blink": {
        gives: ["CritDMG"],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //3star
    "Reminiscence": {
        gives: ["All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Reminiscence": {
        gives: ["EnergyRegen","SkillPoints"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
}
const maslowLightconesAbundance = {
    //5star
    "Echoes of the Coffin": {
        gives: ["ATK","EnergyRegen"],
        givesTeam: ["SPD"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Night of Fright": {
        gives: ["EnergyRegen","HealingSource"],
        givesTeam: ["ATK"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Scent Alone Stays True": {
        gives: ["Break"],
        givesTeam: ["Vuln"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Time Waits for No One": {
        gives: ["HP","Healing","AdditionalDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //4star
    "Dream's Montage": {
        gives: ["SPD","EnergyRegen"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Hey, Over Here": {
        gives: ["HP","Healing"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Perfect Timing": {
        gives: ["EffectRES","Healing"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Post-Op Conversation": {
        gives: ["EnergyRegen","Healing"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Quid Pro Quo": {
        gives: [],
        givesTeam: ["EnergyRegen"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Post-Op Conversation": {
        gives: ["Healing"],
        givesTeam: ["EnergyRegen"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Unto Tomorrow's Morrow": {
        gives: ["Healing"],
        givesTeam: ["All"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Warmth Shortens Cold Nights": {
        gives: ["HP"],
        givesTeam: ["HealingSource"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "What Is Real?": {
        gives: ["Break","HealingSource"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //3star
    "Cornucopia": {
        gives: ["Healing"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Fine Fruit": {
        gives: [],
        givesTeam: ["EnergyRegen"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Multiplication": {
        gives: ["Advance"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
}
const maslowLightconesNihility = {
    //5star
    "Along the Passing Shore": {
        gives: ["CritDMG","Vuln","Ultimate"],
        givesTeam: [,"Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "In the Name of the World": {
        gives: ["All","ATK","EHR"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Incessant Rain": {
        gives: ["CritRate","EHR"],
        givesTeam: ["Vuln","Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Lies Dance on the Breeze": {
        gives: ["SPD"],
        givesTeam: ["Shred","Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Long Road Leads Home": {
        gives: ["Break"],
        givesTeam: ["Break","Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Patience Is All You Need": {
        gives: ["All","SPD"],
        givesTeam: ["Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Reforged Remembrance": {
        gives: ["EHR","ATK","Shred"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Solitary Healing": {
        gives: ["Break","DOT","EnergyRegen"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Those Many Springs": {
        gives: ["EHR"],
        givesTeam: ["Vuln","Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Why Does the Ocean Sing": {
        gives: ["EHR"],
        givesTeam: ["Vuln","DOT","SPD","Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //4star
    "Before the Tutorial Mission Starts": {
        gives: ["EHR","EnergyRegen"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Boundless Choreo": {
        gives: ["CritRate","CritDMG"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Eyes of the Prey": {
        gives: ["EHR","DOT"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Fermata": {
        gives: ["Break","All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Good Night and Sleep Well": {
        gives: ["All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Holiday Thermae Escapade": {
        gives: ["All"],
        givesTeam: ["Vuln","Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "It's Showtime": {
        gives: ["All","ATK"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Resolution Shines As Pearls of Sweat": {
        gives: [],
        givesTeam: ["Shred","Debuff"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "We Will Meet Again": {
        gives: [],
        givesTeam: ["AdditionalDMG"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },

    //3star
    "Hidden Shadow": {
        gives: [],
        givesTeam: ["AdditionalDMG"],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Loop": {
        gives: ["All"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
    "Void": {
        gives: ["EHR"],
        givesTeam: [],
        wants: [],
        wantsTeam: [],
        addTeamWant: [],
    },
}
const maslowCategoryLightcones = {
    ...maslowLightconesDestruction,
    ...maslowLightconesHarmony,
    ...maslowLightconesPreservation,
    ...maslowLightconesErudition,
    
    ...maslowLightconesRemembrance,
    ...maslowLightconesAbundance,
    ...maslowLightconesNihility,
}











const maslowCharactersNihility = {
    //NIHILITY
    "Black Swan": {
        defaultMainSubs: ["SPDFlat","ATK%","EHR","DamageBreak"],
        defaultTrashSub: ["ATKFlat","HP%","EffectRES","HPFlat"],
        0: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff"],
            wants: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","PEN"],
            wants: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","PEN"],
            wants: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","PEN"],
            wants: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","PEN"],
            wants: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","PEN"],
            wants: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","PEN"],
            wants: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Wind",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Hysilens": {
        defaultMainSubs: ["SPDFlat","ATK%","EHR","DamageBreak"],
        defaultTrashSub: ["ATKFlat","HP%","HPFlat","DEF%"],
        0: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff"],
            wants: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","DOT"],
            wants: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","DOT","All"],
            wants: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","DOT","All"],
            wants: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","DOT","All","PEN"],
            wants: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","DOT","All","PEN"],
            wants: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["DOTSource","Shred","Vuln","Debuff","DOT","All","PEN"],
            wants: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Physical",...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Kafka": {
        defaultMainSubs: ["SPDFlat","ATK%","EHR","DamageBreak"],
        defaultTrashSub: ["ATKFlat","HP%","HPFlat","DEF%"],
        0: {
            gives: [],
            givesTeam: ["DOTSource","Debuff","FUASource","ATK"],
            wants: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: ["EHR"],
        },
        1: {
            gives: [],
            givesTeam: ["DOTSource","Debuff","FUASource","ATK","Vuln"],
            wants: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: ["EHR"],
        },
        2: {
            gives: [],
            givesTeam: ["DOTSource","Debuff","FUASource","ATK","Vuln","DOT"],
            wants: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: ["EHR"],
        },
        3: {
            gives: [],
            givesTeam: ["DOTSource","Debuff","FUASource","ATK","Vuln","DOT"],
            wants: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: ["EHR"],
        },
        4: {
            gives: [],
            givesTeam: ["DOTSource","Debuff","FUASource","ATK","Vuln","DOT"],
            wants: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: ["EHR"],
        },
        5: {
            gives: [],
            givesTeam: ["DOTSource","Debuff","FUASource","ATK","Vuln","DOT"],
            wants: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: ["EHR"],
        },
        6: {
            gives: [],
            givesTeam: ["DOTSource","Debuff","FUASource","ATK","Vuln","DOT"],
            wants: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: [...DOTATKBased,"Lightning",...hasFUA,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: ["EHR"],
        },
    },
    "Silver Wolf": {
        // ["HP%","EffectRES","SPDFlat","CritDamageBase"]
        defaultMainSubs: ["SPDFlat","EffectHitRate","CritRateBase","CritDamageBase"],
        // ["HP%","CritDamageBase","EffectRES","SPDFlat"]
        defaultTrashSub: ["ATK%","DamageBreak","ATKFlat","EffectRES"],
        0: {
            gives: [],
            givesTeam: ["PEN","WeaknessImplant","Shred","Debuff"],
            wants: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["PEN","WeaknessImplant","Shred","Debuff"],
            wants: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["PEN","WeaknessImplant","Shred","Debuff","Vuln"],
            wants: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["PEN","WeaknessImplant","Shred","Debuff","Vuln"],
            wants: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["PEN","WeaknessImplant","Shred","Debuff","Vuln","AdditionalDMG"],
            wants: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["PEN","WeaknessImplant","Shred","Debuff","Vuln","AdditionalDMG"],
            wants: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["PEN","WeaknessImplant","Shred","Debuff","Vuln","AdditionalDMG"],
            wants: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
}
const maslowCharactersAbundance = {
    "Huohuo": {
        defaultMainSubs: ["SPDFlat","HP%","EffectRES","DamageBreak"],
        defaultTrashSub: ["HPFlat","DEF%","ATK%","ATKFlat"],
        0: {
            gives: [],
            givesTeam: ["HealingSource","ATK"],
            wants: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["HealingSource","ATK","SPD"],
            wants: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["HealingSource","ATK","SPD","ReviveSource"],
            wants: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["HealingSource","ATK","SPD","ReviveSource"],
            wants: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["HealingSource","ATK","SPD","ReviveSource"],
            wants: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["HealingSource","ATK","SPD","ReviveSource"],
            wants: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["HealingSource","ATK","SPD","ReviveSource","All"],
            wants: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Gallagher": {
        defaultMainSubs: ["SPDFlat","DamageBreak","HP%","EffectRES"],
        defaultTrashSub: ["HPFlat","DEF%","ATK%","ATKFlat"],
        0: {
            gives: [],
            givesTeam: ["HealingSource","Vuln"],
            wants: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["HealingSource","Vuln"],
            wants: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["HealingSource","Vuln","EffectRES"],
            wants: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["HealingSource","Vuln","EffectRES"],
            wants: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["HealingSource","Vuln","EffectRES"],
            wants: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["HealingSource","Vuln","EffectRES"],
            wants: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["HealingSource","Vuln","EffectRES"],
            wants: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: [...wantsBreak,...isHealer,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
}
const maslowCharactersRemembrance = {
    //REMEMBRANCE
    "Castorice": {
        defaultMainSubs: ["CritRateBase","CritDamageBase","HP%","HPFlat"],
        defaultTrashSub: ["DamageBreak","EffectRES","DEF%","SPDFlat"],
        0: {
            gives: [],
            givesTeam: ["TeamCountChange","HealingSource","MemoSource","PEN","Consume","Debuff"],
            wants: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["TeamCountChange","HealingSource","MemoSource","PEN","Consume","Debuff"],
            wants: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["TeamCountChange","HealingSource","MemoSource","PEN","Consume","Debuff"],
            wants: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["TeamCountChange","HealingSource","MemoSource","PEN","Consume","Debuff"],
            wants: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["TeamCountChange","HealingSource","MemoSource","PEN","Consume","Debuff","Healing"],
            wants: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["TeamCountChange","HealingSource","MemoSource","PEN","Consume","Debuff","Healing"],
            wants: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["TeamCountChange","HealingSource","MemoSource","PEN","Consume","Debuff","Healing"],
            wants: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["HP","Quantum","Consume",...isHealer,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Trailblazer - Remembrance": {
        defaultMainSubs: ["SPDFlat","CritDamageBase","HP%","ATK%"],
        defaultTrashSub: ["ATKFlat","DamageBreak","HPFlat","EffectRES"],
        0: {
            gives: [],
            givesTeam: ["TeamCountChange","MemoSource","CritDMG","True","Advance"],
            wants: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["TeamCountChange","MemoSource","CritDMG","CritRate","True","Advance"],
            wants: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["TeamCountChange","MemoSource","CritDMG","CritRate","True","Advance"],
            wants: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["TeamCountChange","MemoSource","CritDMG","CritRate","True","Advance"],
            wants: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["TeamCountChange","MemoSource","CritDMG","CritRate","True","Advance"],
            wants: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["TeamCountChange","MemoSource","CritDMG","CritRate","True","Advance"],
            wants: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["TeamCountChange","MemoSource","CritDMG","CritRate","True","Advance"],
            wants: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG","Ice","ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Cyrene": {
        defaultMainSubs: ["SPDFlat","CritDamageBase","CritRateBase","HP%"],
        defaultTrashSub: ["HPFlat","DamageBreak","EffectRES","DEF%"],
        0: {
            gives: [],
            givesTeam: ["MemoSource","All","True","EnergyRegen"],
            wants: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            wantsTeam: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["MemoSource","All","True","EnergyRegen"],
            wants: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            wantsTeam: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["MemoSource","All","True","EnergyRegen"],
            wants: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            wantsTeam: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["MemoSource","All","True","EnergyRegen"],
            wants: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            wantsTeam: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["MemoSource","All","True","EnergyRegen"],
            wants: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            wantsTeam: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["MemoSource","All","True","EnergyRegen"],
            wants: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            wantsTeam: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["MemoSource","All","True","EnergyRegen","Shred","Advance"],
            wants: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            wantsTeam: ["Ice","Basic",...isGeneralSupport,...generalCharacterWants,...characterDealsDamage,...isCritCharacter],
            addTeamWant: [],
        },
    },
}



// defaultMainSubs: ["ATK%","CritRateBase","CritDamageBase","SPDFlat"], //saber
// defaultMainSubs: ["HP%","CritDamageBase","EffectRES","SPDFlat"], //sunday
// defaultMainSubs: ["ATK%","HP%","EffectRES","SPDFlat"], //robin
// defaultMainSubs: ["ATK%","DEF%","EffectRES","SPDFlat"], //dan
const maslowCharactersDestruction = {
    //DESTRUCTION
    "Saber": {
        // ["CritRateBase","SPDFlat","CritDamageBase","ATK%"]
        defaultMainSubs: ["CritRateBase","SPDFlat","CritDamageBase","ATK%"],
        //["ATK%","CritRateBase","CritDamageBase","SPDFlat"]
        defaultTrashSub: ["ATKFlat","DamageBreak","EffectRES","HP%"],
        0: {
            gives: [],
            givesTeam: [],
            wants: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: [],
            wants: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: [],
            wants: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: [],
            wants: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: [],
            wants: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: [],
            wants: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: [],
            wants: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            wantsTeam: ["ATK","Wind","Ultimate","Skill","Basic",...characterHasEnergy,...isCritCharacter,...characterDealsDamage,...generalCharacterWants],
            addTeamWant: [],
        },
    },
}
const maslowCharactersHarmony = {
    //HARMONY
    "Sunday": {
        // ["HP%","EffectRES","SPDFlat","CritDamageBase"]
        defaultMainSubs: ["HP%","EffectRES","SPDFlat","CritDamageBase"],
        // ["HP%","CritDamageBase","EffectRES","SPDFlat"]
        defaultTrashSub: ["DEF%","HPFlat","ATK%","DEFFlat"],
        0: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","EnergyRegen"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","EnergyRegen","Shred"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","EnergyRegen","Shred"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","EnergyRegen","Shred"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","EnergyRegen","Shred"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","EnergyRegen","Shred"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","EnergyRegen","Shred"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Bronya": {
        // ["HP%","EffectRES","SPDFlat","CritDamageBase"]
        defaultMainSubs: ["HP%","EffectRES","SPDFlat","CritDamageBase"],
        // ["HP%","CritDamageBase","EffectRES","SPDFlat"]
        defaultTrashSub: ["DEF%","DamageBreak","HPFlat","DEFFlat"],
        0: {
            gives: [],
            givesTeam: ["Advance","CritDMG","CritRate","All","DEF"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","DEF"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","DEF","SPD"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","DEF","SPD"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","DEF","SPD","FUASource"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","DEF","SPD","FUASource"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["Advance","SkillPoints","CritDMG","CritRate","All","DEF","SPD","FUASource"],
            wants: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["CritDMG",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Tingyun": {
        // ["HP%","EffectRES","SPDFlat","CritDamageBase"]
        defaultMainSubs: ["SPDFlat","ATK%","HP%","EffectRES"],
        // ["HP%","CritDamageBase","EffectRES","SPDFlat"]
        defaultTrashSub: ["ATKFlat","DamageBreak","HPFlat","DEF%"],
        0: {
            gives: [],
            givesTeam: ["AdditionalDMG","ATK","All","EnergyRegen"],
            wants: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["AdditionalDMG","ATK","All","EnergyRegen","SPD"],
            wants: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["AdditionalDMG","ATK","All","EnergyRegen","SPD"],
            wants: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["AdditionalDMG","ATK","All","EnergyRegen","SPD"],
            wants: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["AdditionalDMG","ATK","All","EnergyRegen","SPD"],
            wants: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["AdditionalDMG","ATK","All","EnergyRegen","SPD"],
            wants: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["AdditionalDMG","ATK","All","EnergyRegen","SPD","TargetAllies"],
            wants: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Tribbie": {
        // ["HP%","EffectRES","SPDFlat","CritDamageBase"]

        // defaultMainSubs: ["SPDFlat","CritDamageBase","HP%","CritRateBase"],
        defaultMainSubs: ["HPFlat","CritDamageBase","HP%","CritRateBase"],

        
        // ["HP%","CritDamageBase","EffectRES","SPDFlat"]
        defaultTrashSub: ["HPFlat","DamageBreak","EffectRES","ATK%"],
        0: {
            gives: [],
            givesTeam: ["AdditionalDMG","PEN","Vuln"],
            wants: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["AdditionalDMG","PEN","Vuln","True"],
            wants: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["AdditionalDMG","PEN","Vuln","True"],
            wants: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["AdditionalDMG","PEN","Vuln","True"],
            wants: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["AdditionalDMG","PEN","Vuln","True","Shred"],
            wants: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["AdditionalDMG","PEN","Vuln","True","Shred"],
            wants: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["AdditionalDMG","PEN","Vuln","True","Shred"],
            wants: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["HP","Quantum",...isCritCharacter,...characterDealsDamage,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
    "Robin": {
        // ["SPDFlat","HP%","EffectRES","ATK%"]
        defaultMainSubs: ["SPDFlat","HP%","EffectRES","ATK%"],
        // ["ATK%","HP%","EffectRES","SPDFlat"]
        defaultTrashSub: ["ATKFlat","HPFlat","DEF%","DEFFlat"],
        0: {
            gives: [],
            givesTeam: ["Advance","CritDMG","FUA","All","ATK"],
            wants: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: [],
            givesTeam: ["Advance","CritDMG","FUA","All","PEN"],
            wants: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: [],
            givesTeam: ["Advance","CritDMG","FUA","All","PEN","SPD"],
            wants: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: [],
            givesTeam: ["Advance","CritDMG","FUA","All","PEN","SPD"],
            wants: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: [],
            givesTeam: ["Advance","CritDMG","FUA","All","PEN","SPD","EffectRES","Cleanse"],
            wants: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: [],
            givesTeam: ["Advance","CritDMG","FUA","All","PEN","SPD","EffectRES","Cleanse"],
            wants: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: [],
            givesTeam: ["Advance","CritDMG","FUA","All","PEN","SPD","EffectRES","Cleanse"],
            wants: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK","Physical",...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
}
const maslowCharactersPreservation = {
    //PRESERVATION
    "Dan Heng • Permansor Terrae": {
        // ["DEF%","EffectRES","SPDFlat","ATK%"]
        defaultMainSubs: ["DEF%","EffectRES","SPDFlat","ATK%"],
        // ["ATK%","DEF%","EffectRES","SPDFlat"]
        defaultTrashSub: ["ATKFlat","DamageBreak","HP%","DEFFlat"],
        0: {
            gives: ["SummonSource","FUASource","Cleanse","ShieldSource"],
            givesTeam: ["ShieldSource","SummonAssign","Cleanse"],
            wants: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        1: {
            gives: ["SummonSource","FUASource","Cleanse"],
            givesTeam: ["ShieldSource","SummonAssign","Cleanse","PEN","SkillPoints"],
            wants: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        2: {
            gives: ["SummonSource","FUASource","Cleanse"],
            givesTeam: ["ShieldSource","SummonAssign","Cleanse","PEN","SkillPoints"],
            wants: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        3: {
            gives: ["SummonSource","FUASource","Cleanse"],
            givesTeam: ["ShieldSource","SummonAssign","Cleanse","PEN","SkillPoints"],
            wants: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        4: {
            gives: ["SummonSource","FUASource","Cleanse"],
            givesTeam: ["ShieldSource","SummonAssign","Cleanse","PEN","SkillPoints","DamageReduction"],
            wants: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        5: {
            gives: ["SummonSource","FUASource","Cleanse"],
            givesTeam: ["ShieldSource","SummonAssign","Cleanse","PEN","SkillPoints","DamageReduction"],
            wants: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
        6: {
            gives: ["SummonSource","FUASource","Cleanse"],
            givesTeam: ["ShieldSource","SummonAssign","Cleanse","PEN","SkillPoints","DamageReduction","Vuln","Shred"],
            wants: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            wantsTeam: ["ATK",...hasFUA,...isShielder,...characterHasEnergy,...isGeneralSupport,...generalCharacterWants],
            addTeamWant: [],
        },
    },
}
const maslowCharactersErudition = {}


const maslowCategoryCharacters = {
    ...maslowCharactersNihility,
    ...maslowCharactersAbundance,
    ...maslowCharactersRemembrance,
    ...maslowCharactersDestruction,
    ...maslowCharactersHarmony,
    ...maslowCharactersPreservation,
    ...maslowCharactersErudition
}




const maslow = {
    ...maslowCategoryRelics,
    ...maslowCategoryPlanars,
    ...maslowCategoryLightcones,
    ...maslowCategoryCharacters,

    //STATS
    "HPFlat": "HP",
    "ATKFlat": "ATK",
    "DEFFlat": "DEF",
    "HP%": "HP",
    "ATK%": "ATK",
    "DEF%": "DEF",
    "SPDFlat": "SPD",
    "CritRateBase": "CritRate",
    "CritDamageBase": "CritDMG",
    "EffectHitRate": "EHR",
    "EffectRES": "EffectRES",
    "DamageBreak": "Break",
    "HealingOutgoing": "Healing",
    "DamagePhysical": "Physical",
    "DamageFire": "Fire",
    "DamageIce": "Ice",
    "DamageLightning": "Lightning",
    "DamageWind": "Wind",
    "DamageQuantum": "Quantum",
    "DamageImaginary": "Imaginary",
    "EnergyRegenRate": "EnergyRegen",
}