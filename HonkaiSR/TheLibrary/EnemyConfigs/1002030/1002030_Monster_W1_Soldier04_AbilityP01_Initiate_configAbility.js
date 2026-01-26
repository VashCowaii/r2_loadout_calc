const configAbility = {
  "fileName": "1002030_Monster_W1_Soldier04_AbilityP01_Initiate",
  "childAbilityList": [
    "1002030_Monster_W1_Soldier04_AbilityP01_Initiate",
    "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_ListenAttack",
    "1002030_Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 100203010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Silvermane Cannoneer"
          },
          {
            "name": "Enemy ID",
            "ID": 100203010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Silvermane Cannoneer"
          }
        ]
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier04_AbilityP01_EnterBattle"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateAttack"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateDie"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenSelfDie"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_ListenSelfBreak"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "CurrentSupportNumber"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Soldier04_AbilityP01_ListenSelfBreak",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "CurrentSupportNumber"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Soldier04_AbilityP01_ListenSelfDie",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateDie",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "TaskList_W1_Soldier04_AbilityP01_OnDieOrEscape"
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "TaskList_W1_Soldier04_AbilityP01_OnDieOrEscape"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_W1_Soldier04_AbilityP01_OnDieOrEscape",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "CurrentSupportNumber",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 99
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentSupportNumber",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Soldier04_AbilityP01_ListenTeamMateAttack",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "STAT_CTRL"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "Break"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "DisableAction"
                        }
                      ]
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Soldier04_AbilityP01_InsertAbility_ListenAttack",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackOthers",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "Break",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_SupportAttackTarget"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CurrentSupportNumber",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 99
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentSupportNumber",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Soldier04_AbilityP01_EnterBattle",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_Soldier04_AbilityP01_InsertAbility_EnterBattle",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -55
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}