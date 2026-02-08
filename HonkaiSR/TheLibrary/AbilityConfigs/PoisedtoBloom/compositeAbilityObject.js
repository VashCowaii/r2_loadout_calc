const compositeAbilityObject = {
  "fullCharacterName": "Poised to Bloom",
  "trimCharacterName": "PoisedtoBloom",
  "abilityList": [
    "PoisedtoBloom_Ability21046"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.16
    },
    "2": {
      "ATK%": 0.2
    },
    "3": {
      "ATK%": 0.24
    },
    "4": {
      "ATK%": 0.28
    },
    "5": {
      "ATK%": 0.32
    }
  },
  "abilityObject": {
    "PoisedtoBloom_Ability21046": {
      "fileName": "PoisedtoBloom_Ability21046",
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
          "modifier": "<a class=\"gModGreen\" id=\"978087138\">LC_21046_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__33731582\">LC_21046_Bonus</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
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
                    "operator": "Variables[0] (0.16) || RETURN",
                    "displayLines": "0.16",
                    "constants": [],
                    "variables": [
                      0.16
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamageBase</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "CRIT DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__229629943\">LC_21046_Sub</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "matchToPathFrom": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "SameTypeCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SameTypeCount",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"33731582\">LC_21046_Bonus</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__978087138\">LC_21046_Main</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"229629943\">LC_21046_Sub</a>"
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
      "desc": "Increases the wearer's ATK by #1[i]%. Upon entering battle, if two or more characters follow the same Path, then these characters' CRIT DMG increases by #2[i]%. Abilities of the same type cannot stack.",
      "params": [
        [
          0.16,
          0.16
        ],
        [
          0.2,
          0.2
        ],
        [
          0.24,
          0.24
        ],
        [
          0.28,
          0.28
        ],
        [
          0.32,
          0.32
        ]
      ]
    }
  },
  "isLightcone": true
}