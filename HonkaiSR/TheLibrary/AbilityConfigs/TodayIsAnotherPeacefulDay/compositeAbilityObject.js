const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Today Is Another Peaceful Day",
  "trimCharacterName": "TodayIsAnotherPeacefulDay",
  "abilityList": [
    "TodayIsAnotherPeacefulDay_Ability21034"
  ],
  "fixedStats": {},
  "abilityObject": {
    "TodayIsAnotherPeacefulDay_Ability21034": {
      "fileName": "TodayIsAnotherPeacefulDay_Ability21034",
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
          "modifier": "<a class=\"gModGreen\" id=\"469428133\">LC_21034_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__469428133\">LC_21034_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterMaxSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterMaxSP",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "160"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "160"
                      },
                      "variableName": "CasterMaxSP"
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(0.0019999999 * CasterMaxSP)"
                  }
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "After entering battle, increases the wearer's DMG based on their Max Energy. Each point of Energy increases DMG by #1[f2]%. A max of #2[i] Energy will be taken into account for this.",
      "params": [
        [
          0.0019999999,
          160
        ],
        [
          0.0025000002,
          160
        ],
        [
          0.0029999998,
          160
        ],
        [
          0.0035,
          160
        ],
        [
          0.0039999997,
          160
        ]
      ]
    }
  },
  "isLightcone": true
}