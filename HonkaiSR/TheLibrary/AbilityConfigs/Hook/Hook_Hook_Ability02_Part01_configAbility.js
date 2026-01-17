const configAbility = {
  "fileName": "Hook_Hook_Ability02_Part01",
  "childAbilityList": [
    "Hook_Hook_Ability02_Camera",
    "Hook_Hook_Ability02_Part01",
    "Hook_Hook_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
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
      "ability": "Hook_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}