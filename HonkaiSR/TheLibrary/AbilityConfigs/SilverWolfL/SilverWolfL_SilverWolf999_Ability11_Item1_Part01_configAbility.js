const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_Item1_Part01",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_Ability11_Item1_Prepare_Camera",
    "SilverWolfL_SilverWolf999_Ability11_Item1_Prepare",
    "SilverWolfL_SilverWolf999_Ability11_Item1_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Item1_Part02",
    "SilverWolfL_SilverWolf999_Ability11_Item1_Camera",
    "SilverWolfL_SilverWolf999_Item1_Part01",
    "SilverWolfL_SilverWolf999_Item1_Part02",
    "SilverWolfL_SilverWolf999_Item1_Camera"
  ],
  "skillTrigger": "Skill12",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": [
    0,
    10,
    0
  ],
  "parse": [
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "SilverWolf999_Ability11_Item1_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill11_Item_LeftCount",
        "compareType": "<=",
        "value2": 0
      },
      "passed": [
        "Unknown EventType4 (Not always an error)[1 true]"
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "stateFilter": "AliveOrLimbo"
  }
}