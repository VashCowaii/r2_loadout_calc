const compositeAbilityObject = {
  "fullCharacterName": 1012032,
  "trimCharacterName": 1012032,
  "abilityList": [
    "1012032_Monster_W1_Mecha01_01_FT_AbilityP01",
    "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part02",
    "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part01"
  ],
  "abilityObject": {
    "1012032_Monster_W1_Mecha01_01_FT_AbilityP01": {
      "fileName": "1012032_Monster_W1_Mecha01_01_FT_AbilityP01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1931189851\">Modifier_StageSpecialAbility_10441211_Block</a>[<span class=\"descriptionNumberColor\">Golden Ring</span>]"
        }
      ],
      "references": []
    },
    "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part02": {
      "fileName": "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part02",
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
            "DamageType": "Physical",
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
    "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part01": {
      "fileName": "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part01",
      "childAbilityList": [
        "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part01",
        "1012032_Monster_W1_Mecha01_01_FT_Ability01_Part02",
        "1012032_Monster_W1_Mecha01_01_Ability01_Camera"
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
          "ability": "Monster_W1_Mecha01_01_FT_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    }
  }
}