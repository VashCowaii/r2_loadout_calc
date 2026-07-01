const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability04_Part01",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_Ability04_Camera",
    "SilverWolfL_SilverWolf999_Ability04_Part01",
    "SilverWolfL_SilverWolf999_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
  "tag": "InfiniteRefresh",
  "abilityType": "Elation",
  "energy": null,
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
      "ability": "SilverWolf999_Ability04_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}