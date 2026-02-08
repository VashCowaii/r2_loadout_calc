const compositeAbilityObject = {
  "fullCharacterName": "This Love, Forever",
  "trimCharacterName": "ThisLoveForever",
  "abilityList": [
    "ThisLoveForever_Ability23052"
  ],
  "fixedStats": {
    "1": {
      "SPD%": 0.18
    },
    "2": {
      "SPD%": 0.21
    },
    "3": {
      "SPD%": 0.24
    },
    "4": {
      "SPD%": 0.27
    },
    "5": {
      "SPD%": 0.3
    }
  },
  "abilityObject": {
    "ThisLoveForever_Ability23052": {
      "fileName": "ThisLoveForever_Ability23052",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CritDmg",
          "value": {
            "operator": "Variables[0] (0.16) || RETURN",
            "displayLines": "0.16",
            "constants": [],
            "variables": [
              0.16
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_DamageRatio",
          "value": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-442867401\">LC_23052_Main</a>",
          "valuePerStack": {
            "MDF_ExtraRatio": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__951721622\">LC_23052_Halo2</a>[<span class=\"descriptionNumberColor\">Blank</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageRatio) || RETURN",
                    "displayLines": "MDF_DamageRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_DamageRatio</span>.",
          "type": "Debuff",
          "statusName": "Blank"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2050514144\">LC_23052_Halo</a>[<span class=\"descriptionNumberColor\">Verse</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritDmg) || RETURN",
                    "displayLines": "MDF_CritDmg",
                    "constants": [],
                    "variables": [
                      "MDF_CritDmg"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CritDmg</span>.",
          "type": "Buff",
          "statusName": "Verse"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1610136410\">LC_23052_Sub2</a>[<span class=\"descriptionNumberColor\">Blank</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-97167540\">LC_23052_Sub</a>[<span class=\"descriptionNumberColor\">Verse</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageRatio) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_DamageRatio * (1 + 0.6))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_DamageRatio",
                          0.6
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CritDmg",
                      "value": {
                        "operator": "Variables[0] (MDF_CritDmg) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_CritDmg * (1 + 0.6))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_CritDmg",
                          0.6
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"951721622\">LC_23052_Halo2</a>[<span class=\"descriptionNumberColor\">Blank</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "DMG received by all enemies increases by <span class=\"descriptionNumberColor\">MDF_DamageRatio</span>.",
          "type": "Other",
          "statusName": "Blank",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"951721622\">LC_23052_Halo2</a>[<span class=\"descriptionNumberColor\">Blank</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-97167540\">LC_23052_Sub</a>[<span class=\"descriptionNumberColor\">Verse</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1610136410\">LC_23052_Sub2</a>[<span class=\"descriptionNumberColor\">Blank</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CritDmg",
                      "value": {
                        "operator": "Variables[0] (MDF_CritDmg) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_CritDmg * (1 + 0.6))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_CritDmg",
                          0.6
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageRatio) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_DamageRatio * (1 + 0.6))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_DamageRatio",
                          0.6
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2050514144\">LC_23052_Halo</a>[<span class=\"descriptionNumberColor\">Verse</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "CRIT DMG dealt by all allies increases by <span class=\"descriptionNumberColor\">MDF_CritDmg</span>.",
          "type": "Other",
          "statusName": "Verse",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2050514144\">LC_23052_Halo</a>[<span class=\"descriptionNumberColor\">Verse</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-442867401\">LC_23052_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "team": "Enemy Team"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}.[[getMemosprite]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-97167540\">LC_23052_Sub</a>[<span class=\"descriptionNumberColor\">Verse</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target's Ability Targets}}"
                                },
                                "team": "Player Team"
                              },
                              {
                                "name": "Compare: Target Count",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target's Ability Targets}}"
                                },
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}.[[getMemosprite]]"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1610136410\">LC_23052_Sub2</a>[<span class=\"descriptionNumberColor\">Blank</span>]"
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
            "MDF_ExtraRatio"
          ],
          "latentQueue": [
            "MDF_CritDmg",
            "MDF_DamageRatio"
          ]
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's SPD by #1[i]%. When the wearer's memosprite uses Memosprite Skill on one ally, gains \"Blank,\" which increases DMG taken by all enemies by #3[i]%. When the wearer's memosprite uses Memosprite Skill on an enemy, gains \"Verse,\" which increases CRIT DMG of all allies by #2[i]%. When the wearer's memosprite has both \"Blank\" and \"Verse,\" increases the effects of both \"Blank\" and \"Verse\" by #4[i]%.",
      "params": [
        [
          0.18,
          0.16,
          0.1,
          0.6
        ],
        [
          0.21,
          0.19,
          0.12,
          0.65
        ],
        [
          0.24,
          0.22,
          0.14,
          0.7
        ],
        [
          0.27,
          0.25,
          0.16,
          0.75
        ],
        [
          0.3,
          0.28,
          0.18,
          0.8
        ]
      ]
    }
  },
  "isLightcone": true
}