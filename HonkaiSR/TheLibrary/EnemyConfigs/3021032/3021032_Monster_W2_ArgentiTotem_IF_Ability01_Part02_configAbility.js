const configAbility = {
  "fileName": "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
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
                "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
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
                      "operator": "Variables[0] ({[Skill01[1]]}) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "({[Skill01[1]]} * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "{[Skill01[1]]}"
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
              "operator": "Variables[0] ({[Skill01[1]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[1]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[1]]}"
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
                "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
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
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}