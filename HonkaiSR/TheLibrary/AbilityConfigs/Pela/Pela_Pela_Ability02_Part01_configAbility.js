const configAbility = {
  "fileName": "Pela_Pela_Ability02_Part01",
  "childAbilityList": [
    "Pela_Pela_Ability02_Camera",
    "Pela_Pela_Ability02_Part01",
    "Pela_Pela_Ability02_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Pela_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}