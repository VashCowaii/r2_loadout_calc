const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_093",
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
      "modifier": "<a class=\"gModGreen\" id=\"1643759630\">MStrongChallengeEX_Talent_StageAbility_LE_093</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__863687676\">MStrongChallengeEX_Talent_StageAbility_EMY_093</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_WindResistanceDelta) || SUB || RETURN",
                "displayLines": "(0 - MDF_WindResistanceDelta)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_WindResistanceDelta"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_ThunderResistanceDelta) || SUB || RETURN",
                "displayLines": "(0 - MDF_ThunderResistanceDelta)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_ThunderResistanceDelta"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1643759630\">MStrongChallengeEX_Talent_StageAbility_LE_093</a>",
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"863687676\">MStrongChallengeEX_Talent_StageAbility_EMY_093</a>",
                  "valuePerStack": {
                    "MDF_WindResistanceDelta": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_ThunderResistanceDelta": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
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