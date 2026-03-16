const configAbility = {
  "fileName": "4014021_Monster_W4_Hearse_IF_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
            "compareType": "<=",
            "value2": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>",
          "variableName": "_KillByHearse",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "<=",
        "value2": 2
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "ShieldBreakBonusFlag",
          "value": 0
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
      "name": "Create Enemies",
      "delayPercent": 0,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID1",
          "summonLocation": "KeepOnFirst"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID1",
          "summonLocation": "BeforeCaster"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID1",
          "summonLocation": "Last"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID1",
          "summonLocation": "KeepOnLast"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 2
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-907515616\">MoreOneMorePerTurn_4</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1037785520\">Enemy_W4_Nikadory_IF_APShow_Act1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1088118377\">Enemy_W4_Nikadory_IF_APShow_Act2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1071340758\">Enemy_W4_Nikadory_IF_APShow_Act3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1121673615\">Enemy_W4_Nikadory_IF_APShow_Act4</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1562180674\">Enemy_W4_Nikadory_IF_StoneShieldController</a>",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        },
        "MDF_BPRecoverValue": {
          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
          "displayLines": "{[Skill01[3]]}",
          "constants": [],
          "variables": [
            "{[Skill01[3]]}"
          ]
        },
        "MDF_AllDamageReduce": {
          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
          "displayLines": "{[Skill01[4]]}",
          "constants": [],
          "variables": [
            "{[Skill01[4]]}"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] ({[Skill01[5]]}) || RETURN",
          "displayLines": "{[Skill01[5]]}",
          "constants": [],
          "variables": [
            "{[Skill01[5]]}"
          ]
        },
        "MDF_DamageStanceValue": {
          "operator": "Variables[0] ({[Skill01[6]]}) || RETURN",
          "displayLines": "{[Skill01[6]]}",
          "constants": [],
          "variables": [
            "{[Skill01[6]]}"
          ]
        },
        "MDF_SuperShield_MaxLayer": {
          "operator": "Variables[0] ({[Skill01[7]]}) || RETURN",
          "displayLines": "{[Skill01[7]]}",
          "constants": [],
          "variables": [
            "{[Skill01[7]]}"
          ]
        },
        "MDF_SuperShield_BPRecoverValue": {
          "operator": "Variables[0] ({[Skill01[8]]}) || RETURN",
          "displayLines": "{[Skill01[8]]}",
          "constants": [],
          "variables": [
            "{[Skill01[8]]}"
          ]
        },
        "MDF_BraveBonusLayer": {
          "operator": "Variables[0] ({[Skill01[9]]}) || RETURN",
          "displayLines": "{[Skill01[9]]}",
          "constants": [],
          "variables": [
            "{[Skill01[9]]}"
          ]
        },
        "MDF_SuperShield_ActionDelayRatio": {
          "operator": "Variables[0] ({[Skill01[10]]}) || RETURN",
          "displayLines": "{[Skill01[10]]}",
          "constants": [],
          "variables": [
            "{[Skill01[10]]}"
          ]
        },
        "MDF_SuperShield_DamageStanceValue": {
          "operator": "Variables[0] ({[Skill01[11]]}) || RETURN",
          "displayLines": "{[Skill01[11]]}",
          "constants": [],
          "variables": [
            "{[Skill01[11]]}"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 2
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 2
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>",
              "valuePerStack": {
                "MDF_BPRecoverValue": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Part01LoseHPRatio": {
                  "operator": "Variables[0] ({[Skill01[12]]}) || RETURN",
                  "displayLines": "{[Skill01[12]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[12]]}"
                  ]
                },
                "MDF_Part02LoseHPRatio": {
                  "operator": "Variables[0] ({[Skill01[13]]}) || RETURN",
                  "displayLines": "{[Skill01[13]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[13]]}"
                  ]
                },
                "MDF_DamageStanceValue": {
                  "operator": "Variables[0] ({[Skill01[14]]}) || RETURN",
                  "displayLines": "{[Skill01[14]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[14]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>",
              "valuePerStack": {
                "MDF_BPRecoverValue": {
                  "operator": "Variables[0] ({[Skill01[8]]}) || RETURN",
                  "displayLines": "{[Skill01[8]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[8]]}"
                  ]
                },
                "MDF_BraveBonusLayer": {
                  "operator": "Variables[0] ({[Skill01[9]]}) || RETURN",
                  "displayLines": "{[Skill01[9]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[9]]}"
                  ]
                },
                "MDF_Part01LoseHPRatio": {
                  "operator": "Variables[0] ({[Skill01[12]]}) || RETURN",
                  "displayLines": "{[Skill01[12]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[12]]}"
                  ]
                },
                "MDF_Part02LoseHPRatio": {
                  "operator": "Variables[0] ({[Skill01[13]]}) || RETURN",
                  "displayLines": "{[Skill01[13]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[13]]}"
                  ]
                },
                "MDF_DamageStanceValue": {
                  "operator": "Variables[0] ({[Skill01[14]]}) || RETURN",
                  "displayLines": "{[Skill01[14]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[14]]}"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Nikador: Self}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"837336870\">Enemy_W4_Nikadory_IF_UltraChargeP2</a>"
      },
      "passed": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"837336870\">Enemy_W4_Nikadory_IF_UltraChargeP2</a>",
          "variableName": "_DoubleChargeStateFlag",
          "value": 1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}