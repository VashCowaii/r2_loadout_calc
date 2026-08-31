const configAbility = {
  "fileName": "60044_MissionBattleEvent60044_Ability03_Part01",
  "childAbilityList": [
    "60044_MissionBattleEvent60044_Ability03_Part01",
    "60044_MissionBattleEvent60044_Ability03_Part02",
    "60044_MissionBattleEvent60044_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    60,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "MissionBattleEvent60044_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "allowUnselectable": true
  }
}