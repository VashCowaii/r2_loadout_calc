const configAbility = {
  "fileName": "3021042_Monster_W2_ArgentiTotem_IF_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "variableName": "_TargetNum"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (_TargetNum) || RETURN",
            "displayLines": "_TargetNum",
            "constants": [],
            "variables": [
              "_TargetNum"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_4) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(UnusedUnderThisBase_4 * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "UnusedUnderThisBase_4"
                      ]
                    },
                    "Toughness": null,
                    "ToughnessDMGType": {
                      "DamageType": "Physical"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "50%"
                  }
                }
              ]
            }
          ]
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
              "operator": "Variables[0] (UnusedUnderThisBase_4) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_4 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "UnusedUnderThisBase_4"
              ]
            },
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ],
      "failed": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (_TargetNum) || RETURN",
            "displayLines": "_TargetNum",
            "constants": [],
            "variables": [
              "_TargetNum"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                      "displayLines": "UnusedUnderThisBase_3",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_3"
                      ]
                    },
                    "Toughness": null,
                    "ToughnessDMGType": {
                      "DamageType": "Physical"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier",
      "stackData": [],
      "latentQueue": []
    }
  ]
}