const compositeAbilityObject = {
  "fullCharacterName": 8012143,
  "trimCharacterName": 8012143,
  "abilityList": [
    "8012143_Monster_AML_Boss_Part1_HitEffect",
    "8012143_Monster_AML_Boss_Part1_Ability03_Part02",
    "8012143_Monster_AML_Boss_Part1_Ability03_Part01",
    "8012143_Monster_AML_Boss_Part1_Ability02_Part02",
    "8012143_Monster_AML_Boss_Part1_Ability02_Part01",
    "8012143_Monster_AML_Boss_Part1_Ability01_Part02",
    "8012143_Monster_AML_Boss_Part1_Ability01_Part01"
  ],
  "abilityObject": {
    "8012143_Monster_AML_Boss_Part1_HitEffect": {
      "fileName": "8012143_Monster_AML_Boss_Part1_HitEffect",
      "skillTrigger": "PassiveSkill03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part1_HitEffect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part1_OnBreakRecoverSoundEffect"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part1_OnBreakRecoverSoundEffect",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
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
          "for": "Enemy_AML_Boss_Part1_HitEffect",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": 0.3
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 0.6
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "<",
                            "value2": 0.8
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012143_Monster_AML_Boss_Part1_Ability03_Part02": {
      "fileName": "8012143_Monster_AML_Boss_Part1_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "Looped Event",
          "Event": [
            "Move to Next Listed Target",
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "({[Skill03[0]]} * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
              "displayLines": "{[Skill03[3]]}",
              "constants": [],
              "variables": [
                "{[Skill03[3]]}"
              ]
            },
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
              "displayLines": "{[Skill03[4]]}",
              "constants": [],
              "variables": [
                "{[Skill03[4]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012143_Monster_AML_Boss_Part1_Ability03_Part01": {
      "fileName": "8012143_Monster_AML_Boss_Part1_Ability03_Part01",
      "childAbilityList": [
        "8012143_Monster_AML_Boss_Part1_Ability03_Part01",
        "8012143_Monster_AML_Boss_Part1_Ability03_Part02",
        "8012143_Monster_AML_Boss_Part1_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part1_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012143_Monster_AML_Boss_Part1_Ability02_Part02": {
      "fileName": "8012143_Monster_AML_Boss_Part1_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            },
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
              "displayLines": "{[Skill02[4]]}",
              "constants": [],
              "variables": [
                "{[Skill02[4]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012143_Monster_AML_Boss_Part1_Ability02_Part01": {
      "fileName": "8012143_Monster_AML_Boss_Part1_Ability02_Part01",
      "childAbilityList": [
        "8012143_Monster_AML_Boss_Part1_Ability02_Part01",
        "8012143_Monster_AML_Boss_Part1_Ability02_Part02",
        "8012143_Monster_AML_Boss_Part1_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part1_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012143_Monster_AML_Boss_Part1_Ability01_Part02": {
      "fileName": "8012143_Monster_AML_Boss_Part1_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012143_Monster_AML_Boss_Part1_Ability01_Part01": {
      "fileName": "8012143_Monster_AML_Boss_Part1_Ability01_Part01",
      "childAbilityList": [
        "8012143_Monster_AML_Boss_Part1_Ability01_Part01",
        "8012143_Monster_AML_Boss_Part1_Ability01_Part02",
        "8012143_Monster_AML_Boss_Part1_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part1_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    }
  }
}