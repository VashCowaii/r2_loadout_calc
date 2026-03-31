const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60036,
  "trimCharacterName": 60036,
  "abilityList": [
    "60036_BattleEventAbility_60020_Camera",
    "60036_MissionBattleEvent60020_PassiveAbility01",
    "60036_MissionBattleEvent60020_Ability03_Part02",
    "60036_MissionBattleEvent60020_Ability03_Part01",
    "60036_Modifiers"
  ],
  "abilityObject": {
    "60036_BattleEventAbility_60020_Camera": {
      "fileName": "60036_BattleEventAbility_60020_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "60036_MissionBattleEvent60020_PassiveAbility01": {
      "fileName": "60036_MissionBattleEvent60020_PassiveAbility01",
      "childAbilityList": [
        "60036_MissionBattleEvent60020_PassiveAbility01"
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
          "modifier": "<a class=\"gModGreen\" id=\"1416567450\">MissionBattleEvent60020_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-867638461\">MissionBattleEvent60020_Charge</a>",
          "valuePerStack": {
            "MDF_SPValue": 10
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2011183040\">MissionBattleEvent60020_AutoUseUltraAbility</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-867638461\">MissionBattleEvent60020_Charge</a>",
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
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"998450039\">Enemy_W4_FireProwler_MainStory_04_CustomTrigger</a>"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 100,
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1416567450\">MissionBattleEvent60020_PassiveAbility</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2011183040\">MissionBattleEvent60020_AutoUseUltraAbility</a>",
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60036_MissionBattleEvent60020_Ability03_Part02": {
      "fileName": "60036_MissionBattleEvent60020_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "60036_MissionBattleEvent60020_Ability03_Part01": {
      "fileName": "60036_MissionBattleEvent60020_Ability03_Part01",
      "childAbilityList": [
        "60036_MissionBattleEvent60020_Ability03_Part01",
        "60036_MissionBattleEvent60020_Ability03_Part02",
        "60036_BattleEventAbility_60020_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60020_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Count",
            "compareType": ">",
            "value2": 2
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Count",
                "compareType": "=",
                "value2": 2
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Count",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Count",
          "value": {
            "operator": "Variables[0] (_Count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_Count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_Count"
            ]
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "60036_Modifiers": {
      "fileName": "60036_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1381424630\">MStageMissionBattleEvent60020</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "MissionBattleEvent60020_Ability03_Part01"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "MissionBattleEvent60020_Ability03_Part02"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6003601,
      "trigger": "Skill03",
      "name": "Mydei",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals massive Imaginary DMG to all enemies.",
      "energyCost": 40,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          6,
          1,
          0.2,
          1
        ]
      },
      "element": "Imaginary",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60020_Skill03_Phase01",
        "Avatar_MissionBattleEvent60020_Skill03_Phase02",
        "BattleEventAbility_60020_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6003602,
      "trigger": "SkillP01",
      "name": null,
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60020_PassiveSkill01"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}