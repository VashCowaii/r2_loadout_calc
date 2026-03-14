const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Ability02_Part01",
  "childAbilityList": [
    "YaoGuang_YaoGuang_Ability02_Camera",
    "YaoGuang_YaoGuang_Ability02_Part01",
    "YaoGuang_YaoGuang_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
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
      "ability": "YaoGuang_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}