const compositeAbilityObject = {
  "fullCharacterName": 3001020,
  "trimCharacterName": 3001020,
  "abilityList": [
    "3001020_Monster_XP_Minion01_04_Ability01_Part02",
    "3001020_Monster_XP_Minion01_04_Ability01_Part01"
  ],
  "abilityObject": {
    "3001020_Monster_XP_Minion01_04_Ability01_Part02": {
      "fileName": "3001020_Monster_XP_Minion01_04_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "({[Skill01[0]]} / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "50%"
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
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "({[Skill01[0]]} / 2)",
              "constants": [
                2
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
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
            "displayLines": "{[Skill01[3]]}",
            "constants": [],
            "variables": [
              "{[Skill01[3]]}"
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
            "Modifier_Tear_DamageRatio": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "Modifier_Tear_MaxPercentage": 5
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3001020_Monster_XP_Minion01_04_Ability01_Part01": {
      "fileName": "3001020_Monster_XP_Minion01_04_Ability01_Part01",
      "childAbilityList": [
        "3001020_Monster_XP_Minion01_04_Ability01_Camera",
        "3001020_Monster_XP_Minion01_04_Ability01_Part01",
        "3001020_Monster_XP_Minion01_04_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion01_04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    }
  }
}