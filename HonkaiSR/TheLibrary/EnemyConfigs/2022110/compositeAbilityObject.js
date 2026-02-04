const compositeAbilityObject = {
  "fullCharacterName": 2022110,
  "trimCharacterName": 2022110,
  "abilityList": [
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02",
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01",
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02",
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01",
    "2022110_Monster_W2_Valkyrie01_01_AbilityP01"
  ],
  "abilityObject": {
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01",
      "childAbilityList": [
        "2022110_Monster_W2_Valkyrie01_01_Ability02_Part01",
        "2022110_Monster_W2_Valkyrie01_01_Ability02_Part02",
        "2022110_Monster_W2_Valkyrie01_01_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W2_Valkyrie01_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02",
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
            "DamageType": "Wind",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01",
      "childAbilityList": [
        "2022110_Monster_W2_Valkyrie01_01_Ability01_Part01",
        "2022110_Monster_W2_Valkyrie01_01_Ability01_Part02",
        "2022110_Monster_W2_Valkyrie01_01_Ability01_Camera"
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
          "ability": "Monster_W2_Valkyrie01_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022110_Monster_W2_Valkyrie01_01_AbilityP01": {
      "fileName": "2022110_Monster_W2_Valkyrie01_01_AbilityP01",
      "childAbilityList": [
        "2022110_Monster_W2_Valkyrie01_01_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack[<span class=\"descriptionNumberColor\">Maddened</span>]"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack[<span class=\"descriptionNumberColor\">Maddened</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Attack changes to Sawing Evil: Sever.",
          "type": "Buff",
          "effectName": "Maddened",
          "statusName": "Maddened"
        }
      ]
    }
  }
}