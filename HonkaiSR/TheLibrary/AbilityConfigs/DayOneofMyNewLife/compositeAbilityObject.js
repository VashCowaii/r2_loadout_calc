const compositeAbilityObject = {
  "fullCharacterName": "Day One of My New Life",
  "trimCharacterName": "DayOneofMyNewLife",
  "abilityList": [
    "DayOneofMyNewLife_Ability21002"
  ],
  "fixedStats": {
    "1": {
      "DEF%": 0.16
    },
    "2": {
      "DEF%": 0.18
    },
    "3": {
      "DEF%": 0.2
    },
    "4": {
      "DEF%": 0.22
    },
    "5": {
      "DEF%": 0.24
    }
  },
  "abilityObject": {
    "DayOneofMyNewLife_Ability21002": {
      "fileName": "DayOneofMyNewLife_Ability21002",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21002_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21002_Main",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": [
                    {
                      "name": "Target List",
                      "target": "All Team Members(In Context)"
                    },
                    {
                      "name": "Target List",
                      "target": "All Untargetable"
                    }
                  ],
                  "modifier": "LC_EquipUnique_DamageResistance",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_EquipUnique_DamageResistance",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Team Members(In Context)",
                      "modifier": "LC_EquipUnique_DamageResistance",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's DEF by #1[i]%. After entering battle, increases All-Type RES of all allies by #2[i]%. Abilities of the same type cannot stack.",
      "params": [
        [
          0.16,
          0.08
        ],
        [
          0.18,
          0.09
        ],
        [
          0.2,
          0.1
        ],
        [
          0.22,
          0.11
        ],
        [
          0.24,
          0.12
        ]
      ],
      "referencesGlobal": [
        {
          "name": "Modifier Construction",
          "for": "LC_EquipUnique_DamageResistance",
          "stackType": "ReplaceByCasterOrUnStack",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ]
    }
  },
  "isLightcone": true
}