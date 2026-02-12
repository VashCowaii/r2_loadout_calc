const configAbility = {
  "fileName": "4044010_Monster_W4_Theoroi_Ability16_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "STAT_CTRL"
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeOverride": "Unknown",
          "toRemove": [
            "STAT_CTRL"
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "EnhanceCount"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "EnhanceCount",
      "modifierName": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]",
      "multiplier": 1
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (EnhanceCount) || RETURN",
        "displayLines": "EnhanceCount",
        "constants": [],
        "variables": [
          "EnhanceCount"
        ]
      },
      "Event": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1562887426\">Monster_W4_Theoroi_ReloadEffect</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill03[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill03[0]]}"
              ]
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
        "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MainCount",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill16Count",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill16Count",
          "value": {
            "operator": "Variables[0] (Skill16Count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Skill16Count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill16Count"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill16Damage",
      "value": {
        "operator": "Variables[0] ({[Skill16[0]]}) || Variables[1] (Skill16Count) || DIV || Constants[0] (5) || DIV || RETURN",
        "displayLines": "(({[Skill16[0]]} / Skill16Count) / 5)",
        "constants": [
          5
        ],
        "variables": [
          "{[Skill16[0]]}",
          "Skill16Count"
        ]
      }
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
          "operator": "Variables[0] (Skill16Damage) || RETURN",
          "displayLines": "Skill16Damage",
          "constants": [],
          "variables": [
            "Skill16Damage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-839772764\">Modifier_BattleEventAbility_Enhance</a>"
      },
      "ifTargetFound": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
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
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (Skill16Damage) || RETURN",
          "displayLines": "Skill16Damage",
          "constants": [],
          "variables": [
            "Skill16Damage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
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
          "operator": "Variables[0] (Skill16Damage) || RETURN",
          "displayLines": "Skill16Damage",
          "constants": [],
          "variables": [
            "Skill16Damage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
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
          "operator": "Variables[0] (Skill16Damage) || RETURN",
          "displayLines": "Skill16Damage",
          "constants": [],
          "variables": [
            "Skill16Damage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
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
          "operator": "Variables[0] (Skill16Damage) || RETURN",
          "displayLines": "Skill16Damage",
          "constants": [],
          "variables": [
            "Skill16Damage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (EnhanceCount) || RETURN",
        "displayLines": "EnhanceCount",
        "constants": [],
        "variables": [
          "EnhanceCount"
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill16[5]]}) || RETURN",
                "displayLines": "{[Skill16[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill16[5]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill16[2]]}) || RETURN",
                "displayLines": "{[Skill16[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill16[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[Skill16[3]]}) || RETURN",
                  "displayLines": "{[Skill16[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill16[3]]}"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill16[4]]}) || RETURN",
                  "displayLines": "{[Skill16[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill16[4]]}"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          },
          {
            "name": "Stage Type",
            "stageType": "Challenge"
          },
          {
            "name": "Stage Type",
            "stageType": "VerseSimulation"
          },
          {
            "name": "Stage Type",
            "stageType": "StrongChallengeActivity"
          },
          {
            "name": "Stage Type",
            "stageType": "RogueRelic"
          }
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2001837227\">Monster_W4_Theoroi_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Corporeal</span>]",
      "valuePerStack": {
        "MDF_DamageTakenUpRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill16[1]]}) || RETURN",
          "displayLines": "{[Skill16[1]]}",
          "constants": [],
          "variables": [
            "{[Skill16[1]]}"
          ]
        }
      },
      "addStacksPerTrigger": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-356060077\">Monster_W4_Theoroi_Ability12_Self</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "entityClass": "Enemy",
      "maximum": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "assignState": "True",
      "state": "Active",
      "barType": "Theoroi",
      "trigger": "Phase_01"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1039726651\">Monster_W4_Theoroi_Destruction_Self</a>[<span class=\"descriptionNumberColor\">Loading: Mythos</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-303636173\">Monster_W4_Theoroi_Creation</a>[<span class=\"descriptionNumberColor\">Potential Realization</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1628585625\">Monster_W4_Theoroi_Summon</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"688363638\">Monster_W4_Theoroi_Destruction</a>[<span class=\"descriptionNumberColor\">Retribution of \"Law\"</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-213110193\">Standard_FastAction_Permanent</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1719897551\">Monster_W4_Theoroi_Ability16_Self</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "InSkill05",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20024,
          "variables": {
            "SummonInitDelay": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-86387576\">Monster_W4_Theoroi_ReloadControl</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1562887426\">Monster_W4_Theoroi_ReloadEffect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MainCount",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "references": []
}