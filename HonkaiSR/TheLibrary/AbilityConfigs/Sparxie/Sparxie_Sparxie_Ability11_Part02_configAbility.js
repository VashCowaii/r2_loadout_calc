const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-236603905\">Sparxie_Ability02_Taunt_Sub</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-177633859\">Sparxie_Ability21_Disable</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "ElationEchoPoint"
      },
      "passed": [
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": []
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || Variables[1] (0.2) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
              "displayLines": "(1 + (0.2 * _SkillUseCount))",
              "constants": [],
              "variables": [
                1,
                0.2,
                "_SkillUseCount"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (0.1) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (0.1 * _SkillUseCount))",
              "constants": [],
              "variables": [
                0.5,
                0.1,
                "_SkillUseCount"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageElation": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": null,
            "instanceTag": "Sparxie_ElationPursued_EPDamage",
            "Tags": null,
            "attackType": "Elation DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageElation": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": null,
            "instanceTag": "Sparxie_ElationPursued_EPDamage",
            "Tags": null,
            "attackType": "Elation DMG"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (_SkillUseCount) || RETURN",
            "displayLines": "_SkillUseCount",
            "constants": [],
            "variables": [
              "_SkillUseCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageElation": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "displayLines": 15
                    },
                    "instanceTag": "Sparxie_ElationPursued_EPDamage",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || Variables[1] (0.2) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
              "displayLines": "(1 + (0.2 * _SkillUseCount))",
              "constants": [],
              "variables": [
                1,
                0.2,
                "_SkillUseCount"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (0.1) || Variables[2] (_SkillUseCount) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (0.1 * _SkillUseCount))",
              "constants": [],
              "variables": [
                0.5,
                0.1,
                "_SkillUseCount"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill02",
      "skillSlot": "Skill",
      "enableSecondaryType": "ControlSkill02"
    },
    {
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill01",
      "skillSlot": "Basic ATK"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_SkillUseCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Sparxie_Skill02_GrandPrizeChance",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Sparxie_Skill02_MinorPrizeChance",
      "value": {
        "operator": "Variables[0] (28) || Variables[1] (Sparxie_Skill02_GrandPrizeChance) || SUB || RETURN",
        "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)",
        "constants": [],
        "variables": [
          28,
          "Sparxie_Skill02_GrandPrizeChance"
        ]
      }
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}