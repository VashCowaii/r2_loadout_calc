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
          "displayLines": "({[Skill01[0]]} * 0.5)"
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01"
      },
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
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
          "displayLines": "({[Skill01[0]]} * 0.5)"
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02"
      },
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
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
        "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03"
      },
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
            },
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}