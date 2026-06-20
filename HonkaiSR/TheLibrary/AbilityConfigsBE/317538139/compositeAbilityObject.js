const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 317538139,
  "trimCharacterName": 317538139,
  "abilityList": [
    "317538139_Modifiers",
    "317538139_StageAbility_MazeStandard_EnterBattle_CheckTeamLeader",
    "317538139_StageAbility_MazeStandard_EnterBattle_NoWeakness",
    "317538139_StageAbility_MazeStandard_EnterBattle_Imaginary",
    "317538139_StageAbility_MazeStandard_EnterBattle_Quantum",
    "317538139_StageAbility_MazeStandard_EnterBattle_Wind",
    "317538139_StageAbility_MazeStandard_EnterBattle_Thunder",
    "317538139_StageAbility_MazeStandard_EnterBattle_Ice",
    "317538139_StageAbility_MazeStandard_EnterBattle_Fire",
    "317538139_StageAbility_MazeStandard_EnterBattle_Physical",
    "317538139_StageAbility_MazeStandard_EnterBattle_IgnoreWeakness",
    "317538139_StageAbility_MazeStandard_EnterBattle_Monster",
    "317538139_StageAbility_MazeStandard_EnterBattle_Player",
    "317538139_Functions"
  ],
  "abilityObject": {
    "317538139_Modifiers": {
      "fileName": "317538139_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-636149171\">StageAbility_MazeStandard_EnterBattle_MarkTeamLeader</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ],
      "references": []
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_CheckTeamLeader": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_CheckTeamLeader",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-636149171\">StageAbility_MazeStandard_EnterBattle_MarkTeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_NoWeakness": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_NoWeakness",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1217601568\">StageAbility_MazeStandard_EnterBattle_NoWeakness_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1217601568\">StageAbility_MazeStandard_EnterBattle_NoWeakness_Modifier</a>",
          "modifierFlags": [
            "STAT_TriggerBattleCharacter"
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Imaginary": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Imaginary",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1797295901\">StageAbility_MazeStandard_EnterBattle_Imaginary_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1797295901\">StageAbility_MazeStandard_EnterBattle_Imaginary_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Imaginary.prefab"
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Quantum": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Quantum",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951728079\">StageAbility_MazeStandard_EnterBattle_Quantum_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__951728079\">StageAbility_MazeStandard_EnterBattle_Quantum_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Quantum.prefab"
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Wind": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Wind",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1102966786\">StageAbility_MazeStandard_EnterBattle_Wind_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1102966786\">StageAbility_MazeStandard_EnterBattle_Wind_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Wind.prefab"
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Thunder": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Thunder",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1269491354\">StageAbility_MazeStandard_EnterBattle_Thunder_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1269491354\">StageAbility_MazeStandard_EnterBattle_Thunder_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Thunder.prefab"
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Ice": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Ice",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923449445\">StageAbility_MazeStandard_EnterBattle_Ice_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1923449445\">StageAbility_MazeStandard_EnterBattle_Ice_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Ice.prefab"
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Fire": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Fire",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2004974776\">StageAbility_MazeStandard_EnterBattle_Fire_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2004974776\">StageAbility_MazeStandard_EnterBattle_Fire_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Fire.prefab"
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Physical": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Physical",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-857160721\">StageAbility_MazeStandard_EnterBattle_Physical_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-857160721\">StageAbility_MazeStandard_EnterBattle_Physical_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Physical.prefab"
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_IgnoreWeakness": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_IgnoreWeakness",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "SWITCH",
                  "source": {
                    "name": "Damage Type Source",
                    "sourceType": "ReadTargetType",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Physical",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                          "variables": {
                            "IsForceStanceDamage": 1
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "HitEffectPath",
                              "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Physical.prefab"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Fire",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                          "variables": {
                            "IsForceStanceDamage": 1
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "HitEffectPath",
                              "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Fire.prefab"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Ice",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                          "variables": {
                            "IsForceStanceDamage": 1
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "HitEffectPath",
                              "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Ice.prefab"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Thunder",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                          "variables": {
                            "IsForceStanceDamage": 1
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "HitEffectPath",
                              "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Thunder.prefab"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Wind",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                          "variables": {
                            "IsForceStanceDamage": 1
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "HitEffectPath",
                              "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Wind.prefab"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Quantum",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                          "variables": {
                            "IsForceStanceDamage": 1
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "HitEffectPath",
                              "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Quantum.prefab"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Imaginary",
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                          "variables": {
                            "IsForceStanceDamage": 1
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "HitEffectPath",
                              "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Imaginary.prefab"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ],
              "priorityLevel": -70
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Monster": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Monster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
          "execute": [
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "advanceType": "Set",
                      "add": 2
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "317538139_StageAbility_MazeStandard_EnterBattle_Player": {
      "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Player",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1551694313\">StageAbility_MazeStandard_EnterBattle_Player_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1551694313\">StageAbility_MazeStandard_EnterBattle_Player_Modifier</a>",
          "execute": [
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
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "multiBase": 0.5
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "317538139_Functions": {
      "fileName": "317538139_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
          "parse": [
            {
              "name": "Set Current Turn-Action Entity",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "IsForceStanceDamage",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextTaskTemplate"
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      }
                    ]
                  },
                  "ignoreParallelWarning": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "IsForceStanceDamage",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextTaskTemplate"
                      },
                      "passed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (IsForceStanceDamage) || Constants[0] (1) || EQUAL || Variables[1] (ENEMIES_OBJECT_UNUSED__310) || Variables[2] (ENEMIES_OBJECT_UNUSED__312) || CHECK || Constants[0] (1) || Variables[3] (ENEMIES_OBJECT_UNUSED__313) || ADD || MUL || RETURN",
                            "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "IsForceStanceDamage",
                              "ENEMIES_OBJECT_UNUSED__310",
                              "ENEMIES_OBJECT_UNUSED__312",
                              "ENEMIES_OBJECT_UNUSED__313"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": {
                            "name": "Damage Type Source",
                            "sourceType": "ReadTargetType",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (IsForceStanceDamage) || Constants[0] (1) || EQUAL || Variables[1] (ENEMIES_OBJECT_UNUSED__310) || Variables[2] (ENEMIES_OBJECT_UNUSED__312) || CHECK || Constants[0] (1) || Variables[3] (ENEMIES_OBJECT_UNUSED__313) || ADD || MUL || RETURN",
                            "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "IsForceStanceDamage",
                              "ENEMIES_OBJECT_UNUSED__310",
                              "ENEMIES_OBJECT_UNUSED__312",
                              "ENEMIES_OBJECT_UNUSED__313"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canDelay": true,
                          "ToughnessDMGType": {
                            "name": "Damage Type Source",
                            "sourceType": "ReadTargetType",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": ">",
                        "value2": 0
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}