const configAbility = {
  "fileName": "8012040_Monster_W5_Shell_AbilityP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"597793268\">Enemy_W5_Shell_Deathrattle</a>[<span class=\"descriptionNumberColor\">Ensemble Slapstick</span>]"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Target Exists",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "W5_Shell_Attack"
        },
        "living": true
      },
      "failed": [
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20047,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-368521336\">Enemy_W5_Shell_BESpeed</a>",
              "valuePerStack": {
                "MDF_Speed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                }
              }
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "W5_Shell_Attack",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W5_Shell_Restart"
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W5_Shell_Deathrattle",
      "parameters": {
        "P1_ShieldPercentage": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      }
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
      "for": "<a class=\"gModGreen\" id=\"mod__597793268\">Enemy_W5_Shell_Deathrattle</a>[<span class=\"descriptionNumberColor\">Ensemble Slapstick</span>]",
      "modifierFlags": [
        "Deathrattle"
      ],
      "description": "All Comediologists will attack together.",
      "type": "Other",
      "statusName": "Ensemble Slapstick",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "W5_Shell_AttackControl",
              "state": false
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>",
                    "invertCondition": true
                  },
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W5_Shell_Deathrattle",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "priorityTag": "EnemyDeathTogether",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1432687016\">Enemy_W5_Shell_LightTeam_Shield_Stack</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage_Add": {
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage": {
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_Shell_Deathrattle_Part01",
              "priorityTag": "EnemyDeathEffect",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "UNKNOWN_OBJECT_BOOLEAN_112751675"
              },
              "noTargetFound": [
                {
                  "name": "Destroy Battle Entity",
                  "identifier": "W5_Shell_Attack"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-368521336\">Enemy_W5_Shell_BESpeed</a>",
      "stackType": "Replace",
      "stackData": [
        "MDF_Speed"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Speed) || RETURN",
                "displayLines": "MDF_Speed",
                "constants": [],
                "variables": [
                  "MDF_Speed"
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}