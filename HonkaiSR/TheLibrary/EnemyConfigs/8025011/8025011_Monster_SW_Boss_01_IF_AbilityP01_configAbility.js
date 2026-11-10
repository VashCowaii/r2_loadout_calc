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
          "displayLines": "{[SkillP02[4]]}"
        },
        "MDF_ExplodeStanceDamage": {
          "displayLines": "{[SkillP02[5]]}"
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "{[SkillP01[0]]}"
      },
      "variableName": "SummonDelayRatio1Random1"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "{[SkillP01[1]]}"
      },
      "variableName": "SummonDelayRatio1Random2"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "{[SkillP01[2]]}"
      },
      "variableName": "SummonDelayRatio1Random3"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "{[SkillP01[3]]}"
      },
      "variableName": "SummonDelayRatio2"
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
              "displayLines": "{[SkillEX01[2]]}"
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "displayLines": "{[SkillEX01[1]]}"
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "displayLines": "{[SkillEX01[0]]}"
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
              "displayLines": "{[SkillEX05[0]]}"
            },
            "MDF_FrenzyIntervalDelay": {
              "displayLines": "{[SkillEX05[1]]}"
            },
            "MDF_MaxFrenzyLayer": {
              "displayLines": "{[SkillEX05[2]]}"
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "displayLines": "{[SkillEX05[3]]}"
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
          "value": {
            "displayLines": "{[SkillEX03[0]]}"
          },
          "variableName": "SummonCount"
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
              "displayLines": "{[SkillP02[1]]}"
            },
            "MDF_Armor_CountNormal": {
              "displayLines": "({[SkillP02[0]]} + {[SkillEX04[0]]})"
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
              "displayLines": "{[SkillP02[1]]}"
            },
            "MDF_Armor_CountNormal": {
              "displayLines": "{[SkillP02[0]]}"
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}