const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability22_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-902705289\">Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "CL_PlayTimes"
    },
    {
      "name": "Define Custom Variable",
      "value": 3,
      "variableName": "CastoriceServant_BattleViewModeLevel"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "CL_EnterBattlePlayTimes"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"131262836\">Memosprite_CastoriceServant_BPCost_3</a>"
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Castorice_Rank02_Count",
            "compareType": "<=",
            "value2": 0,
            "contextScope": "TargetEntity"
          }
        ]
      },
      "passed": [
        {
          "name": "Force Auto-Battle on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "isAuto": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-256072391\">Memosprite_CastoriceServant_BP_Explode</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1420894416\">Memosprite_CastoriceServant_Ability23Check</a>"
        }
      ],
      "failed": [
        {
          "name": "Set Netherwing Skill Phase",
          "level": 3
        },
        {
          "name": "Update Action Bar Display",
          "triggerName": "Level_3",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
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
        "modifier": "<a class=\"gModGreen\" id=\"-47761406\">Memosprite_CastoriceServant_LifeTime</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Force Auto-Battle on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "isAuto": true
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "CastoriceServant_UseSkill02_Flag"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "PointB3"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-799988230\">Castorice_PointB3_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Where the West Wind Dwells</span>]",
          "stackLimit": {
            "displayLines": "CastoriceServant_PointB3_MaxLayer"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "CastoriceServant_PointB3_AllDamageTypeAddedRatio"
            }
          },
          "addStacksPerTrigger": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CastoriceServant_BPSkill_Level3_Loop",
        "compareType": ">=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Castorice_Rank02_Count",
            "compareType": ">",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(CastoriceServant_Rank02_Count - 1)"
              },
              "variableName": "CastoriceServant_Rank02_Count"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "value": {
                "displayLines": "CastoriceServant_Rank02_Count"
              },
              "variableName": "Castorice_Rank02_Count"
            },
            {
              "name": "Set Netherwing's Ardent Will Stacks",
              "displayNum": {
                "displayLines": "CastoriceServant_Rank02_Count"
              },
              "previewNum": 0
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "flatConsume": {
                "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)"
              },
              "consumeFloor": 1,
              "attackType": "Unknown"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Consume",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "flatConsume": {
            "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)"
          },
          "consumeFloor": 1,
          "attackType": "Unknown"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 10,
      "variableName": "CastoriceBPLoopMax"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "CastoriceBPLoopMax"
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(CastoriceBPLoop + 1)"
          },
          "variableName": "CastoriceBPLoop"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1405272466\">Servant_CastoriceServant_SetDamageRatio</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "(0.34 * Castorice_Rank01_DamageRatio)"
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "HitSplit": {
                      "displayLines": "(1 * (1 / CastoriceBPLoopMax))"
                    },
                    "Toughness": {
                      "displayLines": "AOE Toughness Value"
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "0.34"
                },
                "dmgFormula": "[SUMMONER] Max HP Scaling",
                "HitSplit": {
                  "displayLines": "(1 * (1 / CastoriceBPLoopMax))"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Memosprite",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(CastoriceBPLoop + 1)"
      },
      "variableName": "CastoriceBPLoop"
    },
    {
      "name": "Define Custom Variable",
      "value": 3,
      "variableName": "CastoriceServant_BPSkill_Level"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "CastoriceServant_BattleViewModeLevel"
      },
      "variableName": "CastoriceServant_ReadyFlag"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "CastoriceServant_UseSkill02_Flag"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1235861704\">Servant_CastoriceServant_BP_OneMore_AbilityChange</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}