const configAbility = {
  "fileName": "Aglaea_Aglaea_Ability03_Part01",
  "childAbilityList": [
    "Aglaea_Aglaea_Ability03_Camera",
    "Aglaea_Aglaea_Ability03_EnterReady",
    "Aglaea_Aglaea_Ability03_Part01",
    "Aglaea_Aglaea_Ability03_Part02"
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
      "ability": "Aglaea_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}