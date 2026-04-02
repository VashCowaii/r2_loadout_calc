const configAbility = {
  "fileName": "60036_MissionBattleEvent60020_Ability03_Part01",
  "childAbilityList": [
    "60036_MissionBattleEvent60020_Ability03_Part01",
    "60036_MissionBattleEvent60020_Ability03_Part02",
    "60036_BattleEventAbility_60020_Camera"
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
      "ability": "MissionBattleEvent60020_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Count",
        "compareType": ">",
        "value2": 2
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Count",
            "compareType": "=",
            "value2": 2
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Count",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Count",
      "value": {
        "operator": "Variables[0] (_Count) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(_Count + 1)",
        "constants": [
          1
        ],
        "variables": [
          "_Count"
        ]
      }
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