const configAbility = {
  "fileName": "2022050_Monster_W2_Beast01_01_Ability01_Part01",
  "childAbilityList": [
    "2022050_Monster_W2_Beast01_01_Ability01_Camera",
    "2022050_Monster_W2_Beast01_01_Ability01_Part01",
    "2022050_Monster_W2_Beast01_01_Ability01_Part02"
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
      "ability": "Monster_W2_Beast01_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}