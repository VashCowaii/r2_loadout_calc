const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2022110,
  "trimCharacterName": 2022110,
  "abilityList": [
    "2022110_Monster_W2_Valkyrie01_01_AbilityP01",
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02",
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01",
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02",
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01",
    "2022110_Handling"
  ],
  "abilityObject": {
    "2022110_Monster_W2_Valkyrie01_01_AbilityP01": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_AbilityP01",
      "childAbilityList": [
        "2022110_Monster_W2_Valkyrie01_01_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1604945835\">Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack</a>[<span class=\"descriptionNumberColor\">Maddened</span>]"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1604945835\">Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack</a>[<span class=\"descriptionNumberColor\">Maddened</span>]",
          "description": "Attack changes to Sawing Evil: Sever.",
          "type": "Buff",
          "effectName": "Maddened",
          "statusName": "Maddened",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        }
      ]
    },
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02",
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
            "DamageType": "Wind",
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
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
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
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01",
      "childAbilityList": [
        "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01",
        "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02",
        "2022110_Monster_W2_Valkyrie01_01_Ability02_Camera"
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
          "ability": "Monster_W2_Valkyrie01_01_Ability02_Part02",
          "isTrigger": true
        },
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
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02",
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
            "DamageType": "Wind",
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
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01",
      "childAbilityList": [
        "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01",
        "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02",
        "2022110_Monster_W2_Valkyrie01_01_Ability01_Camera"
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
          "ability": "Monster_W2_Valkyrie01_01_Ability01_Part02",
          "isTrigger": true
        },
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
    "2022110_Handling": {
      "fileName": "2022110_Handling",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1604945835\">Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack</a>[<span class=\"descriptionNumberColor\">Maddened</span>]",
                        "invertCondition": true
                      }
                    ]
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
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1604945835\">Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack</a>[<span class=\"descriptionNumberColor\">Maddened</span>]"
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