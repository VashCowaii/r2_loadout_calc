const configAbility = {
  "fileName": "60013_MissionBattleEvent60013_Ability03_Part01",
  "childAbilityList": [
    "60013_MissionBattleEvent60013_Ability03_Part01",
    "60013_MissionBattleEvent60013_Ability03_Part02",
    "60013_MissionBattleEvent60013_Ability03_Camera"
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
      "ability": "MissionBattleEvent60013_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}