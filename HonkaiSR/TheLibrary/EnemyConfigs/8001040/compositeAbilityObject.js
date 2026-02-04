const compositeAbilityObject = {
  "fullCharacterName": 8001040,
  "trimCharacterName": 8001040,
  "abilityList": [
    "8001040_Monster_XP_Minion01_02_PassiveAbilityInitiate",
    "8001040_Monster_XP_Minion01_02_Ability01_Part02",
    "8001040_Monster_XP_Minion01_02_Ability01_Part01"
  ],
  "abilityObject": {
    "8001040_Monster_XP_Minion01_02_PassiveAbilityInitiate": {
      "fileName": "8001040_Monster_XP_Minion01_02_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion01_02_EffectController"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion01_02_EffectController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8001040_Monster_XP_Minion01_02_Ability01_Part02": {
      "fileName": "8001040_Monster_XP_Minion01_02_Ability01_Part02",
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
            "DamageType": "Thunder",
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
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
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
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8001040_Monster_XP_Minion01_02_Ability01_Part01": {
      "fileName": "8001040_Monster_XP_Minion01_02_Ability01_Part01",
      "childAbilityList": [
        "8001040_Monster_XP_Minion01_02_Ability01_Part01",
        "8001040_Monster_XP_Minion01_02_Ability01_Part02",
        "8001040_Monster_XP_Minion01_02_Ability01_Camera"
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
          "ability": "Monster_XP_Minion01_02_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    }
  }
}