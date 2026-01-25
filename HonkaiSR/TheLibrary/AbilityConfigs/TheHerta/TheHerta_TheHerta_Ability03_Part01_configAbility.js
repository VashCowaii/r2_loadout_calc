const configAbility = {
  "fileName": "TheHerta_TheHerta_Ability03_Part01",
  "childAbilityList": [
    "TheHerta_TheHerta_Ability03_Camera",
    "TheHerta_TheHerta_Ability03_EnterReady",
    "TheHerta_TheHerta_Ability03_Part01",
    "TheHerta_TheHerta_Ability03_Part02"
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
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "TheHerta_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}