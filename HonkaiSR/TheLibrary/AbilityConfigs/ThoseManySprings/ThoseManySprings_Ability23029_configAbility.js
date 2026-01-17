const configAbility = {
  "fileName": "ThoseManySprings_Ability23029",
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
      "modifier": "LC_23029_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23029_Sub2[<span class=\"descriptionNumberColor\">Cornered</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "LC_23029_Sub[<span class=\"descriptionNumberColor\">Unarmored</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (RatioPlus) || RETURN",
                "displayLines": "RatioPlus",
                "constants": [],
                "variables": [
                  "RatioPlus"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">RatioPlus</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Cornered"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23029_Sub[<span class=\"descriptionNumberColor\">Unarmored</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
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
      ],
      "description": "Increases DMG received by <span class=\"descriptionNumberColor\">#SkillEquip_P3_Ratio</span>. While under a DoT state applied from the wearer and after receiving an attack from the wearer's Basic ATK, Skill, or Ultimate, there is a <span class=\"descriptionNumberColor\">#SkillEquip_P5_Chance</span> base chance of having this state upgraded to Cornered, which additionally increases DMG received by <span class=\"descriptionNumberColor\">#SkillEquip_P6_Ratio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Unarmored"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23029_Main",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "maxTargets": 5,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "LC_23029_Sub2[<span class=\"descriptionNumberColor\">Cornered</span>]",
                "invertCondition": true,
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "LC_23029_Sub[<span class=\"descriptionNumberColor\">Unarmored</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (0.6) || RETURN",
                        "displayLines": "0.6",
                        "constants": [],
                        "variables": [
                          0.6
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "maxTargets": 5,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "LC_23029_Sub2[<span class=\"descriptionNumberColor\">Cornered</span>]",
                "invertCondition": true,
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "LC_23029_Sub[<span class=\"descriptionNumberColor\">Unarmored</span>]",
                        "justAddedOrActive": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "LC_23029_Sub2[<span class=\"descriptionNumberColor\">Cornered</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (0.6) || RETURN",
                        "displayLines": "0.6",
                        "constants": [],
                        "variables": [
                          0.6
                        ]
                      },
                      "valuePerStack": {
                        "RatioPlus": {
                          "operator": "Variables[0] (0.1) || Variables[1] (0.14) || ADD || RETURN",
                          "displayLines": "(0.1 + 0.14)",
                          "constants": [],
                          "variables": [
                            0.1,
                            0.14
                          ]
                        }
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
  "desc": "Increases the wearer's Effect Hit Rate by #1[i]%. After the wearer uses Basic ATK, Skill, or Ultimate to attack an enemy target, there is a #2[i]% base chance to inflict \"Unarmored\" on the target. While in the Unarmored state, the enemy target receives #3[i]% increased DMG, lasting for #4[i] turn(s). If the target is under a DoT state inflicted by the wearer, there is a #5[i]% base chance to upgrade the \"Unarmored\" state inflicted by the wearer to the \"Cornered\" state, which additionally increases the DMG the enemy target receives by #6[i]%, lasting for #4[i] turn(s). During this period, the wearer cannot inflict \"Unarmored\" on the target.",
  "params": [
    [
      0.6,
      0.6,
      0.1,
      2,
      0.6,
      0.14
    ],
    [
      0.7,
      0.6,
      0.12,
      2,
      0.6,
      0.16
    ],
    [
      0.8,
      0.6,
      0.14,
      2,
      0.6,
      0.18
    ],
    [
      0.9,
      0.6,
      0.16,
      2,
      0.6,
      0.2
    ],
    [
      1,
      0.6,
      0.18,
      2,
      0.6,
      0.22
    ]
  ]
}