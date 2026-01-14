const configAbility = {
  "fileName": "DreamvilleAdventure_Ability21036",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21036_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21036_Sub_Ultra[<span class=\"descriptionNumberColor\">Childishness</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.12"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases Ultimate DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P1_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Ultimate DMG Boost",
      "statusName": "Childishness"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21036_Sub_Ability[<span class=\"descriptionNumberColor\">Childishness</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.12"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases Skill DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P1_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Skill DMG Boost",
      "statusName": "Childishness"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21036_Sub_Normal[<span class=\"descriptionNumberColor\">Childishness</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.12"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases Basic ATK DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P1_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Basic ATK DMG Boost",
      "statusName": "Childishness"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21036_Main",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "Allied Team"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "LC_21036_Sub_Normal[<span class=\"descriptionNumberColor\">Childishness</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "Allied Team"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "LC_21036_Sub_Ability[<span class=\"descriptionNumberColor\">Childishness</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "Allied Team"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "LC_21036_Sub_Ultra[<span class=\"descriptionNumberColor\">Childishness</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Allied Team",
              "modifier": "LC_21036_Sub_Normal[<span class=\"descriptionNumberColor\">Childishness</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Allied Team",
              "modifier": "LC_21036_Sub_Ability[<span class=\"descriptionNumberColor\">Childishness</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Allied Team",
              "modifier": "LC_21036_Sub_Ultra[<span class=\"descriptionNumberColor\">Childishness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Basic ATK"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team",
                  "modifier": "LC_21036_Sub_Normal[<span class=\"descriptionNumberColor\">Childishness</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team",
                  "modifier": "LC_21036_Sub_Ability[<span class=\"descriptionNumberColor\">Childishness</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team",
                  "modifier": "LC_21036_Sub_Ultra[<span class=\"descriptionNumberColor\">Childishness</span>]"
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
  "desc": "After the wearer uses a certain type of ability such as Basic ATK, Skill, or Ultimate, all allies gain Childishness, which increases allies' DMG for the same type of ability as used by the wearer by #1[i]%. Childishness only takes effect for the most recent type of ability the wearer used and cannot be stacked.",
  "params": [
    [
      0.12
    ],
    [
      0.14
    ],
    [
      0.16
    ],
    [
      0.18
    ],
    [
      0.2
    ]
  ]
}