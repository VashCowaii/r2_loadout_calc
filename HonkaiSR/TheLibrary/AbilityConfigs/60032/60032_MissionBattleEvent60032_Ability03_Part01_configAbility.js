const configAbility = {
  "fileName": "60032_MissionBattleEvent60032_Ability03_Part01",
  "childAbilityList": [
    "60032_MissionBattleEvent60032_Ability03_Camera",
    "60032_MissionBattleEvent60032_Ability03_EnterReady",
    "60032_MissionBattleEvent60032_Ability03_Part01",
    "60032_MissionBattleEvent60032_Ability03_Part02"
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
      "ability": "MissionBattleEvent60032_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Player-Team Target",
    "filter": {
      "name": "Target Name",
      "target": "{{Player Team(Exclude Memosprites)}} - {{BattleEvent60032_CHAR1415}}"
    }
  }
}