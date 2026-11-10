const configAbility = {
  "fileName": "Pela_Pela_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "typeOverride": "Buff",
      "dispelCount": {
        "displayLines": "1"
      },
      "dispelOrder": "LastAdded",
      "counterKey": "BuffNumber"
    },
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"278160139\">Pela_AbilityEidolon4_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice RES Reduction</span>]",
          "duration": {
            "displayLines": "2"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.12"
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "2.1"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Wipe Out"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BuffNumber",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1505163766\">Pela_Trace03_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">Wipe Out</span>]",
              "valuePerStack": {
                "MDF_Pela_Trace03_DamageAddedRatio": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BuffNumber",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-250608162\">Pela_AbilityEidolon2_AddSpeedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_Pela_AbilityEidolon2_P1_AddSpeedRatio": {
                  "displayLines": "0.1"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "BuffNumber"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}