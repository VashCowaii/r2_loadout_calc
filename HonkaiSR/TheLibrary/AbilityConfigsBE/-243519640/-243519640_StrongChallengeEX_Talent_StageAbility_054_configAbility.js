const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_054",
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
      "modifier": "<a class=\"gModGreen\" id=\"-451471269\">MStrongChallengeEX_Talent_StageAbility_LE_054</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1995909540\">MStrongChallengeEX_Talent_StageAbility_MST_054</a>",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_QuantumResistanceDelta) || SUB || RETURN",
                "displayLines": "(0 - MDF_QuantumResistanceDelta)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_QuantumResistanceDelta"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-451471269\">MStrongChallengeEX_Talent_StageAbility_LE_054</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1995909540\">MStrongChallengeEX_Talent_StageAbility_MST_054</a>",
                  "valuePerStack": {
                    "MDF_QuantumResistanceDelta": {
                      "operator": "Variables[0] (#ADF_1) || Variables[1] (_CharacterCount) || MUL || RETURN",
                      "displayLines": "(#ADF_1 * _CharacterCount)",
                      "constants": [],
                      "variables": [
                        "#ADF_1",
                        "_CharacterCount"
                      ]
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
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "variableName": "_CharacterCount",
              "livingTargets": true,
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1995909540\">MStrongChallengeEX_Talent_StageAbility_MST_054</a>",
              "valuePerStack": {
                "MDF_QuantumResistanceDelta": {
                  "operator": "Variables[0] (#ADF_1) || Variables[1] (_CharacterCount) || MUL || RETURN",
                  "displayLines": "(#ADF_1 * _CharacterCount)",
                  "constants": [],
                  "variables": [
                    "#ADF_1",
                    "_CharacterCount"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}