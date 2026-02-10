const configAbility = {
  "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityP01",
  "childAbilityList": [
    "8025011_Monster_SW_Boss_01_IF_AbilityP01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
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
          "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
          "displayLines": "{[SkillP02[4]]}",
          "constants": [],
          "variables": [
            "{[SkillP02[4]]}"
          ]
        },
        "MDF_ExplodeStanceDamage": {
          "operator": "Variables[0] ({[SkillP02[5]]}) || RETURN",
          "displayLines": "{[SkillP02[5]]}",
          "constants": [],
          "variables": [
            "{[SkillP02[5]]}"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio1Random1",
      "value": {
        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
        "displayLines": "{[SkillP01[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[0]]}"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio1Random2",
      "value": {
        "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
        "displayLines": "{[SkillP01[1]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[1]]}"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio1Random3",
      "value": {
        "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
        "displayLines": "{[SkillP01[2]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[2]]}"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonDelayRatio2",
      "value": {
        "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
        "displayLines": "{[SkillP01[3]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[3]]}"
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
              "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
              "displayLines": "{[SkillEX01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[2]]}"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
              "displayLines": "{[SkillEX01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[1]]}"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
              "displayLines": "{[SkillEX01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[0]]}"
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
              "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
              "displayLines": "{[SkillEX05[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[0]]}"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
              "displayLines": "{[SkillEX05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[1]]}"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
              "displayLines": "{[SkillEX05[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[2]]}"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
              "displayLines": "{[SkillEX05[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[3]]}"
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
            "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
            "displayLines": "{[SkillEX03[0]]}",
            "constants": [],
            "variables": [
              "{[SkillEX03[0]]}"
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
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            },
            "MDF_Armor_CountNormal": {
              "operator": "Variables[0] ({[SkillP02[0]]}) || Variables[1] ({[SkillEX04[0]]}) || ADD || RETURN",
              "displayLines": "({[SkillP02[0]]} + {[SkillEX04[0]]})",
              "constants": [],
              "variables": [
                "{[SkillP02[0]]}",
                "{[SkillEX04[0]]}"
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
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            },
            "MDF_Armor_CountNormal": {
              "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
              "displayLines": "{[SkillP02[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[0]]}"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}