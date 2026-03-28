const configAbility = {
  "fileName": "3003022_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Fire1_Flag"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "FireBallCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "Shield"
      },
      "passed": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Projectile's Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Fire1_Flag",
                  "value": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Fire1_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Projectile's Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
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
        "value1": "FireBallCount",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2061561939\">MModifier_Monster_W2_Beast02_01_InsertMark</a>"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (FireBallCount) || RETURN",
            "displayLines": "FireBallCount",
            "constants": [],
            "variables": [
              "FireBallCount"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": null,
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                "displayLines": "{[Skill01[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[4]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
              "valuePerStack": {
                "isCaster": 1
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "set": {
        "operator": "Variables[0] (BattleScore_FireBallCount) || RETURN",
        "displayLines": "BattleScore_FireBallCount",
        "constants": [],
        "variables": [
          "BattleScore_FireBallCount"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}