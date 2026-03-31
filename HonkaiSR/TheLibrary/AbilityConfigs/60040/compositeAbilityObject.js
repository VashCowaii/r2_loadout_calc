const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60040,
  "trimCharacterName": 60040,
  "abilityList": [
    "60040_MissionBattleEvent60039_AbilityP01",
    "60040_MissionBattleEvent60039_Ability03_Camera",
    "60040_MissionBattleEvent60039_Ability03_Part02",
    "60040_MissionBattleEvent60039_Player_Ability03_Part01",
    "60040_MissionBattleEvent60039_Ability03_Part01"
  ],
  "abilityObject": {
    "60040_MissionBattleEvent60039_AbilityP01": {
      "fileName": "60040_MissionBattleEvent60039_AbilityP01",
      "childAbilityList": [
        "60040_MissionBattleEvent60039_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"706414580\">MissionBattleEvent60039_ShowButton</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"516611744\">MissionBattleEvent60039_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1601631435\">MissionBattleEvent60039_Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1749148122\">MissionBattleEvent60039_AutoUseUltraAbility</a>"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
            "displayLines": "{[SkillP01[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"522546926\">MissionBattleEvent60039_AttackIgnoreDEF</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1140013757\">MissionBattleEvent60039_PlayerAddAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "MissionBattleEvent60039_Player_Ability03_Part01"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1582231679\">MissionBattleEvent60039_LightTeamBonus</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakAddedRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__522546926\">MissionBattleEvent60039_AttackIgnoreDEF</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": -1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1749148122\">MissionBattleEvent60039_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1601631435\">MissionBattleEvent60039_Charge</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Action Holder's Team",
                        "team": "Player Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Skill Type",
                          "skillType": "Ultimate"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"365114545\">MissionBattleEvent60039_Charge_permission</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                        "displayLines": "{[SkillP01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}"
                        ]
                      },
                      "isFixed": "(Fixed)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__516611744\">MissionBattleEvent60039_PassiveAbility</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
            },
            {
              "eventTrigger": "Energy Change"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__706414580\">MissionBattleEvent60039_ShowButton</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Show BattleEvent Button"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60040_MissionBattleEvent60039_Ability03_Camera": {
      "fileName": "60040_MissionBattleEvent60039_Ability03_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60040_MissionBattleEvent60039_Ability03_Part02": {
      "fileName": "60040_MissionBattleEvent60039_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2000427421\">MissionBattleEvent60039_CharacterForceVisible</a>"
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
            "value": "Monster_Sunday_MainStory380"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Horizon's Echo From Afar"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1153660745\">Enemy_W3_Sunday_P2BELockHP_2</a>"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "Train_TargetNumber"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
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
            "value": "Monster_Sunday_MainStory380"
          },
          "ifTargetFound": [
            {
              "name": "Consume",
              "consumeFrom": "CurrentHP",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "consumePercent": 1,
              "consumeFloor": 0.0009999999,
              "attackType": "Ultra",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Imaginary"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 0,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2000427421\">MissionBattleEvent60039_CharacterForceVisible</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
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
            "value": "Monster_Sunday_MainStory380"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2000427421\">MissionBattleEvent60039_CharacterForceVisible</a>",
          "modifierFlags": [
            "STAT_ForceActionable"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60040_MissionBattleEvent60039_Player_Ability03_Part01": {
      "fileName": "60040_MissionBattleEvent60039_Player_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60040_MissionBattleEvent60039_Ability03_Part01": {
      "fileName": "60040_MissionBattleEvent60039_Ability03_Part01",
      "childAbilityList": [
        "60040_MissionBattleEvent60039_Ability03_Part01",
        "60040_MissionBattleEvent60039_Ability03_Part02",
        "60040_MissionBattleEvent60039_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        60,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60039_Player_Ability03_Part01"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60039_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6003901,
      "trigger": "Skill03",
      "name": "Horizon's Echo From Afar",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals massive Imaginary DMG to all enemies.",
      "energyCost": 160,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          3.6
        ]
      },
      "element": "Imaginary",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60039_Skill03_Phase01",
        "Avatar_MissionBattleEvent60039_Skill03_Phase02",
        "Avatar_MissionBattleEvent60039_Skill03_Camera"
      ],
      "toughnessList": [
        0,
        180,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6003902,
      "trigger": "SkillP01",
      "name": "",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          20,
          60
        ]
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60039_SkillP01"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}