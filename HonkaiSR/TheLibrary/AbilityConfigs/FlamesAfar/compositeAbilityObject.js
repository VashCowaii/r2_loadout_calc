const compositeAbilityObject = {
  "fullCharacterName": "Flames Afar",
  "trimCharacterName": "FlamesAfar",
  "abilityList": [
    "FlamesAfar_Ability21038"
  ],
  "fixedStats": {},
  "abilityObject": {
    "FlamesAfar_Ability21038": {
      "fileName": "FlamesAfar_Ability21038",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21038_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21038_CD",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21038_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.25) || RETURN",
                    "displayLines": "0.25",
                    "constants": [],
                    "variables": [
                      0.25
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21038_Main",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": "Owner of this Modifier",
                      "variableName": "Damage_Hit"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Damage_Total",
                      "value": {
                        "operator": "Variables[0] (Damage_Total) || Variables[1] (Damage_Hit) || ADD || RETURN",
                        "displayLines": "(Damage_Total + Damage_Hit)",
                        "constants": [],
                        "variables": [
                          "Damage_Total",
                          "Damage_Hit"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Owner of this Modifier"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsHPChangeByDamage"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (0.25) || INVERT || Variables[1] (_MaxHP) || MUL || RETURN",
                          "displayLines": "(-0.25 * _MaxHP)",
                          "constants": [],
                          "variables": [
                            0.25,
                            "_MaxHP"
                          ]
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": "Owner of this Modifier",
                          "modifier": "LC_21038_CD"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_21038_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "_CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": "Owner of this Modifier",
                          "healPercent": {
                            "operator": "Variables[0] (0.15) || RETURN",
                            "displayLines": "0.15",
                            "constants": [],
                            "variables": [
                              0.15
                            ]
                          },
                          "formula": "Heal from Healer's MaxHP"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_21038_CD",
                      "duration": {
                        "operator": "Variables[0] (3) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(3 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Damage_Total",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Damage_Total",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (0.25) || Variables[1] (_MaxHP) || MUL || RETURN",
                          "displayLines": "(0.25 * _MaxHP)",
                          "constants": [],
                          "variables": [
                            0.25,
                            "_MaxHP"
                          ]
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": "Owner of this Modifier",
                          "modifier": "LC_21038_CD"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_21038_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "_CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": "Owner of this Modifier",
                          "healPercent": {
                            "operator": "Variables[0] (0.15) || RETURN",
                            "displayLines": "0.15",
                            "constants": [],
                            "variables": [
                              0.15
                            ]
                          },
                          "formula": "Heal from Healer's MaxHP"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_21038_CD",
                      "duration": {
                        "operator": "Variables[0] (3) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(3 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          3
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
      "desc": "When the wearer's cumulative HP loss during one attack exceeds #1[i]% of their Max HP, or if the amount of their own HP consumed at one time is greater than #1[i]% of their Max HP, immediately heals the wearer for #3[i]% of their Max HP, and at the same time, increases the DMG they deal by #2[i]% for #4[i] turn(s). This effect can only be triggered once every #5[i] turn(s).",
      "params": [
        [
          0.25,
          0.25,
          0.15,
          2,
          3
        ],
        [
          0.25,
          0.3125,
          0.15,
          2,
          3
        ],
        [
          0.25,
          0.375,
          0.15,
          2,
          3
        ],
        [
          0.25,
          0.4375,
          0.15,
          2,
          3
        ],
        [
          0.25,
          0.5,
          0.15,
          2,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}