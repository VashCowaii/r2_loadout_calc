const configAbility = {
  "fileName": "60024_MissionBattleEvent60024_Ability03_Part01",
  "childAbilityList": [
    "60024_MissionBattleEvent60024_Ability03_EnterReady",
    "60024_MissionBattleEvent60024_Ability03_Part01",
    "60024_MissionBattleEvent60024_Ability03_Part02",
    "60024_MissionBattleEvent60024_Ability03_Camera",
    "60024_MissionBattleEvent60024_Ability03_Insert_Part01",
    "60024_MissionBattleEvent60024_Ability03_Insert_Part02",
    "60024_MissionBattleEvent60024_Ability03_Insert_Camera"
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
      "ability": "MissionBattleEvent60024_Ability03_Part02",
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