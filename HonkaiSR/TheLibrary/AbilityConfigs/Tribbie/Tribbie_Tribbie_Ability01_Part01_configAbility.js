const configAbility = {
  "fileName": "Tribbie_Tribbie_Ability01_Part01",
  "childAbilityList": [
    "Tribbie_Tribbie_Ability01_Camera",
    "Tribbie_Tribbie_Ability01_Part01",
    "Tribbie_Tribbie_Ability01_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Tribbie_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}