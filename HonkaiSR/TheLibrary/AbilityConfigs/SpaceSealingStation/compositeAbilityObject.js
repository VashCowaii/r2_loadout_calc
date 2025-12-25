const compositeAbilityObject = {
  "fullCharacterName": "Space Sealing Station",
  "trimCharacterName": "SpaceSealingStation",
  "abilityList": [
    "SpaceSealingStation_Ability53011"
  ],
  "abilityObject": {
    "SpaceSealingStation_Ability53011": {
      "fileName": "SpaceSealingStation_Ability53011",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_301_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_301_Sub",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_301_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": "Owner of this Modifier",
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (120) || RETURN",
                      "displayLines": "120",
                      "constants": [],
                      "variables": [
                        120
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_301_Sub"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (120) || RETURN",
                    "displayLines": "120",
                    "constants": [],
                    "variables": [
                      120
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_301_Sub",
                      "onlyRemoveOwnersInstance": true
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_301_Sub"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases the wearer's ATK by 12%. When the wearer's SPD reaches 120 or higher, the wearer's ATK increases by an extra 12%."
      ],
      "params": [
        [
          0.12,
          120,
          0.12
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "ATK%": 0.12
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}