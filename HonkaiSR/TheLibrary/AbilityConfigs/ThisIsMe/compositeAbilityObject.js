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
          "to": "Caster",
          "modifier": "LC_21030_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21030_Attacked"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21030_Sub",
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
                          "target": "Use Prior Target(s) Defined",
                          "modifier": "LC_21030_Attacked"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "AttackerDefence",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DMG%Total</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.6) || Variables[1] (AttackerDefence) || MUL || RETURN",
                        "displayLines": "(0.6 * AttackerDefence)",
                        "constants": [],
                        "variables": [
                          0.6,
                          "AttackerDefence"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_21030_Attacked"
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
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "LC_21030_Attacked"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21030_Main",
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
                      "to": "Caster",
                      "modifier": "LC_21030_Sub"
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