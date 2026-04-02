const configAbility = {
  "fileName": "60010_MissionBattleEvent60010_Ability03_Part01",
  "childAbilityList": [
    "60010_MissionBattleEvent60010_Ability03_Part01",
    "60010_MissionBattleEvent60010_Ability03_Part02",
    "60010_BattleEventAbility_60010_Camera"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "MissionBattleEvent60010_Ability03_Part02",
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