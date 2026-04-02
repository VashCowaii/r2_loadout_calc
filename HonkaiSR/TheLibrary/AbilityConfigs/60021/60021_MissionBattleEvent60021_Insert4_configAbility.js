const configAbility = {
  "fileName": "60021_MissionBattleEvent60021_Insert4",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"270618984\">StageSpecialAbility_20412061_BEPerform</a>",
      "paramSequence2": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1487905304\">StageSpecialAbility_20412061_InBattle_Weakness_Fire</a>",
          "duration": 2,
          "valuePerStack": {
            "MDF_PropertyValue": 0.2
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (2) || MUL || RETURN",
              "displayLines": "(AOE Toughness Value * 2)",
              "constants": [
                2
              ],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "AllType"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1487905304\">StageSpecialAbility_20412061_InBattle_Weakness_Fire</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1487905304\">StageSpecialAbility_20412061_InBattle_Weakness_Fire</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1099669275\">Silwolf_BPAbility_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Fire"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}