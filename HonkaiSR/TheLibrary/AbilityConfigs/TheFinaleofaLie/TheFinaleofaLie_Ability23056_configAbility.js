const configAbility = {
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
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "MDF_AttackUpTemp": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
          ]
        },
        "MDF_DamageTakenUpTemp": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
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
                "operator": "Variables[0] (MDF_DamageTakenUp) || RETURN",
                "displayLines": "MDF_DamageTakenUp",
                "constants": [],
                "variables": [
                  "MDF_DamageTakenUp"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUp</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Umbra Devourer"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1424440973\">LC_23056_Main_Sub1</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
      "stackType": "ReplaceByCaster",
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
                "operator": "Variables[0] (MDF_AttackUp) || RETURN",
                "displayLines": "MDF_AttackUp",
                "constants": [],
                "variables": [
                  "MDF_AttackUp"
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
                      "operator": "Variables[0] (MDF_DamageTakenUpTemp2) || RETURN",
                      "displayLines": "MDF_DamageTakenUpTemp2",
                      "constants": [],
                      "variables": [
                        "MDF_DamageTakenUpTemp2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
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
              "operator": "Variables[0] (MDF_DamageTakenUpTemp2) || RETURN",
              "displayLines": "MDF_DamageTakenUpTemp2",
              "constants": [],
              "variables": [
                "MDF_DamageTakenUpTemp2"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1745730475\">LC_23056_Main</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Cal",
              "value": 0
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
                  "variableName": "MDF_Cal",
                  "value": {
                    "operator": "Variables[0] (MDF_Cal) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_Cal + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Cal"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Cal",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_InsertTargetCount) || RETURN",
                      "displayLines": "MDF_InsertTargetCount",
                      "constants": [],
                      "variables": [
                        "MDF_InsertTargetCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Cal",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1424440973\">LC_23056_Main_Sub1</a>[<span class=\"descriptionNumberColor\">Umbra Devourer</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_AttackUp": {
                          "operator": "Variables[0] (MDF_AttackUpTemp) || RETURN",
                          "displayLines": "MDF_AttackUpTemp",
                          "constants": [],
                          "variables": [
                            "MDF_AttackUpTemp"
                          ]
                        },
                        "MDF_DamageTakenUpTemp2": {
                          "operator": "Variables[0] (MDF_DamageTakenUpTemp) || RETURN",
                          "displayLines": "MDF_DamageTakenUpTemp",
                          "constants": [],
                          "variables": [
                            "MDF_DamageTakenUpTemp"
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
          "eventTrigger": "Enter Battle",
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
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AttackUp": {
                      "operator": "Variables[0] (MDF_AttackUpTemp) || RETURN",
                      "displayLines": "MDF_AttackUpTemp",
                      "constants": [],
                      "variables": [
                        "MDF_AttackUpTemp"
                      ]
                    },
                    "MDF_DamageTakenUpTemp2": {
                      "operator": "Variables[0] (MDF_DamageTakenUpTemp) || RETURN",
                      "displayLines": "MDF_DamageTakenUpTemp",
                      "constants": [],
                      "variables": [
                        "MDF_DamageTakenUpTemp"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [
        "MDF_InsertTargetCount",
        "MDF_LifeTime",
        "MDF_AttackUpTemp",
        "MDF_DamageTakenUpTemp"
      ],
      "latentQueue": []
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