const configAbility = {
  "fileName": "JingYuan_JingYuan_Passive_Insert_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "ATKCount",
          "modifierName": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
          "multiplier": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1804861609\">JingYuan_BattleEvent_UltraATKCount</a>[<span class=\"descriptionNumberColor\">Lightbringer</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "UltraATKCount",
          "modifierName": "<a class=\"gModGreen\" id=\"-1804861609\">JingYuan_BattleEvent_UltraATKCount</a>[<span class=\"descriptionNumberColor\">Lightbringer</span>]",
          "multiplier": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Battalia Crush"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(ATKCount + UltraATKCount)"
          },
          "variableName": "ATKCountSum"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ATKCountSum",
            "compareType": ">=",
            "value2": {
              "displayLines": "6"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1778616310\">JingYuan_CriticalDamageUp</a>",
              "duration": 1,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.25"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "ATKCount"
      },
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "0.66"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Follow-up"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "(0.66 * (0.25 + 0.25))"
                    },
                    "Toughness": null,
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "(0.66 * 0.25)"
                    },
                    "Toughness": null,
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "2"
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"767237660\">JingYuan_Eidolon6_AllDamageTypeTakenRatio</a>",
                  "stackLimit": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.12"
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
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "UltraATKCount"
      },
      "execute": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "ATKCount"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "(0.66 + JINGYUAN_OBJECT_UNUSED_1)"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "displayLines": "((0.66 + JINGYUAN_OBJECT_UNUSED_1) * (0.25 + 0.25))"
                        },
                        "Toughness": null,
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "displayLines": "((0.66 + JINGYUAN_OBJECT_UNUSED_1) * 0.25)"
                        },
                        "Toughness": null,
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "2"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"767237660\">JingYuan_Eidolon6_AllDamageTypeTakenRatio</a>",
                      "stackLimit": {
                        "displayLines": "3"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.12"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger: Attack End",
      "fakeCharacterAttack": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1804861609\">JingYuan_BattleEvent_UltraATKCount</a>[<span class=\"descriptionNumberColor\">Lightbringer</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1088669628\">JingYuan_Eidolon2_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">Dharma Corpora</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "displayLines": "0.2"
            }
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"767237660\">JingYuan_Eidolon6_AllDamageTypeTakenRatio</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1778616310\">JingYuan_CriticalDamageUp</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "ATKCount"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "UltraATKCount"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "3"
      },
      "variableName": "EnergyBar_ATKCount"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "EnergyBar_UltraATKCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "stackLimit": {
        "displayLines": "10"
      },
      "addStacksPerTrigger": {
        "displayLines": "3"
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "3"
      },
      "maximum": {
        "displayLines": "10"
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    {
      "name": "Show Attack Count",
      "target": {
        "name": "Target Name",
        "target": "{{Jing Yuan: Lightning Lord}}"
      },
      "attackCount": {
        "displayLines": "EnergyBar_ATKCount"
      },
      "attackCountEnhanced": {
        "displayLines": "EnergyBar_UltraATKCount"
      },
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Jing Yuan: Lightning Lord}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1141770667\">JingYuan_BattleEvent_ATKCountShowText</a>",
      "valuePerStack": {
        "ATKCount": {
          "displayLines": "EnergyBar_ATKCount"
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Jing Yuan: Lightning Lord}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1762822846\">JingYuan_BattleEvent_SpeedUp</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}