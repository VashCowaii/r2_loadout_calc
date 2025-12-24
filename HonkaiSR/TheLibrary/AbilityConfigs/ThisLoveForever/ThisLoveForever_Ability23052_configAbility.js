const configAbility = {
  "fileName": "ThisLoveForever_Ability23052",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CritDmg",
      "value": {
        "operator": "Variables[0] (0.16) || RETURN",
        "displayLines": "0.16",
        "constants": [],
        "variables": [
          0.16
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_DamageRatio",
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
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23052_Main",
      "valuePerStack": {
        "MDF_ExtraRatio": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23052_Halo2[<span class=\"descriptionNumberColor\">Blank</span>]",
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
                "operator": "Variables[0] (MDF_DamageRatio) || RETURN",
                "displayLines": "MDF_DamageRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_DamageRatio</span>.",
      "type": "Debuff",
      "statusName": "Blank"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23052_Halo[<span class=\"descriptionNumberColor\">Verse</span>]",
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
                "operator": "Variables[0] (MDF_CritDmg) || RETURN",
                "displayLines": "MDF_CritDmg",
                "constants": [],
                "variables": [
                  "MDF_CritDmg"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CritDmg</span>.",
      "type": "Buff",
      "statusName": "Verse"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23052_Sub2[<span class=\"descriptionNumberColor\">Blank</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "LC_23052_Sub[<span class=\"descriptionNumberColor\">Verse</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageRatio) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                    "displayLines": "(MDF_DamageRatio * (1 + 0.6))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_DamageRatio",
                      0.6
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CritDmg",
                  "value": {
                    "operator": "Variables[0] (MDF_CritDmg) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                    "displayLines": "(MDF_CritDmg * (1 + 0.6))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_CritDmg",
                      0.6
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Enemies(ALL) (AOE) [Exclude battle mechanics]",
                  "modifier": "LC_23052_Halo2[<span class=\"descriptionNumberColor\">Blank</span>]"
                }
              ]
            }
          ]
        }
      ],
      "description": "DMG received by all enemies increases by <span class=\"descriptionNumberColor\">MDF_DamageRatio</span>.",
      "type": "Other",
      "statusName": "Blank",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Enemies(ALL) (AOE) [Exclude battle mechanics]",
          "modifier": "LC_23052_Halo2[<span class=\"descriptionNumberColor\">Blank</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23052_Sub[<span class=\"descriptionNumberColor\">Verse</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "LC_23052_Sub2[<span class=\"descriptionNumberColor\">Blank</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CritDmg",
                  "value": {
                    "operator": "Variables[0] (MDF_CritDmg) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                    "displayLines": "(MDF_CritDmg * (1 + 0.6))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_CritDmg",
                      0.6
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageRatio) || Constants[0] (1) || Variables[1] (0.6) || ADD || MUL || RETURN",
                    "displayLines": "(MDF_DamageRatio * (1 + 0.6))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_DamageRatio",
                      0.6
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team(ALL) [Exclude battle mechanics]",
                  "modifier": "LC_23052_Halo[<span class=\"descriptionNumberColor\">Verse</span>]"
                }
              ]
            }
          ]
        }
      ],
      "description": "CRIT DMG dealt by all allies increases by <span class=\"descriptionNumberColor\">MDF_CritDmg</span>.",
      "type": "Other",
      "statusName": "Verse",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Allied Team(ALL) [Exclude battle mechanics]",
          "modifier": "LC_23052_Halo[<span class=\"descriptionNumberColor\">Verse</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23052_Main",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "[MEMOSPRITE OF] Owner of this Modifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "[MEMOSPRITE OF] Owner of this Modifier",
                      "modifier": "LC_23052_Sub[<span class=\"descriptionNumberColor\">Verse</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                            "team": "TeamLight"
                          },
                          {
                            "name": "Compare: Target Count",
                            "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "[MEMOSPRITE OF] Owner of this Modifier",
                          "modifier": "LC_23052_Sub2[<span class=\"descriptionNumberColor\">Blank</span>]"
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
      "stackData": [
        "MDF_ExtraRatio"
      ],
      "latentQueue": [
        "MDF_CritDmg",
        "MDF_DamageRatio"
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's SPD by #1[i]%. When the wearer's memosprite uses Memosprite Skill on one ally, gains \"Blank,\" which increases DMG taken by all enemies by #3[i]%. When the wearer's memosprite uses Memosprite Skill on an enemy, gains \"Verse,\" which increases CRIT DMG of all allies by #2[i]%. When the wearer's memosprite has both \"Blank\" and \"Verse,\" increases the effects of both \"Blank\" and \"Verse\" by #4[i]%.",
  "params": [
    [
      0.18,
      0.16,
      0.1,
      0.6
    ],
    [
      0.21,
      0.19,
      0.12,
      0.65
    ],
    [
      0.24,
      0.22,
      0.14,
      0.7
    ],
    [
      0.27,
      0.25,
      0.16,
      0.75
    ],
    [
      0.3,
      0.28,
      0.18,
      0.8
    ]
  ]
}