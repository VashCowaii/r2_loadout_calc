const configAbility = {
  "fileName": "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"674084232\">Aventurine_Passive_AddDefence</a>[<span class=\"descriptionNumberColor\">Unexpected Hanging Paradox</span>]",
          "duration": {
            "displayLines": "2"
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "3"
          },
          "variableName": "MDF_AttackCount"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Bingo!"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1927939151\">Aventurine_Trace03_Trigger</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "MDF_Layer2",
      "modifierName": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>",
      "multiplier": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>",
      "addStacksPerTrigger": {
        "displayLines": "(MDF_Layer2 - 7)"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MDF_AttackGap",
      "resetValue": {
        "displayLines": "(1 / (7 + MDF_AttackCount))"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(7 + MDF_AttackCount)"
      },
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "0.25"
                },
                "dmgFormula": "DEF Scaling",
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}