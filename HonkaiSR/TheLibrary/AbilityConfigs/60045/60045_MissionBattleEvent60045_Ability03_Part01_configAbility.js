const configAbility = {
  "fileName": "60045_MissionBattleEvent60045_Ability03_Part01",
  "childAbilityList": [
    "60045_MissionBattleEvent60045_Ability03_Part01",
    "60045_MissionBattleEvent60045_Ability03_Part02",
    "60045_BattleEventAbility_60045_Camera"
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
      "ability": "MissionBattleEvent60045_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}