const configAbility = {
  "fileName": "60010_MissionBattleEvent60010_PassiveAbility01",
  "childAbilityList": [
    "60010_MissionBattleEvent60010_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "scope": "TargetEntity",
      "variableName": "BattleEvent_BlackSwan"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"712410455\">MissionBattleEvent60010_PassiveAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2037521246\">MissionBattleEvent60010_Charge</a>",
      "valuePerStack": {
        "MDF_SPValue": {
          "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
          "displayLines": "{[Skill03[3]]}",
          "constants": [],
          "variables": [
            "{[Skill03[3]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1307250275\">MissionBattleEvent60010_AutoUseUltraAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"768878434\">Death_BattleEventAttackUPByMaxHP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1638411891\">Death_BattleEventShow</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1307250275\">MissionBattleEvent60010_AutoUseUltraAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Automatically use Ultimate",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BattleEvent_BlackSwan"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2037521246\">MissionBattleEvent60010_Charge</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Action Holder's Team",
                        "team": "Player Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Skill Type",
                          "skillType": "Ultimate"
                        }
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_SPValue) || RETURN",
                    "displayLines": "MDF_SPValue",
                    "constants": [],
                    "variables": [
                      "MDF_SPValue"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SPValue"
      ],
      "latentQueue": [
        "BattleEvent_BlackSwan"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__712410455\">MissionBattleEvent60010_PassiveAbility</a>",
      "modifierFlags": [
        "BlockDamage",
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "Enter Battle"
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Buff"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Other"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BattleEvent_BlackSwan"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__768878434\">Death_BattleEventAttackUPByMaxHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_BaseHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_BaseAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BaseHP) || Variables[1] (MDF_BaseAttack) || SUB || RETURN",
                "displayLines": "(MDF_BaseHP - MDF_BaseAttack)",
                "constants": [],
                "variables": [
                  "MDF_BaseHP",
                  "MDF_BaseAttack"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BattleEvent_BlackSwan"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1638411891\">Death_BattleEventShow</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
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
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2009115029\">Modifier_StageSpecialAbility_20312051_InBattle</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Enemy ID",
                          "ID": 301402002,
                          "characterName": "Memory Zone Meme \"Something Unto Death\""
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "BattleEvent_BlackSwan",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "MDF_MaxSP"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_MaxSP) || RETURN",
                        "displayLines": "MDF_MaxSP",
                        "constants": [],
                        "variables": [
                          "MDF_MaxSP"
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Stage ID",
                            "ID": 203110050,
                            "compareType": "="
                          },
                          {
                            "name": "Stage ID",
                            "ID": 203110050,
                            "compareType": "="
                          },
                          {
                            "name": "Stage ID",
                            "ID": 203110050,
                            "compareType": "="
                          },
                          {
                            "name": "Stage ID",
                            "ID": 203110050,
                            "compareType": "="
                          },
                          {
                            "name": "Stage ID",
                            "ID": 203110050,
                            "compareType": "="
                          },
                          {
                            "name": "Stage ID",
                            "ID": 203110050,
                            "compareType": "="
                          },
                          {
                            "name": "Stage ID",
                            "ID": 203110050,
                            "compareType": "="
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "BattleEvent_BlackSwan",
                          "value": 1
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "MDF_MaxSP"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "MDF_MaxSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (MDF_MaxSP) || RETURN",
                            "displayLines": "MDF_MaxSP",
                            "constants": [],
                            "variables": [
                              "MDF_MaxSP"
                            ]
                          },
                          "isFixed": "* ERR"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BattleEvent_BlackSwan"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}