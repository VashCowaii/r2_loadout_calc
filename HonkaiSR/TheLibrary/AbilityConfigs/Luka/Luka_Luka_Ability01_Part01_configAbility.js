const configAbility = {
  "fileName": "Luka_Luka_Ability01_Part01",
  "childAbilityList": [
    "Luka_Luka_Ability01_Part01",
    "Luka_Luka_Ability01_Part02",
    "Luka_Luka_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Luka_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}