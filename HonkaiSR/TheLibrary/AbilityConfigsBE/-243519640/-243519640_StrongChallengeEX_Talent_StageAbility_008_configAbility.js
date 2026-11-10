const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_008",
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
      "modifier": "<a class=\"gModGreen\" id=\"1661670082\">MStrongChallengeEX_Talent_StageAbility_LE_008</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-847062697\">MStrongChallengeEX_Talent_StageAbility_PLY_008_SpeedUp</a>[<span class=\"descriptionNumberColor\">Sundered Paradise</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Sundered Paradise",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-770987134\">MStrongChallengeEX_Talent_StageAbility_PLY_008_MonsterMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1240607258\">MStrongChallengeEX_Talent_StageAbility_PLY_008</a>[<span class=\"descriptionNumberColor\">Sundered Paradise</span>]",
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Sundered Paradise",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Damage Tags",
                "damageTag": [
                  "Super Break"
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-770987134\">MStrongChallengeEX_Talent_StageAbility_PLY_008_MonsterMark</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-770987134\">MStrongChallengeEX_Talent_StageAbility_PLY_008_MonsterMark</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "_DMG_Flag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_DMG_Num + 1)"
                      },
                      "variableName": "_DMG_Num"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-847062697\">MStrongChallengeEX_Talent_StageAbility_PLY_008_SpeedUp</a>[<span class=\"descriptionNumberColor\">Sundered Paradise</span>]"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_DMG_Flag"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_DMG_Num"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_CurrSpeed",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-770987134\">MStrongChallengeEX_Talent_StageAbility_PLY_008_MonsterMark</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DMG_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_DMG_Flag"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-847062697\">MStrongChallengeEX_Talent_StageAbility_PLY_008_SpeedUp</a>[<span class=\"descriptionNumberColor\">Sundered Paradise</span>]",
                  "duration": {
                    "displayLines": "MDF_PropertyValue4"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(_CurrSpeed * MDF_PropertyValue2)"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_DMG_Num"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1661670082\">MStrongChallengeEX_Talent_StageAbility_LE_008</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1240607258\">MStrongChallengeEX_Talent_StageAbility_PLY_008</a>[<span class=\"descriptionNumberColor\">Sundered Paradise</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "#ADF_1"
                    },
                    "MDF_PropertyValue2": {
                      "displayLines": "#ADF_2"
                    },
                    "MDF_PropertyValue3": {
                      "displayLines": "#ADF_3"
                    },
                    "MDF_PropertyValue4": {
                      "displayLines": "#ADF_4"
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