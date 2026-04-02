const configAbility = {
  "fileName": "60019_MissionBattleEvent60019_Ability03_Part01",
  "childAbilityList": [
    "60019_MissionBattleEvent60019_Ability03_Part01",
    "60019_MissionBattleEvent60019_Ability03_Part02",
    "60019_MissionBattleEvent60013_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    40,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "MissionBattleEvent60019_Ability03_Part02",
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