const configAbility = {
  "fileName": "60021_MissionBattleEvent60021_Insert1",
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
          "modifier": "<a class=\"gModGreen\" id=\"591807962\">StageSpecialAbility_20412061_InBattle_Weakness_Wind</a>",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Constants[0] (8) || Variables[0] ({[SkillP01[3]]}) || MUL || RETURN",
              "displayLines": "(8 * {[SkillP01[3]]})",
              "constants": [
                8
              ],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "indirectDMG": true,
            "Toughness": {
              "displayLines": 30
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
      "for": "<a class=\"gModGreen\" id=\"mod__591807962\">StageSpecialAbility_20412061_InBattle_Weakness_Wind</a>",
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
              "modifierName": "<a class=\"gModGreen\" id=\"591807962\">StageSpecialAbility_20412061_InBattle_Weakness_Wind</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1411533355\">Silwolf_BPAbility_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Extra Wind Weakness</span>]"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
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
                "Wind"
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