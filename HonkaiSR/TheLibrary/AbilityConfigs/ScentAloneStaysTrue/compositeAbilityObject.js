const entityPageType = "lc"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"745671969\">LC_23032_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-887920794\">LC_23032_Sub</a>[<span class=\"descriptionNumberColor\">Woefree</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Woefree",
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
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__745671969\">LC_23032_Main</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "SkillEquip_23032_BreakDamageRatioByOwner",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SkillEquip_23032_BreakDamageRatioByOwner - SkillEquip_23032_BreakDamageRatioConvertByOwner[*?])"
                  },
                  "variableName": "SkillEquip_23032_BreakDamageRatioByCompare"
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
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillEquip_23032_BreakDamageRatioByCompare",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "1.5"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-887920794\">LC_23032_Sub</a>[<span class=\"descriptionNumberColor\">Woefree</span>]",
                              "duration": {
                                "displayLines": "2"
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "displayLines": "(0.1 + 0.08)"
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-887920794\">LC_23032_Sub</a>[<span class=\"descriptionNumberColor\">Woefree</span>]",
                              "duration": {
                                "displayLines": "2"
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "displayLines": "0.1"
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
          ]
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