const compositeAbilityObject = {
  "fullCharacterName": "This Is Me!",
  "trimCharacterName": "ThisIsMe",
  "abilityList": [
    "ThisIsMe_Ability21030"
  ],
  "fixedStats": {
    "1": {
      "DEF%": 0.16
    },
    "2": {
      "DEF%": 0.2
    },
    "3": {
      "DEF%": 0.24
    },
    "4": {
      "DEF%": 0.28
    },
    "5": {
      "DEF%": 0.32
    }
  },
  "abilityObject": {
    "ThisIsMe_Ability21030": {
      "fileName": "ThisIsMe_Ability21030",
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
          "modifier": "<a class=\"gModGreen\" id=\"118529977\">LC_21030_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-516997111\">LC_21030_Attacked</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-232615906\">LC_21030_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Ultimate"
                        ]
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-516997111\">LC_21030_Attacked</a>"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AttackerDefence",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DMGValueTotal</span>&nbsp;",
                          "value": "(0.6 * AttackerDefence)"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-516997111\">LC_21030_Attacked</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-516997111\">LC_21030_Attacked</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__118529977\">LC_21030_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-232615906\">LC_21030_Sub</a>"
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
      "desc": "Increases the wearer's DEF by #1[i]%. Increases the DMG of the wearer when they use their Ultimate by #2[i]% of the wearer's DEF. This effect only applies 1 time per enemy target during each use of the wearer's Ultimate.",
      "params": [
        [
          0.16,
          0.6
        ],
        [
          0.2,
          0.75
        ],
        [
          0.24,
          0.9
        ],
        [
          0.28,
          1.05
        ],
        [
          0.32,
          1.2
        ]
      ]
    }
  },
  "isLightcone": true
}