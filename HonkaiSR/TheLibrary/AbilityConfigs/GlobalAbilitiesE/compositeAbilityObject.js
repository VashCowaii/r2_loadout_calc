const compositeAbilityObject = {
  "fullCharacterName": "Global Abilities: Enemies",
  "trimCharacterName": "GlobalAbilitiesE",
  "abilityList": [
    "GlobalAbilitiesE_Monster_Standard_Suicide_StanceBreak",
    "GlobalAbilitiesE_Monster_Standard_BossInfoBar",
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_RemoveOneMorePerturn",
    "GlobalAbilitiesE_Monster_Aventurine_GamblingStart",
    "GlobalAbilitiesE_Monster_XP_Minion04_Huge",
    "GlobalAbilitiesE_Monster_Junk_Special_ChangeWidth",
    "GlobalAbilitiesE_WMonster_Standard_HitAddStun",
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_Formation2_Back",
    "GlobalAbilitiesE_Monster_Standard_SpecialDieEffect2",
    "GlobalAbilitiesE_Monster_Standard_SpecialDieEffect",
    "GlobalAbilitiesE_Monster_Standard_AutoCenter",
    "GlobalAbilitiesE_Monster_Standard_MuteHitFly",
    "GlobalAbilitiesE_Monster_Blood_Link_Group1_Insert",
    "GlobalAbilitiesE_Monster_Standard_AIControlAndHPLock",
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_DeadTimeSlow",
    "GlobalAbilitiesE_Monster_Standard_Fever_Action",
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_StanceBreak_Action"
  ],
  "abilityObject": {
    "GlobalAbilitiesE_Monster_Standard_Suicide_StanceBreak": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_Suicide_StanceBreak",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "TriggerStanceCountDown_Monster"
        }
      ],
      "whenAdded": [],
      "references": []
    },
    "GlobalAbilitiesE_Monster_Standard_BossInfoBar": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_BossInfoBar",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "modifier": "Standard_BOSSInfoBar_Active"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Standard_BOSSInfoBar_Active",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_RemoveOneMorePerturn": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_PassiveAbility_RemoveOneMorePerturn",
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
          "modifier": "RemoveOneMorePerturn"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "RemoveOneMorePerturn",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "OneMorePerTurn"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "OneMore"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "OneMorePerTurn"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "OneMore"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Aventurine_GamblingStart": {
      "fileName": "GlobalAbilitiesE_Monster_Aventurine_GamblingStart",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Aventurine_GamblingStart"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_Aventurine_GamblingStart",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_XP_Minion04_Huge": {
      "fileName": "GlobalAbilitiesE_Monster_XP_Minion04_Huge",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_XP_Minion04_Huge"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Minion04_Huge",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Junk_Special_ChangeWidth": {
      "fileName": "GlobalAbilitiesE_Monster_Junk_Special_ChangeWidth",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Junk_Special_ChangeWidth"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_Junk_Special_ChangeWidth",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_WMonster_Standard_HitAddStun": {
      "fileName": "GlobalAbilitiesE_WMonster_Standard_HitAddStun",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WEnemy_Standard_HitAddStun"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "WEnemy_Standard_HitAddStun",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "Standard_CTRL_Stun[<span class=\"descriptionNumberColor\">Stunned</span>]",
                  "duration": 1,
                  "baseChance": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_Formation2_Back": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_PassiveAbility_Formation2_Back",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Standard_Formation2_Back"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Standard_Formation2_Back",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "row": 1
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Standard_SpecialDieEffect2": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_SpecialDieEffect2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_SpecialDieEffect"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_SpecialDieEffect",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase_SpecialDieEffect"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Standard_SpecialDieEffect": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_SpecialDieEffect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "DieInsert_Flag[?]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_SpecialDieEffect"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_SpecialDieEffect",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase_SpecialDieEffect"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Standard_AutoCenter": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_AutoCenter",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "GlobalAbilitiesE_Monster_Standard_MuteHitFly": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_MuteHitFly",
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
          "modifier": "Local_MuteHitFly"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Local_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Blood_Link_Group1_Insert": {
      "fileName": "GlobalAbilitiesE_Monster_Blood_Link_Group1_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{HP-Share Family}}"
          }
        }
      ],
      "references": []
    },
    "GlobalAbilitiesE_Monster_Standard_AIControlAndHPLock": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_AIControlAndHPLock",
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
          "modifier": "Straight_AIControl"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Straight_AIControl",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Phase_Flag",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "min": 1,
                      "max": 4
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": ">",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "min": 1,
                      "max": 6
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": ">",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
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
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_DeadTimeSlow": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_PassiveAbility_DeadTimeSlow",
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
          "modifier": "RO_015_DeadTimeSlowModifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "RO_015_DeadTimeSlowModifier",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilitiesE_Monster_Standard_Fever_Action": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_Fever_Action",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "GlobalAbilitiesE_Monster_Standard_PassiveAbility_StanceBreak_Action": {
      "fileName": "GlobalAbilitiesE_Monster_Standard_PassiveAbility_StanceBreak_Action",
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
          "modifier": "Local_ListenStanceBreak"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Local_ListenRedStance"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MonsterAllDamageReduce"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "TriggerStanceCountDown_Monster"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Local_ListenRedStance",
          "execute": [
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "RedStanceState"
                }
              ]
            },
            {
              "eventTrigger": "Entering Exo-Toughness Bar [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "RedStanceState"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Local_ListenStanceBreak",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "StanceBreakState"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MonsterAllDamageReduce"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}