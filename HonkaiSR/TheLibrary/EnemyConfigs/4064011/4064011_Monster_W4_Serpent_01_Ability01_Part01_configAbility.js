const configAbility = {
  "fileName": "4064011_Monster_W4_Serpent_01_Ability01_Part01",
  "childAbilityList": [
    "4064011_Monster_W4_Serpent_01_Ability01_Camera",
    "4064011_Monster_W4_Serpent_01_Ability01_Self_Camera",
    "4064011_Monster_W4_Serpent_01_Ability01_Part01",
    "4064011_Monster_W4_Serpent_01_Ability01_Part02",
    "4064011_Monster_W4_Serpent_01_Ability01_Part03"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "Shield"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Serpent_01_Ability01_Part03",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Serpent_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}