const configAbility = {
  "fileName": "4032041_Monster_W4_Scholar_01_Ability02_Part01",
  "childAbilityList": [
    "4032041_Monster_W4_Scholar_01_Ability02_Camera",
    "4032041_Monster_W4_Scholar_01_Ability02_Part01",
    "4032041_Monster_W4_Scholar_01_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W4_Scholar_01_Ability02_Part02",
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