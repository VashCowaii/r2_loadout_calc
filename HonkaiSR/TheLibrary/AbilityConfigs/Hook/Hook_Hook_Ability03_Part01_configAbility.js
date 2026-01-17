const configAbility = {
  "fileName": "Hook_Hook_Ability03_Part01",
  "childAbilityList": [
    "Hook_Hook_Ability03_Camera",
    "Hook_Hook_Ability03_EnterReady",
    "Hook_Hook_Ability03_Part01",
    "Hook_Hook_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
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
      "ability": "Hook_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}