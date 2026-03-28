const configAbility = {
  "fileName": "4063011_Monster_W4_Serpent_Ability01_Part01",
  "childAbilityList": [
    "4063011_Monster_W4_Serpent_Ability01_Camera",
    "4063011_Monster_W4_Serpent_Ability01_Part01",
    "4063011_Monster_W4_Serpent_Ability01_Part02"
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
      "ability": "Monster_W4_Serpent_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}