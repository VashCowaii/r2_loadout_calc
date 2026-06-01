const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_090",
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
      "modifier": "<a class=\"gModGreen\" id=\"1626982011\">MStrongChallengeEX_Talent_StageAbility_LE_090</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1227463152\">MStrongChallengeEX_Talent_StageAbility_EMY_090_Flag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__914020533\">MStrongChallengeEX_Talent_StageAbility_EMY_090</a>[<span class=\"descriptionNumberColor\">Comic Relief</span>]",
      "stackType": "Replace",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
      "type": "Debuff",
      "statusName": "Comic Relief",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__940037139\">MStrongChallengeEX_Talent_StageAbility_PLY_090</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_AttackFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Elation DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"1227463152\">MStrongChallengeEX_Talent_StageAbility_EMY_090_Flag</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914020533\">MStrongChallengeEX_Talent_StageAbility_EMY_090</a>[<span class=\"descriptionNumberColor\">Comic Relief</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_EMY090_LifeTime) || RETURN",
                        "displayLines": "MDF_EMY090_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_EMY090_LifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (MDF_EMY090_AllDamageTypeTakenRatio) || RETURN",
                          "displayLines": "MDF_EMY090_AllDamageTypeTakenRatio",
                          "constants": [],
                          "variables": [
                            "MDF_EMY090_AllDamageTypeTakenRatio"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1227463152\">MStrongChallengeEX_Talent_StageAbility_EMY_090_Flag</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "_AttackFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "_AttackFlag",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1227463152\">MStrongChallengeEX_Talent_StageAbility_EMY_090_Flag</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1626982011\">MStrongChallengeEX_Talent_StageAbility_LE_090</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"940037139\">MStrongChallengeEX_Talent_StageAbility_PLY_090</a>",
                  "valuePerStack": {
                    "MDF_EMY090_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_EMY090_LifeTime": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
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