const configAbility = {
  "fileName": "4064011_Monster_W4_Serpent_01_Ability04_Part01",
  "childAbilityList": [
    "4064011_Monster_W4_Serpent_01_Ability04_Camera",
    "4064011_Monster_W4_Serpent_01_Ability04_Self_Camera",
    "4064011_Monster_W4_Serpent_01_Ability04_Part01",
    "4064011_Monster_W4_Serpent_01_Ability04_Part02",
    "4064011_Monster_W4_Serpent_01_Ability04_Part03"
  ],
  "skillTrigger": "Skill04",
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Serpent_01_Ability04_Part03",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Serpent_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    },
    "Deleted bullshit"
  ],
  "references": []
}