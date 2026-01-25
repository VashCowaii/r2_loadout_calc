const configAbility = {
  "fileName": "Aventurine_Aventurine_Ability02_Part01",
  "childAbilityList": [
    "Aventurine_Aventurine_Ability02_Camera",
    "Aventurine_Aventurine_Ability02_Part01",
    "Aventurine_Aventurine_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
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
      "ability": "Aventurine_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}