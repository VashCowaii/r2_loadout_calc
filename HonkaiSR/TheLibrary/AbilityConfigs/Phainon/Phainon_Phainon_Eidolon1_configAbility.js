const configAbility = {
  "fileName": "Phainon_Phainon_Eidolon1",
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
      "modifier": "<a class=\"gModGreen\" id=\"1978367285\">M_Phainon_Eidolon1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-847336142\">Phainon_Eidolon1_AddSpeedRatio</a>[<span class=\"descriptionNumberColor\">Fire and Light Bind Virtue and Vice</span>]",
      "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>",
      "valuePerStack": {
        "MDF_SpeedRatio": {
          "displayLines": "0.66"
        },
        "MDF_MaxSpeedRatio": {
          "displayLines": "0.84"
        },
        "MDF_PropertyRatio": {
          "displayLines": "0.015"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1978367285\">M_Phainon_Eidolon1</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "conditions": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target 2}}"
                          },
                          "team": "Enemy Team"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_KillCount",
                      "context": "ContextModifier",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(0.66 + (MDF_KillCount * 0.015))"
                      },
                      "variableName": "CDF_SpeedConvertRatio"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-847336142\">Phainon_Eidolon1_AddSpeedRatio</a>[<span class=\"descriptionNumberColor\">Fire and Light Bind Virtue and Vice</span>]",
                      "variableName": "MDF_SpeedRatio",
                      "value": {
                        "displayLines": "CDF_SpeedConvertRatio"
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"320399697\">Phainon_Ability03_BattleEvent_BaseSpeed</a>",
                          "variableName": "MDF_PropertyValue",
                          "value": {
                            "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)"
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
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1114586000\">Phainon_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Fire and Light Bind Virtue and Vice</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.5"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}