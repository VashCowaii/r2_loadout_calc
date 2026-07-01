const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability41_Part01",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_Ability41_Camera",
    "SilverWolfL_SilverWolf999_Ability41_Part01",
    "SilverWolfL_SilverWolf999_Ability41_Part02"
  ],
  "skillTrigger": "Skill41",
  "tag": "InfiniteRefresh",
  "abilityType": "Elation",
  "energy": null,
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
      "ability": "SilverWolf999_Ability41_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}