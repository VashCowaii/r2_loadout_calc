const compositeAbilityObject = {
  "fullCharacterName": "Talia: Kingdom of Banditry",
  "trimCharacterName": "TaliaKingdomofBanditry",
  "abilityList": [
    "TaliaKingdomofBanditry_Ability53071"
  ],
  "abilityObject": {
    "TaliaKingdomofBanditry_Ability53071": {
      "fileName": "TaliaKingdomofBanditry_Ability53071",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_307_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_307_Sub",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_307_Main",
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
                      "operator": "Variables[0] (145) || RETURN",
                      "displayLines": "145",
                      "constants": [],
                      "variables": [
                        145
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_307_Sub"
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
                  "minValue": -1,
                  "maxValue": {
                    "operator": "Variables[0] (145) || RETURN",
                    "displayLines": "145",
                    "constants": [],
                    "variables": [
                      145
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_307_Sub",
                      "onlyRemoveOwnersInstance": true
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_307_Sub"
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
        "Increases the wearer's Break Effect by 16%. When the wearer's SPD reaches 145 or higher, the wearer's Break Effect increases by an extra 20%."
      ],
      "params": [
        [
          0.16,
          145,
          0.2
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "DamageBreak": 0.16
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}