const greatTableKnowerOfAll = {
    "": 0,
    // "Multiplier": 0,
    "LVL": 0,

    //MAIN STATS
    "HPBase": 0,"HP%": 0,"HPFlat": 0,
    "HPFlatNULL": 0,

    "ATKBase": 0,"ATK%": 0,"ATKFlat": 0,
    "ATKFlatNULL": 0,

    "DEFBase": 0,"DEF%": 0,"DEFFlat": 0,

    "SPDBase": 0,"SPD%": 0,"SPDFlat": 0,

    "AggroBase": 0,"AggroBase%": 0,"Aggro%": 0,"AggroFlat": 0,

    "ShieldOutgoing": 0,"ShieldIncoming": 0,

    "EffectRES": 0,
    "CrowdControlRES": 0,
    "EffectHitRate": 0,
    "EnergyRegenRate": 0,
    "HealingOutgoing": 0,
    "HealingIncoming": 0,

    "EnergyMax": 0,
    "EnergyMaxSpecial": 0,

    //CRIT
    "CritRateBase": 0,"CritRate%": 0,"CritRateFlat": 0,
    "CritRateBaseNULL": 0,

    "CritDamageBase": 0,"CritDamage%": 0,"CritDamageFlat": 0,
    "CritDamageBaseNULL": 0,//conversion

    //DMG
    "DamageAll": 0,
    "DamageBasic": 0,"DamageSkill": 0,"DamageUltimate": 0,
    "DamageDOT": 0,"DamageFUA": 0,
    "DamageBreak": 0,"DamageBreakSuper": 0,"DamageBreakEfficiency": 0,"DamageBreakBonus": 0,"ToughnessRatioAdjustment": 0,
    "DamageBreakNULL": 0,

    "DamageIce": 0,"DamageLightning": 0,"DamageFire": 0,"DamageQuantum": 0,"DamageImaginary": 0,"DamageWind": 0,"DamagePhysical": 0,

    "VulnAll": 0,
    "VulnBasic": 0,"VulnSkill": 0,"VulnUltimate": 0,
    "VulnDOT": 0,"VulnFUA": 0,"VulnBreak": 0,
    "VulnIce": 0,"VulnLightning": 0,"VulnFire": 0,"VulnQuantum": 0,"VulnImaginary": 0,"VulnWind": 0,"VulnPhysical": 0,

    "DEFShredAll": 0,
    "DEFShredBasic": 0,"DEFShredSkill": 0,"DEFShredUltimate": 0,
    "DEFShredDOT": 0,"DEFShredFUA": 0,"DEFShredBreak": 0,"DEFShredBreakSuper": 0,
    "DEFShredIce": 0,"DEFShredLightning": 0,"DEFShredFire": 0,"DEFShredQuantum": 0,"DEFShredImaginary": 0,"DEFShredWind": 0,"DEFShredPhysical": 0,

    "Toughness": 0,

    "ResistanceAll": 0,
    "ResistanceAllPEN": 0,

    "ResistanceBasicPEN": 0,"ResistanceSkillPEN": 0,"ResistanceUltimatePEN": 0,
    "ResistanceDOTPEN": 0,"ResistanceFUAPEN": 0,"ResistanceBreakPEN": 0,"ResistanceBreakSuperPEN": 0,

    "ResistanceImaginary": 0,
    "ResistanceImaginaryPEN": 0,

    "ResistanceQuantum": 0,
    "ResistanceQuantumPEN": 0,

    "ResistanceWind": 0,
    "ResistanceWindPEN": 0,

    "ResistanceLightning": 0,
    "ResistanceLightningPEN": 0,

    "ResistanceIce": 0,
    "ResistanceIcePEN": 0,

    "ResistanceFire": 0,
    "ResistanceFirePEN": 0,

    "ResistancePhysical": 0,
    "ResistancePhysicalPEN": 0,

    "WeaknessAll": 0,"WeaknessIce": 0,"WeaknessLightning": 0,"WeaknessFire": 0,"WeaknessQuantum": 0,"WeaknessImaginary": 0,"WeaknessWind": 0,"WeaknessPhysical": 0,
    
    "DEFFlatNULL": 0,
}
const greatTableKeys = Object.keys(greatTableKnowerOfAll);
const greatTableSize = greatTableKeys.length;
const greatTableIndex = {};
for (let i = 0; i < greatTableKeys.length; i++) {
    greatTableIndex[greatTableKeys[i]] = i;
}
const emptyTableNeverAdd = new Array(greatTableSize).fill(0);
// console.log(greatTableSize,emptyTableNeverAdd)

const makeRange = n => Array.from({ length: n }, (_, i) => i + 1);
const greatIndexArrayOrder = makeRange(greatTableSize-1);

const buffKeysCache = {};


function spreadBuffSheet(buffSheet) {
    const buffName = buffSheet.buffName;
    let keys = buffKeysCache[buffName] ??= Object.keys(buffSheet);

    const newBuffSheet = {};
    const keyLength = keys.length;
    for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        newBuffSheet[key] = buffSheet[key];
    }
    return newBuffSheet;
}

// function newEmptyTable(size) {
//     let newArray = new Array(size);
//     for (let i=0;i<size;i++) {
//         newArray[i] = 0;
//     }
//     return newArray;
// }

// console.log(newEmptyTable(10))









console.log(greatTableIndex)

const LVL = greatTableIndex.LVL;

const HPBase = greatTableIndex.HPBase;
const HPP = greatTableIndex["HP%"];
const HPFlat = greatTableIndex.HPFlat;
const HPFlatNULL = greatTableIndex.HPFlatNULL;

const ATKBase = greatTableIndex.ATKBase;
const ATKP = greatTableIndex["ATK%"];
const ATKFlat = greatTableIndex.ATKFlat;
const ATKFlatNULL = greatTableIndex.ATKFlatNULL;

const DEFBase = greatTableIndex.DEFBase;
const DEFP = greatTableIndex["DEF%"];
const DEFFlat = greatTableIndex.DEFFlat;
const DEFFlatNULL = greatTableIndex.DEFFlatNULL;

const SPDBase = greatTableIndex.SPDBase;
const SPDP = greatTableIndex["SPD%"];
const SPDFlat = greatTableIndex.SPDFlat;

const AggroBase = greatTableIndex.AggroBase;
const AggroBaseP = greatTableIndex["AggroBase%"];
const AggroP = greatTableIndex["Aggro%"];
const AggroFlat = greatTableIndex.AggroFlat;

const ShieldOutgoing = greatTableIndex.ShieldOutgoing;
const ShieldIncoming = greatTableIndex.ShieldIncoming;

