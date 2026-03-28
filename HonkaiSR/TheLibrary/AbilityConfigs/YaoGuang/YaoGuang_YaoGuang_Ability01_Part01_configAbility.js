const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Ability01_Part01",
  "childAbilityList": [
    "YaoGuang_YaoGuang_Ability01_Camera",
    "YaoGuang_YaoGuang_Ability01_Part01",
    "YaoGuang_YaoGuang_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 30,
  "toughnessList": [
    10,
    0,
    5
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "YaoGuang_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}