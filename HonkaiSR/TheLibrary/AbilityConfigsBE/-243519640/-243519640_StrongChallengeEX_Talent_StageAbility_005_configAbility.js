const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_005",
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
      "modifier": "MStrongChallengeEX_Talent_StageAbility_LE_005"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_LE_005",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TheFirstOne",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Standard_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Standard_StatusResistanceUp[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TheFirstOne",
                      "value": 0
                    }
                  ]
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