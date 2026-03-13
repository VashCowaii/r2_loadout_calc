const entityPageType = "relic"
const compositeAbilityObject = {
  "fullCharacterName": "Diviner of Distant Reach",
  "trimCharacterName": "DivinerofDistantReach",
  "abilityList": [
    "DivinerofDistantReach_Ability51301"
  ],
  "abilityObject": {
    "DivinerofDistantReach_Ability51301": {
      "fileName": "DivinerofDistantReach_Ability51301",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1204402076\">Relic_130_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1849329719\">Relic_130_Sub2</a>[<span class=\"descriptionNumberColor\">Diviner of Distant Reach</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.1) || RETURN",
                    "displayLines": "0.1",
                    "constants": [],
                    "variables": [
                      0.1
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Elation increases by <span class=\"descriptionNumberColor\">#SkillRelic_130_4_P5_ElationDamageAddedRatioBase</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Diviner of Distant Reach"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1899662576\">Relic_130_Sub1</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1849329719\">Relic_130_Sub2</a>[<span class=\"descriptionNumberColor\">Diviner of Distant Reach</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1373432449\">Relic_130_Sub</a>[<span class=\"descriptionNumberColor\">Diviner of Distant Reach</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_1</span>.",
          "type": "Buff",
          "statusName": "Diviner of Distant Reach"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1204402076\">Relic_130_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (160) || RETURN",
                      "displayLines": "160",
                      "constants": [],
                      "variables": [
                        160
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (0.18) || RETURN",
                        "displayLines": "0.18",
                        "constants": [],
                        "variables": [
                          0.18
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1373432449\">Relic_130_Sub</a>[<span class=\"descriptionNumberColor\">Diviner of Distant Reach</span>]",
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (120) || RETURN",
                          "displayLines": "120",
                          "constants": [],
                          "variables": [
                            120
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_PropertyValue",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1373432449\">Relic_130_Sub</a>[<span class=\"descriptionNumberColor\">Diviner of Distant Reach</span>]",
                          "valuePerStack": {
                            "MDF_1": {
                              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                              "displayLines": "MDF_PropertyValue",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue"
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
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Elation"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "SkillTime",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1899662576\">Relic_130_Sub1</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTime",
                      "value": 1
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
        "Before entering combat, if the wearer's SPD is greater than or equal to 120/160, increases the wearer's CRIT Rate by 10%/18%. When the wearer uses Elation Skill for the first time in each battle, increases all allies' Elation by 10%. This effect cannot stack."
      ],
      "params": [
        [
          0.06
        ],
        [
          120,
          160,
          0.1,
          0.18,
          0.1
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
  "isRelic": true,
  "noReader": false
}