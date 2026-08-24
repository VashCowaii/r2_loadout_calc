const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012011,
  "trimCharacterName": 5012011,
  "abilityList": [
    "5012011_Modifiers",
    "5012011_Monster_W3_TV_03_Ability02_Part02_FateRin",
    "5012011_Monster_W3_TV_03_Ability02_Part01_FateRin",
    "5012011_Monster_W3_TV_03_Ability01_Part02",
    "5012011_Monster_W3_TV_03_Ability01_Part01",
    "5012011_Handling"
  ],
  "abilityObject": {
    "5012011_Modifiers": {
      "fileName": "5012011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1044186345\">Enemy_W3_TV_03_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
          "modifierFlags": [
            "STAT_CTRL",
            "DisableAction",
            "STAT_CTRL_Shake",
            "IdleStun",
            "STAT_Stun_Effect"
          ],
          "description": "Action delayed. Cannot take actions for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Strong Reverberation",
          "statusName": "Strong Reverberation",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": {
                        "operator": "Variables[0] (MDF_ActionDelayRatio) || RETURN",
                        "displayLines": "MDF_ActionDelayRatio",
                        "constants": [],
                        "variables": [
                          "MDF_ActionDelayRatio"
                        ]
                      },
                      "adjustmentType": "Advance"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelayRatio"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelayRatio"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    "Abort Modifier Phase Action"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Engulfed in Strong Reverberations"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ],
      "references": []
    },
    "5012011_Monster_W3_TV_03_Ability02_Part02_FateRin": {
      "fileName": "5012011_Monster_W3_TV_03_Ability02_Part02_FateRin",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1742127084\">Enemy_W3_TV_03_Ability02_AttackUp</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1742127084\">Enemy_W3_TV_03_Ability02_AttackUp</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "addStacksPerTrigger": 1,
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
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * _Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "5012011_Monster_W3_TV_03_Ability02_Part01_FateRin": {
      "fileName": "5012011_Monster_W3_TV_03_Ability02_Part01_FateRin",
      "childAbilityList": [
        "5012011_Monster_W3_TV_03_Ability02_Part01_FateRin",
        "5012011_Monster_W3_TV_03_Ability02_Part02_FateRin",
        "5012011_Monster_W3_TV_03_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
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
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_TV_03_Ability02_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5012011_Monster_W3_TV_03_Ability01_Part02": {
      "fileName": "5012011_Monster_W3_TV_03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "projectileCount": 1,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5012011_Monster_W3_TV_03_Ability01_Part01": {
      "fileName": "5012011_Monster_W3_TV_03_Ability01_Part01",
      "childAbilityList": [
        "5012011_Monster_W3_TV_03_Ability01_Part01",
        "5012011_Monster_W3_TV_03_Ability01_Part02",
        "5012011_Monster_W3_TV_03_Ability01_Camera"
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
          "ability": "Monster_W3_TV_03_Ability01_Part02",
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
    "5012011_Handling": {
      "fileName": "5012011_Handling",
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