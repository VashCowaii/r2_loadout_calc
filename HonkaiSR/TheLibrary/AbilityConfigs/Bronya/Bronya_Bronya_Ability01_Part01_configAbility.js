const configAbility = {
  "fileName": "Bronya_Bronya_Ability01_Part01",
  "childAbilityList": [
    "Bronya_Bronya_Ability01_Camera",
    "Bronya_Bronya_Ability01_Part01",
    "Bronya_Bronya_Ability01_Part02"
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
      "ability": "Bronya_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}