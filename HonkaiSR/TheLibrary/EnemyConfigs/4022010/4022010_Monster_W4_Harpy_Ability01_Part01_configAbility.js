const configAbility = {
  "fileName": "4022010_Monster_W4_Harpy_Ability01_Part01",
  "childAbilityList": [
    "4022010_Monster_W4_Harpy_Ability01_Part01",
    "4022010_Monster_W4_Harpy_Ability01_Part02",
    "4022010_Monster_W4_Harpy_Ability01_Camera"
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
      "ability": "Monster_W4_Harpy_Ability01_Part02",
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