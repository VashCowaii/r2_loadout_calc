const entityPageType = "relic"
const compositeAbilityObject = {
  "fullCharacterName": "Guard of Wuthering Snow",
  "trimCharacterName": "GuardofWutheringSnow",
  "abilityList": [
    "GuardofWutheringSnow_Ability51061",
    "GuardofWutheringSnow_Ability51060"
  ],
  "abilityObject": {
    "GuardofWutheringSnow_Ability51061": {
      "fileName": "GuardofWutheringSnow_Ability51061",
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
          "modifier": "<a class=\"gModGreen\" id=\"1261574715\">Relic_106_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1261574715\">Relic_106_Main</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "0.5"
                    }
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "displayLines": "0.08"
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "5"
                      },
                      "isFixed": "* ERR"
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
        "Reduces DMG taken by 8%.",
        "At the beginning of the turn, if the wearer's HP percentage is equal to or less than 50%, restores HP equal to 8% of their Max HP and regenerates 5 Energy."
      ],
      "params": [
        [
          0.08
        ],
        [
          0.5,
          0.08,
          5
        ]
      ]
    },
    "GuardofWutheringSnow_Ability51060": {
      "fileName": "GuardofWutheringSnow_Ability51060",
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
          "modifier": "<a class=\"gModGreen\" id=\"1759444011\">Relic_106_Main2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1759444011\">Relic_106_Main2</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.08"
                  }
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Reduces DMG taken by 8%.",
        "At the beginning of the turn, if the wearer's HP percentage is equal to or less than 50%, restores HP equal to 8% of their Max HP and regenerates 5 Energy."
      ],
      "params": [
        [
          0.08
        ],
        [
          0.5,
          0.08,
          5
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {},
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true,
  "noReader": false
}