const configAbility = {
  "fileName": "60031_MissionBattleEvent60031_Ability03_Part01",
  "childAbilityList": [
    "60031_MissionBattleEvent60031_Ability03_Part01",
    "60031_MissionBattleEvent60031_Ability03_Part02",
    "60031_MissionBattleEvent60031_Ability03_Insert",
    "60031_MissionBattleEvent60031_Ability03_Part022",
    "60031_MissionBattleEvent60031_Ability03_Camera",
    "60031_MissionBattleEvent60031_Ability03_Camera02"
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
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsWeek",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60031_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60031_Ability03_Part022",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}