const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012092,
  "trimCharacterName": 5012092,
  "abilityList": [
    "5012092_Modifiers",
    "5012092_Monster_W3_Clock_03_PassiveAbility01_Part01_FateRin",
    "5012092_Monster_W3_Clock_03_Ability03_Part02_FateRin",
    "5012092_Monster_W3_Clock_03_Ability02_Part02_FateRin",
    "5012092_Monster_W3_Clock_03_Ability02_Part01_FateRin",
    "5012092_Monster_W3_Clock_03_Ability01_Part02_FateRin",
    "5012092_Monster_W3_Clock_03_Ability01_Part01_FateRin",
    "5012092_Handling"
  ],
  "abilityObject": {
    "5012092_Modifiers": {
      "fileName": "5012092_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TargetMark",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TargetMark",
                          "value": 1
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TargetMark",
                          "value": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
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
      "references": []
    },
    "5012092_Monster_W3_Clock_03_PassiveAbility01_Part01_FateRin": {
      "fileName": "5012092_Monster_W3_Clock_03_PassiveAbility01_Part01_FateRin",
      "childAbilityList": [
        "5012092_Monster_W3_Clock_03_PassiveAbility01_Part01_FateRin"
      ],
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 429205,
                "compareType": "=",
                "characterName": null
              },
              {
                "name": "Stage ID",
                "ID": 429215,
                "compareType": "=",
                "characterName": null
              }
            ]
          },
          "passed": [
            {
              "name": "UI Display Event",
              "popUpText": "Attack Circe's mechatron and redirect her fury toward the enemy!"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "#PassiveSkill01_P1_Mark",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}.[[index2]]"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
                  "valuePerStack": {
                    "TargetMark": 1
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
                  "valuePerStack": {
                    "TargetMark": 0
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5012092_Monster_W3_Clock_03_Ability03_Part02_FateRin": {
      "fileName": "5012092_Monster_W3_Clock_03_Ability03_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "#PassiveSkill01_P1_Mark",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
              "valuePerStack": {
                "TargetMark": 0
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase_normal"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5012092_Monster_W3_Clock_03_Ability02_Part02_FateRin": {
      "fileName": "5012092_Monster_W3_Clock_03_Ability02_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase_normal"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5012092_Monster_W3_Clock_03_Ability02_Part01_FateRin": {
      "fileName": "5012092_Monster_W3_Clock_03_Ability02_Part01_FateRin",
      "childAbilityList": [
        "5012092_Monster_W3_Clock_03_Ability02_Camera",
        "5012092_Monster_W3_Clock_03_Ability02_Part01_FateRin",
        "5012092_Monster_W3_Clock_03_Ability02_Part02_FateRin",
        "5012092_Monster_W3_Clock_03_Ability03_Part02_FateRin",
        "5012092_Monster_W3_Clock_03_Ability02_Camera_02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W3_Clock_03_Ability02_Part02_FateRin",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Caster}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W3_Clock_03_Ability03_Part02_FateRin",
                  "isTrigger": true
                }
              ],
              "noTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
                  "valuePerStack": {
                    "TargetMark": 0
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase_normal"
                },
                "Trigger: Ability End"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "targetIsVariable": true
      },
      "references": []
    },
    "5012092_Monster_W3_Clock_03_Ability01_Part02_FateRin": {
      "fileName": "5012092_Monster_W3_Clock_03_Ability01_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5012092_Monster_W3_Clock_03_Ability01_Part01_FateRin": {
      "fileName": "5012092_Monster_W3_Clock_03_Ability01_Part01_FateRin",
      "childAbilityList": [
        "5012092_Monster_W3_Clock_03_Ability01_Camera",
        "5012092_Monster_W3_Clock_03_Ability01_Part01_FateRin",
        "5012092_Monster_W3_Clock_03_Ability01_Part02_FateRin"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Clock_03_Ability01_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5012092_Handling": {
      "fileName": "5012092_Handling",
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
              "value": "Common_SequenceThree_Phase01"
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
              "option": "UseSequenceSkill",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Sequence Ability Option"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
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