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
              "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>",
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
        "displayLines": "1"
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
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "DanHengPT_Stance_All"
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
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "DanHengPT_Stance_All"
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
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "DanHengPT_Stance_All"
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
          "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "DanHengPT_Stance_All"
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
          "readTarget": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          }
        },
        "Damage": {
          "displayLines": "Skill03_InsertOwnerDamagePercentage"
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
          "value": {
            "displayLines": "(DanHengPT_ExtraDamageCount - 1)"
          },
          "variableName": "DanHengPT_ExtraDamageCount"
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
              "readTarget": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              }
            },
            "DamageFlat": {
              "displayLines": "(DanHengPT_ExtraDamageRatio * DanHengPT_ExtraDamageShield)"
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
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      }
                    },
                    "Damage": {
                      "displayLines": "SkillTree_PointB3_OwnerDamagePercentage"
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
          "value": 0,
          "variableName": "DanHengPT_IsFreeAction"
        }
      ]
    },
    {
      "name": "Trigger: Attack End",
      "fakeCharacterAttack": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}