const compositeAbilityObject = {
  "fullCharacterName": 2002032,
  "trimCharacterName": 2002032,
  "abilityList": [
    "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Part01",
    "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Parallel",
    "2002032_Monster_W2_Valkyrie01_Ability01_Part02",
    "2002032_Monster_W2_Valkyrie01_Ability01_Part01",
    "2002032_Modifiers"
  ],
  "abilityObject": {
    "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Part01": {
      "fileName": "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Parallel": {
      "fileName": "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Parallel",
      "childAbilityList": [
        "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Parallel",
        "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Part01"
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Valkyrie01_RLSummon_Ability01_Part01",
          "isTrigger": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Standard_Unstable[<span class=\"descriptionNumberColor\">Reverberation</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Standard_Shake[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Standard_Unstable[<span class=\"descriptionNumberColor\">Reverberation</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_Shake_ActionDelayRatio": 0.7
              }
            }
          ]
        }
      ],
      "tag": "DOT_Burn",
      "references": []
    },
    "2002032_Monster_W2_Valkyrie01_Ability01_Part02": {
      "fileName": "2002032_Monster_W2_Valkyrie01_Ability01_Part02",
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
            "DamageType": "Physical",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Standard_Unstable[<span class=\"descriptionNumberColor\">Reverberation</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Standard_Shake[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Standard_Unstable[<span class=\"descriptionNumberColor\">Reverberation</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_Shake_ActionDelayRatio": 0.7
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2002032_Monster_W2_Valkyrie01_Ability01_Part01": {
      "fileName": "2002032_Monster_W2_Valkyrie01_Ability01_Part01",
      "childAbilityList": [
        "2002032_Monster_W2_Valkyrie01_Ability01_Part01",
        "2002032_Monster_W2_Valkyrie01_Ability01_Part02",
        "2002032_Monster_W2_Valkyrie01_Ability01_Camera"
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
          "ability": "Monster_W2_Valkyrie01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2002032_Modifiers": {
      "fileName": "2002032_Modifiers",
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
          "for": "Standard_Shake[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Shake",
            "STAT_CTRL",
            "AvatarBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    "Abort Modifier Phase Action"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Engulfed in Strong Reverberations"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ],
          "description": "Action delayed. Cannot take actions for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Strong Reverberation",
          "statusName": "Strong Reverberation"
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_Unstable[<span class=\"descriptionNumberColor\">Reverberation</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_Shake[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (MDF_Shake_ActionDelayRatio) || RETURN",
                      "displayLines": "MDF_Shake_ActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "MDF_Shake_ActionDelayRatio"
                      ]
                    }
                  },
                  "success": []
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_Shake_ActionDelayRatio"
          ],
          "latentQueue": [],
          "description": "After receiving an attack, enters Strong Reverberation, then dispels Reverberation.",
          "type": "Debuff",
          "effectName": "Reverberation",
          "statusName": "Reverberation"
        }
      ],
      "references": []
    }
  }
}