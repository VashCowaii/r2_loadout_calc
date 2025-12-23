const configAbility = {
  "fileName": "CarvetheMoonWeavetheClouds_Ability21032",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21032_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21032_Bonus3[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
      "stackType": "ReplaceByCasterOrUnStack",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.06) || RETURN",
                "displayLines": "0.06",
                "constants": [],
                "variables": [
                  0.06
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">#SkillEquip_P3_SPRatio</span>.",
      "type": "Buff",
      "effectName": "Energy Regeneration Rate Boost",
      "statusName": "Energy Regeneration Rate Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21032_Bonus2[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "ReplaceByCasterOrUnStack",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG +<span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21032_Bonus1[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "ReplaceByCasterOrUnStack",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      "description": "ATK +<span class=\"descriptionNumberColor\">#SkillEquip_P1_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21032_Sub3",
      "execute": [
        {
          "eventTrigger": "Revert to Pre-Transformation",
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
              "modifier": "LC_21032_Bonus3[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Random Event",
              "odds": [
                0.5,
                0.5
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21032_Sub1"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21032_Sub2"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "LC_21032_Bonus3[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
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
                  "modifier": "LC_21032_Bonus3[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21032_Sub2",
      "execute": [
        {
          "eventTrigger": "Revert to Pre-Transformation",
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
              "modifier": "LC_21032_Bonus2[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Random Event",
              "odds": [
                0.5,
                0.5
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21032_Sub1"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21032_Sub3"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "LC_21032_Bonus2[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
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
                  "modifier": "LC_21032_Bonus2[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21032_Sub1",
      "execute": [
        {
          "eventTrigger": "Revert to Pre-Transformation",
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
              "modifier": "LC_21032_Bonus1[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Random Event",
              "odds": [
                0.5,
                0.5
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21032_Sub2"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21032_Sub3"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "LC_21032_Bonus1[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
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
                  "modifier": "LC_21032_Bonus1[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21032_Main",
      "execute": [
        {
          "eventTrigger": "When Losing Modifier (Expire)",
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
              "modifier": "LC_21032_Bonus1[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "onlyRemoveOwnersInstance": true
            },
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
              "modifier": "LC_21032_Bonus2[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
              "onlyRemoveOwnersInstance": true
            },
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
              "modifier": "LC_21032_Bonus3[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
              "onlyRemoveOwnersInstance": true
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
                  "name": "Random Event",
                  "odds": [
                    0.333,
                    0.333,
                    0.334
                  ],
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21032_Sub1"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21032_Sub2"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21032_Sub3"
                    }
                  ]
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
  "desc": "At the start of the battle and whenever the wearer's turn begins, one of the following effects is applied randomly: All allies' ATK increases by #1[i]%, all allies' CRIT DMG increases by #2[i]%, or all allies' Energy Regeneration Rate increases by #3[i]%. The applied effect cannot be identical to the last effect applied, and will replace the previous effect. The applied effect will be removed when the wearer has been knocked down. Effects of the same type cannot be stacked.",
  "params": [
    [
      0.1,
      0.12,
      0.06
    ],
    [
      0.125,
      0.15,
      0.075
    ],
    [
      0.15,
      0.18,
      0.09
    ],
    [
      0.175,
      0.21,
      0.105
    ],
    [
      0.2,
      0.24,
      0.12
    ]
  ]
}