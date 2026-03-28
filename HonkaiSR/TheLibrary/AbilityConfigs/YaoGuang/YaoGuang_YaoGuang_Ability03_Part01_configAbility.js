const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Ability03_Part01",
  "childAbilityList": [
    "YaoGuang_YaoGuang_Ability03_Camera",
    "YaoGuang_YaoGuang_Ability03_EnterReady",
    "YaoGuang_YaoGuang_Ability03_Part01",
    "YaoGuang_YaoGuang_Ability03_Part02"
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
      "ability": "YaoGuang_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  }
}