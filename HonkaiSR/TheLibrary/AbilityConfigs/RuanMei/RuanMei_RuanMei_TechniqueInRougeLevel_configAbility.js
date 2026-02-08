const configAbility = {
  "fileName": "RuanMei_RuanMei_TechniqueInRougeLevel",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1378168590\">RuanMei_Maze_Modifier_BeforeStanceBreak</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__319066734\">RuanMei_Maze_Modifier_StanceBreakAdd</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            "Modifier Deletes Itself"
          ],
          "priorityLevel": 10001
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Base Break Damage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BreakBaseDamage"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MaxStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BreakDamageRatio",
                  "value": {
                    "operator": "Variables[0] (MaxStance) || Constants[0] (30) || DIV || Constants[1] (2) || ADD || Constants[2] (4) || DIV || RETURN",
                    "displayLines": "(((MaxStance / 30) + 2) / 4)",
                    "constants": [
                      30,
                      2,
                      4
                    ],
                    "variables": [
                      "MaxStance"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "RuanMei_BreakDamage",
                  "value": {
                    "operator": "Variables[0] (BreakBaseDamage) || Variables[1] (BreakDamageRatio) || MUL || Constants[0] (1) || Variables[2] (BreakDamageAddedRatio) || ADD || MUL || RETURN",
                    "displayLines": "((BreakBaseDamage * BreakDamageRatio) * (1 + BreakDamageAddedRatio))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "BreakBaseDamage",
                      "BreakDamageRatio",
                      "BreakDamageAddedRatio"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageBreak": {
                      "operator": "Variables[0] (BreakDamageRatio) || Variables[1] (RuanMei_BreakDamage) || MUL || RETURN",
                      "displayLines": "(BreakDamageRatio * RuanMei_BreakDamage)",
                      "constants": [],
                      "variables": [
                        "BreakDamageRatio",
                        "RuanMei_BreakDamage"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-50472691\">RuanMei_Maze_Modifier_StanceBreakAdd_EnterBattleRemove</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"319066734\">RuanMei_Maze_Modifier_StanceBreakAdd</a>"
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": 10001
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1378168590\">RuanMei_Maze_Modifier_BeforeStanceBreak</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-50472691\">RuanMei_Maze_Modifier_StanceBreakAdd_EnterBattleRemove</a>"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "FinishRoomNum",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BuffNumber",
                      "value": {
                        "operator": "Variables[0] (FinishRoomNum) || Constants[0] (2) || MUL || RETURN",
                        "displayLines": "(FinishRoomNum * 2)",
                        "constants": [
                          2
                        ],
                        "variables": [
                          "FinishRoomNum"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"319066734\">RuanMei_Maze_Modifier_StanceBreakAdd</a>",
                  "valuePerStack": {
                    "MDF_StanceBreakAdded": {
                      "operator": "Variables[0] (1) || Variables[1] (MIN) || Variables[2] (20) || Variables[3] (BuffNumber) || PARAM_2 || FUNCTION || MUL || RETURN",
                      "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))",
                      "constants": [],
                      "variables": [
                        1,
                        "MIN",
                        20,
                        "BuffNumber"
                      ]
                    },
                    "MDF_BreakDamageUp": {
                      "operator": "Variables[0] (1) || Variables[1] (MIN) || Variables[2] (20) || Variables[3] (BuffNumber) || PARAM_2 || FUNCTION || MUL || RETURN",
                      "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))",
                      "constants": [],
                      "variables": [
                        1,
                        "MIN",
                        20,
                        "BuffNumber"
                      ]
                    }
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>",
                      "adjustmentType": "+",
                      "variableName": "Stance_Added_Ratio",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (MIN) || Variables[2] (20) || Variables[3] (BuffNumber) || PARAM_2 || FUNCTION || MUL || RETURN",
                        "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))",
                        "constants": [],
                        "variables": [
                          1,
                          "MIN",
                          20,
                          "BuffNumber"
                        ]
                      }
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
  ]
}