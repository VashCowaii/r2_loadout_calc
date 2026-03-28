const configAbility = {
  "fileName": "3014022_Monster_W3_Death_PassiveAbilityInitiate",
  "childAbilityList": [
    "3014022_Monster_W3_Death_PassiveAbilityInitiate"
  ],
  "skillTrigger": "PassiveSkill02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-874770796\">W2_Death_BattleScore1</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1278468708\">Monster_W3_Death_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 301402020,
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
          "modifier": "<a class=\"gModGreen\" id=\"-1038288757\">Enemy_W3_Death_MainLine02_DeathControl</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "DeathPart_AppearSkill_Flag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Effect_Flag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1091581769\">Monster_W3_Death_ListenBreak</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "UsedSkill08_Flag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Bullet_Flag"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 301402020,
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
          "modifier": "<a class=\"gModGreen\" id=\"-117176315\">Monster_W3_Death_SpecialVictory_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1332827782\">Enemy_W3_Death_MainCustomString</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 301402020,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Set Enemy Phase",
              "phase": 2
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 3
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 3014022,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Memory Zone Meme \"Something Unto Death\" (Complete)"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"91362459\">Modifier_W3_Death_RLBoss_PartController_LockHP</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-745487733\">Modifier_W3_Death_PartController_LockHP</a>"
                }
              ]
            },
            {
              "name": "Set Enemy Phase"
            }
          ]
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "scope": "TargetEntity",
      "variableName": "DeathPart_AppearSkill_Flag"
    }
  ],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "scope": "TargetEntity",
      "variableName": "DeathPart_AppearSkill_Flag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1087767431\">Enemy_W3_Deathpart_Appear</a>"
    }
  ],
  "whenRemoved": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1278468708\">Monster_W3_Death_MuteHitFly</a>",
      "modifierFlags": [
        "MuteHitFly"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1332827782\">Enemy_W3_Death_MainCustomString</a>",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.5
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.2
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DeathPart_AppearSkill_Flag",
        "Effect_Flag",
        "UsedSkill08_Flag",
        "Bullet_Flag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-117176315\">Monster_W3_Death_SpecialVictory_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.00010000006
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Death_SpecialVictory_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 7
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"740710426\">Monster_Standard_DisableAction</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Death_SpecialVictory_Flag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DeathPart_AppearSkill_Flag",
        "Effect_Flag",
        "UsedSkill08_Flag",
        "Bullet_Flag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1038288757\">Enemy_W3_Death_MainLine02_DeathControl</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Character ID",
                "ID": "MainLine_Character_1",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
                  "valuePerStack": {
                    "MDF_HealHPPercentage": {
                      "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                      "displayLines": "{[Skill05[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[0]]}"
                      ]
                    },
                    "MDF_AddSPValue": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Character ID",
                "ID": "MainLine_Character_2",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
                  "valuePerStack": {
                    "MDF_HealHPPercentage": {
                      "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                      "displayLines": "{[Skill05[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[0]]}"
                      ]
                    },
                    "MDF_AddSPValue": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{All Unselectable Targets}}"
              },
              "variableName": "LightTeamCount",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (LightTeamCount) || RETURN",
                "displayLines": "LightTeamCount",
                "constants": [],
                "variables": [
                  "LightTeamCount"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 2,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": 3012031,
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 2,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": 3012031,
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 3014022,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Memory Zone Meme \"Something Unto Death\" (Complete)"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Owner_MaxHPCount",
                  "value": {
                    "operator": "Variables[0] (DeathPartMaxHPCount) || RETURN",
                    "displayLines": "DeathPartMaxHPCount",
                    "constants": [],
                    "variables": [
                      "DeathPartMaxHPCount"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}