const configAbility = {
  "fileName": "Tribbie_Tribbie_Ability02_Part01",
  "childAbilityList": [
    "Tribbie_Tribbie_Ability02_Camera",
    "Tribbie_Tribbie_Ability02_Part01",
    "Tribbie_Tribbie_Ability02_Part02"
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
      "ability": "Tribbie_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}