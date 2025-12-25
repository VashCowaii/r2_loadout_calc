const compositeAbilityObject = {
  "fullCharacterName": "Bone Collection's Serene Demesne",
  "trimCharacterName": "BoneCollectionsSereneDemesne",
  "abilityList": [
    "BoneCollectionsSereneDemesne_Ability53191"
  ],
  "abilityObject": {
    "BoneCollectionsSereneDemesne_Ability53191": {
      "fileName": "BoneCollectionsSereneDemesne_Ability53191",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_319_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_319_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.28) || RETURN",
                    "displayLines": "0.28",
                    "constants": [],
                    "variables": [
                      0.28
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_319_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": "Owner of this Modifier",
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (5000) || RETURN",
                      "displayLines": "5000",
                      "constants": [],
                      "variables": [
                        5000
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_319_Sub"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster's Memosprite",
                      "modifier": "Relic_319_Sub"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster's Memosprite"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Ability Value",
                        "target": "Owner of this Modifier",
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (5000) || RETURN",
                          "displayLines": "5000",
                          "constants": [],
                          "variables": [
                            5000
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Relic_319_Sub"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -1,
                  "maxValue": {
                    "operator": "Variables[0] (5000) || RETURN",
                    "displayLines": "5000",
                    "constants": [],
                    "variables": [
                      5000
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_319_Sub",
                      "onlyRemoveOwnersInstance": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster's Memosprite",
                      "modifier": "Relic_319_Sub",
                      "onlyRemoveOwnersInstance": true
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_319_Sub"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster's Memosprite",
                      "modifier": "Relic_319_Sub"
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
      "isRelic": true,
      "desc": [
        "Increases the wearer's Max HP by 12%. When the wearer's Max HP is 5000 or higher, increases the wearer's and their memosprite's CRIT DMG by 28%."
      ],
      "params": [
        [
          0.12,
          5000,
          0.28
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "HP%": 0.12
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}