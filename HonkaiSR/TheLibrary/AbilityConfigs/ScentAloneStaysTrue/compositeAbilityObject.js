const compositeAbilityObject = {
  "fullCharacterName": "Scent Alone Stays True",
  "trimCharacterName": "ScentAloneStaysTrue",
  "abilityList": [
    "ScentAloneStaysTrue_Ability23032"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.6
    },
    "2": {
      "DamageBreak": 0.7
    },
    "3": {
      "DamageBreak": 0.8
    },
    "4": {
      "DamageBreak": 0.9
    },
    "5": {
      "DamageBreak": 1
    }
  },
  "abilityObject": {
    "ScentAloneStaysTrue_Ability23032": {
      "fileName": "ScentAloneStaysTrue_Ability23032",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23032_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23032_Sub[<span class=\"descriptionNumberColor\">Woefree</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Woefree"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23032_Main",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "SkillEquip_23032_BreakDamageRatioByOwner",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillEquip_23032_BreakDamageRatioByCompare",
                  "value": {
                    "operator": "Variables[0] (SkillEquip_23032_BreakDamageRatioByOwner) || Variables[1] (SkillEquip_23032_BreakDamageRatioConvertByOwner[*?]) || SUB || RETURN",
                    "displayLines": "(SkillEquip_23032_BreakDamageRatioByOwner - SkillEquip_23032_BreakDamageRatioConvertByOwner[*?])",
                    "constants": [],
                    "variables": [
                      "SkillEquip_23032_BreakDamageRatioByOwner",
                      "SkillEquip_23032_BreakDamageRatioConvertByOwner[*?]"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "Ability Target List",
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillEquip_23032_BreakDamageRatioByCompare",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (1.5) || RETURN",
                              "displayLines": "1.5",
                              "constants": [],
                              "variables": [
                                1.5
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
                              "modifier": "LC_23032_Sub[<span class=\"descriptionNumberColor\">Woefree</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (0.1) || Variables[1] (0.08) || ADD || RETURN",
                                  "displayLines": "(0.1 + 0.08)",
                                  "constants": [],
                                  "variables": [
                                    0.1,
                                    0.08
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
                              "modifier": "LC_23032_Sub[<span class=\"descriptionNumberColor\">Woefree</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
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
                            }
                          ]
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
      "desc": "Increases the wearer's Break Effect by #1[i]%. After the wearer uses Ultimate to attack enemy targets, inflicts the targets with the \"Woefree\" state, lasting for #5[i] turn(s). While in \"Woefree,\" enemy targets take #2[i]% increased DMG. The effect of increasing DMG taken is additionally boosted by #4[i]% if the wearer's current Break Effect is #3[i]% or higher.",
      "params": [
        [
          0.6,
          0.1,
          1.5,
          0.08,
          2
        ],
        [
          0.7,
          0.12,
          1.5,
          0.1,
          2
        ],
        [
          0.8,
          0.14,
          1.5,
          0.12,
          2
        ],
        [
          0.9,
          0.16,
          1.5,
          0.14,
          2
        ],
        [
          1,
          0.18,
          1.5,
          0.16,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}