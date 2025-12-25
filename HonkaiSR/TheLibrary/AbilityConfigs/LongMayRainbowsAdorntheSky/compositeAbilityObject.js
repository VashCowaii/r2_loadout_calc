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
          "to": "Caster",
          "modifier": "LC_23042_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23042_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": "[SUMMONER OF] Owner of this Modifier",
                  "modifier": "LC_23042_Main",
                  "variable": "_LoseHPTotal",
                  "target2": "Owner of this Modifier",
                  "variable2": "_LoseHPTotal2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_LoseHPTotal2",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Ability Target List",
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": "Caster"
                        },
                        "Damage": {
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
                  "target": "Owner of this Modifier (Summoner)",
                  "modifierName": {
                    "Value": "MEquip_23042_Main"
                  },
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
                      "to": "All Enemies (AOE)",
                      "modifier": "LC_23042_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Tolerant</span>]",
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
          "for": "LC_23042_Main",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": "Caster's Memosprite",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster's Memosprite",
                      "modifier": "LC_23042_Sub",
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
                  "from": "Allied Team",
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "_CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Consume",
                      "consumeFrom": "CurrentHP",
                      "target": "Use Prior Target(s) Defined",
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
                        "operator": "Variables[0] (_CurrentHP) || Variables[1] (_LoseHP) || ADD || RETURN",
                        "displayLines": "(_CurrentHP + _LoseHP)",
                        "constants": [],
                        "variables": [
                          "_CurrentHP",
                          "_LoseHP"
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
          "for": "LC_23042_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Tolerant</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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