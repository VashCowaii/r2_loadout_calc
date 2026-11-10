const configAbility = {
  "fileName": "Clara_Klara_PassiveAbility01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Because We're Family"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(EnergyBar_ATKCount - 1)"
          },
          "variableName": "EnergyBar_ATKCount"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "EnergyBar_ATKCount"
          },
          "assignState": "True",
          "priorState": "Active"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Revenge"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1077895558\">Klara_Trace03</a>",
          "valuePerStack": {
            "MDF_AllDamageTypeAddRatio": {
              "displayLines": "0.3"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "(1.6 + 1.6)"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "((1.6 + 1.6) / 2)"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Modifier Variable",
          "modifierName": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
          "function": "Add"
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1.6"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1077895558\">Klara_Trace03</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1077895558\">Klara_Trace03</a>",
      "stackData": [
        "MDF_AllDamageTypeAddRatio"
      ],
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "MDF_AllDamageTypeAddRatio"
                }
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