const configAbility = {
  "fileName": "Blade_AdvancedRen_Passive1Atk02_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MwRen_isAttack",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Cyclone of Destruction"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Advanced_Ren_Trace03"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CasterHPPercentage",
          "value": {
            "operator": "Variables[0] (1.3) || Variables[1] (0.5) || ADD || RETURN",
            "displayLines": "(1.3 + 0.5)",
            "constants": [],
            "variables": [
              1.3,
              0.5
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CasterHPPercentage",
          "value": {
            "operator": "Variables[0] (1.3) || RETURN",
            "displayLines": "1.3",
            "constants": [],
            "variables": [
              1.3
            ]
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 2,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (CasterHPPercentage) || RETURN",
              "displayLines": "CasterHPPercentage",
              "constants": [],
              "variables": [
                "CasterHPPercentage"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.33,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
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
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (CasterHPPercentage) || RETURN",
          "displayLines": "CasterHPPercentage",
          "constants": [],
          "variables": [
            "CasterHPPercentage"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.34,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.25) || RETURN",
        "displayLines": "0.25",
        "constants": [],
        "variables": [
          0.25
        ]
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Cyclone of Destruction"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (15) || RETURN",
            "displayLines": "15",
            "constants": [],
            "variables": [
              15
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
        "displayLines": "MWRen_Qi_MaxLayer",
        "constants": [],
        "variables": [
          "MWRen_Qi_MaxLayer"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Cyclone of Destruction"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Advanced_Ren_Trace03"
        }
      ]
    }
  ],
  "references": []
}