const compositeAbilityObject = {
  "fullCharacterName": "I Venture Forth to Hunt",
  "trimCharacterName": "IVentureForthtoHunt",
  "abilityList": [
    "IVentureForthtoHunt_Ability23031"
  ],
  "fixedStats": {
    "1": {
      "CritRateBase": 0.15
    },
    "2": {
      "CritRateBase": 0.175
    },
    "3": {
      "CritRateBase": 0.2
    },
    "4": {
      "CritRateBase": 0.225
    },
    "5": {
      "CritRateBase": 0.25
    }
  },
  "abilityObject": {
    "IVentureForthtoHunt_Ability23031": {
      "fileName": "IVentureForthtoHunt_Ability23031",
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
          "modifier": "LC_23031_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23031_Sub[<span class=\"descriptionNumberColor\">Luminflux</span>]",
          "stackType": "ReplaceByCaster",
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
                  "modifier": "LC_23031_Sub[<span class=\"descriptionNumberColor\">Luminflux</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "(-0.27 * _Layer)"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Layer",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Each stack allows the Ultimate DMG dealt to ignore <span class=\"descriptionNumberColor\">#SkillEquip_P2_DefenceDown</span> of the target's DEF. This effect has a max of <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "Luminflux",
          "statusName": "Luminflux",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23031_Main",
          "execute": [
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "LC_23031_Sub[<span class=\"descriptionNumberColor\">Luminflux</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      }
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
      "desc": "Increases the wearer's CRIT Rate by #1[f1]%. When the wearer launches a Follow-Up ATK, gains 1 stack of \"Luminflux,\" stacking up to #3[i] time(s). Each stack of \"Luminflux\" enables the Ultimate DMG dealt by the wearer to ignore #2[i]% of the target's DEF. When the wearer's turn ends, removes 1 stack of \"Luminflux.\"",
      "params": [
        [
          0.15,
          0.27,
          2
        ],
        [
          0.175,
          0.3,
          2
        ],
        [
          0.2,
          0.33,
          2
        ],
        [
          0.225,
          0.36,
          2
        ],
        [
          0.25,
          0.39,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}