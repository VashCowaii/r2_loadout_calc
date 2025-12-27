const configAbility = {
  "fileName": "WarriorGoddessofSunandThunder_Ability51251",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_125_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_125_Bonus2[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (AbilityRelic_125_4_P2_DamageAddRatio) || RETURN",
                "displayLines": "AbilityRelic_125_4_P2_DamageAddRatio",
                "constants": [],
                "variables": [
                  "AbilityRelic_125_4_P2_DamageAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">SkillRelic_125_4_P2_DamageAddRatio</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Warrior Goddess of Sun and Thunder"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_125_Bonus[<span class=\"descriptionNumberColor\">Gentle Rain</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Allied Team(ALL) [Exclude battle mechanics]",
              "modifier": "Relic_125_Bonus2[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (AbilityRelic_125_4_P1_SpeedAddRatio) || RETURN",
                "displayLines": "AbilityRelic_125_4_P1_SpeedAddRatio",
                "constants": [],
                "variables": [
                  "AbilityRelic_125_4_P1_SpeedAddRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Relic_125_Bonus2[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Relic_125_Bonus2[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
                  "valuePerStack": {
                    "AbilityRelic_125_4_P2_DamageAddRatio": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">SkillRelic_125_4_P1_SpeedAddRatio</span>.",
      "type": "Buff",
      "effectName": "Gentle Rain",
      "statusName": "Gentle Rain",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Allied Team(ALL) [Exclude battle mechanics]",
          "modifier": "Relic_125_Bonus2[<span class=\"descriptionNumberColor\">Warrior Goddess of Sun and Thunder</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "AbilityRelic_125_4_P2_DamageAddRatio": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_125_Sub2",
      "execute": [
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "Allied Team(ALL, exclude Owner & Memosprite)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Relic_125_Flag"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Relic_125_Flag"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Relic_125_Bonus[<span class=\"descriptionNumberColor\">Gentle Rain</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "AbilityRelic_125_4_P1_SpeedAddRatio": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_125_Sub",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Relic_125_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "Allied Team(ALL, exclude Owner & Memosprite)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Relic_125_Flag"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Relic_125_Flag"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_125_Bonus[<span class=\"descriptionNumberColor\">Gentle Rain</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "AbilityRelic_125_4_P1_SpeedAddRatio": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Relic_125_Flag"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_125_Flag",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_125_Main",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Relic_125_Sub"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster (Memosprite)",
              "modifier": "Relic_125_Sub2"
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
                "target2": "Caster (Memosprite)"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Relic_125_Sub2"
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
    "Increases SPD by 6%.",
    "When the wearer or their memosprite provides healing to ally targets other than themselves, the wearer gains \"Gentle Rain,\" which lasts for 2 turn(s) and can only trigger once per turn. While the wearer has \"Gentle Rain,\" SPD increases by 6% and all allies' CRIT DMG increases by 15%. This effect cannot stack."
  ],
  "params": [
    [
      0.06
    ],
    [
      0.06,
      0.15,
      2
    ]
  ]
}