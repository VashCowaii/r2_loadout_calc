const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "The Finale of a Lie",
  "trimCharacterName": "TheFinaleofaLie",
  "abilityList": [
    "TheFinaleofaLie_Ability23056"
  ],
  "fixedStats": {
    "1": {
      "CritRateBase": 0.18
    },
    "2": {
      "CritRateBase": 0.21
    },
    "3": {
      "CritRateBase": 0.24
    },
    "4": {
      "CritRateBase": 0.27
    },
    "5": {
      "CritRateBase": 0.3
    }
  },
  "abilityObject": {
    "TheFinaleofaLie_Ability23056": {
      "fileName": "TheFinaleofaLie_Ability23056",
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
          "modifier": "<a class=\"gModGreen\" id=\"1745730475\">LC_23056_Main</a>",
          "valuePerStack": {
            "MDF_InsertTargetCount": {
              "displayLines": "4"
            },
            "MDF_LifeTime": {
              "displayLines": "3"
            },
            "MDF_AttackUpTemp": {
              "displayLines": "0.4"
            },
            "MDF_DamageTakenUpTemp": {
              "displayLines": "0.2"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1374108116\">LC_23056_Main_Sub2</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUp</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Umbra Devourer",
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
                    "displayLines": "MDF_DamageTakenUp"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1424440973\">LC_23056_Main_Sub1</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackUp</span> and DMG taken by all enemies' increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpTemp2</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Umbra Devourer",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1374108116\">LC_23056_Main_Sub2</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DamageTakenUp": {
                  "displayLines": "MDF_DamageTakenUpTemp2"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1374108116\">LC_23056_Main_Sub2</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_AttackUp"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1374108116\">LC_23056_Main_Sub2</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1374108116\">LC_23056_Main_Sub2</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
                      "valuePerStack": {
                        "MDF_DamageTakenUp": {
                          "displayLines": "MDF_DamageTakenUpTemp2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1745730475\">LC_23056_Main</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [
            "MDF_InsertTargetCount",
            "MDF_LifeTime",
            "MDF_AttackUpTemp",
            "MDF_DamageTakenUpTemp"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_Cal"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_Cal + 1)"
                      },
                      "variableName": "MDF_Cal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Cal",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "MDF_InsertTargetCount"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "MDF_Cal"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1424440973\">LC_23056_Main_Sub1</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
                          "duration": {
                            "displayLines": "MDF_LifeTime"
                          },
                          "valuePerStack": {
                            "MDF_AttackUp": {
                              "displayLines": "MDF_AttackUpTemp"
                            },
                            "MDF_DamageTakenUpTemp2": {
                              "displayLines": "MDF_DamageTakenUpTemp"
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
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1424440973\">LC_23056_Main_Sub1</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
                      "duration": {
                        "displayLines": "MDF_LifeTime"
                      },
                      "valuePerStack": {
                        "MDF_AttackUp": {
                          "displayLines": "MDF_AttackUpTemp"
                        },
                        "MDF_DamageTakenUpTemp2": {
                          "displayLines": "MDF_DamageTakenUpTemp"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT Rate by #1[i]%. At the start of battle or for every #2[i] instance(s) of Follow-Up ATK the wearer uses, the wearer gains \"Umbra Devourer,\" lasting for #3[i] turn(s). While the wearer holds \"Umbra Devourer,\" increases ATK by #4[i]% and increases the DMG taken by all enemies by #5[i]%. Effects of the same type cannot stack.",
      "params": [
        [
          0.18,
          4,
          3,
          0.4,
          0.2
        ],
        [
          0.21,
          4,
          3,
          0.5,
          0.225
        ],
        [
          0.24,
          4,
          3,
          0.6,
          0.25
        ],
        [
          0.27,
          4,
          3,
          0.7,
          0.275
        ],
        [
          0.3,
          4,
          3,
          0.8,
          0.3
        ]
      ]
    }
  },
  "isLightcone": true
}