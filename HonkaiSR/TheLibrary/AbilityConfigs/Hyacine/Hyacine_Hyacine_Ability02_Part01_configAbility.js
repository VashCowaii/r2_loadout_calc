const configAbility = {
  "fileName": "Hyacine_Hyacine_Ability02_Part01",
  "childAbilityList": [
    "Hyacine_Hyacine_Ability02_Camera",
    "Hyacine_Hyacine_Ability02_Part01",
    "Hyacine_Hyacine_Ability02_Part02"
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
      "ability": "Hyacine_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}