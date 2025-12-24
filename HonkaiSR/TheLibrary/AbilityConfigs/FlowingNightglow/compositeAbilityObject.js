const compositeAbilityObject = {
  "fullCharacterName": "Flowing Nightglow",
  "trimCharacterName": "FlowingNightglow",
  "abilityList": [
    "FlowingNightglow_Ability23026"
  ],
  "abilityObject": {
    "FlowingNightglow_Ability23026": {
      "fileName": "FlowingNightglow_Ability23026",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23026_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23026_Sub3[<span class=\"descriptionNumberColor\">Cadenza</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (SkillEquip_P3_DmgAddedRatio) || RETURN",
                    "displayLines": "SkillEquip_P3_DmgAddedRatio",
                    "constants": [],
                    "variables": [
                      "SkillEquip_P3_DmgAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">SkillEquip_P3_DmgAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Cadenza"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23026_Sub2[<span class=\"descriptionNumberColor\">Cadenza</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier (Expire)",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "LC_23026_Sub3[<span class=\"descriptionNumberColor\">Cadenza</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.48) || RETURN",
                    "displayLines": "0.48",
                    "constants": [],
                    "variables": [
                      0.48
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates (Excluding Owner)",
                  "modifier": "LC_23026_Sub3[<span class=\"descriptionNumberColor\">Cadenza</span>]",
                  "valuePerStack": {
                    "AbilityEquip_P3_DmgAddedRatio": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    }
                  }
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
                      "modifier": "LC_23026_Sub3[<span class=\"descriptionNumberColor\">Cadenza</span>]",
                      "valuePerStack": {
                        "AbilityEquip_P3_DmgAddedRatio": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">#SkillEquip_P4_AtkAddedRatio</span> and DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillEquip_P3_DmgAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK and DMG Boost",
          "statusName": "Cadenza"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23026_Sub[<span class=\"descriptionNumberColor\">Cantillation</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_CurrentLayer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSPRatio",
                  "value": {
                    "operator": "Variables[0] (AbilityEquip_P1_SPRatio) || Variables[1] (_CurrentLayer) || MUL || RETURN",
                    "displayLines": "(AbilityEquip_P1_SPRatio * _CurrentLayer)",
                    "constants": [],
                    "variables": [
                      "AbilityEquip_P1_SPRatio",
                      "_CurrentLayer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_CurrentSPRatio) || RETURN",
                    "displayLines": "_CurrentSPRatio",
                    "constants": [],
                    "variables": [
                      "_CurrentSPRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">_CurrentSPRatio</span>.",
          "type": "Buff",
          "effectName": "Energy Regeneration Rate Boost",
          "statusName": "Cantillation"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23026_Main",
          "execute": [
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": "Allied Team(ALL) [Exclude battle mechanics]",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23026_Sub[<span class=\"descriptionNumberColor\">Cantillation</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "valuePerStack": {
                        "AbilityEquip_P1_SPRatio": {
                          "operator": "Variables[0] (0.03) || RETURN",
                          "displayLines": "0.03",
                          "constants": [],
                          "variables": [
                            0.03
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            },
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
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23026_Sub[<span class=\"descriptionNumberColor\">Cantillation</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23026_Sub2[<span class=\"descriptionNumberColor\">Cadenza</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
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
      "desc": "Every time an ally attacks, the wearer gains 1 stack of Cantillation. Each stack of Cantillation increases the wearer's Energy Regeneration Rate by #1[f1]%, stacking up to #2[i] time(s). When the wearer uses their Ultimate, removes Cantillation and gains Cadenza. Cadenza increases the Wearer's ATK by #4[i]% and increases all allies' DMG dealt by #3[i]%, lasting for #5[i] turn(s).",
      "params": [
        [
          0.03,
          5,
          0.24,
          0.48,
          1
        ],
        [
          0.035,
          5,
          0.28,
          0.6,
          1
        ],
        [
          0.04,
          5,
          0.32,
          0.72,
          1
        ],
        [
          0.044999998,
          5,
          0.36,
          0.84,
          1
        ],
        [
          0.05,
          5,
          0.4,
          0.96,
          1
        ]
      ]
    }
  },
  "isLightcone": true
}