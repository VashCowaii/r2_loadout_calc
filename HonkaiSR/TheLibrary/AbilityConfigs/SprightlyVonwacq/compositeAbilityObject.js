const compositeAbilityObject = {
  "fullCharacterName": "Sprightly Vonwacq",
  "trimCharacterName": "SprightlyVonwacq",
  "abilityList": [
    "SprightlyVonwacq_Ability53081"
  ],
  "abilityObject": {
    "SprightlyVonwacq_Ability53081": {
      "fileName": "SprightlyVonwacq_Ability53081",
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
          "modifier": "Relic_308_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_308_Main",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
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
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": "-0.4"
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases the wearer's Energy Regeneration Rate by 5%. When the wearer's SPD reaches 120 or higher, the wearer's action is Advanced Forward by 40% immediately upon entering battle."
      ],
      "params": [
        [
          0.05,
          120,
          0.4
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "EnergyRegenRate": 0.05
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}