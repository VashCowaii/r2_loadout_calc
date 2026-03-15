const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3024032,
  "trimCharacterName": 3024032,
  "abilityList": [
    "3024032_Monster_W3_Sam_01_Ability06_Part02",
    "3024032_Monster_W3_Sam_01_Ability06_Part01",
    "3024032_Monster_W3_Sam_01_Ability07_Part02",
    "3024032_Monster_W3_Sam_01_Ability07_Part01",
    "3024032_Monster_W3_Sam_01_Ability05_Part02",
    "3024032_Monster_W3_Sam_01_Ability05_Part01",
    "3024032_Monster_W3_Sam_01_Ability04_End_Part02",
    "3024032_Monster_W3_Sam_01_Ability04_End_Part01",
    "3024032_BattleEvent_BattleEvent20029_Part01",
    "3024032_BattleEvent_BattleEvent20029_EnterReady",
    "3024032_Monster_W3_Sam_01_Ability04_Part02",
    "3024032_Monster_W3_Sam_01_Ability04_Part01",
    "3024032_Monster_W3_Sam_01_Ability03_Part02",
    "3024032_Monster_W3_Sam_01_Ability03_Part01",
    "3024032_Monster_W3_Sam_01_Ability02_Part02",
    "3024032_Monster_W3_Sam_01_Ability02_Part01",
    "3024032_Monster_W3_Sam_01_Ability01Pre_Part02",
    "3024032_Monster_W3_Sam_01_Ability01Pre_Part01",
    "3024032_Monster_W3_Sam_01_Ability01_Part02",
    "3024032_Monster_W3_Sam_01_Ability01_Part01",
    "3024032_Monster_W3_Sam_01_Passive01",
    "3024032_Monster_W3_Sam_01_PassiveAbility_BGM",
    "3024032_Modifiers",
    "3024032_BE_BattleEvents"
  ],
  "abilityObject": {
    "3024032_Monster_W3_Sam_01_Ability06_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2036544920\">Standard_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                "displayLines": "{[Skill06[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                  "displayLines": "{[Skill06[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[2]]}"
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
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2036544920\">Standard_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                "displayLines": "{[Skill06[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability06_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability06_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability06_Camera",
        "3024032_Monster_W3_Sam_01_Ability06_Part01",
        "3024032_Monster_W3_Sam_01_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability07_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1262110535\">W3_Sam_01_BattleScore1</a>"
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "assignState": "False"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1121915816\">Enemy_W3_Sam_01_TakenDamage</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "valuePerStack": {
            "MDF_DamageTakenUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            }
          }
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
          "failed": [
            {
              "name": "Trigger 0-Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-836809540\">Enemy_W3_Sam_01_Ability04Command</a>"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill04[2]]}"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck",
          "value": 0
        }
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability07_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability07_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability07_Camera",
        "3024032_Monster_W3_Sam_01_Ability07_Part01",
        "3024032_Monster_W3_Sam_01_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_Sam_01_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability05_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599604616\">Enemy_W3_Sam_01_ShieldRecoverMark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-83364169\">Monster_W3_Sam_01_EnhanceEffectPart</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "variableName": "SummonMonsterCount",
              "livingTargets": true
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (SummonMonsterCount) || RETURN",
                "displayLines": "SummonMonsterCount",
                "constants": [],
                "variables": [
                  "SummonMonsterCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
            }
          ]
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
          "name": "Define Custom Variable",
          "variableName": "ChargeCount",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599604616\">Enemy_W3_Sam_01_ShieldRecoverMark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability05_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability05_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability05_Camera",
        "3024032_Monster_W3_Sam_01_Ability05_Part01",
        "3024032_Monster_W3_Sam_01_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability04_End_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability04_End_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-836809540\">Enemy_W3_Sam_01_Ability04Command</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "revertDefault": true
        }
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability04_End_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability04_End_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability04_End_Part01",
        "3024032_Monster_W3_Sam_01_Ability04_End_Part02",
        "3024032_Monster_W3_Sam_01_Ability04_End_Camera"
      ],
      "skillTrigger": "Skill04End",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_Sam_01_Ability04_End_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_BattleEvent_BattleEvent20029_Part01": {
      "fileName": "3024032_BattleEvent_BattleEvent20029_Part01",
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
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_Sam_01"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
          "valuePerStack": {
            "MDF_BreakDamageAddedRatioBase": {
              "operator": "Variables[0] (Ability03_BreakDamageAddedRatioBase) || RETURN",
              "displayLines": "Ability03_BreakDamageAddedRatioBase",
              "constants": [],
              "variables": [
                "Ability03_BreakDamageAddedRatioBase"
              ]
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "set": 0
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[getAttachedSummon]] - {{Ability Target(ST)}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "refPoint": "After",
          "isStartingAV": true
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "refPoint": "After",
          "isStartingAV": true
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "refPoint": "After",
          "isStartingAV": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1466483299\">Enemy_W3_Sam_01_MuteUltra</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1435923301\">Enemy_W3_Sam_01_Locking</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_Sam_01"
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W3_Sam_01_Ability04_End_Part01",
              "isTrigger": true
            }
          ]
        },
        "Wait for Pending Ability Completions",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024032_BattleEvent_BattleEvent20029_EnterReady": {
      "fileName": "3024032_BattleEvent_BattleEvent20029_EnterReady",
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
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_Sam_01"
          }
        }
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability04_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1466483299\">Enemy_W3_Sam_01_MuteUltra</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1435923301\">Enemy_W3_Sam_01_Locking</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]",
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MinionDelay",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
            ]
          }
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (MinionDelay) || RETURN",
            "displayLines": "MinionDelay",
            "constants": [],
            "variables": [
              "MinionDelay"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                "displayLines": "SummonList_ADF_1",
                "constants": [],
                "variables": [
                  "SummonList_ADF_1"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MinionDelay",
          "value": {
            "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
            "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
            "constants": [],
            "variables": [
              "MinionDelay",
              "{[PassiveSkill03[3]]}"
            ]
          }
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (MinionDelay) || RETURN",
            "displayLines": "MinionDelay",
            "constants": [],
            "variables": [
              "MinionDelay"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                "displayLines": "SummonList_ADF_1",
                "constants": [],
                "variables": [
                  "SummonList_ADF_1"
                ]
              },
              "locationType": "AfterCaster"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MinionDelay",
          "value": {
            "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
            "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
            "constants": [],
            "variables": [
              "MinionDelay",
              "{[PassiveSkill03[3]]}"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 3024031,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Harbinger of Death: Swarm Nightmare",
                    "isBaseCompare": true
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 3024032,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Harbinger of Death: Swarm Nightmare",
                    "isBaseCompare": true
                  }
                ]
              }
            ]
          },
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (MinionDelay) || RETURN",
                "displayLines": "MinionDelay",
                "constants": [],
                "variables": [
                  "MinionDelay"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                    "displayLines": "SummonList_ADF_1",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_1"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MinionDelay",
              "value": {
                "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
                "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
                "constants": [],
                "variables": [
                  "MinionDelay",
                  "{[PassiveSkill03[3]]}"
                ]
              }
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (MinionDelay) || RETURN",
                "displayLines": "MinionDelay",
                "constants": [],
                "variables": [
                  "MinionDelay"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                    "displayLines": "SummonList_ADF_1",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_1"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MinionDelay",
              "value": {
                "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
                "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
                "constants": [],
                "variables": [
                  "MinionDelay",
                  "{[PassiveSkill03[3]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill03",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "SelectTarget"
          },
          "afterInjection": []
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1435923301\">Enemy_W3_Sam_01_Locking</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1466483299\">Enemy_W3_Sam_01_MuteUltra</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024032_Monster_W3_Sam_01_Ability04_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability04_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability04_Camera",
        "3024032_Monster_W3_Sam_01_Ability04_Part01",
        "3024032_Monster_W3_Sam_01_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability03_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "variableName": "SummonMonsterCount",
              "livingTargets": true
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (SummonMonsterCount) || RETURN",
                "displayLines": "SummonMonsterCount",
                "constants": [],
                "variables": [
                  "SummonMonsterCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                      "displayLines": "{[Skill03[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill03[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability03_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability03_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability03_Camera",
        "3024032_Monster_W3_Sam_01_Ability03_Part01",
        "3024032_Monster_W3_Sam_01_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability02_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.6,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.6,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "variableName": "SummonMonsterCount",
              "livingTargets": true
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (SummonMonsterCount) || RETURN",
                "displayLines": "SummonMonsterCount",
                "constants": [],
                "variables": [
                  "SummonMonsterCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                      "displayLines": "{[Skill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[2]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                      "displayLines": "{[Skill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[2]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability02_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability02_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability02_Camera",
        "3024032_Monster_W3_Sam_01_Ability02_Part01",
        "3024032_Monster_W3_Sam_01_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability01Pre_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability01Pre_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Malignform Elytra"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "variableName": "SummonMonsterCount",
              "livingTargets": true
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (SummonMonsterCount) || RETURN",
                "displayLines": "SummonMonsterCount",
                "constants": [],
                "variables": [
                  "SummonMonsterCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability01Pre_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability01Pre_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability01Pre_Camera",
        "3024032_Monster_W3_Sam_01_Ability01Pre_Part01",
        "3024032_Monster_W3_Sam_01_Ability01Pre_Part02"
      ],
      "skillTrigger": "Skill01Pre",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_01_Ability01Pre_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability01_Part02": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "variableName": "SummonMonsterCount",
              "livingTargets": true
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (SummonMonsterCount) || RETURN",
                "displayLines": "SummonMonsterCount",
                "constants": [],
                "variables": [
                  "SummonMonsterCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Ability01_Part01": {
      "fileName": "3024032_Monster_W3_Sam_01_Ability01_Part01",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_Ability01_Camera",
        "3024032_Monster_W3_Sam_01_Ability01_Part01",
        "3024032_Monster_W3_Sam_01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024032_Monster_W3_Sam_01_Passive01": {
      "fileName": "3024032_Monster_W3_Sam_01_Passive01",
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-430835905\">Enemy_W3_Sam_01_Passive</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-16655209\">Enemy_W3_Sam_01_Shield</a>[<span class=\"descriptionNumberColor\">Whirling Carapace</span>]",
          "valuePerStack": {
            "MDF_ShieldThreshold": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "MDF_HealPercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_MaxRallyHPRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          }
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20029
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Neutral Team",
          "eventID": 20029,
          "variables": {
            "Ability03_BreakDamageAddedRatioBase": {
              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
              "displayLines": "{[Skill04[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04[3]]}"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1888375507\">Enemy_W3_Sam_01_PickUpMessage</a>"
            },
            "Show BattleEvent Button"
          ]
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
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302403000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-363687624\">Enemy_W3_Sam_01_MainStory</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1278888154\">W3_Sam_01_BattleScore2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-363687624\">Enemy_W3_Sam_01_MainStory</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-430835905\">Enemy_W3_Sam_01_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Is Related Summoned Entity",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "compareType": "<=",
                        "value2": 0,
                        "livingTargets": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-557060605\">Monster_W3_Sam_Endurance</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W3_Sam_01_Ability07_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 3
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "revertDefault": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1888375507\">Enemy_W3_Sam_01_PickUpMessage</a>",
          "execute": [
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024032_Monster_W3_Sam_01_PassiveAbility_BGM": {
      "fileName": "3024032_Monster_W3_Sam_01_PassiveAbility_BGM",
      "childAbilityList": [
        "3024032_Monster_W3_Sam_01_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
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
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1708752207\">Enemy_W3_Sam_01_ResetStageBGM</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1708752207\">Enemy_W3_Sam_01_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024032_Modifiers": {
      "fileName": "3024032_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1278888154\">W3_Sam_01_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Catch the Locust, Catch the Swarm",
                          "desc": "During the battle with Harbinger of Death: Swarm Nightmare, break the Harbinger of Death: Swarm Nightmare before defeating all Juvenile Stings, and it recovers Toughness before exiting \"Gene Duplication\" state",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1262110535\">W3_Sam_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Ragtag Swarm",
                      "desc": "In combat with Harbinger of Death: Swarm Nightmare, defeat all Juvenile Stings to force it out of the \"Gene Duplication\" state",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                    "displayLines": "MDF_BreakDamageAddedRatioBase",
                    "constants": [],
                    "variables": [
                      "MDF_BreakDamageAddedRatioBase"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatioBase</span>. When attacking enemy targets in the \"Rapid Evolution\" state, ignores the \"Rapid Evolution\" effect that prevents attackers from dealing CRIT Hits.",
          "type": "Other",
          "effectName": "Nemesis",
          "statusName": "Nemesis"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-836809540\">Enemy_W3_Sam_01_Ability04Command</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
                      "valuePerStack": {
                        "MDF_BreakDamageAddedRatioBase": {
                          "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                          "displayLines": "MDF_BreakDamageAddedRatioBase",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDamageAddedRatioBase"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                    "displayLines": "MDF_BreakDamageAddedRatioBase",
                    "constants": [],
                    "variables": [
                      "MDF_BreakDamageAddedRatioBase"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
                      "valuePerStack": {
                        "MDF_BreakDamageAddedRatioBase": {
                          "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                          "displayLines": "MDF_BreakDamageAddedRatioBase",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDamageAddedRatioBase"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_BreakDamageAddedRatioBase"
          ],
          "latentQueue": [],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatioBase</span>. When attacking an enemy target in the \"Rapid Evolution\" state, ignores the \"Rapid Evolution\" effect that prevents attackers from dealing CRIT Hits. \"Juvenile Sting\" will prioritize attacking ally characters in the \"Nemesis\" state.",
          "type": "Other",
          "effectName": "Nemesis",
          "statusName": "Nemesis"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_Sam_01"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_TargetAttackFlag",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateFIXED</span>&nbsp;",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TargetAttackFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TargetAttackFlag",
                          "value": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TargetAttackFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TargetAttackFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "Weakness Break [Anyone]"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When attacked by ally targets not in the \"Nemesis\" state, cannot receive CRIT Hits.",
          "type": "Other",
          "effectName": "Rapid Evolution",
          "statusName": "Rapid Evolution"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-836809540\">Enemy_W3_Sam_01_Ability04Command</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Team Action",
                  "conditionsActor": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "conditionsTarget": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                  },
                  "abilityName": "Sam01Command"
                },
                {
                  "name": "Team Action",
                  "conditionsActor": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "conditionsTarget": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
                    "invertCondition": true
                  },
                  "abilityName": "Sam01CommandCaster"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Team Action",
                  "abilityName": "Sam01Command",
                  "activated": false
                },
                {
                  "name": "Team Action",
                  "abilityName": "Sam01CommandCaster",
                  "activated": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1121915816\">Enemy_W3_Sam_01_TakenDamage</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio_PerLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_DamageTakenUpRatio_PerLayer"
          ],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is dispelled when this unit recovers from Weakness Break state.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2048366509\">Enemy_W3_Sam_01_EnhanceEffectMinion</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095098739\">Enemy_W3_Sam_01_Ability04TargetServant</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]",
          "stackType": "Replace",
          "description": "\"Mortal Instinct\" stacked <span class=\"descriptionNumberColor\">MDF_Layer</span> time(s)",
          "type": "Other",
          "effectName": "Mortal Instinct",
          "statusName": "Mortal Instinct",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1049305365\">Enemy_W3_Sam_01_EnhanceEnergyBar</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PassiveSkill03_MaxCharge",
                      "value": {
                        "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                        "displayLines": "{[PassiveSkill03[4]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill03[4]]}"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PassiveSkill03_MaxCharge",
                      "value": {
                        "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                        "displayLines": "{[PassiveSkill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill03[1]]}"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ChargeCount) || RETURN",
                    "displayLines": "ChargeCount",
                    "constants": [],
                    "variables": [
                      "ChargeCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                    "displayLines": "PassiveSkill03_MaxCharge",
                    "constants": [],
                    "variables": [
                      "PassiveSkill03_MaxCharge"
                    ]
                  },
                  "assignState": "True"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "ChargeCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                    "displayLines": "PassiveSkill03_MaxCharge",
                    "constants": [],
                    "variables": [
                      "PassiveSkill03_MaxCharge"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (ChargeCount) || RETURN",
                        "displayLines": "ChargeCount",
                        "constants": [],
                        "variables": [
                          "ChargeCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                        "displayLines": "PassiveSkill03_MaxCharge",
                        "constants": [],
                        "variables": [
                          "PassiveSkill03_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]",
          "modifierFlags": [
            "STAT_AITargetLowerPriority"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "HintCheck",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1049305365\">Enemy_W3_Sam_01_EnhanceEnergyBar</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2048366509\">Enemy_W3_Sam_01_EnhanceEffectMinion</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ChargeCount",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill03[0]]}"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill03[0]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PassiveSkill03_MaxCharge"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1049305365\">Enemy_W3_Sam_01_EnhanceEnergyBar</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2048366509\">Enemy_W3_Sam_01_EnhanceEffectMinion</a>"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "PassiveSkill03_MaxCharge",
                          "value": {
                            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                            "displayLines": "{[PassiveSkill03[4]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill03[4]]}"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "PassiveSkill03_MaxCharge",
                          "value": {
                            "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                            "displayLines": "{[PassiveSkill03[1]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill03[1]]}"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"792733911\">Enemy_W3_Sam_01_EnhanceChargeCount</a>[<span class=\"descriptionNumberColor\">Mortal Instinct</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                        "displayLines": "PassiveSkill03_MaxCharge",
                        "constants": [],
                        "variables": [
                          "PassiveSkill03_MaxCharge"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "ChargeCount",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                        "displayLines": "PassiveSkill03_MaxCharge",
                        "constants": [],
                        "variables": [
                          "PassiveSkill03_MaxCharge"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ChargeCount",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (PassiveSkill03_MaxCharge) || RETURN",
                          "displayLines": "PassiveSkill03_MaxCharge",
                          "constants": [],
                          "variables": [
                            "PassiveSkill03_MaxCharge"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 7
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "noTargetFound": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedUpRatio"
          ],
          "latentQueue": [],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
          "type": "Buff",
          "effectName": "Enhance",
          "statusName": "Gene Duplication"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__599604616\">Enemy_W3_Sam_01_ShieldRecoverMark</a>",
          "stackType": "Replace",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-16655209\">Enemy_W3_Sam_01_Shield</a>[<span class=\"descriptionNumberColor\">Whirling Carapace</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                    "displayLines": "MDF_CurrentHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentHPRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP_DownScale",
                  "value": 1000
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "variableName": "MDF_CurrentHP_DownScale",
                  "value": 1000
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastHPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                    "displayLines": "MDF_CurrentHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentHPRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_RallyHPRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPChangeRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_LastHPRatio) || Variables[1] (MDF_CurrentHPRatio) || SUB || RETURN",
                        "displayLines": "(MDF_LastHPRatio - MDF_CurrentHPRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_LastHPRatio",
                          "MDF_CurrentHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isAttack",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_HPChangeRatio",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (MDF_MaxRallyHPRatio) || Variables[1] (MDF_TotalDamageRatio) || SUB || RETURN",
                              "displayLines": "(MDF_MaxRallyHPRatio - MDF_TotalDamageRatio)",
                              "constants": [],
                              "variables": [
                                "MDF_MaxRallyHPRatio",
                                "MDF_TotalDamageRatio"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "MDF_RallyHPRatio",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] (MDF_ShieldThreshold) || Variables[1] (MDF_TotalDamageRatio) || ADD || Variables[2] (MDF_MaxRallyHPRatio) || SUB || SUB || RETURN",
                                "displayLines": "(0 - ((MDF_ShieldThreshold + MDF_TotalDamageRatio) - MDF_MaxRallyHPRatio))",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "MDF_ShieldThreshold",
                                  "MDF_TotalDamageRatio",
                                  "MDF_MaxRallyHPRatio"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (MDF_CurrentHPRatio) || Variables[1] (MDF_HPChangeRatio) || ADD || RETURN",
                                "displayLines": "(MDF_CurrentHPRatio + MDF_HPChangeRatio)",
                                "constants": [],
                                "variables": [
                                  "MDF_CurrentHPRatio",
                                  "MDF_HPChangeRatio"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_TotalDamageRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_ShieldThreshold) || RETURN",
                            "displayLines": "MDF_ShieldThreshold",
                            "constants": [],
                            "variables": [
                              "MDF_ShieldThreshold"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_MaxRallyHPRatio) || RETURN",
                            "displayLines": "MDF_MaxRallyHPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_MaxRallyHPRatio"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_RallyHPRatio",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_CurrentHPRatio) || Variables[1] (MDF_HPChangeRatio) || ADD || RETURN",
                              "displayLines": "(MDF_CurrentHPRatio + MDF_HPChangeRatio)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentHPRatio",
                                "MDF_HPChangeRatio"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_RallyHPRatio",
                              "value": {
                                "operator": "Variables[0] (MDF_CurrentHPRatio) || Variables[1] (MDF_HPChangeRatio) || ADD || RETURN",
                                "displayLines": "(MDF_CurrentHPRatio + MDF_HPChangeRatio)",
                                "constants": [],
                                "variables": [
                                  "MDF_CurrentHPRatio",
                                  "MDF_HPChangeRatio"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_RallyHPRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_RallyHPRatio) || Variables[1] (MDF_ShieldThreshold) || SUB || RETURN",
                            "displayLines": "(MDF_RallyHPRatio - MDF_ShieldThreshold)",
                            "constants": [],
                            "variables": [
                              "MDF_RallyHPRatio",
                              "MDF_ShieldThreshold"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_RallyHPRatio) || RETURN",
                        "displayLines": "MDF_RallyHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_RallyHPRatio"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_RallyHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentHPRatio"
                          ]
                        }
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_RallyHPRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                            "displayLines": "MDF_CurrentHPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentHPRatio"
                            ]
                          }
                        },
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (MDF_RallyHPRatio) || RETURN",
                            "displayLines": "MDF_RallyHPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_RallyHPRatio"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isAttack",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalDamageRatio",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isAttack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalDamageRatio",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_RallyHPRatio"
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_RallyHPRatio) || RETURN",
                        "displayLines": "MDF_RallyHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_RallyHPRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"599604616\">Enemy_W3_Sam_01_ShieldRecoverMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_RallyHPRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentHPRatio"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_RallyHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_HealPercentage) || Variables[1] (MDF_CurrentHPRatio) || ADD || RETURN",
                          "displayLines": "(MDF_HealPercentage + MDF_CurrentHPRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_HealPercentage",
                            "MDF_CurrentHPRatio"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                            "displayLines": "MDF_HealPercentage",
                            "constants": [],
                            "variables": [
                              "MDF_HealPercentage"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_RallyHPRatio",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                              "displayLines": "MDF_CurrentHPRatio",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentHPRatio"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "healPercent": {
                                "operator": "Variables[0] (MDF_RallyHPRatio) || Variables[1] (MDF_CurrentHPRatio) || SUB || RETURN",
                                "displayLines": "(MDF_RallyHPRatio - MDF_CurrentHPRatio)",
                                "constants": [],
                                "variables": [
                                  "MDF_RallyHPRatio",
                                  "MDF_CurrentHPRatio"
                                ]
                              },
                              "formula": "Heal from Target MaxHP"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShieldThreshold",
            "MDF_HealPercentage",
            "MDF_MaxRallyHPRatio"
          ],
          "latentQueue": [],
          "description": "After \"Harbinger of Death: Swarm Nightmare\" is attacked, a portion of the reduced HP is converted into \"Corrosion.\" When \"Harbinger of Death: Swarm Nightmare\" uses \"Primordial Tide, Swarm of Death,\" this unit will restore HP equal to the amount of Corrosion.",
          "type": "Buff",
          "statusName": "Whirling Carapace"
        }
      ],
      "references": []
    },
    "3024032_BE_BattleEvents": {
      "fileName": "3024032_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20029,
          "team": "Neutral Team",
          "eventType": "Entity Selection",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}