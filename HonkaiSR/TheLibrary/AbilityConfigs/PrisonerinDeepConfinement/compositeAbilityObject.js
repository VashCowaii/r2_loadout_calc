const compositeAbilityObject = {
  "fullCharacterName": "Prisoner in Deep Confinement",
  "trimCharacterName": "PrisonerinDeepConfinement",
  "abilityList": [
    "PrisonerinDeepConfinement_Ability51161"
  ],
  "abilityObject": {
    "PrisonerinDeepConfinement_Ability51161": {
      "fileName": "PrisonerinDeepConfinement_Ability51161",
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
          "modifier": "Relic_116_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_116_DamageUp_Dot",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Flag Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_DotCount",
                  "flagName": "STAT_DOT"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DotCount",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                      "displayLines": "MDF_MaxCount",
                      "constants": [],
                      "variables": [
                        "MDF_MaxCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DotCount",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                        "displayLines": "MDF_MaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(-MDF_PropertyValue * _DotCount)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_116_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Relic_116_DamageUp_Dot",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    },
                    "MDF_MaxCount": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
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
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases ATK by 12%.",
        "For every DoT the enemy target is afflicted with, the wearer will ignore 6% of its DEF when dealing DMG to it. This effect is valid for a max of 3 DoTs."
      ],
      "params": [
        [
          0.12
        ],
        [
          0.06,
          3
        ]
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