const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability01_Part01",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_Ability01_Camera",
    "SilverWolfL_SilverWolf999_Ability01_Part01",
    "SilverWolfL_SilverWolf999_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
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
      "ability": "SilverWolf999_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}