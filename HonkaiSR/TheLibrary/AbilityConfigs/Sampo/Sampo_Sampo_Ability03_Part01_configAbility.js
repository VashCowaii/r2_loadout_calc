const configAbility = {
  "fileName": "Sampo_Sampo_Ability03_Part01",
  "childAbilityList": [
    "Sampo_Sampo_Ability03_Camera",
    "Sampo_Sampo_Ability03_Part01",
    "Sampo_Sampo_Ability03_Part02",
    "Sampo_Sampo_Ability03_EnterReady"
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
      "ability": "Sampo_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}