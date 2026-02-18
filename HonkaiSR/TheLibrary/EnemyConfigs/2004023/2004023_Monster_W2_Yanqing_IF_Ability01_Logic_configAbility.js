const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_Ability01_Logic",
  "abilityType": null,
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
      "ability": "Monster_W2_Yanqing_IF_Ability01_Perform",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill01[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Monster_W2_Yanqing_00_IF_Skill01_AssistMark01) || RETURN",
        "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01",
        "constants": [],
        "variables": [
          "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01"
        ]
      },
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
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
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill01[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Monster_W2_Yanqing_00_IF_Skill01_AssistMark02) || RETURN",
        "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02",
        "constants": [],
        "variables": [
          "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02"
        ]
      },
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
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
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Monster_W2_Yanqing_00_IF_Skill01_AssistMark03) || RETURN",
        "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03",
        "constants": [],
        "variables": [
          "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03"
        ]
      },
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
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
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "tag": "DOT",
  "references": []
}