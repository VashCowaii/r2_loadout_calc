const configAbility = {
  "fileName": "2023011_Monster_W2_Abomi04_Ability01_Part01",
  "childAbilityList": [
    "2023011_Monster_W2_Abomi04_Ability01_Camera",
    "2023011_Monster_W2_Abomi04_Ability01_Part01",
    "2023011_Monster_W2_Abomi04_Ability01_Part02"
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
      "ability": "Monster_W2_Abomi04_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}