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
          "operator": "Variables[0] (0.66) || RETURN",
          "displayLines": "0.66",
          "constants": [],
          "variables": [
            0.66
          ]
        },
        "MDF_MaxSpeedRatio": {
          "operator": "Variables[0] (0.84) || RETURN",
          "displayLines": "0.84",
          "constants": [],
          "variables": [
            0.84
          ]
        },
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.015) || RETURN",
          "displayLines": "0.015",
          "constants": [],
          "variables": [
            0.015
          ]
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
                        "condition": {
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
                      "variableName": "CDF_SpeedConvertRatio",
                      "value": {
                        "operator": "Variables[0] (0.66) || Variables[1] (MDF_KillCount) || Variables[2] (0.015) || MUL || ADD || RETURN",
                        "displayLines": "(0.66 + (MDF_KillCount * 0.015))",
                        "constants": [],
                        "variables": [
                          0.66,
                          "MDF_KillCount",
                          0.015
                        ]
                      }
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
                        "operator": "Variables[0] (CDF_SpeedConvertRatio) || RETURN",
                        "displayLines": "CDF_SpeedConvertRatio",
                        "constants": [],
                        "variables": [
                          "CDF_SpeedConvertRatio"
                        ]
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
                            "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
                            "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
                            "constants": [],
                            "variables": [
                              "CDF_SpeedConvertRatio",
                              "Phainon_BaseSpeed"
                            ]
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
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
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
  ]
}