const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_Item1_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_ADF_Index",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_ADF_DeltaFrame",
      "value": {
        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__307) || Variables[1] (ENEMIES_OBJECT_UNUSED__308) || SUB || Variables[2] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || DIV || RETURN",
        "displayLines": "((ENEMIES_OBJECT_UNUSED__307 - ENEMIES_OBJECT_UNUSED__308) / (UNKNOWN_SW999_OBJECT[5] - 1))",
        "constants": [
          1
        ],
        "variables": [
          "ENEMIES_OBJECT_UNUSED__307",
          "ENEMIES_OBJECT_UNUSED__308",
          "UNKNOWN_SW999_OBJECT[5]"
        ]
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(UNKNOWN_SW999_OBJECT[5] - 1)",
        "constants": [
          1
        ],
        "variables": [
          "UNKNOWN_SW999_OBJECT[5]"
        ]
      },
      "Event": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || RETURN",
                  "displayLines": "(1 / UNKNOWN_SW999_OBJECT[5])",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "UNKNOWN_SW999_OBJECT[5]"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || RETURN",
                  "displayLines": "(1 / UNKNOWN_SW999_OBJECT[5])",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "UNKNOWN_SW999_OBJECT[5]"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Index",
          "value": {
            "operator": "Variables[0] (#CL_ADF_Index) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(#CL_ADF_Index + 1)",
            "constants": [
              1
            ],
            "variables": [
              "#CL_ADF_Index"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": {
              "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || SUB || RETURN",
              "displayLines": "(1 - ((UNKNOWN_SW999_OBJECT[5] - 1) / UNKNOWN_SW999_OBJECT[5]))",
              "constants": [
                1
              ],
              "variables": [
                "UNKNOWN_SW999_OBJECT[5]"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": {
              "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || SUB || RETURN",
              "displayLines": "(1 - ((UNKNOWN_SW999_OBJECT[5] - 1) / UNKNOWN_SW999_OBJECT[5]))",
              "constants": [
                1
              ],
              "variables": [
                "UNKNOWN_SW999_OBJECT[5]"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Ability11_End_Part01",
              "isTrigger": true
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}