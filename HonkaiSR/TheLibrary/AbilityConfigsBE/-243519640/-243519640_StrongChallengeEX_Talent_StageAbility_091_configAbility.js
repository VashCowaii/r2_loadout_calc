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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All(with Unselectable)}}"
                    }
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
                    "displayLines": "MDF_PLY091_LifeTime"
                  },
                  "valuePerStack": {
                    "MDF_CritDamageAddedRatio": {
                      "displayLines": "MDF_PLY091_CritDamageAddedRatio"
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
                      "displayLines": "#ADF_1"
                    },
                    "MDF_PLY091_LifeTime": {
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
  ]
}