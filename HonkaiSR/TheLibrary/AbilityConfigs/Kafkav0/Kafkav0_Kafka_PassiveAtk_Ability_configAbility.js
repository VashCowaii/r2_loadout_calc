const configAbility = {
  "fileName": "Kafkav0_Kafka_PassiveAtk_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": 1,
      "assignState": "True",
      "priorState": "CoolDown",
      "bar#": 3,
      "cooldown": 1
    },
    {
      "name": "UI Display Event",
      "popUpText": "Gentle but Cruel"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Thorns"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_P2_BaseChance",
          "value": {
            "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
            "displayLines": "(1 + 0.8)",
            "constants": [],
            "variables": [
              1,
              0.8
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_P2_BaseChance",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P3_LifeTime",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P4_DOTPercentage",
          "value": {
            "operator": "Variables[0] (2.9) || Variables[1] (1.56) || ADD || RETURN",
            "displayLines": "(2.9 + 1.56)",
            "constants": [],
            "variables": [
              2.9,
              1.56
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P3_LifeTime",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P4_DOTPercentage",
          "value": {
            "operator": "Variables[0] (2.9) || RETURN",
            "displayLines": "2.9",
            "constants": [],
            "variables": [
              2.9
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Kafka_PassiveDotDamage_Eidolon1[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_DotRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
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
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
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
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
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
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
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
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
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
      "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
      "duration": {
        "operator": "Variables[0] (Skill03_P3_LifeTime) || RETURN",
        "displayLines": "Skill03_P3_LifeTime",
        "constants": [],
        "variables": [
          "Skill03_P3_LifeTime"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (SkillP01_P2_BaseChance) || RETURN",
        "displayLines": "SkillP01_P2_BaseChance",
        "constants": [],
        "variables": [
          "SkillP01_P2_BaseChance"
        ]
      },
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "operator": "Variables[0] (Skill03_P4_DOTPercentage) || RETURN",
          "displayLines": "Skill03_P4_DOTPercentage",
          "constants": [],
          "variables": [
            "Skill03_P4_DOTPercentage"
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Kafka_Passive_CanAttack[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Kafka_Passive_CanAttackCD[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Kafka_PassiveDotDamage_Eidolon1[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_DotRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DotRatio"
      ],
      "latentQueue": [],
      "description": "DoT taken +<span class=\"descriptionNumberColor\">MDF_DotRatio</span>.",
      "type": "Debuff",
      "effectName": "DoT Vulnerability",
      "statusName": "DoT Vulnerability"
    }
  ]
}