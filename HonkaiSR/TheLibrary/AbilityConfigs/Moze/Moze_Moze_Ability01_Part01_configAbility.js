const configAbility = {
  "fileName": "Moze_Moze_Ability01_Part01",
  "childAbilityList": [
    "Moze_Moze_Ability01_Camera",
    "Moze_Moze_Ability01_Part01",
    "Moze_Moze_Ability01_Part02"
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
      "ability": "Moze_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}