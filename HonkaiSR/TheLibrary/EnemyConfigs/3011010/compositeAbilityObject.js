const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3011010,
  "trimCharacterName": 3011010,
  "abilityList": [
    "3011010_Monster_AML_Minion01_02_Ability01_Part02",
    "3011010_Monster_AML_Minion01_02_Ability01_Part01"
  ],
  "abilityObject": {
    "3011010_Monster_AML_Minion01_02_Ability01_Part02": {
      "fileName": "3011010_Monster_AML_Minion01_02_Ability01_Part02",
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
            "DamageType": "Quantum",
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
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill01[1]]}"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3011010_Monster_AML_Minion01_02_Ability01_Part01": {
      "fileName": "3011010_Monster_AML_Minion01_02_Ability01_Part01",
      "childAbilityList": [
        "3011010_Monster_AML_Minion01_02_Ability01_Camera",
        "3011010_Monster_AML_Minion01_02_Ability01_Part01",
        "3011010_Monster_AML_Minion01_02_Ability01_Part02"
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
          "ability": "Monster_AML_Minion01_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    }
  }
}