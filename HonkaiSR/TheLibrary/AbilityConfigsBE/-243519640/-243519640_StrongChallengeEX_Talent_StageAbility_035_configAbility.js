const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_035",
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
      "modifier": "<a class=\"gModGreen\" id=\"-402124150\">MStrongChallengeEX_Talent_StageAbility_LE_035</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1091628878\">MStrongChallengeEX_Talent_StageAbility_PLY_035</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "displayLines": "MDF_AttackAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-402124150\">MStrongChallengeEX_Talent_StageAbility_LE_035</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "PermissionFlag"
            }
          ]
        },
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
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PermissionFlag",
                    "compareType": "=",
                    "value2": 1
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1091628878\">MStrongChallengeEX_Talent_StageAbility_PLY_035</a>",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "displayLines": "#ADF_1"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Character Path [Anyone]: Change",
          "execute": [
            {
              "name": "Define Custom Variable with Matching Path",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
              },
              "variableName": "MageTypeCount",
              "path": [
                "Erudition"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MageTypeCount",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "PermissionFlag"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1091628878\">MStrongChallengeEX_Talent_StageAbility_PLY_035</a>",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "displayLines": "#ADF_1"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "PermissionFlag"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1091628878\">MStrongChallengeEX_Talent_StageAbility_PLY_035</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable with Matching Path",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "variableName": "MageTypeCount",
              "path": [
                "Erudition"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MageTypeCount",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "PermissionFlag"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1091628878\">MStrongChallengeEX_Talent_StageAbility_PLY_035</a>",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "displayLines": "#ADF_1"
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