const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability02_Part01",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_Ability02_Camera",
    "SilverWolfL_SilverWolf999_Ability02_Part01",
    "SilverWolfL_SilverWolf999_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
    10,
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
      "ability": "SilverWolf999_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}