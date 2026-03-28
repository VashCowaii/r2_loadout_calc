const configAbility = {
  "fileName": "5012020_Monster_W2_Beast01_05_Ability02_Part01",
  "childAbilityList": [
    "5012020_Monster_W2_Beast01_05_Ability02_Camera",
    "5012020_Monster_W2_Beast01_05_Ability02_Part01",
    "5012020_Monster_W2_Beast01_05_Ability02_Part02"
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_Beast01_05_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}