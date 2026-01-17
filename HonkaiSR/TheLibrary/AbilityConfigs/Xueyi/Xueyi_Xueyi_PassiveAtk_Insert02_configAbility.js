const configAbility = {
  "fileName": "Xueyi_Xueyi_PassiveAtk_Insert02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (_Xueyi_Count) || RETURN",
        "displayLines": "_Xueyi_Count",
        "constants": [],
        "variables": [
          "_Xueyi_Count"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Is_Insert",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Xueyi_Ability03_WeakType_BUFF"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.05) || RETURN",
            "displayLines": "0.05",
            "constants": [],
            "variables": [
              0.05
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Xueyi_AbilityEidolon1_InserteDamageRatio",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Bounce_SelectTarget",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "paramSequence": [
        "Select Random Target from List",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Bounce_SelectTarget",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "paramSequence": [
        "Select Random Target from List",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Bounce_SelectTarget",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "paramSequence": [
        "Select Random Target from List",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Xueyi_Ability03_WeakType_BUFF"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Xueyi_PassiveLayer",
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (_Xueyi_PassiveLayer) || RETURN",
        "displayLines": "_Xueyi_PassiveLayer",
        "constants": [],
        "variables": [
          "_Xueyi_PassiveLayer"
        ]
      },
      "priorState": "Normal",
      "bar#": 2
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Perspicacious Mainframe"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]",
          "stackLimit": {
            "operator": "Variables[0] (_Xueyi_Count) || RETURN",
            "displayLines": "_Xueyi_Count",
            "constants": [],
            "variables": [
              "_Xueyi_Count"
            ]
          },
          "valuePerStack": {
            "MDF_PassiveLayer": {
              "operator": "Variables[0] (_Xueyi_Count) || RETURN",
              "displayLines": "_Xueyi_Count",
              "constants": [],
              "variables": [
                "_Xueyi_Count"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || RETURN",
            "displayLines": "PointB3_DifferencePassive01_Count",
            "constants": [],
            "variables": [
              "PointB3_DifferencePassive01_Count"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Xueyi_Passive_Trace03[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Xueyi_AbilityEidolon1_InserteDamageRatio"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Is_Insert",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_Change_Stance",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_Difference",
      "value": 0
    },
    "Trigger: Skip Death Handling"
  ],
  "references": []
}