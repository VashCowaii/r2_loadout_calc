const configAbility = {
  "fileName": "Jade_Jade_Ability01_Part01",
  "childAbilityList": [
    "Jade_Jade_Ability01_Camera",
    "Jade_Jade_Ability01_Part01",
    "Jade_Jade_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    5
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Jade_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}