const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_087",
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
      "modifier": "<a class=\"gModGreen\" id=\"-705254125\">MStrongChallengeEX_Talent_StageAbility_LE_087</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1699054618\">MStrongChallengeEX_Talent_StageAbility_NO1_087</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"136363146\">MStrongChallengeEX_Talent_StageAbility_PLY_087_2</a>",
              "valuePerStack": {
                "MDF_CritDamageAddedRatio": {
                  "displayLines": "MDF_CritDamageAddedRatio_Extra"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"136363146\">MStrongChallengeEX_Talent_StageAbility_PLY_087_2</a>",
              "valuePerStack": {
                "MDF_CritDamageAddedRatio": {
                  "displayLines": "MDF_CritDamageAddedRatio_Extra"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}.[[getMemosprite]]"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"136363146\">MStrongChallengeEX_Talent_StageAbility_PLY_087_2</a>",
                  "valuePerStack": {
                    "MDF_CritDamageAddedRatio": {
                      "displayLines": "MDF_CritDamageAddedRatio_Extra"
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
      "for": "<a class=\"gModGreen\" id=\"mod__136363146\">MStrongChallengeEX_Talent_StageAbility_PLY_087_2</a>",
      "stackData": [
        "MDF_CritDamageAddedRatio"
      ],
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CritDamageAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1292220043\">MStrongChallengeEX_Talent_StageAbility_PLY_087</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CritDamageAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-705254125\">MStrongChallengeEX_Talent_StageAbility_LE_087</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1292220043\">MStrongChallengeEX_Talent_StageAbility_PLY_087</a>",
                  "valuePerStack": {
                    "MDF_CritDamageAddedRatio": {
                      "displayLines": "#ADF_1"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1699054618\">MStrongChallengeEX_Talent_StageAbility_NO1_087</a>",
              "valuePerStack": {
                "MDF_CritDamageAddedRatio_Extra": {
                  "displayLines": "#ADF_2"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}