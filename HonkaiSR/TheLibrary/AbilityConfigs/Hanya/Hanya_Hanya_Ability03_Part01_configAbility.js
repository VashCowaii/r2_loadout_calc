const configAbility = {
  "fileName": "Hanya_Hanya_Ability03_Part01",
  "childAbilityList": [
    "Hanya_Hanya_Ability03_EnterReady",
    "Hanya_Hanya_Ability03_Part01",
    "Hanya_Hanya_Ability03_Part02",
    "Hanya_Hanya_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
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
      "ability": "Hanya_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}