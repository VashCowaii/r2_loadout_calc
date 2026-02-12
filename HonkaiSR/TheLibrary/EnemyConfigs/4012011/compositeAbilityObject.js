const compositeAbilityObject = {
  "fullCharacterName": 4012011,
  "trimCharacterName": 4012011,
  "abilityList": [
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02",
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01"
  ],
  "abilityObject": {
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02": {
      "fileName": "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01": {
      "fileName": "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Camera",
        "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01",
        "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02"
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
          "ability": "Monster_W4_Strongman_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    }
  }
}