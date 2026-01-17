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
          "modifier": "LC_21034_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21034_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CasterMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterMaxSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (160) || RETURN",
                      "displayLines": "160",
                      "constants": [],
                      "variables": [
                        160
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CasterMaxSP",
                      "value": {
                        "operator": "Variables[0] (160) || RETURN",
                        "displayLines": "160",
                        "constants": [],
                        "variables": [
                          160
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.0019999999) || Variables[1] (CasterMaxSP) || MUL || RETURN",
                    "displayLines": "(0.0019999999 * CasterMaxSP)",
                    "constants": [],
                    "variables": [
                      0.0019999999,
                      "CasterMaxSP"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
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