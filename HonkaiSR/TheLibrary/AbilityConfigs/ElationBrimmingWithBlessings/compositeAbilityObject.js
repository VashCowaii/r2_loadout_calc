const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Elation Brimming With Blessings",
  "trimCharacterName": "ElationBrimmingWithBlessings",
  "abilityList": [
    "ElationBrimmingWithBlessings_Ability24006"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.2
    },
    "2": {
      "ATK%": 0.25
    },
    "3": {
      "ATK%": 0.3
    },
    "4": {
      "ATK%": 0.35
    },
    "5": {
      "ATK%": 0.4
    }
  },
  "abilityObject": {
    "ElationBrimmingWithBlessings_Ability24006": {
      "fileName": "ElationBrimmingWithBlessings_Ability24006",
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
          "modifier": "<a class=\"gModGreen\" id=\"734945681\">LC_24006_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__887329270\">LC_24006_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Elation stat increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_ElationAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Elation Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__734945681\">LC_24006_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LightTeam",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Ability Target List}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LightTeam",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Target List}}"
                            },
                            "compareType": "=",
                            "value2": 1,
                            "livingTargets": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LightTeam",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target List}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"887329270\">LC_24006_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
                        }
                      ]
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
      "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses Skill or Ultimate on one ally character, increases the target's Elation stat by #2[i]% for #3[i] turn(s).",
      "params": [
        [
          0.2,
          0.12,
          2
        ],
        [
          0.25,
          0.15,
          2
        ],
        [
          0.3,
          0.18,
          2
        ],
        [
          0.35,
          0.21,
          2
        ],
        [
          0.4,
          0.24,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}