const configAbility = {
  "fileName": "Bailu_Bailu_Ability01_Part01",
  "childAbilityList": [
    "Bailu_Bailu_Ability01_Camera",
    "Bailu_Bailu_Ability01_Part01",
    "Bailu_Bailu_Ability01_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Bailu_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}