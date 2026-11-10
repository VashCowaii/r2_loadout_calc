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
              "displayLines": "(8 * {[SkillP01[3]]})"
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
        "WEAKNESS_IMPLANT"
      ],
      "stackData": [
        "MDF_PropertyValue"
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
                "displayLines": "(0 - MDF_PropertyValue)"
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
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}