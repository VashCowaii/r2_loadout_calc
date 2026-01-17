const configAbility = {
  "fileName": "Tribbie_Tribbie_Ability03_Part01",
  "childAbilityList": [
    "Tribbie_Tribbie_Ability03_Camera",
    "Tribbie_Tribbie_Ability03_EnterReady",
    "Tribbie_Tribbie_Ability03_Part01",
    "Tribbie_Tribbie_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Tribbie_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}