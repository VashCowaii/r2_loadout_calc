const configAbility = {
  "fileName": "DanHengPT_DanHengPT_BE_InsertAttack_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DanHengPT_IsFreeAction",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{DHPT}}"
            },
            "value1": "DanHengPT_Passive_Count",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{DHPT}}"
              },
              "modifier": "DanHengPT_BoostEnergy"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{DHPT}}"
          },
          "modifier": "DanHengPT_BoostEnergy",
          "valuePerStack": {
            "MDF_IsStack": 0
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "dispelCount": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "dispelOrder": "LastAdded"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{DHPT}}"
      },
      "ability": "DanHengPT_BE_AddShield"
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
          "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
          "constants": [],
          "variables": [
            "Skill03_InsertDanHengPTDamagePercentage"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
          "displayLines": "DanHengPT_Stance_All",
          "constants": [],
          "variables": [
            "DanHengPT_Stance_All"
          ]
        },
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Follow-up"
      }
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
          "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
          "constants": [],
          "variables": [
            "Skill03_InsertDanHengPTDamagePercentage"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
          "displayLines": "DanHengPT_Stance_All",
          "constants": [],
          "variables": [
            "DanHengPT_Stance_All"
          ]
        },
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Follow-up"
      }
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
          "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
          "constants": [],
          "variables": [
            "Skill03_InsertDanHengPTDamagePercentage"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
          "displayLines": "DanHengPT_Stance_All",
          "constants": [],
          "variables": [
            "DanHengPT_Stance_All"
          ]
        },
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Follow-up"
      }
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
          "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
          "constants": [],
          "variables": [
            "Skill03_InsertDanHengPTDamagePercentage"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
          "displayLines": "DanHengPT_Stance_All",
          "constants": [],
          "variables": [
            "DanHengPT_Stance_All"
          ]
        },
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "ReadTargetType",
          "target": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          }
        },
        "Damage": {
          "operator": "Variables[0] (Skill03_InsertOwnerDamagePercentage) || RETURN",
          "displayLines": "Skill03_InsertOwnerDamagePercentage",
          "constants": [],
          "variables": [
            "Skill03_InsertOwnerDamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": [
          "Summon-Tag DMG"
        ],
        "attackType": "Additional DMG"
      },
      "overrideDamageOwner": {
        "name": "Target Name",
        "target": "{{Bondmate}}"
      },
      "overrideDamageStatSource": {
        "name": "Target Name",
        "target": "{{Bondmate}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "DanHengPT_ExtraDamageCount",
            "compareType": ">",
            "value2": 0
          },
          {
            "name": "Compare: Variable",
            "value1": "DanHengPT_LongLing_Flag",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Shield Value",
          "target": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          },
          "variableName": "DanHengPT_ExtraDamageShield"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_ExtraDamageCount",
          "value": {
            "operator": "Variables[0] (DanHengPT_ExtraDamageCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(DanHengPT_ExtraDamageCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "DanHengPT_ExtraDamageCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "ReadTargetType",
              "target": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              }
            },
            "DamageFlat": {
              "operator": "Variables[0] (DanHengPT_ExtraDamageRatio) || Variables[1] (DanHengPT_ExtraDamageShield) || MUL || RETURN",
              "displayLines": "(DanHengPT_ExtraDamageRatio * DanHengPT_ExtraDamageShield)",
              "constants": [],
              "variables": [
                "DanHengPT_ExtraDamageRatio",
                "DanHengPT_ExtraDamageShield"
              ]
            },
            "Toughness": null,
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Additional DMG"
          },
          "overrideDamageOwner": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          },
          "overrideDamageStatSource": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sublimity"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]].[[reverse]]"
          },
          "includeDyingTargets": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DanHengPT_LongLing_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      }
                    },
                    "Damage": {
                      "operator": "Variables[0] (SkillTree_PointB3_OwnerDamagePercentage) || RETURN",
                      "displayLines": "SkillTree_PointB3_OwnerDamagePercentage",
                      "constants": [],
                      "variables": [
                        "SkillTree_PointB3_OwnerDamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Additional DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  },
                  "overrideDamageStatSource": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  }
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
        "value1": "DanHengPT_IsFreeAction",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_IsFreeAction",
          "value": 0
        }
      ]
    },
    {
      "name": "Trigger: Attack End",
      "fakeCharacterAttack": true
    }
  ],
  "references": []
}