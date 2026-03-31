const configAbility = {
  "fileName": "60021_MissionBattleEvent60021_Insert3",
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
          "modifier": "<a class=\"gModGreen\" id=\"808836798\">StageSpecialAbility_20412061_InBattle_Weakness_Thunder</a>",
          "duration": 2,
          "valuePerStack": {
            "MDF_PropertyValue": 0.2
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__229",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__229"
            ]
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__230",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__230"
              ]
            }
          },
          "stackFlag": "Level"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__229",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__229"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__230",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__230"
              ]
            }
          },
          "stackFlag": "Level"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__229",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__229"
            ]
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__230",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__230"
              ]
            }
          },
          "stackFlag": "Level"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__229",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__229"
            ]
          },
          "valuePerStack": {
            "Modifier_Tear_DamageRatio": 0.1,
            "Modifier_Tear_MaxPercentage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__230",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__230"
              ]
            }
          },
          "stackFlag": "Level"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__808836798\">StageSpecialAbility_20412061_InBattle_Weakness_Thunder</a>",
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
              "modifierName": "<a class=\"gModGreen\" id=\"808836798\">StageSpecialAbility_20412061_InBattle_Weakness_Thunder</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"954284461\">Silwolf_BPAbility_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Extra Lightning Weakness</span>]"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
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
                "Thunder"
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