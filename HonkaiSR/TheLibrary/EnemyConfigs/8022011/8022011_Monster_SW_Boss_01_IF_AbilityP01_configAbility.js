const configAbility = {
  "fileName": "8022011_Monster_SW_Boss_01_IF_AbilityP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"1310292986\">Enemy_SW_Boss_01_IF_AbilityP01_SummonController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2090015456\">Enemy_SW_Boss_01_IF_HintToastController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"654310441\">Enemy_SW_Boss_01_IF_StanceDamageController</a>",
      "valuePerStack": {
        "MDF_ExplodeDamageTakenRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_173) || RETURN",
          "displayLines": "UnusedUnderThisBase_173",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_173"
          ]
        },
        "MDF_ExplodeStanceDamage": {
          "operator": "Variables[0] (UnusedUnderThisBase_172) || RETURN",
          "displayLines": "UnusedUnderThisBase_172",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_172"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio1Random1",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_171) || RETURN",
        "displayLines": "UnusedUnderThisBase_171",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_171"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio1Random2",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_170) || RETURN",
        "displayLines": "UnusedUnderThisBase_170",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_170"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio1Random3",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_169) || RETURN",
        "displayLines": "UnusedUnderThisBase_169",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_169"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio2",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_168) || RETURN",
        "displayLines": "UnusedUnderThisBase_168",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_168"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1984176167\">Enemy_SW_Boss_01_IF_AbilityEX01</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_98) || RETURN",
              "displayLines": "UnusedUnderThisBase_98",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_98"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_97) || RETURN",
              "displayLines": "UnusedUnderThisBase_97",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_97"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] (UnusedUnderThisBase_96) || RETURN",
              "displayLines": "UnusedUnderThisBase_96",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_96"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_92) || RETURN",
              "displayLines": "UnusedUnderThisBase_92",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_92"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_93) || RETURN",
              "displayLines": "UnusedUnderThisBase_93",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_93"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_94) || RETURN",
              "displayLines": "UnusedUnderThisBase_94",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_94"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_95) || RETURN",
              "displayLines": "UnusedUnderThisBase_95",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_95"
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
        "modifier": "<a class=\"gModGreen\" id=\"2017731405\">Enemy_SW_Boss_01_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonCount",
          "value": {
            "operator": "Variables[0] (SummonDelayRatio2) || RETURN",
            "displayLines": "SummonDelayRatio2",
            "constants": [],
            "variables": [
              "SummonDelayRatio2"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1828577143\">Enemy_SW_Boss_01_IF_AbilityEX03_SummonEnhanceCounter</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"1900288072\">Enemy_SW_Boss_01_IF_AbilityEX04</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-77514845\">Enemy_SW_Boss_01_IF_SwarmArmorController</a>",
          "valuePerStack": {
            "MDF_Armor_DamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_176) || RETURN",
              "displayLines": "UnusedUnderThisBase_176",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_176"
              ]
            },
            "MDF_Armor_CountNormal": {
              "operator": "Variables[0] (UnusedUnderThisBase_190) || Variables[1] (UnusedUnderThisBase_191) || ADD || RETURN",
              "displayLines": "(UnusedUnderThisBase_190 + UnusedUnderThisBase_191)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_190",
                "UnusedUnderThisBase_191"
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-77514845\">Enemy_SW_Boss_01_IF_SwarmArmorController</a>",
          "valuePerStack": {
            "MDF_Armor_DamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_176) || RETURN",
              "displayLines": "UnusedUnderThisBase_176",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_176"
              ]
            },
            "MDF_Armor_CountNormal": {
              "operator": "Variables[0] (UnusedUnderThisBase_190) || RETURN",
              "displayLines": "UnusedUnderThisBase_190",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_190"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}