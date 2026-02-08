const compositeAbilityObject = {
  "fullCharacterName": "Long May Rainbows Adorn the Sky",
  "trimCharacterName": "LongMayRainbowsAdorntheSky",
  "abilityList": [
    "LongMayRainbowsAdorntheSky_Ability23042"
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
    "LongMayRainbowsAdorntheSky_Ability23042": {
      "fileName": "LongMayRainbowsAdorntheSky_Ability23042",
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
          "modifier": "<a class=\"gModGreen\" id=\"-954357088\">LC_23042_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1569683085\">LC_23042_Sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getSummoner]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-954357088\">LC_23042_Main</a>",
                  "variable": "_LoseHPTotal",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "_LoseHPTotal2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_LoseHPTotal2",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        "DamageFlat": {
                          "operator": "Variables[0] (_LoseHPTotal2) || Variables[1] (MDF_DamageRatio) || MUL || RETURN",
                          "displayLines": "(_LoseHPTotal2 * MDF_DamageRatio)",
                          "constants": [],
                          "variables": [
                            "_LoseHPTotal2",
                            "MDF_DamageRatio"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-954357088\">LC_23042_Main</a>",
                  "variableName": "_LoseHPTotal",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1169158629\">LC_23042_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Tolerant</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_TakenRatio) || RETURN",
                          "displayLines": "MDF_TakenRatio",
                          "constants": [],
                          "variables": [
                            "MDF_TakenRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-954357088\">LC_23042_Main</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1569683085\">LC_23042_Sub</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0) || RETURN",
                          "displayLines": "0",
                          "constants": [],
                          "variables": [
                            0
                          ]
                        },
                        "MDF_DamageRatio": {
                          "operator": "Variables[0] (2.5) || RETURN",
                          "displayLines": "2.5",
                          "constants": [],
                          "variables": [
                            2.5
                          ]
                        },
                        "MDF_TakenRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        },
                        "MDF_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Consume",
                      "consumeFrom": "CurrentHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (0.01) || RETURN",
                        "displayLines": "0.01",
                        "constants": [],
                        "variables": [
                          0.01
                        ]
                      },
                      "consumeFloor": 1,
                      "dynamicAssignment": "_RealRatio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_LoseHP",
                      "value": {
                        "operator": "Variables[0] (_MaxHP) || Variables[1] (_RealRatio) || MUL || RETURN",
                        "displayLines": "(_MaxHP * _RealRatio)",
                        "constants": [],
                        "variables": [
                          "_MaxHP",
                          "_RealRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_LoseHPTotal",
                      "value": {
                        "operator": "Variables[0] (_LoseHP) || Variables[1] (_LoseHPTotal) || ADD || RETURN",
                        "displayLines": "(_LoseHP + _LoseHPTotal)",
                        "constants": [],
                        "variables": [
                          "_LoseHP",
                          "_LoseHPTotal"
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
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's SPD by #1[i]%. When the wearer uses Basic ATK, Skill, or Ultimate, consumes all allies' HP equal to #2[f1]% of their current HP, and after the next attack of the wearer's memosprite, enables it to additionally deal 1 instance of Additional DMG equal to #6[f1]% of the total consumed HP to the attacked target, with the damage type based on the memosprite's type. Then, the total consumed HP is reset. When the wearer's memosprite uses Memosprite Skill, increases the DMG taken by all enemies by #4[f1]%, lasting for #5[i] turn(s). Effects of the same type cannot stack.",
      "params": [
        [
          0.18,
          0.01,
          0,
          0.18,
          2,
          2.5
        ],
        [
          0.21,
          0.0125,
          0,
          0.225,
          2,
          3.125
        ],
        [
          0.24,
          0.015,
          0,
          0.27,
          2,
          3.75
        ],
        [
          0.27,
          0.0175,
          0,
          0.315,
          2,
          4.375
        ],
        [
          0.3,
          0.02,
          0,
          0.36,
          2,
          5
        ]
      ],
      "referencesGlobal": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1169158629\">LC_23042_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Tolerant</span>]",
          "stackType": "Replace",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "_LoseHPTotal"
          ],
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Tolerant"
        }
      ]
    }
  },
  "isLightcone": true
}