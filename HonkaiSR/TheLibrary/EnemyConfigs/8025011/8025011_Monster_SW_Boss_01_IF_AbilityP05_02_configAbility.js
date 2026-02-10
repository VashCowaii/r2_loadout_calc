const configAbility = {
  "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityP05_02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "Target__Toughness",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "ContextAbility",
          "variableName": "Ability_Count"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 5,
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Ability_Count",
              "context": "ContextAbility",
              "value": 1,
              "max": 5
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Additional DMG"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_CurrentStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                    "displayLines": "MDF_CurrentStance",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentStance"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": "Quantum"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
            "displayLines": "{[Skill04[3]]}",
            "constants": [],
            "variables": [
              "{[Skill04[3]]}"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
            "displayLines": "{[Skill04[4]]}",
            "constants": [],
            "variables": [
              "{[Skill04[4]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageTakenUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
              "displayLines": "{[Skill04[2]]}",
              "constants": [],
              "variables": [
                "{[Skill04[2]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BreakEndFlag",
          "value": 1
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonDelayRatio1",
              "value": {
                "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                "displayLines": "SummonDelayRatio1Random2",
                "constants": [],
                "variables": [
                  "SummonDelayRatio1Random2"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                    "displayLines": "SummonDelayRatio1Random3",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random3"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                    "displayLines": "SummonDelayRatio1Random1",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random1"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}