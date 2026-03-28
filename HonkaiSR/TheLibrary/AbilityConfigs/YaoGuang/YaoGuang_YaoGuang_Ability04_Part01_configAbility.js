const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Ability04_Part01",
  "childAbilityList": [
    "YaoGuang_YaoGuang_Ability04_Camera",
    "YaoGuang_YaoGuang_Ability04_Part01",
    "YaoGuang_YaoGuang_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
  "tag": "InfiniteRefresh",
  "abilityType": "Elation",
  "energy": 5,
  "toughnessList": [
    5,
    20,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "YaoGuang_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}