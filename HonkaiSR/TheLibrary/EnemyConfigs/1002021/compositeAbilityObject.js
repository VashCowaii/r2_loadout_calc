const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 1002021,
  "trimCharacterName": 1002021,
  "abilityList": [
    "1002021_Modifiers",
    "1002021_Monster_W1_Soldier01_03_Ability02_Part02",
    "1002021_Monster_W1_Soldier01_03_Ability02_Part01",
    "1002021_Monster_W1_Soldier01_03_Ability01_Part02",
    "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
    "1002021_Handling"
  ],
  "abilityObject": {
    "1002021_Modifiers": {
      "fileName": "1002021_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1281886828\">Monster_W1_Soldier01_03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "ATK +<span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Modifier_AttackAddedRatio) || RETURN",
                    "displayLines": "Modifier_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "Modifier_AttackAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Modifier_SpeedDelta) || RETURN",
                    "displayLines": "Modifier_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "Modifier_SpeedDelta"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "1002021_Monster_W1_Soldier01_03_Ability02_Part02": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1281886828\">Monster_W1_Soldier01_03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Modifier_SpeedDelta": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 100202104,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "set": 0
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "popUpText": "Action Advance"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1002021_Monster_W1_Soldier01_03_Ability02_Part01": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability02_Part01",
      "childAbilityList": [
        "1002021_Monster_W1_Soldier01_03_Ability02_Camera",
        "1002021_Monster_W1_Soldier01_03_Ability02_Part01",
        "1002021_Monster_W1_Soldier01_03_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Soldier01_03_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target"
      },
      "references": []
    },
    "1002021_Monster_W1_Soldier01_03_Ability01_Part02": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 7
          },
          "passed": [
            "Ability Start"
          ],
          "failed": [
            "Ability Start"
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1002021_Monster_W1_Soldier01_03_Ability01_Part01": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
      "childAbilityList": [
        "1002021_Monster_W1_Soldier01_03_Ability01_Camera",
        "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
        "1002021_Monster_W1_Soldier01_03_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Soldier01_03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 7
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1002021_Handling": {
      "fileName": "1002021_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "DG_010_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "Monster_W1_Soldier01_03_AICounter_01",
                      "compareType": "=",
                      "value2": 5,
                      "contextScope": "TargetEntity"
                    },
                    "passed": [
                      {
                        "name": "Define Custom Variable",
                        "value": 3,
                        "variableName": "Monster_W1_Soldier01_03_AICounter_01"
                      }
                    ]
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "Monster_W1_Soldier01_03_AICounter_01",
                      "compareType": "=",
                      "value2": 6,
                      "contextScope": "TargetEntity"
                    },
                    "passed": [
                      {
                        "name": "Define Custom Variable",
                        "value": 4,
                        "variableName": "Monster_W1_Soldier01_03_AICounter_01"
                      }
                    ]
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Monster_W1_Soldier01_03_AICounter_01",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Monster_W1_Soldier01_03_AICounter_01",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Monster_W1_Soldier01_03_AICounter_01",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Enemy ID",
                      "idList": [
                        101201012
                      ]
                    }
                  },
                  {
                    "name": "Define Custom Variable",
                    "value": 0,
                    "variableName": "Monster_W1_Soldier01_03_AICounter_01"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.99,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Soldier01_03_AICounter_01",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.99
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Enemy ID",
                      "idList": [
                        101201014
                      ]
                    }
                  },
                  {
                    "name": "Define Custom Variable",
                    "value": 1,
                    "variableName": "Monster_W1_Soldier01_03_AICounter_01"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.99,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Soldier01_03_AICounter_01",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.99
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Enemy ID",
                      "idList": [
                        101201012
                      ]
                    }
                  },
                  {
                    "name": "Define Custom Variable",
                    "value": 5,
                    "variableName": "Monster_W1_Soldier01_03_AICounter_01"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.99,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Soldier01_03_AICounter_01",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.99
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Enemy ID",
                      "idList": [
                        101201014
                      ]
                    }
                  },
                  {
                    "name": "Define Custom Variable",
                    "value": 6,
                    "variableName": "Monster_W1_Soldier01_03_AICounter_01"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.99,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Soldier01_03_AICounter_01",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.99
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}