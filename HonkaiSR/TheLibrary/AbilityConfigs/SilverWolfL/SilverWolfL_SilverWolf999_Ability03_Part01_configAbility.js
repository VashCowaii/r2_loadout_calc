const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability03_Part01",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_Ability03_EnterReady",
    "SilverWolfL_SilverWolf999_Ability03_Camera",
    "SilverWolfL_SilverWolf999_Ability03_Part01",
    "SilverWolfL_SilverWolf999_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
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
      "ability": "SilverWolf999_Ability03_Part02",
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