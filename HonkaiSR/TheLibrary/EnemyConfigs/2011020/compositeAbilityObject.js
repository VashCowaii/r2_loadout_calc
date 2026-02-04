const compositeAbilityObject = {
  "fullCharacterName": 2011020,
  "trimCharacterName": 2011020,
  "abilityList": [
    "2011020_Monster_W2_Mecha01_01_Ability01_Part02",
    "2011020_Monster_W2_Mecha01_01_Ability01_Part01",
    "2011020_Monster_W2_Mecha01_01_PassiveAbilityInitiate",
    "2011020_Modifiers"
  ],
  "abilityObject": {
    "2011020_Monster_W2_Mecha01_01_Ability01_Part02": {
      "fileName": "2011020_Monster_W2_Mecha01_01_Ability01_Part02",
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
            "DamageType": "Imaginary",
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_Standard_SpeedRatioDown[<span class=\"descriptionNumberColor\">Slow</span>]",
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
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2011020_Monster_W2_Mecha01_01_Ability01_Part01": {
      "fileName": "2011020_Monster_W2_Mecha01_01_Ability01_Part01",
      "childAbilityList": [
        "2011020_Monster_W2_Mecha01_01_Ability01_Part01",
        "2011020_Monster_W2_Mecha01_01_Ability01_Part02",
        "2011020_Monster_W2_Mecha01_01_Ability01_Camera"
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
          "ability": "Monster_W2_Mecha01_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2011020_Monster_W2_Mecha01_01_PassiveAbilityInitiate": {
      "fileName": "2011020_Monster_W2_Mecha01_01_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Mecha01_01_StandByLoopEffect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        }
      ]
    },
    "2011020_Modifiers": {
      "fileName": "2011020_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    }
  }
}