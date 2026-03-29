const configAbility = {
  "fileName": "4014021_Monster_W4_Nikadory_IF_AbilityP01",
  "abilityType": null,
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
              "operator": "Variables[0] (UnusedUnderThisBase_523) || RETURN",
              "displayLines": "UnusedUnderThisBase_523",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_523"
              ]
            },
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_524) || RETURN",
              "displayLines": "UnusedUnderThisBase_524",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_524"
              ]
            },
            "MDF_CrackedDamage": {
              "operator": "Variables[0] (UnusedUnderThisBase_525) || RETURN",
              "displayLines": "UnusedUnderThisBase_525",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_525"
              ]
            },
            "MDF_BPRecoverValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_526) || RETURN",
              "displayLines": "UnusedUnderThisBase_526",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_526"
              ]
            },
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_527) || RETURN",
              "displayLines": "UnusedUnderThisBase_527",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_527"
              ]
            },
            "MDF_CrackedDamageAfter": {
              "operator": "Variables[0] (UnusedUnderThisBase_528) || RETURN",
              "displayLines": "UnusedUnderThisBase_528",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_528"
              ]
            },
            "MDF_DamageStanceValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_529) || RETURN",
              "displayLines": "UnusedUnderThisBase_529",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_529"
              ]
            },
            "MDF_SuperShield_MaxLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_530) || RETURN",
              "displayLines": "UnusedUnderThisBase_530",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_530"
              ]
            },
            "MDF_SuperShield_BPRecoverValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_531) || RETURN",
              "displayLines": "UnusedUnderThisBase_531",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_531"
              ]
            },
            "MDF_BraveBonusLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_532) || RETURN",
              "displayLines": "UnusedUnderThisBase_532",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_532"
              ]
            },
            "MDF_SuperShield_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_533) || RETURN",
              "displayLines": "UnusedUnderThisBase_533",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_533"
              ]
            },
            "MDF_SuperShield_DamageStanceValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_534) || RETURN",
              "displayLines": "UnusedUnderThisBase_534",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_534"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1562180674\">Enemy_W4_Nikadory_IF_StoneShieldController</a>",
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_523) || RETURN",
              "displayLines": "UnusedUnderThisBase_523",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_523"
              ]
            },
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_524) || RETURN",
              "displayLines": "UnusedUnderThisBase_524",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_524"
              ]
            },
            "MDF_CrackedDamage": {
              "operator": "Variables[0] (UnusedUnderThisBase_525) || RETURN",
              "displayLines": "UnusedUnderThisBase_525",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_525"
              ]
            },
            "MDF_BPRecoverValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_526) || RETURN",
              "displayLines": "UnusedUnderThisBase_526",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_526"
              ]
            },
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_527) || RETURN",
              "displayLines": "UnusedUnderThisBase_527",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_527"
              ]
            },
            "MDF_CrackedDamageAfter": {
              "operator": "Variables[0] (UnusedUnderThisBase_528) || RETURN",
              "displayLines": "UnusedUnderThisBase_528",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_528"
              ]
            },
            "MDF_DamageStanceValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_529) || RETURN",
              "displayLines": "UnusedUnderThisBase_529",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_529"
              ]
            },
            "MDF_SuperShield_MaxLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_576) || RETURN",
              "displayLines": "UnusedUnderThisBase_576",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_576"
              ]
            },
            "MDF_SuperShield_BPRecoverValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_531) || RETURN",
              "displayLines": "UnusedUnderThisBase_531",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_531"
              ]
            },
            "MDF_BraveBonusLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_532) || RETURN",
              "displayLines": "UnusedUnderThisBase_532",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_532"
              ]
            },
            "MDF_SuperShield_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_533) || RETURN",
              "displayLines": "UnusedUnderThisBase_533",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_533"
              ]
            },
            "MDF_SuperShield_DamageStanceValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_534) || RETURN",
              "displayLines": "UnusedUnderThisBase_534",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_534"
              ]
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
      "display": true
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
  "references": []
}