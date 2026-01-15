const configAbility = {
  "fileName": "TheDahlia_Constance_TechniqueInLevel",
  "childAbilityList": [
    "TheDahlia_Constance_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "StageAbility_Maze_Constance_Modifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "StageAbility_Maze_Constance_Modifier_SuperBreakTrigger"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "_M_Constance_TechniqueUsage_SuperBreak",
      "modifierFlags": [
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "DealSuperBreakDamage_DamagePerformance",
              "target": "All Hostile Entities (AOE)",
              "variables": {
                "value_0_DamagePercentage": {
                  "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                  "displayLines": "MDF_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_DamagePercentage"
                  ]
                }
              },
              "damageSequence": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "PursuedDamage_PerformanceDelay",
                  "target": "Use Prior Target(s) Defined"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": "Owner of this Modifier"
                    },
                    "DamageBreak": {
                      "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                      "displayLines": "value_0_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "value_0_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": [
                      "Super Break"
                    ],
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": 100
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "_M_Constance_TechniqueUsage_SuperBreakTriggerFlag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_TechniqueUsage_SuperBreakTriggerFlag"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "DealSuperBreakDamage_DamagePerformance",
                  "target": "All Hostile Entities (AOE)",
                  "variables": {
                    "value_0_DamagePercentage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    }
                  },
                  "damageSequence": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "PursuedDamage_PerformanceDelay",
                      "target": "Use Prior Target(s) Defined"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": "Owner of this Modifier"
                        },
                        "DamageBreak": {
                          "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                          "displayLines": "value_0_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "value_0_DamagePercentage"
                          ]
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": [
                          "Super Break"
                        ],
                        "attackType": "Break DMG"
                      }
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Constance_Modifier_SuperBreakTrigger",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Team Members(In Context, with Untargetable)",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "_M_Constance_TechniqueUsage_SuperBreak"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "_M_Constance_TechniqueUsage_SuperBreakTriggerFlag",
                  "referenceModifier": "MReference_Empty"
                }
              ]
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -59
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Constance_Modifier",
      "execute": [
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
                  "to": "Caster",
                  "modifier": "Constance_Aura[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                },
                {
                  "name": "Find New Target",
                  "from": "All Team Members(In Context, with Untargetable)",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
                    "flagName": "STAT_TriggerBattleCharacter"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "_M_Constance_TechniqueUsage_SuperBreak",
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}