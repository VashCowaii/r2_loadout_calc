const configAbility = {
  "fileName": "Hook_Hook_Ability01_Part01",
  "childAbilityList": [
    "Hook_Hook_Ability01_Camera",
    "Hook_Hook_Ability01_Part01",
    "Hook_Hook_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
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
      "ability": "Hook_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}