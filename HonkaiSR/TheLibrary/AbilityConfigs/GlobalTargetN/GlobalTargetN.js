const configAbility = {
  "fileName": "GlobalTargetN",
  "abilityType": "Target Names",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Target Configuration",
      "nameTarget": "BattleEvent60021",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 60021,
                "target": {
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
      "name": "Target Configuration",
      "nameTarget": "Demiurge",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}.[[getSummoner]]"
                },
                "characterName": "Cyrene"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Cyrene",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Demiurge's Player Team Mirror",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Search",
              "entityType": "Avatar",
              "teamType": "Player Team",
              "livingState": "Mask_AliveOnly"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Target is Unselectable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "invertCondition": true
              }
            },
            {
              "name": "Filter by Target",
              "exclude": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              }
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Cyrene's All Player Characters",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Search",
          "entityType": "Avatar",
          "teamType": "Player Team",
          "livingState": "Mask_AliveOnly"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "DHPT Player Team Living",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Filter by Life-State",
              "state": "Mask_AliveOnly"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "DHPT",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Team Members with Unselectables}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"292748857\">DanHengPT_PassiveModifier</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Souldragon",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-516529797\">DanHengPT_BEModifier</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Bondmate",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Team Members with Unselectables}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Evernight's Passive Group",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Evernight's Group}}"
            },
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"208363119\">Evernight_Passive</a>"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Evernight's Passive Group v2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Evernight's Group v2}}"
            },
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Evernight's Group v2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "identifier": "Evernight_PTN01"
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "identifier": "Evernight_PTN02"
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "identifier": "Evernight_PTN03"
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "identifier": "Evernight_PTN04"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Evernight's Group",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{All Memosprites}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1040270840\">Memosprite_EvernightServant_PartnerControl</a>"
                  }
                }
              ]
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "identifier": "Evernight_PTN01"
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "identifier": "Evernight_PTN02"
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "identifier": "Evernight_PTN03"
            },
            {
              "name": "Add Target by Pseudo-Character Partner",
              "identifier": "Evernight_PTN04"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Evey",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Memosprites}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1040270840\">Memosprite_EvernightServant_PartnerControl</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Cerydra Self-Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}} + {{Player Team Unselectables}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Character ID",
                "ID": 1412,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cerydra"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Cerydra Ult Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Filter by Life-State",
              "state": "Mask_AliveOnly"
            },
            {
              "name": "Sort by Monster Rank",
              "byHighest": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Cerydra's Promotion Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Team Members with Unselectables}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>"
              }
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Phainon's Forced-Action Teammates",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team Entity}}"
            },
            "Adjust Relative to Target, Get Team",
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_ForceActionable"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Khaslana(Battle Event Cluster)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"320399697\">Phainon_Ability03_BattleEvent_BaseSpeed</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Anaxa's Ult Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Filter by Life-State",
              "state": "Mask_AliveOnly"
            },
            {
              "name": "Sort by Lineup Name Index",
              "lineupName": "1405_Skill03_TargetPos"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Tribbie's Highest HP Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All(with Unselectable)}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"890101932\">Tribbie_SKL03_Bonus_HighestHPMark</a>",
                "justAddedOrActive": true
              }
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Aglaea's Ult Countdown",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 11402,
                "target": {
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
      "name": "Target Configuration",
      "nameTarget": "Aglaea, Garmentmaker, +ST and Blast",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Garmentmaker}}"
            },
            {
              "name": "Target Name",
              "target": "{{ST and Blast}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Aglaea and All Hostile Entities",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Garmentmaker}}"
            },
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Aglaea and Garmentmaker",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Garmentmaker",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Aglaea's Battle Event",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1428154352\">MWAglaea_Summon_Passive</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Dahlia's Dance Partners",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Team Members with Unselectables}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Robin's Countdown Battle Event",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"594877276\">Robin_PassiveAbility01_BattleEvent</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Acheron: Crimson Knot Transfer Target[v2]",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                {
                  "name": "Filter by Life-State",
                  "state": "Mask_AliveOrLimbo"
                },
                "Shuffle Targets"
              ]
            },
            {
              "name": "Sort by Modifier Types",
              "buffType": "Debuff",
              "sortByHighest": true
            },
            {
              "name": "Sort by Monster Rank",
              "byHighest": true,
              "maxRank": "Elite"
            },
            {
              "name": "Sort by Modifier Value",
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "sortByHighest": true
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Bit_OnStage",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              }
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Acheron: Crimson Knot Transfer Target[v1]",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Filter by Life-State",
              "state": "Mask_AliveOnly"
            },
            "Shuffle Targets",
            {
              "name": "Sort by Modifier Types",
              "buffType": "Debuff",
              "sortByHighest": true
            },
            {
              "name": "Sort by Monster Rank",
              "byHighest": true,
              "maxRank": "Elite"
            },
            {
              "name": "Sort by Modifier Value",
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "sortByHighest": true
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Bit_OnStage",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              }
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Acheron Debuff Gained Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Selector",
              "conditions": {
                "name": "Is Ability Ongoing",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Action Owner}}"
                }
              },
              "targetPass": {
                "name": "Target Selector",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Is Current Ability Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      }
                    },
                    {
                      "name": "Is Part Of Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Action Owner}}"
                      },
                      "team": "Player Team"
                    }
                  ]
                },
                "targetPass": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    {
                      "name": "Filter by Life-State",
                      "state": "Mask_AliveOnly"
                    },
                    "Shuffle Targets"
                  ]
                },
                "targetFail": {
                  "name": "Target Selector",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        {
                          "name": "Adjust Target by Skill Point User",
                          "canFail": true
                        }
                      ]
                    },
                    "team": "Enemy Team"
                  },
                  "targetPass": {
                    "name": "Target Selector",
                    "conditions": {
                      "name": "Compare: Target Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Action Target List}}"
                      },
                      "compareType": ">=",
                      "value2": 1
                    },
                    "targetPass": {
                      "name": "Compute Targets",
                      "type": "Union",
                      "TargetList": [
                        {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Current Action Owner}}"
                            },
                            {
                              "name": "Adjust Target by Skill Point User",
                              "canFail": true
                            }
                          ]
                        },
                        {
                          "name": "Target Name",
                          "target": "{{Current Action Target List}}"
                        }
                      ]
                    },
                    "targetFail": {
                      "name": "Target Selector",
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "team": "Player Team"
                      },
                      "targetPass": {
                        "name": "Compute Targets",
                        "type": "Union",
                        "TargetList": [
                          {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Current Action Owner}}"
                              },
                              {
                                "name": "Adjust Target by Skill Point User",
                                "canFail": true
                              }
                            ]
                          },
                          {
                            "name": "Target Name",
                            "target": "{{Current Action Target List}}"
                          }
                        ]
                      },
                      "targetFail": {
                        "name": "Compute Targets",
                        "type": "Union",
                        "TargetList": [
                          {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Current Action Owner}}"
                              },
                              {
                                "name": "Adjust Target by Skill Point User",
                                "canFail": true
                              }
                            ]
                          },
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          }
                        ]
                      }
                    }
                  },
                  "targetFail": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Filter by Life-State",
                        "state": "Mask_AliveOnly"
                      },
                      "Shuffle Targets"
                    ]
                  }
                }
              },
              "targetFail": {
                "name": "Target Selector",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Target Exists",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Action Owner}}"
                      }
                    },
                    {
                      "name": "Is Part Of Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Action Target List}}"
                      },
                      "team": "Enemy Team"
                    }
                  ]
                },
                "targetPass": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    {
                      "name": "Filter by Life-State",
                      "state": "Mask_AliveOnly"
                    },
                    "Shuffle Targets"
                  ]
                },
                "targetFail": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    {
                      "name": "Filter by Life-State",
                      "state": "Mask_AliveOnly"
                    },
                    "Shuffle Targets"
                  ]
                }
              }
            },
            {
              "name": "Sort by Modifier Types",
              "buffType": "Debuff",
              "sortByHighest": true
            },
            {
              "name": "Sort by Monster Rank",
              "byHighest": true,
              "maxRank": "Elite"
            },
            {
              "name": "Sort by Modifier Value",
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "sortByHighest": true
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Bit_OnStage",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              }
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Marth 7th's Shifu",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Team Members with Unselectables}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Fuyuan",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1795719445\">Lingsha_BPAbility_BattleEvent</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Feixiao Ult Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Yukong's Flower Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets, All Team Members}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Topaz with Numby",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Numby}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Numby",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1529971415\">Topaz_BETag</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Clara's Counter Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Swarm: Skill06 Camera Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Swarm: Skill06 Target}}"
            },
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Swarm: Skill06 Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__63"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__64"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Sting Bug: Lowest Enhancement Level",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                {
                  "name": "Filter by Life-State",
                  "state": "Mask_AliveOrLimbo"
                },
                "Shuffle Targets"
              ]
            },
            {
              "name": "Sort by Modifier Value",
              "modifier": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
              "value": "Layer"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Bit_OnStage",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 8025011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sky-Shrouding Stardevourer Swarm",
                    "isBaseCompare": true
                  }
                ]
              }
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                    "compareType": "<",
                    "value2": 3,
                    "valueType": "Layer"
                  }
                ]
              }
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Self and Main Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Phantylia: Self}}"
            },
            {
              "name": "Target Name",
              "target": "{{Phantylia: Main Target}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Phantylia: Self",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1609049773\">Monster_W2_Huanlong_Main</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Phantylia: Main Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All(with Unselectable)V2}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1803273949\">Monster_W2_Huanlong_Ability13_Special</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Phantylia: Boss-Fight Ability Battle Event",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-181226190\">MissionBattleEvent60006_PassiveAbility</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Phantylia: Skill07 Camera Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Phantylia: Skill07 Target}}"
            },
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Phantylia: Skill07 Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1152795297\">Monster_W2_Huanlong_Ability07Mark</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ichor Judge: Selected Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Manta: Target 02",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Every Battle Entity}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Character ID",
                "ID": 6032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Manta: Event Target 02",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": 405201,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Manta: Event Target 01",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": 405301,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Zandar: Skill13 Camera Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Zandar: Skill13 Target}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Zandar: Skill13 Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Zandar: Skill01 Camera Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Name",
              "target": "{{Zandar: Skill01 Target}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Zandar: Skill01 Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Zandar: Self",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All(with Unselectable)}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": 404401,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Irontomb: Cyrene's Demiurge",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Memosprites}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-335355360\">Memosprite_CyreneServant_PassiveAbility01</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Irontomb: Skill06 Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-753818633\">Monster_W4_IronTombCore_Ability06Mark</a>"
              }
            },
            {
              "name": "Sort by Physical Positioning"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Irontomb: Skill06 Aim Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
              }
            },
            {
              "name": "Sort by Physical Positioning"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "BattleEvent60033",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Every Battle Entity}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Battle Event ID",
                    "ID": 60033,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Battle Event ID",
                    "ID": 60035,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "BattleEvent60032",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 60032,
                "target": {
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
      "name": "Target Configuration",
      "nameTarget": "BattleEvent60031",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 60031,
                "target": {
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
      "name": "Target Configuration",
      "nameTarget": "BattleEvent60030",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 60030,
                "target": {
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
      "name": "Target Configuration",
      "nameTarget": "Irontomb: Phantom",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": 403502,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Irontomb: Part 2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": 403207,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Irontomb: Part 1",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": 403206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Irontomb: Core",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Every Battle Entity}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": 403501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Irontomb Part 1: Skill02 Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1171334947\">Enemy_W4_IronTombCorePart_Ability02_SkillMark</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1927341406\">Monster_W4_Pollux_Status</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux Slumber Target 4",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            {
              "name": "Target Index"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux Slumber Target 3",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            {
              "name": "Sort by Physical Positioning"
            },
            {
              "name": "Target Index",
              "indexValue": 2
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux Slumber Target 2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            {
              "name": "Sort by Physical Positioning"
            },
            {
              "name": "Target Index",
              "indexValue": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux Slumber Target 1",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            {
              "name": "Sort by Physical Positioning"
            },
            {
              "name": "Target Index"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux Right Tentacle",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux Left Tentacle",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux with Minions",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1927341406\">Monster_W4_Pollux_Status</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1695851719\">Monster_W4_PolluxPart_Status</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"385444056\">Enemy_W4_PolluxPart_IF_Status</a>"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollox Mourning Departed Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Sort by Physical Positioning"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pollux Tentacle Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"385444056\">Enemy_W4_PolluxPart_IF_Status</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Valkyrie Skill Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1513487927\">Enemy_W2_Valkyrie02_Ability04_Target</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Kafka Skill4 Other Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"488971952\">Monster_W2_Kafka_RL_Ability04_Target</a>",
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Svarog's Confinement Target v2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1293195213\">Monster_W1_Svarog_RL_Control_Modifier</a>[<span class=\"descriptionNumberColor\">Restrain</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Svarog's Confinement Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"912094213\">Svarog_Control_Modifier</a>[<span class=\"descriptionNumberColor\">Restrain</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Stage Boss: 115",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Enemy ID",
          "ID": 1005011,
          "characterName": "Cocolia, Mother of Deception"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Monthly Challenge Battle Event",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-593706658\">BattleEventAbility_Challenge_Month_BETag</a>"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster's Battle-Event[Memosprite]",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Search",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "expectedType": "Memosprite[Battle Event]"
              },
              {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}.[[getSummoner]]"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            ]
          },
          "entityType": "BattleEvent",
          "livingState": "Mask_AliveOrLimbo"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Currency Wars OffFieldList",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Battle Event List}}.[[livingOrLimbo]]"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Compare: Currency Wars Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "LocationIndex",
                "compareType": ">",
                "value2": 0
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Currency Wars Full OffFieldList",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Currency Wars OffFieldList}}.[[addBattleEventMemosprite]]"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Battle Event Memosprites(Living)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Search",
          "conditions": {
            "name": "Is Entity a Battle Event/Summon",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "expectedType": "Memosprite[Battle Event]"
          },
          "entityType": "BattleEvent",
          "livingState": "Mask_AliveOrLimbo"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Territory Owner",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "SpecialBattleArea"
              }
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Most Recently Staged Character",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Most-Recently Staged Character"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team All(with Unselectable)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{All Unselectable Targets}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Recently Summoned Enemies",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Summoned Enemies"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Dead Characters",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Search",
          "livingState": "Bit_Died"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Every Battle Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Search",
          "entityType": "Battle_AllEntity"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player & Enemy Team All",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target Ally",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "Adjust Relative to Target, Get Team"
              ]
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Is Part Of",
                  "of": {
                    "name": "Get Prior Entity Defined by Index",
                    "index": 1
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "mustBeAlive2": true
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemies by Aggro to Battle Event's Caster",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Add Target by Aggro",
              "target": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "useRandomWhenFailed": false
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemies by Aggro OR Random(Exclude Memosprites)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
            },
            {
              "name": "Add Target by Aggro",
              "useRandomWhenFailed": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemies by Aggro OR Random",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Add Target by Aggro",
              "useRandomWhenFailed": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemies by Aggro",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Add Target by Aggro",
              "useRandomWhenFailed": false
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Far Right Player Entity(no Memosprite)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Far Right Player Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Far Right Enemy Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Far Left Enemy Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "First"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Far Left Player Entity(no Memosprite)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "First"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Far Left Player Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "First"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Middle Player Entity(no Memosprite)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "Mid"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Middle Player Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            },
            {
              "name": "Target Index",
              "indexType": "Mid"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Team All(Left to Right)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Sort by Physical Positioning"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Team All(Right to Left)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team All(Left to Right)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Sort by Physical Positioning"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team All(Right to Left)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Sort by Physical Positioning",
              "byHighest": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player & Enemy Team All(with Unselectable)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Player & Enemy Team All}}"
            },
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Unselectable Targets, All Team Members(Exclude Self)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Unselectable Targets, All Team Members",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Camera's Aim List",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Camera's Aim-List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Camera's Anchor List",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Camera's Anchor-List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player's Aim Sub-Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Player's Aim-List",
          "target": "SubTarget"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player's Aim Primary-Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Player's Aim-List",
          "target": "MainTarget"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player's Aim Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Player's Aim-List"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team Ability Target Lock",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team Entity}}"
            },
            "Add Target by Target-Lock"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Battle Event's Caster",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Battle Event's Caster"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster's Self-Made Battle-Events",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Caster}}.[[getSelfMadeBattleEvents]]"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster's Battle-Events",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Battle-Events Created"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Team All, ST, and Blast",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Name",
              "target": "{{ST and Blast}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets Leaving Selection",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Targets Leaving Selection"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets Entering Selection",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Targets Entering Selection"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Modifier Holder and Adjacent Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            {
              "name": "Target Name",
              "target": "{{Targets Adjacent to Modifier Holder}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets Adjacent to Modifier Holder",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            "Add Target by Current Modifier Holder",
            "Adjust Target by Adjacent Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pseudo-Character Assistant",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Pseudo-Character Assistant"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets with AV Exceeded",
      "isTargetOperator": false,
      "execute": [
        "Add Target by AV Exceeded"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members with Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Unselectable Targets",
      "isTargetOperator": false,
      "execute": [
        "Add Target by All Unselectable Targets"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster, their Summoner, and Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster, their Minions, and Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster's Summoner",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Summoner"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster's Memosprite",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Search",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}.[[getSummoner]]"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "entityType": "Servant",
          "livingState": "Mask_AliveOrLimbo"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Summoners of Modifier Holder",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            {
              "name": "Adjust Target by Summoner",
              "recursiveSearch": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Summoner of Modifier Holder",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "Adjust Target by Summoner"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Summoner of Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "Adjust Target by Summoner"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Summoner of Parameter Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "Adjust Target by Summoner"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Minions of Modifier Holder",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "Adjust Target by Summoned Minions"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster's Minions",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Summoned Minions"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Protection Provider",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Protection: Provider"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Protection Receiver",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Protection: Receiver"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "HP-Share Family",
      "isTargetOperator": false,
      "execute": [
        "Add Target by HP-Share Link"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Pseudo-Character Partner",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Pseudo-Character Partner"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members and Hostile Entities(AOE)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members with ST and Blast",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            {
              "name": "Target Name",
              "target": "{{ST and Blast}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Ability Target(ST)'s Team",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "Adjust Relative to Target, Get Team"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with ST and Blast",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{ST and Blast}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster and Ability Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Ability Target Group}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster and All Broken Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{All Broken Targets}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Parameter Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Parameter Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Player Team All(with Unselectable)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Player Team All(with Unselectable)V2}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team All(with Unselectable)V2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Target Name",
              "target": "{{Player Team Unselectables}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Team All(with Unselectable)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            {
              "name": "Target Name",
              "target": "{{Enemy Team Unselectables}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team Unselectables",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Team Unselectables",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Enemy Team All",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Enemy Team All(with Unselectable)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster's Full Team",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster with Hostile Entities(AOE)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets Adjacent to Caster",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Adjacent Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Identifier _BattleEventFromStage",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Unique Identifier",
          "identifier": "_BattleEventFromStage"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Identifier MainMonster",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Unique Identifier",
          "identifier": "MainMonster"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Identifier THE_Colossus",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Unique Identifier",
          "identifier": "THE_Colossus"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Current Linked Action Owner",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{No Target}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Team Ordering",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{No Target}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Teams",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Allied Teams",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Allied Team Entity}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Hostile Teams",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Hostile Team Entity}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Teams",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Enemy Team Entity}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Teams",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Player Team Entity}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Level Entity",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Level Entity"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Current Action Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Current Action Owner}}"
            },
            "Adjust Target by Attack Target List"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Task Action Target",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Task Action Target"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Ability Targets",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Adventure Ability Targets"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Current Enemy NPC Group",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Current Enemy NPC Grouping"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Enemy NPCs",
      "isTargetOperator": false,
      "execute": [
        "Add Target by All Enemy NPCs"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Team Members",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Adventure Team Members"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Combat Initiator(Latest)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Adventure Team Leader(Started Combat)",
          "getLatest": true
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Combat Initiator",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Adventure Team Leader(Started Combat)"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Player(Latest)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Adventure Player",
          "getLatest": true
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Player",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Adventure Player"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Part 3",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            {
              "name": "Adjust Target by Part Sub-Targets",
              "partID": 3
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Part 2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            {
              "name": "Adjust Target by Part Sub-Targets",
              "partID": 2
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Part 1",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            {
              "name": "Adjust Target by Part Sub-Targets",
              "partID": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Part 0",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "Adjust Target by Part Number"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Unknowable Domain Scepters",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Unknowable Domain: Scepter List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Memosprites",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Search",
          "entityType": "Servant",
          "livingState": "Mask_AliveOrLimbo"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Battle Event List",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Battle Event List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Battle MVP",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Battle MVP"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Projectile Hit Position",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Projectile Hit Position"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Projectile's Target",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Target hit by Projectile"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Trailblazer",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Trailblazer"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Snapshot Stat Source",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Add Target by Source(Living)"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target 2's Source Owner",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target 2}}"
            },
            "Get Source Owner"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target's Source Owner",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "Get Source Owner"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Snapshot Target's Source Owner",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Get Source Owner"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Snapshot Target List",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Snapshot List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets Adjacent to Modifier Holder(v2)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "Adjust Target by Adjacent Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets Adjacent to Parameter Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "Adjust Target by Adjacent Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target's Attack Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "Adjust Target by Attack Target List"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target's Ability Sub-Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "Adjust Target by Ability Sub-Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target's Ability Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "Adjust Target by Ability Target"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target List",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Parameter's Target List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target 2",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Passive Target"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Parameter Target",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Parameter's Target"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Function's Target List",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Function's Target List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Targets Adjacent to Projectile's Target",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            "Add Target by Target hit by Projectile",
            "Adjust Target by Adjacent Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "ST and Blast",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            {
              "name": "Target Name",
              "target": "{{Ability Targets Adjacent(Blast)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Right of Caster",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Adjust Target by Adjacent Targets",
              "whichSide": "Right"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Left of Caster",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Adjust Target by Adjacent Targets",
              "whichSide": "Left"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Right of Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            "Add Target by Ability Target",
            {
              "name": "Adjust Target by Adjacent Targets",
              "whichSide": "Right"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Left of Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            "Add Target by Ability Target",
            {
              "name": "Adjust Target by Adjacent Targets",
              "whichSide": "Left"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Summoner/Memosprite of Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}.[[getSummoner]] | {{Ability Target(ST)}}.[[getMemosprite]]"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Targets Adjacent(Blast)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            "Add Target by Ability Target",
            "Adjust Target by Adjacent Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Attack Targets of Modifier Holder",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "Adjust Target by Attack Target List"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Attack Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Attack Target List"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Target TAKING DMG",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Target TAKING DMG"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Target DEALING DMG",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Target DEALING DMG"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Indicator Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Current Action Owner}}"
            },
            "Adjust Target by Ability Indicator"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Attack Source",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Current Action Owner}}"
            },
            "Adjust Target by Ability Attack Source"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Sub-Targets",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Ability Sub-Targets"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Targets of Modifier Holder",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "Adjust Target by Ability Target"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Target List",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Ability Target"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Skill Point User(Can Fail)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Adjust Target by Skill Point User",
              "canFail": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Skill Point User",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Skill Point User"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Next Player Character Turn",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Search",
              "entityType": "Avatar",
              "teamType": "Player Team",
              "livingState": "Mask_AliveOnly"
            },
            {
              "name": "Sort by Action Order",
              "excludeNonActionableEntities": true
            },
            {
              "name": "Return Target",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Next Turn",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Next Turn Owner"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Current Turn Owner",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Current Turn Owner"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Current Action Owner",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Current Turn ACTION Owner"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Main Enemy",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Main Enemy"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Broken Targets",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Weakness Broken Targets"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Target Being Broken",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Being Weakness Broken"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Hostile Team Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Hostile Team Entity"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Allied Team Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Allied Team Entity"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Modifier Holder's Hostile Entities(AOE)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            {
              "name": "Adjust Relative to First Target, Get Team",
              "getHostileTeamInstead": true
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Hostile Entities(AOE, with Unselectables)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Hostile Team Entity",
            {
              "name": "Adjust Relative to Target, Get Team",
              "removeUnselectable": false
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Hostile Entities(AOE)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Target by Hostile Team Entity",
            "Adjust Relative to Target, Get Team"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Modifier Holder's Team Members(Exclude Self)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "Adjust Relative to Target, Get Team"
              ]
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Is Part Of",
                  "of": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "mustBeAlive2": true
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Unselectable Team Members(Exclude Self)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Adjust Relative to Target, Get Team",
              "removeUnselectable": false
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true,
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
                      "target": "{{All Team Members}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members with Unselectable Team Members(Exclude Self)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            {
              "name": "Target Name",
              "target": "{{All Unselectable Team Members(Exclude Self)}}"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members(Exclude Self)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Is Part Of",
                  "of": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "mustBeAlive2": true
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members with Unselectables",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Adjust Relative to Target, Get Team",
              "removeUnselectable": false
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "Adjust Relative to Target, Get Team"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Off-Stage Player Team",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            {
              "name": "Add Target by Off-Stage",
              "reason": "AvatarChange"
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Team All",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Enemy Team Entity}}"
            },
            "Adjust Relative to Target, Get Team"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "All Team Members(Exclude Memosprites and Self)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}} - {{All Team Members(Exclude Self)}}.[[getMemosprite]]"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team(Exclude Memosprites)v2",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Player Team All}} - {{Player Team All}}.[[getMemosprite]]"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team All(with Unselectable, exclude Netherwing)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Player Team All(with Unselectable)V2}} - {{Netherwing}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team All(Exclude Netherwing)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Player Team All}} - {{Netherwing}}"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Netherwing",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{All Memosprites}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Character ID",
                "ID": 11407,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Hostile Entities(AOE, exclude Memosprites)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team(Exclude Memosprites)",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Name",
          "target": "{{Player Team All}}.[[removeMemosprite]]"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team All",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Player Team Entity}}"
            },
            "Adjust Relative to Target, Get Team"
          ]
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Enemy Team Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Team Entity",
          "team": "Enemy Team"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Player Team Entity",
      "isTargetOperator": false,
      "execute": [
        {
          "name": "Add Target by Team Entity",
          "team": "Player Team"
        }
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Modifier Creator",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Modifier Creator[?]"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Modifier Holder",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Current Modifier Holder"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Adventure Lineup",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Adventure Lineup"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Target Group",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Ability Target List"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Ability Target(ST)",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Ability Target"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "Caster",
      "isTargetOperator": false,
      "execute": [
        "Add Target by Caster"
      ]
    },
    {
      "name": "Target Configuration",
      "nameTarget": "No Target",
      "isTargetOperator": false,
      "execute": [
        "Add Target by None"
      ]
    }
  ],
  "references": []
}