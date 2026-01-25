const configAbility = {
  "fileName": "Sunday_Sunday_10_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Haven in Palm"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Character"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "dispelCount": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "dispelOrder": "LastAdded"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "dispelCount": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "dispelOrder": "LastAdded"
            }
          ],
          "failed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "dispelCount": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "dispelOrder": "LastAdded"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Entity Type",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "type": "Character"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}.[[getMemoAndSummon]]"
            },
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Summoner/Memosprite of Ability Target(ST)}}"
              },
              "modifier": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.3) || Variables[1] (0.5) || ADD || RETURN",
                  "displayLines": "(0.3 + 0.5)",
                  "constants": [],
                  "variables": [
                    0.3,
                    0.5
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
                "target": "{{Ability Target(ST)}} + {{Summoner/Memosprite of Ability Target(ST)}}"
              },
              "modifier": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.3) || Variables[1] (0.5) || ADD || RETURN",
              "displayLines": "(0.3 + 0.5)",
              "constants": [],
              "variables": [
                0.3,
                0.5
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
        "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
          },
          "modifier": "Sunday_10_MazeBonus[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
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
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]"
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": 1,
          "adjustmentType": "+"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Target is Pathstrider",
        "path": [
          "Harmony"
        ],
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Target is Pathstrider",
        "path": [
          "Harmony"
        ],
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[getMemoAndSummon]] - {{Ability Target(ST)}}.[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "refPoint": "After"
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "refPoint": "After"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Entity Type",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "type": "Character"
      },
      "passed": [
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
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                "displayLines": "_P01_LifeTime",
                "constants": [],
                "variables": [
                  "_P01_LifeTime"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                "displayLines": "_SkillP01_StackingLayer",
                "constants": [],
                "variables": [
                  "_SkillP01_StackingLayer"
                ]
              },
              "valuePerStack": {
                "MDF_CritValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                "displayLines": "_P01_LifeTime",
                "constants": [],
                "variables": [
                  "_P01_LifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_CritValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        }
      ],
      "failed": [
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                "displayLines": "_P01_LifeTime",
                "constants": [],
                "variables": [
                  "_P01_LifeTime"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                "displayLines": "_SkillP01_StackingLayer",
                "constants": [],
                "variables": [
                  "_SkillP01_StackingLayer"
                ]
              },
              "valuePerStack": {
                "MDF_CritValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                "displayLines": "_P01_LifeTime",
                "constants": [],
                "variables": [
                  "_P01_LifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_CritValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
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
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Character"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Sunday_10_Eidolon1_SuperBonus[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.16) || RETURN",
                      "displayLines": "0.16",
                      "constants": [],
                      "variables": [
                        0.16
                      ]
                    },
                    "MDF_PropertyRatio02": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Sunday_10_Eidolon1_SuperBonusForServant[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Benison of Paper and Rites"
    }
  ]
}