const EffectRES = greatTableIndex.EffectRES;
const CrowdControlRES = greatTableIndex.CrowdControlRES;
const EffectHitRate = greatTableIndex.EffectHitRate;
const EnergyRegenRate = greatTableIndex.EnergyRegenRate;
const HealingOutgoing = greatTableIndex.HealingOutgoing;
const HealingIncoming = greatTableIndex.HealingIncoming;

const EnergyMax = greatTableIndex.EnergyMax;
const EnergyMaxSpecial = greatTableIndex.EnergyMaxSpecial;

const CritRateBase = greatTableIndex.CritRateBase;
const CritRateP = greatTableIndex["CritRate%"];
const CritRateFlat = greatTableIndex.CritRateFlat;
const CritRateBaseNULL = greatTableIndex.CritRateBaseNULL;

const CritDamageBase = greatTableIndex.CritDamageBase;
const CritDamageP = greatTableIndex["CritDamage%"];
const CritDamageFlat = greatTableIndex.CritDamageFlat;
const CritDamageBaseNULL = greatTableIndex.CritDamageBaseNULL;

const DamageAll = greatTableIndex.DamageAll;
const DamageBasic = greatTableIndex.DamageBasic;
const DamageSkill = greatTableIndex.DamageSkill;
const DamageUltimate = greatTableIndex.DamageUltimate;
const DamageDOT = greatTableIndex.DamageDOT;
const DamageFUA = greatTableIndex.DamageFUA;

const DamageBreak = greatTableIndex.DamageBreak;
const DamageBreakSuper = greatTableIndex.DamageBreakSuper;
const DamageBreakEfficiency = greatTableIndex.DamageBreakEfficiency;
const DamageBreakBonus = greatTableIndex.DamageBreakBonus;
const ToughnessRatioAdjustment = greatTableIndex.ToughnessRatioAdjustment;
const DamageBreakNULL = greatTableIndex.DamageBreakNULL;

const DamageIce = greatTableIndex.DamageIce;
const DamageLightning = greatTableIndex.DamageLightning;
const DamageFire = greatTableIndex.DamageFire;
const DamageQuantum = greatTableIndex.DamageQuantum;
const DamageImaginary = greatTableIndex.DamageImaginary;
const DamageWind = greatTableIndex.DamageWind;
const DamagePhysical = greatTableIndex.DamagePhysical;

const VulnAll = greatTableIndex.VulnAll;

const VulnBasic = greatTableIndex.VulnBasic;
const VulnSkill = greatTableIndex.VulnSkill;
const VulnUltimate = greatTableIndex.VulnUltimate;

const VulnDOT = greatTableIndex.VulnDOT;
const VulnFUA = greatTableIndex.VulnFUA;
const VulnBreak = greatTableIndex.VulnBreak;

const VulnIce = greatTableIndex.VulnIce;
const VulnLightning = greatTableIndex.VulnLightning;
const VulnFire = greatTableIndex.VulnFire;
const VulnQuantum = greatTableIndex.VulnQuantum;
const VulnImaginary = greatTableIndex.VulnImaginary;
const VulnWind = greatTableIndex.VulnWind;
const VulnPhysical = greatTableIndex.VulnPhysical;

const DEFShredAll = greatTableIndex.DEFShredAll;
const DEFShredBasic = greatTableIndex.DEFShredBasic;
const DEFShredSkill = greatTableIndex.DEFShredSkill;
const DEFShredUltimate = greatTableIndex.DEFShredUltimate;
const DEFShredDOT = greatTableIndex.DEFShredDOT;
const DEFShredFUA = greatTableIndex.DEFShredFUA;
const DEFShredBreak = greatTableIndex.DEFShredBreak;
const DEFShredBreakSuper = greatTableIndex.DEFShredBreakSuper;

const DEFShredIce = greatTableIndex.DEFShredIce;
const DEFShredLightning = greatTableIndex.DEFShredLightning;
const DEFShredFire = greatTableIndex.DEFShredFire;
const DEFShredQuantum = greatTableIndex.DEFShredQuantum;
const DEFShredImaginary = greatTableIndex.DEFShredImaginary;
const DEFShredWind = greatTableIndex.DEFShredWind;
const DEFShredPhysical = greatTableIndex.DEFShredPhysical;

const Toughness = greatTableIndex.Toughness;

const ResistanceAll = greatTableIndex.ResistanceAll;
const ResistanceAllPEN = greatTableIndex.ResistanceAllPEN;

const ResistanceBasicPEN = greatTableIndex.ResistanceBasicPEN;
const ResistanceSkillPEN = greatTableIndex.ResistanceSkillPEN;
const ResistanceUltimatePEN = greatTableIndex.ResistanceUltimatePEN;
const ResistanceDOTPEN = greatTableIndex.ResistanceDOTPEN;
const ResistanceFUAPEN = greatTableIndex.ResistanceFUAPEN;
const ResistanceBreakPEN = greatTableIndex.ResistanceBreakPEN;
const ResistanceBreakSuperPEN = greatTableIndex.ResistanceBreakSuperPEN;

const ResistanceImaginary = greatTableIndex.ResistanceImaginary;
const ResistanceImaginaryPEN = greatTableIndex.ResistanceImaginaryPEN;

const ResistanceQuantum = greatTableIndex.ResistanceQuantum;
const ResistanceQuantumPEN = greatTableIndex.ResistanceQuantumPEN;

const ResistanceWind = greatTableIndex.ResistanceWind;
const ResistanceWindPEN = greatTableIndex.ResistanceWindPEN;

const ResistanceLightning = greatTableIndex.ResistanceLightning;
const ResistanceLightningPEN = greatTableIndex.ResistanceLightningPEN;

const ResistanceIce = greatTableIndex.ResistanceIce;
const ResistanceIcePEN = greatTableIndex.ResistanceIcePEN;

const ResistanceFire = greatTableIndex.ResistanceFire;
const ResistanceFirePEN = greatTableIndex.ResistanceFirePEN;

const ResistancePhysical = greatTableIndex.ResistancePhysical;
const ResistancePhysicalPEN = greatTableIndex.ResistancePhysicalPEN;

const weaknessAll = greatTableIndex.weaknessAll;
const WeaknessIce = greatTableIndex.WeaknessIce;
const WeaknessLightning = greatTableIndex.WeaknessLightning;
const WeaknessFire = greatTableIndex.WeaknessFire;
const WeaknessQuantum = greatTableIndex.WeaknessQuantum;
const WeaknessImaginary = greatTableIndex.WeaknessImaginary;
const WeaknessWind = greatTableIndex.WeaknessWind;
const WeaknessPhysical = greatTableIndex.WeaknessPhysical;




const battleTableKnowerOfAll = {
    "SPMax": 5
}

