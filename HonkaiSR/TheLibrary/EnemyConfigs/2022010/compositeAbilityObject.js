const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2022010,
  "trimCharacterName": 2022010,
  "abilityList": [
    "2022010_Modifiers",
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00",
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
    "2022010_Monster_W2_Abomi01_Passive01",
    "2022010_Monster_W2_Abomi01_Ability02_Part02",
    "2022010_Monster_W2_Abomi01_Ability02_Part01",
    "2022010_Monster_W2_Abomi01_Ability01_Part02",
    "2022010_Monster_W2_Abomi01_Ability01_Part01",
    "2022010_Handling",
    "2022010_Handling_OVERRIDE_202201001",
    "2022010_Handling_OVERRIDE_202201002",
    "2022010_Handling_OVERRIDE_202201003",
    "2022010_Handling_OVERRIDE_202201015"
  ],
  "abilityObject": {
    "2022010_Modifiers": {
      "fileName": "2022010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "description": "SPD Increased.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedRatio) || RETURN",
                    "displayLines": "MDF_SpeedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-870035928\">Monster_W2_Abomi01_LockHP</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]",
          "description": "Upon receiving a killing blow, restores a certain amount of HP.",
          "type": "Buff",
          "effectName": "Rebirth",
          "statusName": "Rebirth",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W2_Abomi01_00_ReviveEff",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
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
                        "value1": "Monster_W2_Abomi01_00_ReviveTimes",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
                          "priorityTag": "EnemyReviveSelf",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 202201010,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Mara-Struck Soldier"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 202201010,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Mara-Struck Soldier"
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "Monster_W2_Abomi01_00_ReviveTimes"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -50
            },
            {
              "eventTrigger": "Fatal Damage [Owner]: Start",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1865884989\">Monster_W2_Abomi01_DanHeng_Hide</a>",
          "useEntitySnapshot": true
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1907438637\">Monster_W2_Abomi01_BeingHit</a>",
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
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
          "silent": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W2_Abomi01_00_HitFlyFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "SkillP01",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
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
                          "modifier": "<a class=\"gModGreen\" id=\"345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                          "valuePerStack": {
                            "MDF_SpeedRatio": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          }
                        }
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
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Monster_W2_Abomi01_00_ReviveEff"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[0]]}"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "SkillP04",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Monster_W2_Abomi01_00_ReviveEff"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                          "valuePerStack": {
                            "MDF_SpeedRatio": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[0]]}"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00": {
      "fileName": "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
          "priorityTag": "EnemyReviveSelf",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2022010_Monster_W2_Abomi01_Passive01": {
      "fileName": "2022010_Monster_W2_Abomi01_Passive01",
      "childAbilityList": [
        "2022010_Monster_W2_Abomi01_Passive01",
        "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
        "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00",
        "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01"
      ],
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2059655878\">Monster_W2_Abomi01_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"686723873\">Monster_W2_Abomi01_HitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1592917856\">Monster_W2_Abomi01_Sushang</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1968583742\">Monster_W2_Abomi01_DanHeng</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1913097491\">Monster_W2_Abomi01_Standard_Servant</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-508592004\">Monster_W2_Abomi01_IsHit</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__686723873\">Monster_W2_Abomi01_HitFly</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2059655878\">Monster_W2_Abomi01_Break</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_W2_Abomi01_00_BreakFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_W2_Abomi01_00_BreakFlag"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1539118036\">Monster_W2_Abomi01_BattleRage</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyBattleCry",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -45
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1968583742\">Monster_W2_Abomi01_DanHeng</a>",
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1002,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Dan Heng"
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1865884989\">Monster_W2_Abomi01_DanHeng_Hide</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1592917856\">Monster_W2_Abomi01_Sushang</a>",
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Sushang"
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1913097491\">Monster_W2_Abomi01_Standard_Servant</a>",
          "useEntitySnapshot": true
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-508592004\">Monster_W2_Abomi01_IsHit</a>",
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1907438637\">Monster_W2_Abomi01_BeingHit</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    "2022010_Monster_W2_Abomi01_Ability02_Part02": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
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
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
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
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
            "displayLines": "{[Skill01[4]]}",
            "constants": [],
            "variables": [
              "{[Skill01[4]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2022010_Monster_W2_Abomi01_Ability02_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability02_Part01",
      "childAbilityList": [
        "2022010_Monster_W2_Abomi01_Ability02_Camera",
        "2022010_Monster_W2_Abomi01_Ability02_Part01",
        "2022010_Monster_W2_Abomi01_Ability02_Part02"
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
          "ability": "Monster_W2_Abomi01_Ability02_Part02",
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
    "2022010_Monster_W2_Abomi01_Ability01_Part02": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
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
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
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
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
            "displayLines": "{[Skill01[4]]}",
            "constants": [],
            "variables": [
              "{[Skill01[4]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2022010_Monster_W2_Abomi01_Ability01_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability01_Part01",
      "childAbilityList": [
        "2022010_Monster_W2_Abomi01_Ability01_Camera",
        "2022010_Monster_W2_Abomi01_Ability01_Part01",
        "2022010_Monster_W2_Abomi01_Ability01_Part02"
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
          "ability": "Monster_W2_Abomi01_Ability01_Part02",
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
    "2022010_Handling": {
      "fileName": "2022010_Handling",
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
              "value": "W2_Abomi02_00_Phase01"
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
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill01",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 0.1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "2022010_Handling_OVERRIDE_202201001": {
      "fileName": "2022010_Handling_OVERRIDE_202201001",
      "abilityType": "Handling_202201001",
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
              "value": "W2_Abomi02_00_Phase01"
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
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill01",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 0.1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "2022010_Handling_OVERRIDE_202201002": {
      "fileName": "2022010_Handling_OVERRIDE_202201002",
      "abilityType": "Handling_202201002",
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
              "value": "W2_Abomi02_00_Phase01"
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
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill01",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 0.1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "2022010_Handling_OVERRIDE_202201003": {
      "fileName": "2022010_Handling_OVERRIDE_202201003",
      "abilityType": "Handling_202201003",
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
              "value": "W2_Abomi02_00_Phase01"
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
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill01",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 0.1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "2022010_Handling_OVERRIDE_202201015": {
      "fileName": "2022010_Handling_OVERRIDE_202201015",
      "abilityType": "Handling_202201015",
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
              "value": "W2_Abomi02_00_Phase01"
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
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill01",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 0.1
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