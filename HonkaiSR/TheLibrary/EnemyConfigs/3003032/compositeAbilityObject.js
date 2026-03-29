const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3003032,
  "trimCharacterName": 3003032,
  "abilityList": [
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility02_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility02_Part01",
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Effect",
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Perform",
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Logic",
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part01",
    "3003032_Monster_W3_Figure_02_RLElite_Ability10_AssistInit_Insert",
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00_BattleEvent",
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00",
    "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part01",
    "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part01",
    "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part01",
    "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part01",
    "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part01",
    "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part02",
    "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part01",
    "3003032_Monster_W3_Figure_RLElite_Standard_Part_Insert",
    "3003032_Monster_W3_Figure_02_RLElite_PassiveAbility_Initiate",
    "3003032_Modifiers"
  ],
  "abilityObject": {
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility02_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_AssistAbility02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility02_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_AssistAbility02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Effect": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Perform": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Perform",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Logic": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_AssistAbility01_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT_Burn",
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part02",
      "abilityType": null,
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W3_Figure_02_RLElite_Ability07_Part01",
          "isTrigger": true
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "DollBoss"
          },
          "variableName": "W3_FigureBoss_00_BattleScore2_Flag1",
          "context": "TargetEntity",
          "value": -1,
          "max": 100
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT",
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability10_AssistInit_Insert": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability10_AssistInit_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00_BattleEvent": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00_BattleEvent",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 300401000,
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "DollBoss"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1648994175\">Enemy_W3_Figure_02_RLElite_Ability07_MainStory</a>"
            }
          ]
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "flagNames": []
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W3_Figure_02_RLElite_Ability07_Part02"
            },
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Add Target by Enemy ID",
                "ID": 3003043,
                "characterName": "\"Tomorrow in Harmonious Chords\" (Complete)"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W3_Figure_RLElite_Ability07_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Add Target by Enemy ID",
                "ID": 3003053,
                "characterName": "\"Present Inebriated in Revelry\" (Complete)"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W3_Figure_01_RLElite_Ability07_Part02"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1648994175\">Enemy_W3_Figure_02_RLElite_Ability07_MainStory</a>",
          "stackType": "Replace",
          "execute": [
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
                    "value1": "MDF_FigureUltraCount",
                    "compareType": "=",
                    "value2": 0
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
                    "value1": "MDF_FigureUltraCount",
                    "compareType": "=",
                    "value2": 1
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_FigureUltraCount",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00",
      "childAbilityList": [
        "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00",
        "3003032_Monster_W3_Figure_02_RLElite_Ability07_Camera",
        "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part01",
        "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part02",
        "3003032_Monster_W3_Figure_02_RLElite_Ability07_Part00_BattleEvent"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 300401000,
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "DollBoss"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1648994175\">Enemy_W3_Figure_02_RLElite_Ability07_MainStory</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1611594582\">Monster_W3_FigureBoss_Standard_TheChosenOneEffect</a>"
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W3_Figure_02_RLElite_Ability07_Part02"
            },
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_00"
                    }
                  }
                ]
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W3_Figure_RLElite_Ability07_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_01"
                    }
                  }
                ]
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W3_Figure_01_RLElite_Ability07_Part02"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1648994175\">Enemy_W3_Figure_02_RLElite_Ability07_MainStory</a>",
          "stackType": "Replace",
          "execute": [
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
                    "value1": "MDF_FigureUltraCount",
                    "compareType": "=",
                    "value2": 0
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
                    "value1": "MDF_FigureUltraCount",
                    "compareType": "=",
                    "value2": 1
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_FigureUltraCount",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                }
              ]
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part01",
      "childAbilityList": [
        "3003032_Monster_W3_Figure_02_RLElite_Ability06_Camera",
        "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part01",
        "3003032_Monster_W3_Figure_02_RLElite_Ability06_Part02"
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
          "ability": "Monster_W3_Figure_02_RLElite_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-523420730\">Monster_W3_Figure_02_RLElite_ChainMark3</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-523420730\">Monster_W3_Figure_02_RLElite_ChainMark3</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-523420730\">Monster_W3_Figure_02_RLElite_ChainMark3</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-473087873\">Monster_W3_Figure_02_RLElite_ChainMark4</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-473087873\">Monster_W3_Figure_02_RLElite_ChainMark4</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || Variables[1] (Monster_W3_Figure_02_RLElite_AimTargetCount) || DIV || RETURN",
                  "displayLines": "({[Skill05[0]]} / Monster_W3_Figure_02_RLElite_AimTargetCount)",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}",
                    "Monster_W3_Figure_02_RLElite_AimTargetCount"
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
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-523420730\">Monster_W3_Figure_02_RLElite_ChainMark3</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473087873\">Monster_W3_Figure_02_RLElite_ChainMark4</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part01",
      "childAbilityList": [
        "3003032_Monster_W3_Figure_02_RLElite_Ability05_Camera",
        "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part01",
        "3003032_Monster_W3_Figure_02_RLElite_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
            "invertCondition": true
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "ability": "Monster_W3_Figure_02_RLElite_Ability05_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "noTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W3_Figure_02_RLElite_Ability05_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "targetIsVariable": true,
        "maxTargets": 4
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "MarkCount"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_W3_Figure_02_AimTargetCount",
              "value": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>",
          "valuePerStack": {
            "#Ability04_P1_DamageUPLayer": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "#Ability04_P2_DamageUPRatio": {
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
          "addStacksPerTrigger": 4
        },
        {
          "name": "Define Custom Variable",
          "variableName": "W3_Figure_02_BattleScore1_Flag1",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part01",
      "childAbilityList": [
        "3003032_Monster_W3_Figure_02_RLElite_Ability04_Camera",
        "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part01",
        "3003032_Monster_W3_Figure_02_RLElite_Ability04_Part02"
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
          "ability": "Monster_W3_Figure_02_RLElite_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
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
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part01",
      "childAbilityList": [
        "3003032_Monster_W3_Figure_02_RLElite_Ability03_Camera",
        "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part01",
        "3003032_Monster_W3_Figure_02_RLElite_Ability03_Part02"
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
          "ability": "Monster_W3_Figure_02_RLElite_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part01",
      "childAbilityList": [
        "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part01",
        "3003032_Monster_W3_Figure_02_RLElite_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part02": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part01": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part01",
      "childAbilityList": [
        "3003032_Monster_W3_Figure_02_RLElite_Ability01_Camera",
        "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part01",
        "3003032_Monster_W3_Figure_02_RLElite_Ability01_Part02"
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
          "ability": "Monster_W3_Figure_02_RLElite_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_RLElite_Standard_Part_Insert": {
      "fileName": "3003032_Monster_W3_Figure_RLElite_Standard_Part_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003032_Monster_W3_Figure_02_RLElite_PassiveAbility_Initiate": {
      "fileName": "3003032_Monster_W3_Figure_02_RLElite_PassiveAbility_Initiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-918700562\">Monster_W3_Figure_02_RLElite_FireInHead</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-675720383\">Enemy_W3_Figure_02_RLElite_AudioControllerForChosenOne</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1606294659\">W3_Figure_02_BattleScore1</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-675720383\">Enemy_W3_Figure_02_RLElite_AudioControllerForChosenOne</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
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
    "3003032_Modifiers": {
      "fileName": "3003032_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ModifierLayers) || Variables[1] (MDF_AttackUPRatio) || MUL || RETURN",
                    "displayLines": "(ModifierLayers * MDF_AttackUPRatio)",
                    "constants": [],
                    "variables": [
                      "ModifierLayers",
                      "MDF_AttackUPRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackUPRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "valuePerStack": {
                        "MDF_AttackUPRatio": {
                          "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                          "displayLines": "{[Skill04[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill04[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "modifierName": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ModifierLayers",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "#Skill04_P1_DamageUPLayer",
            "#Skill04_P2_DamageUPRatio"
          ],
          "latentQueue": [
            "MarkCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-918700562\">Monster_W3_Figure_02_RLElite_FireInHead</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-473087873\">Monster_W3_Figure_02_RLElite_ChainMark4</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-523420730\">Monster_W3_Figure_02_RLElite_ChainMark3</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1156179234\">Monster_W3_Figure_02_RLElite_SharePreShow</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start "
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                    "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                    "constants": [
                      4,
                      1
                    ],
                    "variables": [
                      "Monster_W3_Figure_02_RLElite_AimTargetCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "assignState": "False",
                  "state": "Active"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DangerLevel",
                  "value": {
                    "operator": "Constants[0] (5) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || RETURN",
                    "displayLines": "(5 - Monster_W3_Figure_02_RLElite_AimTargetCount)",
                    "constants": [
                      5
                    ],
                    "variables": [
                      "Monster_W3_Figure_02_RLElite_AimTargetCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]"
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "End_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Currency Wars Full OffFieldList}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": "=",
                        "value2": 0,
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                        "compareType": "<",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Monster_W3_Figure_02_AimTargetCount",
                      "value": {
                        "operator": "Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || RETURN",
                        "displayLines": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                        "constants": [],
                        "variables": [
                          "Monster_W3_Figure_02_RLElite_AimTargetCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "ModifierLayers",
                      "modifierName": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "ModifierLayers",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Target__Toughness",
                            "compareType": "=",
                            "value2": 0,
                            "invertCondition": true
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "Target__Toughness",
                                "compareType": "=",
                                "value2": 0,
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "End_Flag",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "End_Flag",
                              "value": 0
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ModifierLayers",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 7
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.5
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MarkCount"
          ],
          "description": "About to use Desmios Evangelion. The current DMG level is <span class=\"descriptionNumberColor\">MDF_DangerLevel</span>.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Shackle-Bearing Messenger",
          "stackLimit": 4,
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
          "counter": 4,
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 4
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                        "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                        "constants": [
                          4,
                          1
                        ],
                        "variables": [
                          "Monster_W3_Figure_02_RLElite_AimTargetCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "assignState": "True",
                      "state": "Active"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                              "value": 1
                            },
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                                "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                                "constants": [
                                  4,
                                  1
                                ],
                                "variables": [
                                  "Monster_W3_Figure_02_RLElite_AimTargetCount"
                                ]
                              },
                              "entityClass": "Enemy",
                              "assignState": "True",
                              "state": "Active"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                    "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                    "constants": [
                      4,
                      1
                    ],
                    "variables": [
                      "Monster_W3_Figure_02_RLElite_AimTargetCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MarkCount",
            "MDF_DangerLevel",
            "End_Flag"
          ],
          "description": "Locked on by %CasterName as their attack target.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Target Locked On"
        }
      ],
      "references": []
    }
  }
}