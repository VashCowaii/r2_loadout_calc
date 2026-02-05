const configAbility = {
  "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP01",
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
      "modifier": "W4_Pollux_BattleScore2"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "W4_Pollux_BattleScore3"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_Status"
    },
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID0) || RETURN",
            "displayLines": "SummonID0",
            "constants": [],
            "variables": [
              "SummonID0"
            ]
          },
          "locationType": "BeforeCaster",
          "locationOffset": -1,
          "leader": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "Monster_W4_PolluxPart_L"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 1.3,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID1) || RETURN",
            "displayLines": "SummonID1",
            "constants": [],
            "variables": [
              "SummonID1"
            ]
          },
          "locationType": "AfterCaster",
          "locationOffset": 1,
          "leader": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "Monster_W4_PolluxPart_R"
    },
    {
      "name": "Create Shared HP Group",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "subTarget": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "removeShields": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_101) || RETURN",
          "displayLines": "UnusedUnderThisBase_101",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_101"
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
      "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
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
      "modifier": "Enemy_Standard_MuteHitFly"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "OneMorePerTurn"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_RemoveOneMore"
    },
    {
      "name": "Set Enemy Phase"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_IF_PartController_LockHP"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_AbilityP01_WeaknessControl"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Skill05_ActionDelay",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_100) || RETURN",
        "displayLines": "UnusedUnderThisBase_100",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_100"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Skill05_Part_ActionDelay",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_99) || RETURN",
        "displayLines": "UnusedUnderThisBase_99",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_99"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_HintToastController"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Enemy_W4_Pollux_IF_AbilityEX01"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
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
          "modifier": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
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
        "modifier": "Enemy_W4_Pollux_IF_AbilityEX04"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_WeaknessCount",
          "valuePerStack": {
            "MDF_TokenDamageReduceRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_90) || RETURN",
              "displayLines": "UnusedUnderThisBase_90",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_90"
              ]
            },
            "MDF_TokenDamageAddRatioPerlayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_91) || RETURN",
              "displayLines": "UnusedUnderThisBase_91",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_91"
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
      "modifier": "Monster_W4_Pollux_FX_Ground"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_EnterBattle"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W4_PolluxPart_R",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W4_PolluxPart_L",
      "stackData": [],
      "latentQueue": []
    }
  ]
}