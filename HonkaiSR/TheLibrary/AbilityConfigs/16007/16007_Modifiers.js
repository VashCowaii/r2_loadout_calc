const configAbility = {
  "fileName": "16007_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1501720216\">AetherDivide_W2_Beast01_01_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Electric"
      ],
      "useEntitySnapshot": true,
      "description": "For a set number of turns, takes DoT at the start of each turn",
      "type": "Debuff",
      "effectName": "Shock",
      "statusName": "Shock",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Electric_ElectricLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || Variables[1] (Modifier_Electric_ElectricLayer) || MUL || RETURN",
                  "displayLines": "(Modifier_Electric_DamagePercentage * Modifier_Electric_ElectricLayer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Electric_DamagePercentage",
                    "Modifier_Electric_ElectricLayer"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (Modifier_Electric_DamageValue) || RETURN",
                  "displayLines": "Modifier_Electric_DamageValue",
                  "constants": [],
                  "variables": [
                    "Modifier_Electric_DamageValue"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Electric_ElectricLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || Variables[2] (Modifier_Electric_ElectricLayer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * Modifier_Electric_ElectricLayer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Electric_DamagePercentage",
                    "Modifier_Electric_ElectricLayer"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || RETURN",
                  "displayLines": "(DOT_TriggerRatio * Modifier_Electric_DamageValue)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Electric_DamageValue"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-219601494\">AetherDivide_W2_Beast01_01_Critical</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1122824575\">AetherDivide_Standard_B</a>"
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ],
  "references": []
}