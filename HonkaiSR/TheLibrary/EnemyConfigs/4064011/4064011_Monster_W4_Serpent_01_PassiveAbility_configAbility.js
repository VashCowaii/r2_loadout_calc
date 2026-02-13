const configAbility = {
  "fileName": "4064011_Monster_W4_Serpent_01_PassiveAbility",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Assign Unique Name",
      "uniqueName": "W4_Serpent_01",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "RLBoss"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1413842812\">Enemy_W4_Serpent_01_RLBoss_ChangePhaseController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-227770037\">Monster_W4_Serpent_01_RLBoss_Passive</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkillInitiate02[0]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate02[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate02[0]]}"
              ]
            }
          }
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20038
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "dmgCountsForTeam": "Enemy Team",
          "eventID": 20038,
          "variables": null,
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1234779090\">Enemy_W4_Serpent_01_PickUpMessage</a>"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4064013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Ichor Memosprite: Judge of Oblivion",
            "isBaseCompare": true,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2038153082\">Enemy_W4_Serpent_01_ChangePhaseController</a>"
            }
          ]
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20030
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "dmgCountsForTeam": "Enemy Team",
          "eventID": 20030,
          "variables": null,
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1234779090\">Enemy_W4_Serpent_01_PickUpMessage</a>"
            },
            "Show BattleEvent Button"
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-501224004\">Enemy_W4_Serpent_01_Passive</a>",
      "valuePerStack": {
        "MDF_AllDamageReduce": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[0]]}"
          ]
        },
        "MDF_ActionDelay": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[1]]}"
          ]
        },
        "MDF_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[2]]}"
          ]
        },
        "MDF_DamagePercentage": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[3]]}"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1234779090\">Enemy_W4_Serpent_01_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1413842812\">Enemy_W4_Serpent_01_RLBoss_ChangePhaseController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ChangePhase",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhase"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Serpent_01_ChangePhase1",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ChangePhase",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ChangePhase"
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Serpent_01_ChangePhase1",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2038153082\">Enemy_W4_Serpent_01_ChangePhaseController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ChangePhase",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ChangePhase"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Serpent_01_ChangePhase1",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}