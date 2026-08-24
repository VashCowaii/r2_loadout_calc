const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4012075,
  "trimCharacterName": 4012075,
  "abilityList": [
    "4012075_Monster_W4_PolluxPart_Revive_FateRin",
    "4012075_Monster_W4_PolluxPart_PassiveAbility_Initiate_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability02_L_Part02_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability02_L_Part01_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability01_L_Part02_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability01_L_Part01_FateRin",
    "4012075_Handling"
  ],
  "abilityObject": {
    "4012075_Monster_W4_PolluxPart_Revive_FateRin": {
      "fileName": "4012075_Monster_W4_PolluxPart_Revive_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2128016831\">FateRin_ResetFormation</a>",
          "variables": {
            "OnlyCamera": 1
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1045360944\">Monster_W4_PolluxPart_Shield_FateRin</a>"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "healPercent": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": 1,
          "formula": "Heal from Target MaxHP"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4012075_Monster_W4_PolluxPart_PassiveAbility_Initiate_FateRin": {
      "fileName": "4012075_Monster_W4_PolluxPart_PassiveAbility_Initiate_FateRin",
      "skillTrigger": "Passive",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-762371701\">Monster_W4_PolluxPart_Status_FateRin</a>"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-602390745\">Monster_W4_PolluxPart_Disable_FateRin</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "Activity_FateRin_BigTurn_LightTeamAgent"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1880637823\">Modifier_FateRin_MonsterPreview_PreCal</a>",
                  "valuePerStack": {
                    "#CL_PreShowValue": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-762371701\">Monster_W4_PolluxPart_Status_FateRin</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1045360944\">Monster_W4_PolluxPart_Shield_FateRin</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-602390745\">Monster_W4_PolluxPart_Disable_FateRin</a>",
                  "duration": 1
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W4_PolluxPart_Revive_FateRin",
                  "priorityTag": "CharacterReviveSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    "4012075_Monster_W4_PolluxPart_Ability02_L_Part02_FateRin": {
      "fileName": "4012075_Monster_W4_PolluxPart_Ability02_L_Part02_FateRin",
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
            "DamageType": "Quantum",
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012075_Monster_W4_PolluxPart_Ability02_L_Part01_FateRin": {
      "fileName": "4012075_Monster_W4_PolluxPart_Ability02_L_Part01_FateRin",
      "childAbilityList": [
        "4012075_Monster_W4_PolluxPart_Ability02_L_Part01_FateRin",
        "4012075_Monster_W4_PolluxPart_Ability02_L_Part02_FateRin",
        "4012075_Monster_W4_PolluxPart_Ability02_L_Camera_FateRin"
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
          "ability": "Monster_W4_PolluxPart_Ability02_L_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "4012075_Monster_W4_PolluxPart_Ability01_L_Part02_FateRin": {
      "fileName": "4012075_Monster_W4_PolluxPart_Ability01_L_Part02_FateRin",
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
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012075_Monster_W4_PolluxPart_Ability01_L_Part01_FateRin": {
      "fileName": "4012075_Monster_W4_PolluxPart_Ability01_L_Part01_FateRin",
      "childAbilityList": [
        "4012075_Monster_W4_PolluxPart_Ability01_L_Part01_FateRin",
        "4012075_Monster_W4_PolluxPart_Ability01_L_Part02_FateRin",
        "4012075_Monster_W4_PolluxPart_Ability01_L_Camera_FateRin"
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
          "ability": "Monster_W4_PolluxPart_Ability01_L_Part02_FateRin",
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
    "4012075_Handling": {
      "fileName": "4012075_Handling",
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
                  "passedValue": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1045360944\">Monster_W4_PolluxPart_Shield_FateRin</a>",
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
                  "passedValue": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1045360944\">Monster_W4_PolluxPart_Shield_FateRin</a>"
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