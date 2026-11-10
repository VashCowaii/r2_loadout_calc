const configAbility = {
  "fileName": "JingYuan_JingYuan_PassiveAbility01",
  "childAbilityList": [
    "JingYuan_JingYuan_PassiveAbility01",
    "JingYuan_JingYuan_Passive_Insert",
    "JingYuan_JingYuan_Passive_Insert_Camera",
    "JingYuan_JingYuan_Passive_Insert_Ability"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    5,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2008282890\">JingYuan_ListenFlag</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1065142274\">JingYuan_Trace02</a>"
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
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 11203,
      "statSource": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variables": {
        "BattleEvent_JingYuan_BaseSpeed": {
          "displayLines": "60"
        }
      }
    },
    {
      "name": "Show Attack Count",
      "target": {
        "name": "Target Name",
        "target": "{{Jing Yuan: Lightning Lord}}"
      },
      "attackCount": {
        "displayLines": "3"
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
          "displayLines": "3"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1804998877\">JingYuan_Ability02_PreShow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"664482430\">JingYuan_Ability03_PreShow</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__664482430\">JingYuan_Ability03_PreShow</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Jing Yuan: Lightning Lord}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "_AddLayer",
          "compareType": ">",
          "value2": 0
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "(10 * _AddLayer)(SPD Change)"
        }
      },
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "#Skill03_P2_AddATKCount",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(10 - EnergyBar_ATKCount)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(10 - EnergyBar_ATKCount)"
                  },
                  "variableName": "_AddLayer"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "3"
                  },
                  "variableName": "_AddLayer"
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyBar_ATKCount",
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#Skill03_P2_AddATKCount",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "(10 - EnergyBar_ATKCount)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(10 - EnergyBar_ATKCount)"
                      },
                      "variableName": "_AddLayer"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "3"
                      },
                      "variableName": "_AddLayer"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1804998877\">JingYuan_Ability02_PreShow</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Jing Yuan: Lightning Lord}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "_AddLayer",
          "compareType": ">",
          "value2": 0
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "(10 * _AddLayer)(SPD Change)"
        }
      },
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "#Skill02_P2_AddATKCount",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(10 - EnergyBar_ATKCount)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(10 - EnergyBar_ATKCount)"
                  },
                  "variableName": "_AddLayer"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "2"
                  },
                  "variableName": "_AddLayer"
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyBar_ATKCount",
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#Skill02_P2_AddATKCount",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "(10 - EnergyBar_ATKCount)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(10 - EnergyBar_ATKCount)"
                      },
                      "variableName": "_AddLayer"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "2"
                      },
                      "variableName": "_AddLayer"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1065142274\">JingYuan_Trace02</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Savant Providence"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "15"
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2008282890\">JingYuan_ListenFlag</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}