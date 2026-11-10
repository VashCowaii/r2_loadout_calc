const entityPageType = "relic"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-780787184\">Relic_307_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2069130653\">Relic_307_Sub</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.2"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-780787184\">Relic_307_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "145"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2069130653\">Relic_307_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -1,
                  "maxValue": {
                    "displayLines": "145"
                  },
                  "enteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2069130653\">Relic_307_Sub</a>",
                      "onlyRemoveOwnersInstance": true
                    }
                  ],
                  "leavingRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2069130653\">Relic_307_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
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
  "isRelic": true,
  "noReader": false
}