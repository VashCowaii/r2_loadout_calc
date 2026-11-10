const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_have_gain_sp"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill11_HitCount",
        "compareType": ">",
        "value2": {
          "displayLines": "(4 - Skill11_BasicCount)"
        },
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
              "variables": {
                "parameter[1]_IsFinalHit": 0
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
              "variables": {
                "parameter[1]_IsFinalHit": 0
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
              "variables": {
                "parameter[1]_IsFinalHit": 0
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
              "variables": {
                "parameter[1]_IsFinalHit": 1
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1401872852\">Shoot_Effect</a>"
        },
        {
          "name": "Shot Fired"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "((Skill11_BasicCount + Skill11_HitCount) - 5)"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"78809812\">Deal_Loop_Hit</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_HitCount",
            "compareType": ">",
            "value2": {
              "displayLines": "(5 - Skill11_BasicCount)"
            },
            "contextScope": "ContextCaster"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1956087107\">Deal_Loop_Hit_Final</a>"
        }
      ],
      "failed": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1401872852\">Shoot_Effect</a>"
        },
        {
          "name": "Shot Fired"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "((Skill11_BasicCount + Skill11_HitCount) - 1)"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"78809812\">Deal_Loop_Hit</a>"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1956087107\">Deal_Loop_Hit_Final</a>"
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
      "variables": {
        "parameter[0]_AddValue": {
          "displayLines": "(0 - EnergyBar_MaxEnergy)"
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1546960372\">Mar_7th_10_Ability03_Enhance_Normal</a>[<span class=\"descriptionNumberColor\">March 7th, the Apex Heroine</span>]"
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"218557064\">M_Mar_7th_10_Ability11_Preshow</a>"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1401872852\">Shoot_Effect</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1235975678\">Deal_Single_Hit</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_target_stance_before_attack",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Harmony",
                  "Nihility",
                  "Preservation",
                  "Abundance",
                  "Remembrance",
                  "Elation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance",
                  "Elation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Arg1_IsFinalHit",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "Skill11_DamagePercatage"
                },
                "Toughness": {
                  "displayLines": "(ST Toughness Value * Normal_StanceRatio)"
                },
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "Skill11_DamagePercatage"
                },
                "Toughness": {
                  "displayLines": "(ST Toughness Value * Normal_StanceRatio)"
                },
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
          "isGlobal": true,
          "variables": {
            "parameter[00]_IsAbility11": 1
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__78809812\">Deal_Loop_Hit</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_target_stance_before_attack",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Harmony",
                  "Nihility",
                  "Preservation",
                  "Abundance",
                  "Remembrance",
                  "Elation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance",
                  "Elation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "Skill11_DamagePercatage"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * Normal_StanceRatio)"
            },
            "Tags": null
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
          "isGlobal": true,
          "variables": {
            "parameter[00]_IsAbility11": 1
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1956087107\">Deal_Loop_Hit_Final</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_target_stance_before_attack",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Harmony",
                  "Nihility",
                  "Preservation",
                  "Abundance",
                  "Remembrance",
                  "Elation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance",
                  "Elation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "Skill11_DamagePercatage"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * Normal_StanceRatio)"
            },
            "Tags": null
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
          "isGlobal": true,
          "variables": {
            "parameter[00]_IsAbility11": 1
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__218557064\">M_Mar_7th_10_Ability11_Preshow</a>",
      "latentQueue": [
        "_have_gain_sp"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
        },
        "multiplier": {
          "displayLines": "(Normal_StanceRatio * Skill11_BasicCount)"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}