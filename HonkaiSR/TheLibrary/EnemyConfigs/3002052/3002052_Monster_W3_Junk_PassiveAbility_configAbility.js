const configAbility = {
  "fileName": "3002052_Monster_W3_Junk_PassiveAbility",
  "skillTrigger": "SkillP01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-298230207\">Monster_W3_Junk_AttackListener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1622466775\">Monster_W3_Junk_Deathrattle</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-981101613\">W3_Junk_BattleScore1</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1622466775\">Monster_W3_Junk_Deathrattle</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "Deathrattle",
        "MuteHitFly",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo"
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>"
              }
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_Junk_Insert_Part01",
              "priorityTag": "EnemyDeathEffect",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-298230207\">Monster_W3_Junk_AttackListener</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_AITargetHigherPriority"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill",
                      "Ultimate",
                      "Follow-up",
                      "Memosprite",
                      "Elation DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Unlock_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "WeaknessCount",
                    "compareType": "<",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Unlock_Flag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Fire"
                        ]
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": "Fire",
                        "invertCondition": true,
                        "defaultOnly": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Fire"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1961937355\">Monster_W3_Junk_AttachWeaknessFire</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Ice"
                        ]
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": "Ice",
                        "invertCondition": true,
                        "defaultOnly": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Ice"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1961481854\">Monster_W3_Junk_AttachWeaknessIce</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Imaginary"
                        ]
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": "Imaginary",
                        "invertCondition": true,
                        "defaultOnly": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1608631584\">Monster_W3_Junk_AttachWeaknessImaginary</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Physical"
                        ]
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": "Physical",
                        "invertCondition": true,
                        "defaultOnly": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Physical"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"90925210\">Monster_W3_Junk_AttachWeaknessPhysical</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Quantum"
                        ]
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": "Quantum",
                        "invertCondition": true,
                        "defaultOnly": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Quantum"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1811165940\">Monster_W3_Junk_AttachWeaknessQuantum</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": "Thunder",
                        "invertCondition": true,
                        "defaultOnly": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Thunder"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1565920593\">Monster_W3_Junk_AttachWeaknessThunder</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Wind"
                        ]
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": "Wind",
                        "invertCondition": true,
                        "defaultOnly": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Wind"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2033100009\">Monster_W3_Junk_AttachWeaknessWind</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Unlock_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "killer": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}