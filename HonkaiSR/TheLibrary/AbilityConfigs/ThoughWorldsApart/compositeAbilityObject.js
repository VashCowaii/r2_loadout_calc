const compositeAbilityObject = {
  "fullCharacterName": "Though Worlds Apart",
  "trimCharacterName": "ThoughWorldsApart",
  "abilityList": [
    "ThoughWorldsApart_Ability23051"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.64
    },
    "2": {
      "ATK%": 0.8
    },
    "3": {
      "ATK%": 0.96
    },
    "4": {
      "ATK%": 1.12
    },
    "5": {
      "ATK%": 1.28
    }
  },
  "abilityObject": {
    "ThoughWorldsApart_Ability23051": {
      "fileName": "ThoughWorldsApart_Ability23051",
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
          "modifier": "LC_23051_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23051_Sub[<span class=\"descriptionNumberColor\">Redoubt</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemoAndSummon]]"
                    },
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_23051_DamageRatio01) || Variables[1] (MDF_23051_DamageRatio02) || ADD || RETURN",
                        "displayLines": "(MDF_23051_DamageRatio01 + MDF_23051_DamageRatio02)",
                        "constants": [],
                        "variables": [
                          "MDF_23051_DamageRatio01",
                          "MDF_23051_DamageRatio02"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_23051_DamageRatio01) || RETURN",
                        "displayLines": "MDF_23051_DamageRatio01",
                        "constants": [],
                        "variables": [
                          "MDF_23051_DamageRatio01"
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
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Redoubt",
          "statusName": "Redoubt"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23051_Main",
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
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "LC_23051_Sub[<span class=\"descriptionNumberColor\">Redoubt</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_23051_DamageRatio01": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
                          ]
                        },
                        "MDF_23051_DamageRatio02": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        }
                      }
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.1) || RETURN",
                        "displayLines": "0.1",
                        "constants": [],
                        "variables": [
                          0.1
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}.[[sortByHPCurrent]]"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
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
      "desc": "Increases the wearer's ATK by #1[i]%. When the wearer uses Ultimate, restores HP equal to #5[i]% of the wearer's ATK for all allies, and additionally restores HP equal to #6[i]% of the wearer's ATK for the character with the lowest current HP, and grants \"Redoubt\" to all allies for #4[i] turn(s). Targets with \"Redoubt\" deal #2[i]% increased DMG, which further increases by #3[i]% if the targets have summons.",
      "params": [
        [
          0.64,
          0.24,
          0.12,
          3,
          0.1,
          0.1
        ],
        [
          0.8,
          0.3,
          0.15,
          3,
          0.125,
          0.125
        ],
        [
          0.96,
          0.36,
          0.18,
          3,
          0.15,
          0.15
        ],
        [
          1.12,
          0.42,
          0.21,
          3,
          0.175,
          0.175
        ],
        [
          1.28,
          0.48,
          0.24,
          3,
          0.2,
          0.2
        ]
      ]
    }
  },
  "isLightcone": true
}