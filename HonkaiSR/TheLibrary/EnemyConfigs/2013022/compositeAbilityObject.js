const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2013022,
  "trimCharacterName": 2013022,
  "abilityList": [
    "2013022_Modifiers",
    "2013022_Monster_W2_Valkyrie02_PassiveAbilityInitiate_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability05_Part02_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability05_Part01_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability03_Part02_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability03_Part01_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability01_Part02_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability01_Part01_FateRin",
    "2013022_Handling"
  ],
  "abilityObject": {
    "2013022_Modifiers": {
      "fileName": "2013022_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1206666143\">Enemy_W2_Valkyrie02_DynamicAI_ToastAndEffect_FateRin</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ],
      "references": []
    },
    "2013022_Monster_W2_Valkyrie02_PassiveAbilityInitiate_FateRin": {
      "fileName": "2013022_Monster_W2_Valkyrie02_PassiveAbilityInitiate_FateRin",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeBattleEvents]].[[index1]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1513124665\">Enemy_W2_Valkyrie02_Target_FateRin</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1513124665\">Enemy_W2_Valkyrie02_Target_FateRin</a>"
        }
      ]
    },
    "2013022_Monster_W2_Valkyrie02_Ability05_Part02_FateRin": {
      "fileName": "2013022_Monster_W2_Valkyrie02_Ability05_Part02_FateRin",
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
          "modifier": "<a class=\"gModGreen\" id=\"1206666143\">Enemy_W2_Valkyrie02_DynamicAI_ToastAndEffect_FateRin</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2013022_Monster_W2_Valkyrie02_Ability05_Part01_FateRin": {
      "fileName": "2013022_Monster_W2_Valkyrie02_Ability05_Part01_FateRin",
      "childAbilityList": [
        "2013022_Monster_W2_Valkyrie02_Ability05_Part01_FateRin",
        "2013022_Monster_W2_Valkyrie02_Ability05_Part02_FateRin",
        "2013022_Monster_W2_Valkyrie02_Ability04_Insert_Camera"
      ],
      "skillTrigger": "Skill05",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Valkyrie02_Ability05_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "2013022_Monster_W2_Valkyrie02_Ability03_Part02_FateRin": {
      "fileName": "2013022_Monster_W2_Valkyrie02_Ability03_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2013022_Monster_W2_Valkyrie02_Ability03_Part01_FateRin": {
      "fileName": "2013022_Monster_W2_Valkyrie02_Ability03_Part01_FateRin",
      "childAbilityList": [
        "2013022_Monster_W2_Valkyrie02_Ability03_Part01_FateRin",
        "2013022_Monster_W2_Valkyrie02_Ability03_Part02_FateRin",
        "2013022_Monster_W2_Valkyrie02_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W2_Valkyrie02_Ability03_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2013022_Monster_W2_Valkyrie02_Ability01_Part02_FateRin": {
      "fileName": "2013022_Monster_W2_Valkyrie02_Ability01_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
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
    "2013022_Monster_W2_Valkyrie02_Ability01_Part01_FateRin": {
      "fileName": "2013022_Monster_W2_Valkyrie02_Ability01_Part01_FateRin",
      "childAbilityList": [
        "2013022_Monster_W2_Valkyrie02_Ability01_Part01_FateRin",
        "2013022_Monster_W2_Valkyrie02_Ability01_Part02_FateRin",
        "2013022_Monster_W2_Valkyrie02_Ability01_Camera"
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
          "ability": "Monster_W2_Valkyrie02_Ability01_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "2013022_Handling": {
      "fileName": "2013022_Handling",
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
              "value": "Phase01"
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
              "option": "UseSkill01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Valkyrie02_00_AICounter",
                      "value": 1
                    },
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill05",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "<a class=\"gModGreen\" id=\"-1513124665\">Enemy_W2_Valkyrie02_Target_FateRin</a>",
                        "target": null
                      }
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill05"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1206666143\">Enemy_W2_Valkyrie02_DynamicAI_ToastAndEffect_FateRin</a>",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill02",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Valkyrie02_00_AICounter",
                      "value": 1
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "W2_Valkyrie02_00_AICounter",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill02-2",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Valkyrie02_00_AICounter",
                      "value": 2
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "W2_Valkyrie02_00_AICounter",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
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