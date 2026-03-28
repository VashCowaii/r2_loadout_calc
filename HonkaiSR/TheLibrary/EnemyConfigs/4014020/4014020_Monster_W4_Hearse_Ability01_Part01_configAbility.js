const configAbility = {
  "fileName": "4014020_Monster_W4_Hearse_Ability01_Part01",
  "childAbilityList": [
    "4014020_Monster_W4_Hearse_Ability01_Camera",
    "4014020_Monster_W4_Hearse_Ability01_Part01",
    "4014020_Monster_W4_Hearse_Ability01_Part02"
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
      "ability": "Monster_W4_Hearse_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}