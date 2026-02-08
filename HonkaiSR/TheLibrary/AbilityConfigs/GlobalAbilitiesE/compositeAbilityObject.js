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
          "modifier": "<a class=\"gModGreen\" id=\"-1581220157\">TriggerStanceCountDown_Monster</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-887060833\">Standard_BOSSInfoBar_Active</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-887060833\">Standard_BOSSInfoBar_Active</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1985606354\">RemoveOneMorePerturn</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1985606354\">RemoveOneMorePerturn</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-629569625\">Monster_Aventurine_GamblingStart</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-629569625\">Monster_Aventurine_GamblingStart</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1846590132\">Monster_XP_Minion04_Huge</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1846590132\">Monster_XP_Minion04_Huge</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1825644415\">Monster_Junk_Special_ChangeWidth</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1825644415\">Monster_Junk_Special_ChangeWidth</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1381171644\">WEnemy_Standard_HitAddStun</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1381171644\">WEnemy_Standard_HitAddStun</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1162946172\">Standard_CTRL_Stun</a>[<span class=\"descriptionNumberColor\">Stunned</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"665673273\">Standard_Formation2_Back</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__665673273\">Standard_Formation2_Back</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1503068653\">Enemy_SpecialDieEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1503068653\">Enemy_SpecialDieEffect</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1503068653\">Enemy_SpecialDieEffect</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1503068653\">Enemy_SpecialDieEffect</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1010816158\">Local_MuteHitFly</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1010816158\">Local_MuteHitFly</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-954371893\">Straight_AIControl</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-954371893\">Straight_AIControl</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-477903589\">RO_015_DeadTimeSlowModifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-477903589\">RO_015_DeadTimeSlowModifier</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1767736831\">Local_ListenStanceBreak</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-694687667\">Local_ListenRedStance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1705654267\">MonsterAllDamageReduce</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1581220157\">TriggerStanceCountDown_Monster</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-694687667\">Local_ListenRedStance</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1775147687\">RedStanceState</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1775147687\">RedStanceState</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1767736831\">Local_ListenStanceBreak</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1705654267\">MonsterAllDamageReduce</a>"
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