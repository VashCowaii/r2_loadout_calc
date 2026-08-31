const configAbility = {
  "fileName": "60048_MissionBattleEvent60030_Ability03_Part01",
  "childAbilityList": [
    "60048_MissionBattleEvent60030_Ability03_EnterReady",
    "60048_MissionBattleEvent60030_Ability03_Part01",
    "60048_MissionBattleEvent60030_Ability03_Part02",
    "60048_MissionBattleEvent60030_Ability03_Camera",
    "60048_MissionBattleEvent60030_Ability03Ready_Camera"
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
      "ability": "MissionBattleEvent60030_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}