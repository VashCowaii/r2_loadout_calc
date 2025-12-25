const compositeAbilityObject = {
  "fullCharacterName": "Inherently Unjust Destiny",
  "trimCharacterName": "InherentlyUnjustDestiny",
  "abilityList": [
    "InherentlyUnjustDestiny_Ability23023"
  ],
  "fixedStats": {
    "1": {
      "DEF%": 0.4
    },
    "2": {
      "DEF%": 0.46
    },
    "3": {
      "DEF%": 0.52
    },
    "4": {
      "DEF%": 0.58
    },
    "5": {
      "DEF%": 0.64
    }
  },
  "abilityObject": {
    "InherentlyUnjustDestiny_Ability23023": {
      "fileName": "InherentlyUnjustDestiny_Ability23023",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23023_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23023_Sub2[<span class=\"descriptionNumberColor\">All-In</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "All-In"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23023_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (0.4) || RETURN",
                    "displayLines": "0.4",
                    "constants": [],
                    "variables": [
                      0.4
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "CRIT DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23023_Main",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_23023_Sub2[<span class=\"descriptionNumberColor\">All-In</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "LC_23023_Sub2[<span class=\"descriptionNumberColor\">All-In</span>]",
                        "casterFilter": "Owner of this Modifier"
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_First",
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
                            "name": "Has Modifier",
                            "target": "Use Prior Target(s) Defined",
                            "modifier": "LC_23023_Sub2[<span class=\"descriptionNumberColor\">All-In</span>]",
                            "justAddedOrActive": true,
                            "casterFilter": "Owner of this Modifier"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": "Owner of this Modifier",
                            "value1": "MDF_First",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_First",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Apply Modifier [From Owner] (Success)",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "target": "Use Prior Target(s) Defined",
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23023_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's DEF by #1[i]%. When the wearer provides a Shield to an ally, the wearer's CRIT DMG increases by #2[i]%, lasting for #3[i] turn(s). When the wearer's Follow-Up ATK hits an enemy target, there is a #4[i]% base chance to increase the DMG taken by the attacked enemy target by #5[f1]%, lasting for #6[i] turn(s).",
      "params": [
        [
          0.4,
          0.4,
          2,
          1,
          0.1,
          2
        ],
        [
          0.46,
          0.46,
          2,
          1.15,
          0.115,
          2
        ],
        [
          0.52,
          0.52,
          2,
          1.3,
          0.13,
          2
        ],
        [
          0.58,
          0.58,
          2,
          1.45,
          0.145,
          2
        ],
        [
          0.64,
          0.64,
          2,
          1.6,
          0.16,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}