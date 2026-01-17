const configAbility = {
  "fileName": "Bailu_Bailu_Ability03_Part01",
  "childAbilityList": [
    "Bailu_Bailu_Ability03_Camera",
    "Bailu_Bailu_Ability03_EnterReady",
    "Bailu_Bailu_Ability03_Part01",
    "Bailu_Bailu_Ability03_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Bailu_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}