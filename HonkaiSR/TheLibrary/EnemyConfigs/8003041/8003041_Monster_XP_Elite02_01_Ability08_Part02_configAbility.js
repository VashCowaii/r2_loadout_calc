const configAbility = {
  "fileName": "8003041_Monster_XP_Elite02_01_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                  "displayLines": "{[Skill07[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Projectile's Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
                  "displayLines": "{[Skill07[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Projectile's Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                  "duration": 1,
                  "baseChance": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  },
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Projectile's Target}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                "invertCondition": true,
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                  "duration": 1,
                  "baseChance": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  },
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnergyLayer",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(EnergyLayer - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "EnergyLayer"
                    ]
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
  "references": []
}