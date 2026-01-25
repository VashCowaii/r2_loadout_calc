const configAbility = {
  "fileName": "Hyacine_Hyacine_Ability01_Part01",
  "childAbilityList": [
    "Hyacine_Hyacine_Ability01_Camera",
    "Hyacine_Hyacine_Ability01_Part01",
    "Hyacine_Hyacine_Ability01_Part02"
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
      "ability": "Hyacine_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}