const possibleTags = [
    "All",
    "Basic","Skill","Ultimate",
    "DOT","FUA","Break","BreakSuper",
    "Ice","Lightning","Fire","Quantum","Imaginary","Wind","Physical",
]
const possibleScalars = [
    "HP","DEF","SPD","ATK",
]


const resPENKeys = {};//"Resistance"+tag+"PEN"
const vulnKeys = {};//"Vuln"+tag
const dmgKeys = {};//"Damage"+tag
const defShredKeys = {};//"DEFShred"+tag



const initialElementPath = "/HonkaiSR/icon/element/";

const elementImagePaths = {
    "Physical": initialElementPath + "Physical.png",
    "Fire": initialElementPath + "Fire.png",
    "Ice": initialElementPath + "Ice.png",
    "Lightning": initialElementPath + "Thunder.png",
    "Wind": initialElementPath + "Wind.png",
    "Quantum": initialElementPath + "Quantum.png",
    "Imaginary": initialElementPath + "Imaginary.png" 
}
const initialPathPath = "/HonkaiSR/icon/path/";
const pathImagePaths = {
    "The Hunt": {
        "big": initialPathPath + "Hunt.png",
        "medium": initialPathPath + "HuntMiddle.png",
        "small": initialPathPath + "HuntSmall.png",
    },
    "Remembrance": {
        "big": initialPathPath + "Remembrance.png",
        "medium": initialPathPath + "RemembranceMiddle.png",
        "small": initialPathPath + "RemembranceSmall.png",
    },
    "Abundance": {
        "big": initialPathPath + "Abundance.png",
        "medium": initialPathPath + "AbundanceMiddle.png",
        "small": initialPathPath + "AbundanceSmall.png",
    },
    "Destruction": {
        "big": initialPathPath + "Destruction.png",
        "medium": initialPathPath + "DestructionMiddle.png",
        "small": initialPathPath + "DestructionSmall.png",
    },
    "Erudition": {
        "big": initialPathPath + "Erudition.png",
        "medium": initialPathPath + "EruditionMiddle.png",
        "small": initialPathPath + "EruditionSmall.png",
    },
    "Preservation": {
        "big": initialPathPath + "Preservation.png",
        "medium": initialPathPath + "PreservationMiddle.png",
        "small": initialPathPath + "PreservationSmall.png",
    },
    "Nihility": {
        "big": initialPathPath + "Nihility.png",
        "medium": initialPathPath + "NihilityMiddle.png",
        "small": initialPathPath + "NihilitySmall.png",
    },
    "Harmony": {
        "big": initialPathPath + "Harmony.png",
        "medium": initialPathPath + "HarmonyMiddle.png",
        "small": initialPathPath + "HarmonySmall.png",
    },
}


let subStatRefHead = relics.Head.subAffix;
subStatRefHead[""] = {
        "base": 0,
        "step": 0,
        "stepsPossible": 2,
        "stepRatio": 8,
        "bounds": [
          0,
          1
        ]
      }

