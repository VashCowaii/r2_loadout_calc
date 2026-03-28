const configAbility = {
  "fileName": "3002030_Monster_W2_Beast01_03_Ability01_Part01",
  "childAbilityList": [
    "3002030_Monster_W2_Beast01_03_Ability01_Camera",
    "3002030_Monster_W2_Beast01_03_Ability01_Part01",
    "3002030_Monster_W2_Beast01_03_Ability01_Part02"
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
      "ability": "Monster_W2_Beast01_03_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}