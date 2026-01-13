const configAbility = {
  "fileName": "TopazNumby_Topaz_BE_UltraAttackDamage",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Modifier Values",
      "variableName": "CurEnhance",
      "modifierName": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
      "multiplier": 1
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CurEnhance",
      "value": {
        "operator": "Variables[0] (CurEnhance) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(CurEnhance - 1)",
        "constants": [
          1
        ],
        "variables": [
          "CurEnhance"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CurEnhance",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (CurEnhance) || RETURN",
            "displayLines": "CurEnhance",
            "constants": [],
            "variables": [
              "CurEnhance"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_BE_CriticalChance"
    },
    {
      "name": "Looped Event",
      "maxLoops": 7,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
              "displayLines": "(1.5 + 1.5)",
              "constants": [],
              "variables": [
                1.5,
                1.5
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
          "displayLines": "(1.5 + 1.5)",
          "constants": [],
          "variables": [
            1.5,
            1.5
          ]
        },
        "HitSplit": 0.3,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Trigger: Attack End",
      "fakeCharacterAttack": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Stonks Market"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Topaz_Bonus"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (60) || RETURN",
            "displayLines": "60",
            "constants": [],
            "variables": [
              60
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Topaz_Bonus"
        }
      ]
    },
    {
      "name": "Define Modifier Variable",
      "modifierName": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
      "function": "Add"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CurEnhance",
        "compareType": ">=",
        "value2": 1,
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Show Attack Time",
          "enhanced": {
            "operator": "Variables[0] (CurEnhance) || RETURN",
            "displayLines": "CurEnhance",
            "constants": [],
            "variables": [
              "CurEnhance"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Numby",
          "modifier": "Topaz_BE_UltraEnhance_ShowText",
          "valuePerStack": {
            "ATKCount": {
              "operator": "Variables[0] (CurEnhance) || RETURN",
              "displayLines": "CurEnhance",
              "constants": [],
              "variables": [
                "CurEnhance"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Show Attack Time",
          "on": null,
          "show": false
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Numby",
          "modifier": "Topaz_BE_UltraEnhance_ShowText"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_BE_CriticalChance"
    }
  ],
  "references": []
}