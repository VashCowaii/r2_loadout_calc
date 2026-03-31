const configAbility = {
  "fileName": "60028_MissionBattleEvent60028_PassiveAbility01",
  "childAbilityList": [
    "60028_MissionBattleEvent60028_PassiveAbility01"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"318553874\">MissionBattleEvent60028_PassiveAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1627847045\">MissionBattleEvent60028_Charge</a>",
      "valuePerStack": {
        "MDF_SPValue": 8
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1546986120\">MissionBattleEvent60028_AutoUseUltraAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"768878434\">Death_BattleEventAttackUPByMaxHP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1627847045\">MissionBattleEvent60028_Charge</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
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
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]"
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End"
        },
        {
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Tutorial",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1014,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Saber"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"121064899\">Modifier_StageSpecialAbility_10441217_BanUltra</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1014,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Saber"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1578480323\">Modifier_StageSpecialAbility_10441217_ForceActionable</a>"
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
      "stackData": [
        "MDF_SPValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__318553874\">MissionBattleEvent60028_PassiveAbility</a>",
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Character ID",
                "ID": 1014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Saber"
              },
              "ifTargetFound": [
                {
                  "name": "Show BattleEvent Button",
                  "show": true
                }
              ],
              "noTargetFound": [
                "Show BattleEvent Button"
              ]
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valuePercent": 0.84,
              "isFixed": "(Fixed)"
            }
          ]
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
      "latentQueue": []
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1546986120\">MissionBattleEvent60028_AutoUseUltraAbility</a>",
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
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}