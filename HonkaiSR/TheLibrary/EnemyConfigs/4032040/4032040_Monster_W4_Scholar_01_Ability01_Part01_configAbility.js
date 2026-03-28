const configAbility = {
  "fileName": "4032040_Monster_W4_Scholar_01_Ability01_Part01",
  "childAbilityList": [
    "4032040_Monster_W4_Scholar_01_Ability01_Camera",
    "4032040_Monster_W4_Scholar_01_Ability01_Part01",
    "4032040_Monster_W4_Scholar_01_Ability01_Part02"
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
      "ability": "Monster_W4_Scholar_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}