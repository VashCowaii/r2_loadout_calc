const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_091",
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
      "modifier": "<a class=\"gModGreen\" id=\"1610204392\">MStrongChallengeEX_Talent_StageAbility_LE_091</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1149561969\">MStrongChallengeEX_Talent_StageAbility_PLY_091_Self</a>[<span class=\"descriptionNumberColor\">Exploit Opening</span>]",
      "stackType": "Replace",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CritDamageAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Exploit Opening",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritDamageAddedRatio) || RETURN",
                "displayLines": "MDF_CritDamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_CritDamageAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__923259520\">MStrongChallengeEX_Talent_StageAbility_PLY_091</a>",
      "execute": [
        {
          "eventTrigger": "Apply Modifier [From Owner] (Success)",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All(with Unselectable)}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1149561969\">MStrongChallengeEX_Talent_StageAbility_PLY_091_Self</a>[<span class=\"descriptionNumberColor\">Exploit Opening</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_PLY091_LifeTime) || RETURN",
                    "displayLines": "MDF_PLY091_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_PLY091_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritDamageAddedRatio": {
                      "operator": "Variables[0] (MDF_PLY091_CritDamageAddedRatio) || RETURN",
                      "displayLines": "MDF_PLY091_CritDamageAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PLY091_CritDamageAddedRatio"
                      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__1610204392\">MStrongChallengeEX_Talent_StageAbility_LE_091</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"923259520\">MStrongChallengeEX_Talent_StageAbility_PLY_091</a>",
                  "valuePerStack": {
                    "MDF_PLY091_CritDamageAddedRatio": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_PLY091_LifeTime": {
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