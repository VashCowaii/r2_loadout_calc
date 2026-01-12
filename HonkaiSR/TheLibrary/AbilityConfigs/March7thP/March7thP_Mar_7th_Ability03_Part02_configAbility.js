const configAbility = {
  "fileName": "March7thP_Mar_7th_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": "All Hostile Entities (AOE)",
      "searchRandom": true,
      "conditions": {
        "name": "Has Flag",
        "target": "Use Prior Target(s) Defined",
        "flagName": "STAT_CTRL_Frozen",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": "Use Prior Target(s) Defined",
          "modifier": "Mar_7th_FrozenFlag"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "March7th_UltraTarget"
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "March7th_UltraTarget"
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "March7th_UltraTarget"
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "March7th_UltraTarget"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "March7th_UltraTarget"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Ice Spell"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Tree03_ChanceAdd",
          "value": {
            "operator": "Variables[0] (0.15) || RETURN",
            "displayLines": "0.15",
            "constants": [],
            "variables": [
              0.15
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Tree03_ChanceAdd",
          "value": 0
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
          "name": "Define Custom Variable",
          "variableName": "_Rank01_SPAdd",
          "value": {
            "operator": "Variables[0] (6) || RETURN",
            "displayLines": "6",
            "constants": [],
            "variables": [
              6
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank01_SPAdd",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
      "duration": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (0.5) || Variables[1] (_Tree03_ChanceAdd) || ADD || RETURN",
        "displayLines": "(0.5 + _Tree03_ChanceAdd)",
        "constants": [],
        "variables": [
          0.5,
          "_Tree03_ChanceAdd"
        ]
      },
      "valuePerStack": {
        "Modifier_Frozen_DamagePercentage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Fix_Rank01_SPAdd",
      "value": {
        "operator": "Variables[0] (_Rank01_SPAdd) || Variables[1] (MDF_FrozenCount) || MUL || RETURN",
        "displayLines": "(_Rank01_SPAdd * MDF_FrozenCount)",
        "constants": [],
        "variables": [
          "_Rank01_SPAdd",
          "MDF_FrozenCount"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Fix_Rank01_SPAdd",
        "compareType": "<=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Fix_Rank01_SPAdd",
          "value": 0
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "value": {
        "operator": "Variables[0] (Fix_Rank01_SPAdd) || RETURN",
        "displayLines": "Fix_Rank01_SPAdd",
        "constants": [],
        "variables": [
          "Fix_Rank01_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    "Trigger: Skip Death Handling",
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Mar_7th_Ability03_ListenFrozen"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "Mar_7th_FrozenFlag"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_FrozenCount",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "March7th_UltraTarget",
      "stackData": [],
      "latentQueue": []
    }
  ]
}