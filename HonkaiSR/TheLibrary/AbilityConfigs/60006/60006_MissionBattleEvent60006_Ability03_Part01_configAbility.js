const configAbility = {
  "fileName": "60006_MissionBattleEvent60006_Ability03_Part01",
  "childAbilityList": [
    "60006_MissionBattleEvent60006_Ability03_Part01",
    "60006_MissionBattleEvent60006_Ability03_Part02",
    "60006_MissionBattleEvent60006_Ability03_Part01_HuanLongTrigger",
    "60006_MissionBattleEvent60006_Ability03_Part02_HuanLongTrigger",
    "60006_MissionBattleEvent60006_Camera_01",
    "60006_MissionBattleEvent60006_Camera_02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MissionOrWeekly",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60006_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60006_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "UI Display Event",
          "popUpText": "Cloudhymn Roar"
        },
        "Deleted bullshit"
      ]
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