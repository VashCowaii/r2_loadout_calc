const configAbility = {
  "fileName": "4014013_Monster_W4_Nikadory_IF_AbilityP01",
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1228471775\">Enemy_W4_Nikadory_IF_AbilityEX01</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1262027013\">Enemy_W4_Nikadory_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1562180674\">Enemy_W4_Nikadory_IF_StoneShieldController</a>",
          "valuePerStack": {
            "MDF_MaxLayer": {
              "displayLines": "{[SkillP01[0]]}"
            },
            "MDF_ActionDelayRatio": {
              "displayLines": "{[SkillP01[1]]}"
            },
            "MDF_CrackedDamage": {
              "displayLines": "{[SkillP01[2]]}"
            },
            "MDF_BPRecoverValue": {
              "displayLines": "{[SkillP01[3]]}"
            },
            "MDF_AllDamageReduce": {
              "displayLines": "{[SkillP01[4]]}"
            },
            "MDF_CrackedDamageAfter": {
              "displayLines": "{[SkillP01[5]]}"
            },
            "MDF_DamageStanceValue": {
              "displayLines": "{[SkillP01[6]]}"
            },
            "MDF_SuperShield_MaxLayer": {
              "displayLines": "{[SkillEX03[0]]}"
            },
            "MDF_SuperShield_BPRecoverValue": {
              "displayLines": "{[SkillP02[1]]}"
            },
            "MDF_BraveBonusLayer": {
              "displayLines": "{[SkillP02[2]]}"
            },
            "MDF_SuperShield_ActionDelayRatio": {
              "displayLines": "{[SkillP02[3]]}"
            },
            "MDF_SuperShield_DamageStanceValue": {
              "displayLines": "{[SkillP02[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1562180674\">Enemy_W4_Nikadory_IF_StoneShieldController</a>",
          "valuePerStack": {
            "MDF_MaxLayer": {
              "displayLines": "{[SkillP01[0]]}"
            },
            "MDF_ActionDelayRatio": {
              "displayLines": "{[SkillP01[1]]}"
            },
            "MDF_CrackedDamage": {
              "displayLines": "{[SkillP01[2]]}"
            },
            "MDF_BPRecoverValue": {
              "displayLines": "{[SkillP01[3]]}"
            },
            "MDF_AllDamageReduce": {
              "displayLines": "{[SkillP01[4]]}"
            },
            "MDF_CrackedDamageAfter": {
              "displayLines": "{[SkillP01[5]]}"
            },
            "MDF_DamageStanceValue": {
              "displayLines": "{[SkillP01[6]]}"
            },
            "MDF_SuperShield_MaxLayer": {
              "displayLines": "{[SkillP02[0]]}"
            },
            "MDF_SuperShield_BPRecoverValue": {
              "displayLines": "{[SkillP02[1]]}"
            },
            "MDF_BraveBonusLayer": {
              "displayLines": "{[SkillP02[2]]}"
            },
            "MDF_SuperShield_ActionDelayRatio": {
              "displayLines": "{[SkillP02[3]]}"
            },
            "MDF_SuperShield_DamageStanceValue": {
              "displayLines": "{[SkillP02[4]]}"
            }
          }
        }
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2069911522\">Enemy_W4_Nikadory_IF_EnterBattle</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"551472509\">Enemy_W4_Nikadory_IF_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"281623476\">Enemy_W4_Nikadory_IF_BraveController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1928829713\">Enemy_W4_Nikadory_IF_RemoveOneMore</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID01",
          "summonLocation": "AfterCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1423347162\">Enemy_W4_Nikadory_IF_WithHearse</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"159012087\">Enemy_W4_Nikadory_IF_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-491014298\">Enemy_W4_Nikadory_IF_HintToastController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-863627586\">Enemy_W4_Nikadory_IF_BPMax</a>"
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