const configAbility = {
  "fileName": "4014013_Monster_W4_Hearse_IF_Ability01_Part02",
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
          "operator": "Variables[0] (UnusedUnderThisBase_554) || RETURN",
          "displayLines": "UnusedUnderThisBase_554",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_554"
          ]
        },
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_555) || RETURN",
          "displayLines": "UnusedUnderThisBase_555",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_555"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] (UnusedUnderThisBase_556) || RETURN",
          "displayLines": "UnusedUnderThisBase_556",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_556"
          ]
        },
        "MDF_BPRecoverValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_540) || RETURN",
          "displayLines": "UnusedUnderThisBase_540",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_540"
          ]
        },
        "MDF_AllDamageReduce": {
          "operator": "Variables[0] (UnusedUnderThisBase_557) || RETURN",
          "displayLines": "UnusedUnderThisBase_557",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_557"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] (UnusedUnderThisBase_558) || RETURN",
          "displayLines": "UnusedUnderThisBase_558",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_558"
          ]
        },
        "MDF_DamageStanceValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_559) || RETURN",
          "displayLines": "UnusedUnderThisBase_559",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_559"
          ]
        },
        "MDF_SuperShield_MaxLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_560) || RETURN",
          "displayLines": "UnusedUnderThisBase_560",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_560"
          ]
        },
        "MDF_SuperShield_BPRecoverValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_535) || RETURN",
          "displayLines": "UnusedUnderThisBase_535",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_535"
          ]
        },
        "MDF_BraveBonusLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_536) || RETURN",
          "displayLines": "UnusedUnderThisBase_536",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_536"
          ]
        },
        "MDF_SuperShield_ActionDelayRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_561) || RETURN",
          "displayLines": "UnusedUnderThisBase_561",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_561"
          ]
        },
        "MDF_SuperShield_DamageStanceValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_562) || RETURN",
          "displayLines": "UnusedUnderThisBase_562",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_562"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_540) || RETURN",
                  "displayLines": "UnusedUnderThisBase_540",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_540"
                  ]
                },
                "MDF_Part01LoseHPRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_537) || RETURN",
                  "displayLines": "UnusedUnderThisBase_537",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_537"
                  ]
                },
                "MDF_Part02LoseHPRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_538) || RETURN",
                  "displayLines": "UnusedUnderThisBase_538",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_538"
                  ]
                },
                "MDF_DamageStanceValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_539) || RETURN",
                  "displayLines": "UnusedUnderThisBase_539",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_539"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_535) || RETURN",
                  "displayLines": "UnusedUnderThisBase_535",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_535"
                  ]
                },
                "MDF_BraveBonusLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_536) || RETURN",
                  "displayLines": "UnusedUnderThisBase_536",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_536"
                  ]
                },
                "MDF_Part01LoseHPRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_537) || RETURN",
                  "displayLines": "UnusedUnderThisBase_537",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_537"
                  ]
                },
                "MDF_Part02LoseHPRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_538) || RETURN",
                  "displayLines": "UnusedUnderThisBase_538",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_538"
                  ]
                },
                "MDF_DamageStanceValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_539) || RETURN",
                  "displayLines": "UnusedUnderThisBase_539",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_539"
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