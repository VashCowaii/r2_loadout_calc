const compositeAbilityObject = {
  "fullCharacterName": "I Shall Be My Own Sword",
  "trimCharacterName": "IShallBeMyOwnSword",
  "abilityList": [
    "IShallBeMyOwnSword_Ability23014"
  ],
  "fixedStats": {
    "1": {
      "CritDamageBase": 0.2
    },
    "2": {
      "CritDamageBase": 0.23
    },
    "3": {
      "CritDamageBase": 0.26
    },
    "4": {
      "CritDamageBase": 0.29
    },
    "5": {
      "CritDamageBase": 0.32
    }
  },
  "abilityObject": {
    "IShallBeMyOwnSword_Ability23014": {
      "fileName": "IShallBeMyOwnSword_Ability23014",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23014_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23014_Sub[<span class=\"descriptionNumberColor\">Eclipse</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Layer",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.12) || INVERT || RETURN",
                            "displayLines": "-0.12",
                            "constants": [],
                            "variables": [
                              0.12
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.14) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(0.14 * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          0.14,
                          "MDF_Layer"
                        ]
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
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Flag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Each stack will increase the DMG dealt by the next attack by <span class=\"descriptionNumberColor\">#SkillEquip_P3_DamageAddedRatio</span>, up to a maximum of <span class=\"descriptionNumberColor\">#SkillEquip_P2_MaxLayer</span> stack(s). When <span class=\"descriptionNumberColor\">#SkillEquip_P2_MaxLayer</span> stack(s) are reached, an additional attack will be delivered that ignores <span class=\"descriptionNumberColor\">#SkillEquip_P4_DefenceDown</span> of the enemy's DEF.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Eclipse",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23014_Listen",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsHPChangeByDamage"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_23014_Sub[<span class=\"descriptionNumberColor\">Eclipse</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
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
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_23014_Sub[<span class=\"descriptionNumberColor\">Eclipse</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
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
          "name": "Modifier Construction",
          "for": "LC_23014_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates (Excluding Owner)",
                  "modifier": "LC_23014_Listen"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_23014_Listen"
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
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. When a teammate gets attacked or loses HP, the wearer gains 1 stack of Eclipse, up to a max of #2[i] stack(s). Each stack of Eclipse increases the DMG of the wearer's next attack by #3[f1]%. When #2[i] stack(s) are reached, additionally enables that attack to ignore #4[i]% of the enemy's DEF. This effect will be removed after the wearer uses an attack.",
      "params": [
        [
          0.2,
          3,
          0.14,
          0.12
        ],
        [
          0.23,
          3,
          0.165,
          0.14
        ],
        [
          0.26,
          3,
          0.19,
          0.16
        ],
        [
          0.29,
          3,
          0.215,
          0.18
        ],
        [
          0.32,
          3,
          0.24,
          0.2
        ]
      ]
    }
  },
  "isLightcone": true
}