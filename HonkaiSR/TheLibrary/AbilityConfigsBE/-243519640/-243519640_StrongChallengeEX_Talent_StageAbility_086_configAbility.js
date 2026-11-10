const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_086",
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
      "modifier": "<a class=\"gModGreen\" id=\"-722031744\">MStrongChallengeEX_Talent_StageAbility_LE_086</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1807253580\">MStrongChallengeEX_Talent_StageAbility_TGT_086</a>[<span class=\"descriptionNumberColor\">Collapse on Sight</span>]",
      "stackType": "Replace",
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Collapse on Sight",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_SpeedAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1275442424\">MStrongChallengeEX_Talent_StageAbility_PLY_086</a>",
      "execute": [
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1807253580\">MStrongChallengeEX_Talent_StageAbility_TGT_086</a>[<span class=\"descriptionNumberColor\">Collapse on Sight</span>]",
              "duration": {
                "displayLines": "MDF_TGT_LifeTime"
              },
              "valuePerStack": {
                "MDF_SpeedAddedRatio": {
                  "displayLines": "MDF_TGT_SpeedAddedRatio"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__779652486\">MStrongChallengeEX_Talent_StageAbility_EMY_086</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_Element_DamageTakenRatio"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-722031744\">MStrongChallengeEX_Talent_StageAbility_LE_086</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"779652486\">MStrongChallengeEX_Talent_StageAbility_EMY_086</a>",
                  "valuePerStack": {
                    "MDF_Element_DamageTakenRatio": {
                      "displayLines": "#ADF_1"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"779652486\">MStrongChallengeEX_Talent_StageAbility_EMY_086</a>",
                  "valuePerStack": {
                    "MDF_Element_DamageTakenRatio": {
                      "displayLines": "#ADF_1"
                    }
                  }
                }
              ]
            },
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
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1275442424\">MStrongChallengeEX_Talent_StageAbility_PLY_086</a>",
                  "valuePerStack": {
                    "MDF_TGT_SpeedAddedRatio": {
                      "displayLines": "#ADF_2"
                    },
                    "MDF_TGT_LifeTime": {
                      "displayLines": "#ADF_3"
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
}