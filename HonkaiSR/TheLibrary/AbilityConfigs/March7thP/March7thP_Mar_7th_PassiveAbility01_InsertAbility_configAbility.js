const configAbility = {
  "fileName": "March7thP_Mar_7th_PassiveAbility01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Girl Power"
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank01_DefenceRatio",
              "value": {
                "operator": "Variables[0] (0.3) || RETURN",
                "displayLines": "0.3",
                "constants": [],
                "variables": [
                  0.3
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank01_DefenceRatio",
              "value": 0
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
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (_Rank01_DefenceRatio) || RETURN",
              "displayLines": "_Rank01_DefenceRatio",
              "constants": [],
              "variables": [
                "_Rank01_DefenceRatio"
              ]
            },
            "dmgFormulaExtra": "DEF Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
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
      "name": "Define Modifier Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
      "function": "Add"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "scope": "ContextCaster",
          "variableName": "Mar7th_00_Passive_CounterView",
          "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
          "multiplier": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Mar7th_00_Passive_CounterView",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Mar7th_00_Passive_CounterView",
        "compareType": ">=",
        "value2": 0.5,
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Shield"
          },
          "ifTargetFound": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Mar7th_00_Passive_CounterView) || RETURN",
                "displayLines": "Mar7th_00_Passive_CounterView",
                "constants": [],
                "variables": [
                  "Mar7th_00_Passive_CounterView"
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ],
          "noTargetFound": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Mar7th_00_Passive_CounterView) || RETURN",
                "displayLines": "Mar7th_00_Passive_CounterView",
                "constants": [],
                "variables": [
                  "Mar7th_00_Passive_CounterView"
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "assignState": "True",
          "priorState": "CoolDown",
          "bar#": 3,
          "cooldown": 1
        }
      ]
    }
  ],
  "references": []
}