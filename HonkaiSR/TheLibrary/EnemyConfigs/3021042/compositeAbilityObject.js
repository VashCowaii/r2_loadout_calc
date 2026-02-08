const compositeAbilityObject = {
  "fullCharacterName": 3021042,
  "trimCharacterName": 3021042,
  "abilityList": [
    "3021042_Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Part01",
    "3021042_Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Insert",
    "3021042_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Part01",
    "3021042_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Insert",
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02_Assist",
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01_Assist",
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02",
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01",
    "3021042_Monster_W2_ArgentiTotem_01_IF_PassiveAbilityInitiate",
    "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Part01",
    "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Insert",
    "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part02",
    "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part01",
    "3021042_Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
    "3021042_Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
    "3021042_Monster_W2_ArgentiTotem_02_IF_PassiveAbilityInitiate",
    "3021042_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
    "3021042_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
    "3021042_Monster_W2_ArgentiTotem_IF_Ability01_Part02",
    "3021042_Monster_W2_ArgentiTotem_IF_Ability01_Part01",
    "3021042_Monster_W2_ArgentiTotem_IF_ForceKill_Part02",
    "3021042_Monster_W2_ArgentiTotem_IF_ForceKill_Part01",
    "3021042_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02",
    "3021042_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01",
    "3021042_Monster_W2_ArgentiTotem_IF_PassiveAbilityInitiate",
    "3021042_Modifiers",
    "3021042_Functions"
  ],
  "abilityObject": {
    "3021042_Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag02",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1869945151\">Enemy_W2_Argenti_IF_Power_Trigger</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCount02",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Insert": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Monster_IF_InsertCount02",
          "context": "TargetEntity",
          "value": -1,
          "max": 100
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag02",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            "Deleted bullshit"
          ]
        },
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
          "ability": "Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Part01",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag02",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag02",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag",
              "value": 0
            }
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag02",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1173935247\">DeathCamera_First</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-444895536\">W2_ArgentiTotem_01_BattleScore1</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1869945151\">Enemy_W2_Argenti_IF_Power_Trigger</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCount02",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Insert": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Monster_IF_InsertCount02",
          "context": "TargetEntity",
          "value": -1,
          "max": 100
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag02",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1173935247\">DeathCamera_First</a>"
            }
          ]
        },
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
          "ability": "Monster_W2_ArgentiTotem_01_IF_AbilityP01_Part01",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag02",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag02",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag",
              "value": 0
            }
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02_Assist": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1768656268\">Enemy_W2_Argenti_IF_EX_PowerUpDark</a>[<span class=\"descriptionNumberColor\">Regain Enhancement</span>]",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01_Assist": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part02_Assist",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1768656268\">Enemy_W2_Argenti_IF_EX_PowerUpDark</a>[<span class=\"descriptionNumberColor\">Regain Enhancement</span>]",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1546767870\">Monster_W2_Argenti_IF_FlowerPower</a>[<span class=\"descriptionNumberColor\">Wreath</span>]",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1851629784\">Enemy_W2_ArgentiTotem_01_IF_Initiate</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part02",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_01_IF_PassiveAbilityInitiate": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1851629784\">Enemy_W2_ArgentiTotem_01_IF_Initiate</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1914692042\">Enemy_W2_Argenti_IF_Power_Mute</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1851629784\">Enemy_W2_ArgentiTotem_01_IF_Initiate</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "PowerFlag"
                            }
                          }
                        ]
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_ArgentiTotem_01_IF_AbilityP01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1173935247\">DeathCamera_First</a>"
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Imitation of Alacritous Desire"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PowerFlag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "PowerFlag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1174449239\">W2_ArgentiTotem_02_BattleScore1</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]"
                  },
                  "passed": [
                    {
                      "name": "Adjust Shield",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierNameArray": [
                        "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]"
                      ],
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                        "displayLines": "({[SkillP01[0]]} * _MaxHP)",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}",
                          "_MaxHP"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                      "duration": 2,
                      "valuePerStack": {
                        "MDF_ShowValue": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                          "displayLines": "({[SkillP01[0]]} * _MaxHP)",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}",
                            "_MaxHP"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                      "duration": 2,
                      "valuePerStack": {
                        "MDF_ShowValue": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                          "displayLines": "({[SkillP01[0]]} * _MaxHP)",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}",
                            "_MaxHP"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "Adjust Shield",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierNameArray": [
                        "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]"
                      ],
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                        "displayLines": "({[SkillP01[0]]} * _MaxHP)",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}",
                          "_MaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Adjust Shield",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierNameArray": [
                        "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]"
                      ],
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                        "displayLines": "({[SkillP01[0]]} * _MaxHP)",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}",
                          "_MaxHP"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                      "duration": 2,
                      "valuePerStack": {
                        "MDF_ShowValue": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                          "displayLines": "({[SkillP01[0]]} * _MaxHP)",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}",
                            "_MaxHP"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCount",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Insert": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Monster_IF_InsertCount",
          "context": "TargetEntity",
          "value": -1,
          "max": 100
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
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
          "ability": "Monster_W2_ArgentiTotem_02_IF_AbilityP01_Part01",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag02",
              "value": 0
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1173935247\">DeathCamera_First</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part02": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": -1,
              "valuePerStack": {
                "MDF_ShowValue": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                  "displayLines": "({[Skill01[1]]} * _MaxHP)",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}",
                    "_MaxHP"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": -1,
              "valuePerStack": {
                "MDF_ShowValue": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * _MaxHP)",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}",
                    "_MaxHP"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part01",
      "childAbilityList": [
        "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part01",
        "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part02",
        "3021042_Monster_W2_ArgentiTotem_02_Ability01_Camera",
        "3021042_Monster_W2_ArgentiTotem_02_Ability02_Camera",
        "3021042_Monster_W2_ArgentiTotem_02_AbilityP01_Insert",
        "3021042_Monster_W2_ArgentiTotem_02_AbilityP01_Part01",
        "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Insert",
        "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Part01",
        "3021042_Monster_W2_ArgentiTotem_02_AbilityP01_Camera",
        "3021042_Monster_W2_ArgentiTotem_02_IF_AbilityP02_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_02_Ability01_IF_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "PowerFlag"
              },
              "ifTargetFound": [
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "PowerFlag"
              },
              "ifTargetFound": [
                "Deleted bullshit"
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
      "abilityType": null,
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
            "modifier": "<a class=\"gModGreen\" id=\"1783897766\">Monster_W2_Argenti_IF_Summon01</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1502513574\">Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                  "duration": -1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1767120147\">Monster_W2_Argenti_IF_Summon02</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1084859487\">Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                  "duration": -1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1750342528\">Monster_W2_Argenti_IF_Summon03</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-518883080\">Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                  "duration": -1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1867785861\">Monster_W2_Argenti_IF_Summon04</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1407152047\">Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                  "duration": -1
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": -1,
              "valuePerStack": {
                "MDF_ShowValue": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                  "displayLines": "({[Skill01[1]]} * _MaxHP)",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}",
                    "_MaxHP"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": -1,
              "valuePerStack": {
                "MDF_ShowValue": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] (_MaxHP) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * _MaxHP)",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}",
                    "_MaxHP"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_02_IF_PassiveAbilityInitiate": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_02_IF_PassiveAbilityInitiate",
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2041202953\">Enemy_W2_ArgentiTotem_02_IF_Initiate</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2041202953\">Enemy_W2_ArgentiTotem_02_IF_Initiate</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PowerFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "PowerFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
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
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Monster_IF_InsertCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 100
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "PowerFlag"
                            }
                          }
                        ]
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_ArgentiTotem_02_IF_AbilityP01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3021042_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Amor of Destined Death"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PowerFlag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "PowerFlag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"64663457\">W2_ArgentiTotem_BattleScore1</a>"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_5) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_5 * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    "UnusedUnderThisBase_5"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (UnusedUnderThisBase_6) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_6 * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    "UnusedUnderThisBase_6"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_5) || Constants[0] (0.7) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_5 * 0.7)",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "UnusedUnderThisBase_5"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (UnusedUnderThisBase_6) || Constants[0] (0.7) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_6 * 0.7)",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "UnusedUnderThisBase_6"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "compareType": ">",
                "value2": 0
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (UnusedUnderThisBase_8) || RETURN",
                  "displayLines": "UnusedUnderThisBase_8",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_8"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCount",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Monster_IF_InsertCount",
          "context": "TargetEntity",
          "value": -1,
          "max": 100
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag02",
              "value": 0
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_Ability01_Part02": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "_TargetNum"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_TargetNum) || RETURN",
                "displayLines": "_TargetNum",
                "constants": [],
                "variables": [
                  "_TargetNum"
                ]
              },
              "Event": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_4) || Constants[0] (0.5) || MUL || RETURN",
                          "displayLines": "(UnusedUnderThisBase_4 * 0.5)",
                          "constants": [
                            0.5
                          ],
                          "variables": [
                            "UnusedUnderThisBase_4"
                          ]
                        },
                        "Toughness": null,
                        "ToughnessDMGType": {
                          "DamageType": "Physical"
                        },
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "50%"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_4 * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "UnusedUnderThisBase_4"
                  ]
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ],
          "failed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_TargetNum) || RETURN",
                "displayLines": "_TargetNum",
                "constants": [],
                "variables": [
                  "_TargetNum"
                ]
              },
              "Event": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                          "displayLines": "UnusedUnderThisBase_3",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_3"
                          ]
                        },
                        "Toughness": null,
                        "ToughnessDMGType": {
                          "DamageType": "Physical"
                        },
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3021042_Monster_W2_ArgentiTotem_IF_Ability01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_ForceKill_Part02": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_ForceKill_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_ForceKill_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_ForceKill_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_ForceKill_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true,
          "toRemove": [
            "STAT_CTRL",
            "DisableAction",
            "Break"
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "3021042_Monster_W2_ArgentiTotem_IF_PassiveAbilityInitiate": {
      "fileName": "3021042_Monster_W2_ArgentiTotem_IF_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1639070947\">Enemy_W2_ArgentiTotem_IF_Initiate</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1639070947\">Enemy_W2_ArgentiTotem_IF_Initiate</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PowerFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
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
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Monster_IF_InsertCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 100
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "PowerFlag"
                            }
                          }
                        ]
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3021042_Modifiers": {
      "fileName": "3021042_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue) || RETURN",
                    "displayLines": "MDF_ShowValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            }
          ],
          "stackData": [
            "MDF_ShowValue"
          ],
          "latentQueue": [],
          "description": "Gains a Shield that can offset DMG.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1652361404\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange07</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Imaginary",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1635583785\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange06</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Quantum",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1618806166\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange05</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Wind",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1602028547\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange04</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Thunder",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1719471880\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange03</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Ice",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1702694261\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Fire",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1685916642\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange01</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
          "stackType": "Replace",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "Taunt",
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1685916642\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange01</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1702694261\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange02</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1719471880\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange03</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1602028547\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange04</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1618806166\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange05</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1635583785\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange06</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1652361404\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange07</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Can only select %CasterName as the target to attack.",
          "type": "Debuff",
          "effectName": "Taunt",
          "statusName": "Taunt"
        }
      ],
      "references": []
    },
    "3021042_Functions": {
      "fileName": "3021042_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1173935247\">DeathCamera_First</a>",
          "parse": []
        }
      ],
      "references": []
    }
  }
}