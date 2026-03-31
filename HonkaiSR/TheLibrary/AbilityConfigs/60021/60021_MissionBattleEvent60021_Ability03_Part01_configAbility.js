const configAbility = {
  "fileName": "60021_MissionBattleEvent60021_Ability03_Part01",
  "childAbilityList": [
    "60021_MissionBattleEvent60021_Ability03_Part01",
    "60021_MissionBattleEvent60021_Ability03_Part02",
    "60021_MissionBattleEvent60021_Ability03_Camera"
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
      "ability": "MissionBattleEvent60021_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  },
  "realTargetData": {
    "primaryTarget": "All Player Team"
  }
}