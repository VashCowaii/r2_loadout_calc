const configAbility = {
  "fileName": "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part01",
  "childAbilityList": [
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part01",
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02",
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Camera",
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Effect"
  ],
  "skillTrigger": "Skill04",
  "tag": "InfiniteRefresh",
  "abilityType": "Elation",
  "energy": null,
  "toughnessList": [
    20,
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
      "ability": "BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}