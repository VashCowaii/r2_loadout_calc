const configAbility = {
  "fileName": "March7thP_Mar_7th_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": "STAT_CTRL_Frozen",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"329183507\">Mar_7th_FrozenFlag</a>"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0.25,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1349068502\">March7th_UltraTarget</a>"
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
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
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
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"954113559\">Mar_7th_Ability03_ListenFrozen</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"329183507\">Mar_7th_FrozenFlag</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1349068502\">March7th_UltraTarget</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}