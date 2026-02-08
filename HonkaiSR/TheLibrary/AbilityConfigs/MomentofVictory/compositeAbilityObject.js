const compositeAbilityObject = {
  "fullCharacterName": "Moment of Victory",
  "trimCharacterName": "MomentofVictory",
  "abilityList": [
    "MomentofVictory_Ability23005"
  ],
  "fixedStats": {
    "1": {
      "DEF%": 0.24,
      "EffectHitRate": 0.24
    },
    "2": {
      "DEF%": 0.28,
      "EffectHitRate": 0.28
    },
    "3": {
      "DEF%": 0.32,
      "EffectHitRate": 0.32
    },
    "4": {
      "DEF%": 0.36,
      "EffectHitRate": 0.36
    },
    "5": {
      "DEF%": 0.4,
      "EffectHitRate": 0.4
    }
  },
  "abilityObject": {
    "MomentofVictory_Ability23005": {
      "fileName": "MomentofVictory_Ability23005",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1011066549\">LC_23005_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1595594633\">LC_23005_DefenceAddedRatio</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1011066549\">LC_23005_Main</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1595594633\">LC_23005_DefenceAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1595594633\">LC_23005_DefenceAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1595594633\">LC_23005_DefenceAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
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
      "desc": "Increases the wearer's DEF by #2[i]% and Effect Hit Rate by #4[i]%. Increases the chance for the wearer to be attacked by enemies. When the wearer is attacked, increase their DEF by an extra #3[i]% until the end of the wearer's turn.",
      "params": [
        [
          2,
          0.24,
          0.24,
          0.24
        ],
        [
          2,
          0.28,
          0.28,
          0.28
        ],
        [
          2,
          0.32,
          0.32,
          0.32
        ],
        [
          2,
          0.36,
          0.36,
          0.36
        ],
        [
          2,
          0.4,
          0.4,
          0.4
        ]
      ]
    }
  },
  "isLightcone": true
}