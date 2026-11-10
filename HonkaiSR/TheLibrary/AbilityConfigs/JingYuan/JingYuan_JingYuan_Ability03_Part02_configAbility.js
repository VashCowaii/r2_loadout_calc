const configAbility = {
  "fileName": "JingYuan_JingYuan_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "2"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "stackLimit": {
        "displayLines": "10"
      },
      "addStacksPerTrigger": {
        "displayLines": "3"
      }
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "EnergyBar_UltraATKCount",
      "modifierName": "<a class=\"gModGreen\" id=\"-1804861609\">JingYuan_BattleEvent_UltraATKCount</a>[<span class=\"descriptionNumberColor\">Lightbringer</span>]",
      "multiplier": 1
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "EnergyBar_ATKCount",
      "modifierName": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "multiplier": 1
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(EnergyBar_ATKCount + EnergyBar_UltraATKCount)"
      },
      "variableName": "EnergyBar_ATKCountSum"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "EnergyBar_ATKCountSum"
      },
      "maximum": {
        "displayLines": "10"
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    {
      "name": "Show Attack Count",
      "target": {
        "name": "Target Name",
        "target": "{{Jing Yuan: Lightning Lord}}"
      },
      "attackCount": {
        "displayLines": "EnergyBar_ATKCount"
      },
      "attackCountEnhanced": {
        "displayLines": "EnergyBar_UltraATKCount"
      },
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Jing Yuan: Lightning Lord}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1141770667\">JingYuan_BattleEvent_ATKCountShowText</a>",
      "valuePerStack": {
        "ATKCount": {
          "displayLines": "EnergyBar_ATKCount"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Jing Yuan: Lightning Lord}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1762822846\">JingYuan_BattleEvent_SpeedUp</a>",
      "stackLimit": {
        "displayLines": "(10 - 3)"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "10"
        }
      },
      "addStacksPerTrigger": {
        "displayLines": "3"
      }
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}