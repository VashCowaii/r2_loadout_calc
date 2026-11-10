const entityPageType = "lc"
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
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        "DamageFlat": {
                          "displayLines": "(_LoseHPTotal2 * MDF_DamageRatio)"
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
                        "displayLines": "MDF_LifeTime"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_TakenRatio"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                          "displayLines": "0"
                        },
                        "MDF_DamageRatio": {
                          "displayLines": "2.5"
                        },
                        "MDF_TakenRatio": {
                          "displayLines": "0.18"
                        },
                        "MDF_LifeTime": {
                          "displayLines": "2"
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
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "_CurrentHP",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "_MaxHP",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
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
                            "displayLines": "0.01"
                          },
                          "consumeFloor": 1,
                          "dynamicAssignment": "_RealRatio"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_MaxHP * _RealRatio)"
                          },
                          "variableName": "_LoseHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_LoseHPTotal + _LoseHP)"
                          },
                          "variableName": "_LoseHPTotal"
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Tolerant",
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
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "isLightcone": true
}