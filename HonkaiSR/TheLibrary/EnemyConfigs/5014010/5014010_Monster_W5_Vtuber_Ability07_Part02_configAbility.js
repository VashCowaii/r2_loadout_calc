const configAbility = {
  "fileName": "5014010_Monster_W5_Vtuber_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
            "invertCondition": true
          }
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-834553527\">Enemy_W5_Vtuber_Screen01_Effect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1325948714\">Enemy_W5_Vtuber_Screen02_Effect</a>"
    },
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
      "variableName": "MDF_Phase2",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"724622034\">Enemy_W5_Vtuber_Charge02</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]",
      "variable": "MDF_Ratio",
      "target2": null,
      "variable2": "Skill07_HPRatio"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
          "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
          "constants": [],
          "variables": [
            "{[Skill07[0]]}",
            "Skill07_HPRatio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
          "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
          "constants": [],
          "variables": [
            "{[Skill07[0]]}",
            "Skill07_HPRatio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
          "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
          "constants": [],
          "variables": [
            "{[Skill07[0]]}",
            "Skill07_HPRatio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
          "displayLines": "({[Skill07[0]]} * Skill07_HPRatio)",
          "constants": [],
          "variables": [
            "{[Skill07[0]]}",
            "Skill07_HPRatio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"945954519\">Monster_W5_Vtuber_Ability07_Ctrl</a>"
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "AIFlag",
      "value": -1
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1783351280\">Monster_W5_Vtuber_Ability07_Debuff</a>",
      "parse": [
        {
          "name": "Random Event",
          "odds": [
            0.25,
            0.25,
            0.25,
            0.25
          ],
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1592948509\">Standard_AttackRatioDown</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                "displayLines": "{[Skill07[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[3]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                "constants": [],
                "variables": [
                  "{[Skill07[1]]}",
                  "Skill07_HPRatio"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                  "displayLines": "{[Skill07[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                "displayLines": "{[Skill07[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[3]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                "constants": [],
                "variables": [
                  "{[Skill07[1]]}",
                  "Skill07_HPRatio"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                  "displayLines": "{[Skill07[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-958879550\">Monster_Standard_SpeedRatioDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                "displayLines": "{[Skill07[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[3]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                "constants": [],
                "variables": [
                  "{[Skill07[1]]}",
                  "Skill07_HPRatio"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                  "displayLines": "{[Skill07[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1887773470\">Standard_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[3]]}) || RETURN",
                "displayLines": "{[Skill07[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[3]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[1]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                "displayLines": "({[Skill07[1]]} * Skill07_HPRatio)",
                "constants": [],
                "variables": [
                  "{[Skill07[1]]}",
                  "Skill07_HPRatio"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                  "displayLines": "{[Skill07[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__945954519\">Monster_W5_Vtuber_Ability07_Ctrl</a>",
      "parse": [
        {
          "name": "Random Event",
          "odds": [
            1
          ],
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[5]]}) || RETURN",
                "displayLines": "{[Skill07[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[5]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[4]]}) || Variables[1] (Skill07_HPRatio) || MUL || RETURN",
                "displayLines": "({[Skill07[4]]} * Skill07_HPRatio)",
                "constants": [],
                "variables": [
                  "{[Skill07[4]]}",
                  "Skill07_HPRatio"
                ]
              },
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[Skill07[6]]}) || RETURN",
                  "displayLines": "{[Skill07[6]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[6]]}"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill07[7]]}) || RETURN",
                  "displayLines": "{[Skill07[7]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[7]]}"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}