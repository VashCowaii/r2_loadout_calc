const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012120,
  "trimCharacterName": 5012120,
  "abilityList": [
    "5012120_Monster_W5_PamPart_PassiveAbility01_Part02",
    "5012120_Monster_W5_PamPart_PassiveAbility01_Part01",
    "5012120_Monster_W5_PamPart_Ability02_Part02",
    "5012120_Monster_W5_PamPart_Ability02_Part01",
    "5012120_Monster_W5_PamPart_Ability01_Part02",
    "5012120_Monster_W5_PamPart_Ability01_Part01"
  ],
  "abilityObject": {
    "5012120_Monster_W5_PamPart_PassiveAbility01_Part02": {
      "fileName": "5012120_Monster_W5_PamPart_PassiveAbility01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Insert_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2051404856\">Modifier_Monster_W5_PamPart_DeathRattle</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2051404856\">Modifier_Monster_W5_PamPart_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[0]]}"
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Insert_Flag"
          ]
        }
      ]
    },
    "5012120_Monster_W5_PamPart_PassiveAbility01_Part01": {
      "fileName": "5012120_Monster_W5_PamPart_PassiveAbility01_Part01",
      "childAbilityList": [
        "5012120_Monster_W5_PamPart_PassiveAbility01_Camera",
        "5012120_Monster_W5_PamPart_PassiveAbility01_Part01",
        "5012120_Monster_W5_PamPart_PassiveAbility01_Part02"
      ],
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_PamPart_PassiveAbility01_Part02",
          "isTrigger": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1447906215\">Monster_W5_PamPart_zangshui_monitor_02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-185762705\">Monster_W5_PamPart_zangshui</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_dirty_part_num",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_dirty_part_num",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "5012120_Monster_W5_PamPart_Ability02_Part02": {
      "fileName": "5012120_Monster_W5_PamPart_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-615106680\">Modifier_Monster_W5_PamPart_DefenceDown</a>[<span class=\"descriptionNumberColor\">Sloppy</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-615106680\">Modifier_Monster_W5_PamPart_DefenceDown</a>[<span class=\"descriptionNumberColor\">Sloppy</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                    "displayLines": "-MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Sloppy"
        }
      ]
    },
    "5012120_Monster_W5_PamPart_Ability02_Part01": {
      "fileName": "5012120_Monster_W5_PamPart_Ability02_Part01",
      "childAbilityList": [
        "5012120_Monster_W5_PamPart_Ability02_Camera",
        "5012120_Monster_W5_PamPart_Ability02_Part01",
        "5012120_Monster_W5_PamPart_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_PamPart_Ability02_Part02",
          "isTrigger": true
        },
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
    "5012120_Monster_W5_PamPart_Ability01_Part02": {
      "fileName": "5012120_Monster_W5_PamPart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5012120_Monster_W5_PamPart_Ability01_Part01": {
      "fileName": "5012120_Monster_W5_PamPart_Ability01_Part01",
      "childAbilityList": [
        "5012120_Monster_W5_PamPart_Ability01_Camera",
        "5012120_Monster_W5_PamPart_Ability01_Part01",
        "5012120_Monster_W5_PamPart_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_PamPart_Ability01_Part02",
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
    }
  }
}