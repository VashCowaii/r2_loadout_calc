const compositeAbilityObject = {
  "fullCharacterName": "Warrior Goddess of Sun and Thunder",
  "trimCharacterName": "WarriorGoddessofSunandThunder",
  "abilityList": [
    "WarriorGoddessofSunandThunder_Ability51251"
  ],
  "abilityObject": {
    "WarriorGoddessofSunandThunder_Ability51251": {
      "fileName": "WarriorGoddessofSunandThunder_Ability51251",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1745527918\">Relic_125_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__149540788\">Relic_125_Bonus2</a>[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
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
                    "operator": "Variables[0] (AbilityRelic_125_4_P2_DamageAddRatio) || RETURN",
                    "displayLines": "AbilityRelic_125_4_P2_DamageAddRatio",
                    "constants": [],
                    "variables": [
                      "AbilityRelic_125_4_P2_DamageAddRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">SkillRelic_125_4_P2_DamageAddRatio</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Warrior Goddess of Sun and Thunder"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1449955790\">Relic_125_Bonus</a>[<span class=\"descriptionNumberColor\">Gentle Rain</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"149540788\">Relic_125_Bonus2</a>[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
                  "onlyRemoveOwnersInstance": true
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
                    "operator": "Variables[0] (AbilityRelic_125_4_P1_SpeedAddRatio) || RETURN",
                    "displayLines": "AbilityRelic_125_4_P1_SpeedAddRatio",
                    "constants": [],
                    "variables": [
                      "AbilityRelic_125_4_P1_SpeedAddRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"149540788\">Relic_125_Bonus2</a>[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"149540788\">Relic_125_Bonus2</a>[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
                      "valuePerStack": {
                        "AbilityRelic_125_4_P2_DamageAddRatio": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">SkillRelic_125_4_P1_SpeedAddRatio</span>.",
          "type": "Buff",
          "effectName": "Gentle Rain",
          "statusName": "Gentle Rain",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"149540788\">Relic_125_Bonus2</a>[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "AbilityRelic_125_4_P2_DamageAddRatio": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2061800465\">Relic_125_Sub2</a>",
          "execute": [
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] -{{Caster}} -{{Caster's Memosprite}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"563355405\">Relic_125_Flag</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"563355405\">Relic_125_Flag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1449955790\">Relic_125_Bonus</a>[<span class=\"descriptionNumberColor\">Gentle Rain</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "AbilityRelic_125_4_P1_SpeedAddRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__552195463\">Relic_125_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"563355405\">Relic_125_Flag</a>"
                }
              ]
            },
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] -{{Caster}} -{{Caster's Memosprite}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"563355405\">Relic_125_Flag</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"563355405\">Relic_125_Flag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1449955790\">Relic_125_Bonus</a>[<span class=\"descriptionNumberColor\">Gentle Rain</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "AbilityRelic_125_4_P1_SpeedAddRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"563355405\">Relic_125_Flag</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__563355405\">Relic_125_Flag</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1745527918\">Relic_125_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"552195463\">Relic_125_Sub</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2061800465\">Relic_125_Sub2</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2061800465\">Relic_125_Sub2</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases SPD by 6%.",
        "When the wearer or their memosprite provides healing to ally targets other than themselves, the wearer gains \"Gentle Rain,\" which lasts for 2 turn(s) and can only trigger once per turn. While the wearer has \"Gentle Rain,\" SPD increases by 6% and all allies' CRIT DMG increases by 15%. This effect cannot stack."
      ],
      "params": [
        [
          0.06
        ],
        [
          0.06,
          0.15,
          2
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "SPD%": 0.06
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}