const initialPropertyPath = "/HonkaiSR/icon/property/";
const noIconPath = "";
const propertyImagePaths = {
    "": {
        "icon": noIconPath,
        "sets": {
            [0]: {
                "display": "Empty",
                "specific": "Empty",
                "unit": ""
            },
        }
    },
    "ATK": {
        "icon": initialPropertyPath + "IconAttack.png",
        "sets": {
            [greatTableIndex["ATKBase"]]: {
                "display": "ATK",
                "specific": "ATK Base",
                "unit": ""
            },
            [greatTableIndex["ATK%"]]: {
                "display": "ATK",
                "specific": "ATK %",
                "unit": "%"
            },
            [greatTableIndex["ATKFlat"]]: {
                "display": "ATK",
                "specific": "ATK Flat",
                "unit": ""
            },
            [greatTableIndex["ATKFlatNULL"]]: {
                "display": "ATK",
                "specific": "ATK Flat (Locked)",
                "unit": ""
            },
            "ATKBaseFinal": {
                "display": "ATK",
                "specific": "ATK Base Total",
                "unit": ""
            },
            "ATKBonusPercent": {
                "display": "ATK",
                "specific": "ATK % Total",
                "unit": "%"
            },
            "ATKBonusFlat": {
                "display": "ATK",
                "specific": "ATK Flat Total",
                "unit": ""
            },
            "ATKFinal": {
                "display": "ATK",
                "specific": "ATK SUM",
                "unit": ""
            },
        }
    },
    "HP": {
        "icon": initialPropertyPath + "IconMaxHP.png",
        "sets": {
            [greatTableIndex["HPBase"]]: {
                "display": "HP",
                "specific": "HP Base",
                "unit": ""
            },
            [greatTableIndex["HP%"]]: {
                "display": "HP",
                "specific": "HP %",
                "unit": "%"
            },
            [greatTableIndex["HPFlat"]]: {
                "display": "HP",
                "specific": "HP Flat",
                "unit": ""
            },
            [greatTableIndex["HPFlatNULL"]]: {
                "display": "HP",
                "specific": "HP Flat (Locked)",
                "unit": ""
            },
            "HPBaseFinal": {
                "display": "HP",
                "specific": "HP Base Total",
                "unit": ""
            },
            "HPBonusPercent": {
                "display": "HP",
                "specific": "HP % Total",
                "unit": "%"
            },
            "HPBonusFlat": {
                "display": "HP",
                "specific": "HP Flat Total",
                "unit": ""
            },
            "HPFinal": {
                "display": "HP",
                "specific": "HP SUM",
                "unit": ""
            },
        }
    },
    "DEF": {
        "icon": initialPropertyPath + "IconDefence.png",
        "sets": {
            [greatTableIndex["DEFBase"]]: {
                "display": "DEF",
                "specific": "DEF Base",
                "unit": ""
            },
            [greatTableIndex["DEF%"]]: {
                "display": "DEF",
                "specific": "DEF %",
                "unit": "%"
            },
            [greatTableIndex["DEFFlat"]]: {
                "display": "DEF",
                "specific": "DEF Flat",
                "unit": ""
            },
            [DEFFlatNULL]: {
                "display": "DEF",
                "specific": "DEF Flat (Locked)",
                "unit": ""
            },
            "DEFBaseFinal": {
                "display": "DEF",
                "specific": "DEF Base Total",
                "unit": ""
            },
            "DEFBonusPercent": {
                "display": "DEF",
                "specific": "DEF % Total",
                "unit": "%"
            },
            "DEFBonusFlat": {
                "display": "DEF",
                "specific": "DEF Flat Total",
                "unit": ""
            },
            "DEFFinal": {
                "display": "DEF",
                "specific": "DEF SUM",
                "unit": ""
            },
            // [greatTableIndex["DEFShred"]]: {
            //     "display": "DEF Shred",
            //     "specific": "DEF Shred",
            //     "unit": "%"
            // },
        }
    },
    "DEFShred": {
        "icon": initialPropertyPath + "IconDefence.png",
        "sets": {
            [greatTableIndex["DEFShredAll"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred All",
                "unit": "%"
            },
            [greatTableIndex["DEFShredBasic"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Basic",
                "unit": "%"
            },
            [greatTableIndex["DEFShredSkill"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Skill",
                "unit": "%"
            },
            [greatTableIndex["DEFShredUltimate"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Ultimate",
                "unit": "%"
            },
            [greatTableIndex["DEFShredDOT"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred DOT",
                "unit": "%"
            },
            [greatTableIndex["DEFShredFUA"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred FUA",
                "unit": "%"
            },
            [greatTableIndex["DEFShredBreak"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Break",
                "unit": "%"
            },
            [greatTableIndex["DEFShredBreakSuper"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Super Break",
                "unit": "%"
            },
            [greatTableIndex["DEFShredIce"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Ice",
                "unit": "%"
            },
            [greatTableIndex["DEFShredLightning"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Lightning",
                "unit": "%"
            },
            [greatTableIndex["DEFShredFire"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Fire",
                "unit": "%"
            },
            [greatTableIndex["DEFShredQuantum"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Quantum",
                "unit": "%"
            },
            [greatTableIndex["DEFShredImaginary"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Imaginary",
                "unit": "%"
            },
            [greatTableIndex["DEFShredWind"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Wind",
                "unit": "%"
            },
            [greatTableIndex["DEFShredPhysical"]]: {
                "display": "DEF Shred",
                "specific": "DEF Shred Physical",
                "unit": "%"
            },
        }
    },
    "SPD": {
        "icon": initialPropertyPath + "IconSpeed.png",
        "sets": {
            [greatTableIndex["SPDBase"]]: {
                "display": "SPD",
                "specific": "SPD Base",
                "unit": ""
            },
            [greatTableIndex["SPD%"]]: {
                "display": "SPD",
                "specific": "SPD %",
                "unit": "%"
            },
            [greatTableIndex["SPDFlat"]]: {
                "display": "SPD",
                "specific": "SPD Flat",
                "unit": ""
            },
            "SPDBaseFinal": {
                "display": "SPD",
                "specific": "SPD Base Total",
                "unit": ""
            },
            "SPDBonusPercent": {
                "display": "SPD",
                "specific": "SPD % Total",
                "unit": "%"
            },
            "SPDBonusFlat": {
                "display": "SPD",
                "specific": "SPD Flat Total",
                "unit": ""
            },
            "SPDFinal": {
                "display": "SPD",
                "specific": "SPD SUM",
                "unit": ""
            },
            "SPDActionValue": {
                "display": "AV/Turn",
                "specific": "Action Value",
                "unit": ""
            }
        }
    },
    "CritRate": {
        "icon": initialPropertyPath + "IconCriticalChance.png",
        "sets": {
            [greatTableIndex["CritRateBase"]]: {
                "display": "CRIT Rate",
                "specific": "CRIT Rate",
                "unit": "%"
            },
            [greatTableIndex["CritRateBaseNULL"]]: {
                "display": "CRIT Rate",
                "specific": "CRIT Rate (Locked)",
                "unit": "%"
            },
            [greatTableIndex["CritRate%"]]: {
                "display": "CRIT Rate",
                "specific": "CRIT Rate %",
                "unit": "%"
            },
            [greatTableIndex["CritRateFlat"]]: {
                "display": "CRIT Rate",
                "specific": "CRIT Rate Flat",
                "unit": "%"
            },
            "CritRateFinal": {
                "display": "CRIT Rate",
                "specific": "CRIT Rate Final",
                "unit": "%"
            },
        }
    },
    "CritDamage": {
        "icon": initialPropertyPath + "IconCriticalDamage.png",
        "sets": {
            [greatTableIndex["CritDamageBase"]]: {
                "display": "CRIT DMG",
                "specific": "CRIT DMG",
                "unit": "%"
            },
            [greatTableIndex["CritDamageBaseNULL"]]: {
                "display": "CRIT DMG",
                "specific": "CRIT DMG (Locked)",
                "unit": "%"
            },
            [greatTableIndex["CritDamage%"]]: {
                "display": "CRIT DMG",
                "specific": "CRIT DMG %",
                "unit": "%"
            },
            [greatTableIndex["CritDamageFlat"]]: {
                "display": "CRIT DMG",
                "specific": "CRIT DMG Flat",
                "unit": "%"
            },
            "CritDamageFinal": {
                "display": "CRIT DMG",
                "specific": "CRIT DMG Final",
                "unit": "%"
            },
        }
    },
    "Break": {
        "icon": initialPropertyPath + "IconBreakUp.png",
        "sets": {
            [greatTableIndex["DamageBreak"]]: {
                "display": "Break Effect",
                "specific": "Break Effect",
                "unit": "%"
            },
            [greatTableIndex["DamageBreakSuper"]]: {
                "display": "Super Break",
                "specific": "Super Break Damage",
                "unit": "%"
            },
            [greatTableIndex["DamageBreakNULL"]]: {
                "display": "Break Effect",
                "specific": "Break Effect (Locked)",
                "unit": "%"
            },
            [greatTableIndex["DamageBreakBonus"]]: {
                "display": "Break Effect",
                "specific": "Break Effect DMG",
                "unit": "%"
            },
            // [greatTableIndex["DamageBreakUNUSED"]]: {
            //     "display": "Break Effect UNUSED",
            //     "specific": "Break Effect UNUSED",
            //     "unit": "%"
            // },
            [greatTableIndex["DamageBreakEfficiency"]]: {
                "display": "Break Efficiency",
                "specific": "Weakness Break Efficiency",
                "unit": "%"
            },
            [greatTableIndex["ToughnessRatioAdjustment"]]: {
                "display": "Toughness Ratio",
                "specific": "Toughness Ratio Adjustment",
                "unit": "%"
            },
            // [greatTableIndex["SuperBreakMaybe"]]: {
            //     "display": "Break Effect % UNUSED",
            //     "specific": "Break Effect % UNUSED",
            //     "unit": "%"
            // },
        }
    },
    "EnergyRegen": {
        "icon": initialPropertyPath + "IconEnergyRecovery.png",
        "sets": {
            [greatTableIndex["EnergyRegenRate"]]: {
                "display": "Energy %",
                "specific": "Energy Regen Rate",
                "unit": "%"
            },
            // [greatTableIndex["EnergyRegenRateUNUSED"]]: {
            //     "display": "Energy % UNUSED",
            //     "specific": "Energy Regen Rate UNUSED",
            //     "unit": "%"
            // },
        }
    },
    "EnergyMax": {
        "icon": initialPropertyPath + "IconEnergyLimit.png",
        "sets": {
            [greatTableIndex["EnergyMax"]]: {
                "display": "Max Energy",
                "specific": "Max Energy",
                "unit": ""
            },
            [greatTableIndex["EnergyMaxSpecial"]]: {
                "display": "Max Energy Special",
                "specific": "Max Energy Special",
                "unit": ""
            },
        }
    },
    "Aggro": {
        "icon": "/HonkaiSR/misc/IconMonsterTaunted.png",
        "sets": {
            [greatTableIndex["AggroBase"]]: {
                "display": "Aggro",
                "specific": "Aggro Base",
                "unit": ""
            },
            [greatTableIndex["AggroBase%"]]: {
                "display": "Aggro",
                "specific": "Aggro Base %",
                "unit": "%"
            },
            [greatTableIndex["Aggro%"]]: {
                "display": "Aggro",
                "specific": "Aggro %",
                "unit": "%"
            },
            [greatTableIndex["AggroFlat"]]: {
                "display": "Aggro",
                "specific": "Aggro Flat",
                "unit": ""
            },
        }



    },
    "Shield": {
        "icon": "/HonkaiSR/misc/Icon_Shield.png",
        "sets": {
            [greatTableIndex["ShieldOutgoing"]]: {
                "display": "Shield%",
                "specific": "Bonus Shield (Outgoing)",
                "unit": "%"
            },
            [greatTableIndex["ShieldIncoming"]]: {
                "display": "Shield%",
                "specific": "Bonus Shield (Incoming)",
                "unit": "%"
            },
        }
    },
    "Damage": {
        "icon": "/HonkaiSR/misc/Icon_All_DMG_Boost.png",
        "sets": {
            [greatTableIndex["DamageAll"]]: {
                "display": "DMG All",
                "specific": "Damage: All",
                "unit": "%"
            },
            [greatTableIndex["DamageBasic"]]: {
                "display": "DMG Basic",
                "specific": "Damage: Basic ATK",
                "unit": "%"
            },
            [greatTableIndex["DamageSkill"]]: {
                "display": "DMG Skill",
                "specific": "Damage: Skill",
                "unit": "%"
            },
            [greatTableIndex["DamageUltimate"]]: {
                "display": "DMG Ultimate",
                "specific": "Damage: Ultimate",
                "unit": "%"
            },
            [greatTableIndex["DamageDOT"]]: {
                "display": "DMG DoT",
                "specific": "Damage: DoT",
                "unit": "%"
            },
            [greatTableIndex["DamageFUA"]]: {
                "display": "DMG FuA",
                "specific": "Damage: Follow-up",
                "unit": "%"
            },
        }
    },
    "Misc": {
        "icon": noIconPath,
        "sets": {
            // [greatTableIndex["Multiplier"]]: {
            //     "display": "Final Multi",
            //     "specific": "Final Multiplier",
            //     "unit": ""
            // },
            [greatTableIndex["LVL"]]: {
                "display": "Level",
                "specific": "Level",
                "unit": ""
            },
            [greatTableIndex["Toughness"]]: {
                "display": "Toughness",
                "specific": "Toughness",
                "unit": ""
            },
        }
    },
    "PEN": {
        "icon": noIconPath,
        "sets": {
            [greatTableIndex["ResistanceAll"]]: {
                "display": "All RES",
                "specific": "RES: All",
                "unit": "%"
            },

            [greatTableIndex["ResistanceAllPEN"]]: {
                "display": "All RES PEN",
                "specific": "PEN: All",
                "unit": "%"
            },

            [greatTableIndex["ResistanceBasicPEN"]]: {
                "display": "Basic ATK RES PEN",
                "specific": "PEN: Basic",
                "unit": "%"
            },
            [greatTableIndex["ResistanceSkillPEN"]]: {
                "display": "Skill RES PEN",
                "specific": "PEN: Skill",
                "unit": "%"
            },
            [greatTableIndex["ResistanceUltimatePEN"]]: {
                "display": "Ultimate RES PEN",
                "specific": "PEN: Ultimate",
                "unit": "%"
            },

            [greatTableIndex["ResistanceDOTPEN"]]: {
                "display": "DOT RES PEN",
                "specific": "PEN: DOT",
                "unit": "%"
            },
            [greatTableIndex["ResistanceFUAPEN"]]: {
                "display": "FUA RES PEN",
                "specific": "PEN: FUA",
                "unit": "%"
            },
            [greatTableIndex["ResistanceBreakPEN"]]: {
                "display": "Break RES PEN",
                "specific": "PEN: Break",
                "unit": "%"
            },
            [greatTableIndex["ResistanceBreakSuperPEN"]]: {
                "display": "BreakSuper RES PEN",
                "specific": "PEN: BreakSuper",
                "unit": "%"
            },
        }
    },

    "Vulnerable": {
        "icon": noIconPath,
        "sets": {
            [greatTableIndex["VulnAll"]]: {
                "display": "All Vuln",
                "specific": "Vulnerability: All",
                "unit": "%"
            },
            [greatTableIndex["VulnBasic"]]: {
                "display": "Basic Vuln",
                "specific": "Vulnerability: Basic",
                "unit": "%"
            },
            [greatTableIndex["VulnSkill"]]: {
                "display": "Skill Vuln",
                "specific": "Vulnerability: Skill",
                "unit": "%"
            },
            [greatTableIndex["VulnUltimate"]]: {
                "display": "Ultimate Vuln",
                "specific": "Vulnerability: Ultimate",
                "unit": "%"
            },
            [greatTableIndex["VulnDOT"]]: {
                "display": "DOT Vuln",
                "specific": "Vulnerability: DOT",
                "unit": "%"
            },
            [greatTableIndex["VulnFUA"]]: {
                "display": "FUA Vuln",
                "specific": "Vulnerability: FUA",
                "unit": "%"
            },
            [greatTableIndex["VulnBreak"]]: {
                "display": "Break Vuln",
                "specific": "Vulnerability: Break",
                "unit": "%"
            },
            [greatTableIndex["VulnIce"]]: {
                "display": "Ice Vuln",
                "specific": "Vulnerability: Ice",
                "unit": "%"
            },
            [greatTableIndex["VulnLightning"]]: {
                "display": "Lightning Vuln",
                "specific": "Vulnerability: Lightning",
                "unit": "%"
            },
            [greatTableIndex["VulnFire"]]: {
                "display": "Fire Vuln",
                "specific": "Vulnerability: Fire",
                "unit": "%"
            },
            [greatTableIndex["VulnQuantum"]]: {
                "display": "Quantum Vuln",
                "specific": "Vulnerability: Quantum",
                "unit": "%"
            },
            [greatTableIndex["VulnImaginary"]]: {
                "display": "Imaginary Vuln",
                "specific": "Vulnerability: Imaginary",
                "unit": "%"
            },
            [greatTableIndex["VulnWind"]]: {
                "display": "Wind Vuln",
                "specific": "Vulnerability: Wind",
                "unit": "%"
            },
            [greatTableIndex["VulnPhysical"]]: {
                "display": "Physical Vuln",
                "specific": "Vulnerability: Physical",
                "unit": "%"
            },
        }
    },
    "Weakness": {
        "icon": noIconPath,
        "sets": {
            [greatTableIndex["WeaknessAll"]]: {
                "display": "All Weakness",
                "specific": "Weakness: All",
                "unit": ""
            },
            [greatTableIndex["WeaknessIce"]]: {
                "display": "Ice Weakness",
                "specific": "Weakness: Ice",
                "unit": ""
            },
            [greatTableIndex["WeaknessLightning"]]: {
                "display": "Lightning Weakness",
                "specific": "Weakness: Lightning",
                "unit": ""
            },
            [greatTableIndex["WeaknessFire"]]: {
                "display": "Fire Weakness",
                "specific": "Weakness: Fire",
                "unit": ""
            },
            [greatTableIndex["WeaknessQuantum"]]: {
                "display": "Quantum Weakness",
                "specific": "Weakness: Quantum",
                "unit": ""
            },
            [greatTableIndex["WeaknessImaginary"]]: {
                "display": "Imaginary Weakness",
                "specific": "Weakness: Imaginary",
                "unit": ""
            },
            [greatTableIndex["WeaknessWind"]]: {
                "display": "Wind Weakness",
                "specific": "Weakness: Wind",
                "unit": ""
            },
            [greatTableIndex["WeaknessPhysical"]]: {
                "display": "Physical Weakness",
                "specific": "Weakness: Physical",
                "unit": ""
            },
        }
    },


    "EffectHitRate": {
        "icon": initialPropertyPath + "IconStatusProbability.png",
        "sets": {
            [greatTableIndex["EffectHitRate"]]: {
                "display": "Effect Hit Rate",
                "specific": "Effect Hit Rate",
                "unit": "%"
            },
            // [greatTableIndex["EffectHitRateUNUSED"]]: {
            //     "display": "Effect Hit Rate UNUSED",
            //     "specific": "Effect Hit Rate UNUSED",
            //     "unit": "%"
            // },
        }
    },
    "EffectRES": {
        "icon": initialPropertyPath + "IconStatusResistance.png",
        "sets": {
            [greatTableIndex["EffectRES"]]: {
                "display": "Effect RES",
                "specific": "Effect RES",
                "unit": "%"
            },
            [greatTableIndex["CrowdControlRES"]]: {
                "display": "CC RES",
                "specific": "Crowd Control RES",
                "unit": "%"
            },
            // [greatTableIndex["EffectRESUNUSED"]]: {
            //     "display": "Effect RES UNUSED",
            //     "specific": "Effect RES UNUSED",
            //     "unit": "%"
            // },
        }
    },

    "HealOUT": {
        "icon": initialPropertyPath + "IconHealRatio.png",
        "sets": {
            [greatTableIndex["HealingOutgoing"]]: {
                "display": "Healing Out",
                "specific": "Healing Outgoing",
                "unit": "%"
            },
            // [greatTableIndex["HealingOutgoingUNUSED"]]: {
            //     "display": "Healing Out UNUSED",
            //     "specific": "Healing Outgoing UNUSED",
            //     "unit": "%"
            // },
        }
    },
    "HealIN": {
        "icon": initialPropertyPath + "IconHealRatio.png",
        "sets": {
            [greatTableIndex["HealingIncoming"]]: {
                "display": "Healing Inc",
                "specific": "Healing Incoming",
                "unit": "%"
            },
        }
    },

    "Physical": {
        "icon": initialPropertyPath + "IconPhysicalAddedRatio.png",
        "sets": {
            [greatTableIndex["DamagePhysical"]]: {
                "display": "Physical",
                "specific": "DMG: Physical",
                "unit": "%"
            },
        }
    },
    "PhysicalRES": {
        "icon": initialPropertyPath + "IconPhysicalResistanceDelta.png",
        "sets": {
            [greatTableIndex["ResistancePhysical"]]: {
                "display": "Physical RES",
                "specific": "RES: Physical",
                "unit": "%"
            },
            [greatTableIndex["ResistancePhysicalPEN"]]: {
                "display": "Physical RES PEN",
                "specific": "PEN: Physical",
                "unit": "%"
            },
            // [greatTableIndex["ResistancePhysicalBonus"]]: {
            //     "display": "Physical RES UNUSED",
            //     "specific": "RES: Physical UNUSED",
            //     "unit": "%"
            // },
        }
    },

    "Fire": {
        "icon": initialPropertyPath + "IconFireAddedRatio.png",
        "sets": {
            [greatTableIndex["DamageFire"]]: {
                "display": "Fire",
                "specific": "DMG: Fire",
                "unit": "%"
            },
        }
    },
    "FireRES": {
        "icon": initialPropertyPath + "IconFireResistanceDelta.png",
        "sets": {
            [greatTableIndex["ResistanceFire"]]: {
                "display": "Fire RES",
                "specific": "RES: Fire",
                "unit": "%"
            },
            [greatTableIndex["ResistanceFirePEN"]]: {
                "display": "Fire RES PEN",
                "specific": "PEN: Fire",
                "unit": "%"
            },
            // [greatTableIndex["ResistanceFireBonus"]]: {
            //     "display": "Fire RES UNUSED",
            //     "specific": "RES: Fire UNUSED",
            //     "unit": "%"
            // },
        }
    },

    "Ice": {
        "icon": initialPropertyPath + "IconIceAddedRatio.png",
        "sets": {
            [greatTableIndex["DamageIce"]]: {
                "display": "Ice",
                "specific": "DMG: Ice",
                "unit": "%"
            },
        }
    },
    "IceRES": {
        "icon": initialPropertyPath + "IconIceResistanceDelta.png",
        "sets": {
            [greatTableIndex["ResistanceIce"]]: {
                "display": "Ice RES",
                "specific": "RES: Ice",
                "unit": "%"
            },
            [greatTableIndex["ResistanceIcePEN"]]: {
                "display": "Ice RES PEN",
                "specific": "PEN: Ice",
                "unit": "%"
            },
            // [greatTableIndex["ResistanceIceBonus"]]: {
            //     "display": "Ice RES UNUSED",
            //     "specific": "RES: Ice UNUSED",
            //     "unit": "%"
            // },
        }
    },

    "Lightning": {
        "icon": initialPropertyPath + "IconThunderAddedRatio.png",
        "sets": {
            [greatTableIndex["DamageLightning"]]: {
                "display": "Lightning",
                "specific": "DMG: Lightning",
                "unit": "%"
            },
        }
    },
    "LightningRES": {
        "icon": initialPropertyPath + "IconThunderResistanceDelta.png",
        "sets": {
            [greatTableIndex["ResistanceLightning"]]: {
                "display": "Lightning RES",
                "specific": "RES: Lightning",
                "unit": "%"
            },
            [greatTableIndex["ResistanceLightningPEN"]]: {
                "display": "Lightning RES PEN",
                "specific": "PEN: Lightning",
                "unit": "%"
            },
            // [greatTableIndex["ResistanceLightningBonus"]]: {
            //     "display": "Lightning RES UNUSED",
            //     "specific": "RES: Lightning UNUSED",
            //     "unit": "%"
            // },
        }
    },

    "Wind": {
        "icon": initialPropertyPath + "IconWindAddedRatio.png",
        "sets": {
            [greatTableIndex["DamageWind"]]: {
                "display": "Wind",
                "specific": "DMG: Wind",
                "unit": "%"
            },
        }
    },
    "WindRES": {
        "icon": initialPropertyPath + "IconWindResistanceDelta.png",
        "sets": {
            [greatTableIndex["ResistanceWind"]]: {
                "display": "Wind RES",
                "specific": "RES: Wind",
                "unit": "%"
            },
            [greatTableIndex["ResistanceWindPEN"]]: {
                "display": "Wind RES PEN",
                "specific": "PEN: Wind",
                "unit": "%"
            },
            // [greatTableIndex["ResistanceWindBonus"]]: {
            //     "display": "Wind RES UNUSED",
            //     "specific": "RES: Wind UNUSED",
            //     "unit": "%"
            // },
        }
    },

    "Quantum": {
        "icon": initialPropertyPath + "IconQuantumAddedRatio.png",
        "sets": {
            [greatTableIndex["DamageQuantum"]]: {
                "display": "Quantum",
                "specific": "DMG: Quantum",
                "unit": "%"
            },
        }
    },
    "QuantumRES": {
        "icon": initialPropertyPath + "IconQuantumResistanceDelta.png",
        "sets": {
            [greatTableIndex["ResistanceQuantum"]]: {
                "display": "Quantum RES",
                "specific": "RES: Quantum",
                "unit": "%"
            },
            [greatTableIndex["ResistanceQuantumPEN"]]: {
                "display": "Quantum RES PEN",
                "specific": "PEN: Quantum",
                "unit": "%"
            },
            // [greatTableIndex["ResistanceQuantumBonus"]]: {
            //     "display": "Quantum RES UNUSED",
            //     "specific": "RES: Quantum UNUSED",
            //     "unit": "%"
            // },
        }
    },

    "Imaginary": {
        "icon": initialPropertyPath + "IconImaginaryAddedRatio.png",
        "sets": {
            [greatTableIndex["DamageImaginary"]]: {
                "display": "Imaginary",
                "specific": "DMG: Imaginary",
                "unit": "%"
            },
        }
    },
    "ImaginaryRES": {
        "icon": initialPropertyPath + "IconImaginaryResistanceDelta.png",
        "sets": {
            [greatTableIndex["ResistanceImaginary"]]: {
                "display": "Imaginary RES",
                "specific": "RES: Imaginary",
                "unit": "%"
            },
            [greatTableIndex["ResistanceImaginaryPEN"]]: {
                "display": "Imaginary RES PEN",
                "specific": "PEN: Imaginary",
                "unit": "%"
            },
            // [greatTableIndex["ResistanceImaginaryBonus"]]: {
            //     "display": "Imaginary RES UNUSED",
            //     "specific": "RES: Imaginary UNUSED",
            //     "unit": "%"
            // },
        }
    },

}

//kind of cancer but I don't want to double-define things in case I change them later, would rather have one reference used twice so changes will be applied universally
const cacheTagFamilies = {
    "Damage": {
        ...propertyImagePaths.Damage.sets,
        [DamagePhysical]: propertyImagePaths.Physical.sets.DamagePhysical,
        [DamageFire]: propertyImagePaths.Fire.sets.DamageFire,
        [DamageIce]: propertyImagePaths.Ice.sets.DamageIce,
        [DamageLightning]: propertyImagePaths.Lightning.sets.DamageLightning,
        [DamageWind]: propertyImagePaths.Wind.sets.DamageWind,
        [DamageQuantum]: propertyImagePaths.Quantum.sets.DamageQuantum,
        [DamageImaginary]: propertyImagePaths.Imaginary.sets.DamageImaginary,
    },
    "DEFShred": {
        ...propertyImagePaths.DEFShred.sets,
    },
    "PEN": {
        ...propertyImagePaths.PEN.sets,//resistance all is bundled under pen as well, no need to add it separately
        // ResistancePhysical: propertyImagePaths.PhysicalRES.sets.ResistancePhysical,
        // ResistanceFire: propertyImagePaths.FireRES.sets.ResistanceFire,
        // ResistanceIce: propertyImagePaths.IceRES.sets.ResistanceIce,
        // ResistanceLightning: propertyImagePaths.LightningRES.sets.ResistanceLightning,
        // ResistanceWind: propertyImagePaths.WindRES.sets.ResistanceWind,
        // ResistanceQuantum: propertyImagePaths.QuantumRES.sets.ResistanceQuantum,
        // ResistanceImaginary: propertyImagePaths.ImaginaryRES.sets.ResistanceImaginary,

        [ResistancePhysicalPEN]: propertyImagePaths.PhysicalRES.sets.ResistancePhysicalPEN,
        [ResistanceFirePEN]: propertyImagePaths.FireRES.sets.ResistanceFirePEN,
        [ResistanceIcePEN]: propertyImagePaths.IceRES.sets.ResistanceIcePEN,
        [ResistanceLightningPEN]: propertyImagePaths.LightningRES.sets.ResistanceLightningPEN,
        [ResistanceWindPEN]: propertyImagePaths.WindRES.sets.ResistanceWindPEN,
        [ResistanceQuantumPEN]: propertyImagePaths.QuantumRES.sets.ResistanceQuantumPEN,
        [ResistanceImaginaryPEN]: propertyImagePaths.ImaginaryRES.sets.ResistanceImaginaryPEN,
    },
    "Vulnerable": {
        ...propertyImagePaths.Vulnerable.sets,
    },
    "CritRate": {
        ...propertyImagePaths.CritRate.sets,
    },
    "CritDamage": {
        ...propertyImagePaths.CritDamage.sets,
    },
}
const familyCacheTagSet = new Set (["UpdateStatDamage","UpdateStatDEFShred","UpdateStatPEN","UpdateStatVulnerable","UpdateStatCritRate","UpdateStatCritDamage"])

// const testArray = new Array(greatTableSize);
// testArray[0] += 1
// console.log(testArray)

let basicShorthand = {
    mappedFamilies: {},
    mappedCacheTags: {},
    mappedUpdateStatKeys: {},
    reverseKeyMappings: {},
    indexToSpecific: {},
    findStatObject(statName) {
        let groupKeys = Object.keys(propertyImagePaths);
        let returnKey = null;

        for (let groupKey of groupKeys) {
            let currentGroup = propertyImagePaths[groupKey];

            if (currentGroup.sets[statName]) {
                returnKey = currentGroup;
                break;
            }
        }

        if (!returnKey) {console.log(`Could not find stat ${statName} :: basicShorthand.findStatObject()`)}
        return returnKey;
    },
    findStatFamilyName(statName) {
        let groupKeys = Object.keys(propertyImagePaths);
        let returnKey = null;

        for (let groupKey of groupKeys) {
            let currentGroup = propertyImagePaths[groupKey];

            if (currentGroup.sets[statName]) {
                returnKey = groupKey;
                break;
            }
        }

        if (!returnKey) {console.log(`Could not find stat ${statName} family :: basicShorthand.findStatFamilyName()`)}
        return returnKey;
    },
    establishFamilyMappings() {
        let groupKeys = Object.keys(propertyImagePaths);
        for (let groupKey of groupKeys) {
            let currentGroup = propertyImagePaths[groupKey];
            let currentKeys = Object.keys(currentGroup.sets);

            for (let innerKey of currentKeys) {
                // console.log(innerKey,groupKey)
                basicShorthand.mappedFamilies[innerKey] = groupKey;
                basicShorthand.mappedUpdateStatKeys[innerKey] = `UpdateStat${groupKey}`;

                basicShorthand.reverseKeyMappings[currentGroup.sets[innerKey].specific] = innerKey;

                basicShorthand.indexToSpecific[innerKey] = currentGroup.sets[innerKey].specific;
            }
            // basicShorthand.mappedUpdateStatKeys[groupKey] = `UpdateStat${groupKey}`;
            // if (currentGroup.sets[statName]) {
            //     returnKey = groupKey;
            //     break;
            // }
        }
    },
    establishCacheFamilyMappings() {
        let groupKeys = Object.keys(cacheTagFamilies);
        for (let groupKey of groupKeys) {
            let currentGroup = Object.keys(cacheTagFamilies[groupKey]);

            for (let innerKey of currentGroup) {
                basicShorthand.mappedCacheTags[innerKey] = `UpdateStat${groupKey}`;
            }
        }
    },
    estimateSubRolls(category,value) {

        // console.log(category)
        // greatTableIndex
        let zeroBounds = [category.base,(category.base + category.step * category.stepsPossible)];
        //we have to floor the bottom here bc it might say 16 flat atk in-game, but it's actually 16.784 or some shit
        //and if we don't floor it then the 16 someone entered will register as LOWER THAN, not greater than, the base value
        if (value >= Math.floor(zeroBounds[0]) && value <= zeroBounds[1]) {return 0}

        let adjustedValue = value - zeroBounds[0];//adjust the potential roll value pool by the base amount so we don't skew estimated roll counts
        let avgRoll = category.base + category.step;//have the avg roll value be equal to the MIDDLE roll, not the higher one. NEVER THE HIGHER ONE
        let avgAmount = Math.min(5,Math.round(adjustedValue/avgRoll));//then divide the total value pool by the avg roll value, which should give us the amount of rolls in the pool, rounded to the nearest whole

        return avgAmount;

        // "DEFFlat": {
        //     "base": 16.935019,
        //     "step": 2.116877,
        //     "stepsPossible": 2,
        //     "bounds": [
        //         16.935019,
        //         127.01263800000001
        //     ]
        // },

    },
    establishTagNames(objectToWriteTo,tagsList,prefix,suffix,convertToIndices) {
        prefix = prefix ?? "";
        suffix = suffix ?? "";
        for (let tag of tagsList) {
            let composite = prefix + tag + suffix;
            if (greatTableKnowerOfAll[composite] === undefined) {continue;}
            objectToWriteTo[tag] = convertToIndices ? greatTableIndex[composite] : composite;//greatTableIndex
        }
    },
    makeKeysArray(possibleKeys,tags) {
        let returnArray = [];
        
        for (let tag of tags) {
            let currentResult = greatTableIndex[possibleKeys[tag]];
            returnArray.push(currentResult != undefined ? currentResult : 0)

            // if (currentResult != undefined) {returnArray.push(currentResult)}
            // else {console.log(tag)}
        }
        return returnArray;

        // greatTableIndex
        // greatTableKeys
    }
}

// console.log(propertyImagePaths.Misc)

basicShorthand.establishFamilyMappings();
basicShorthand.establishCacheFamilyMappings();
const scalarBaseKey = {};
const scalarPercKey = {};
const scalarFlatKey = {};
const resistanceKeys = {};
const weaknessKeys = {};

const taggers = basicShorthand.establishTagNames;
taggers(resPENKeys,possibleTags,"Resistance","PEN");
taggers(vulnKeys,possibleTags,"Vuln","");
taggers(dmgKeys,possibleTags,"Damage","");
taggers(defShredKeys,possibleTags,"DEFShred","");
taggers(scalarBaseKey,possibleScalars,"","Base",true);
taggers(scalarPercKey,possibleScalars,"","%",true);
taggers(scalarFlatKey,possibleScalars,"","Flat",true);
taggers(resistanceKeys,possibleTags,"Resistance","",true);
taggers(weaknessKeys,possibleTags,"Weakness","",true);

// console.log(resPENKeys)
// console.log(vulnKeys)
// console.log(dmgKeys)
// console.log(defShredKeys)
// console.log(scalarBaseKey)
// console.log(scalarPercKey)
// console.log(scalarFlatKey)
// console.log(resistanceKeys)
// console.log(weaknessKeys)











const finalSets = {
    bodySets: {},
    planarSets: {}
}

for (let relicSet in relicSets) {
    const currentSet = relicSets[relicSet];
    if (currentSet.desc.length > 1) {
        finalSets.bodySets[relicSet] = currentSet;
    }
    else {
        finalSets.planarSets[relicSet] = currentSet;
    }
}











