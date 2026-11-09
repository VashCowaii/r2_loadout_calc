const configAbility = {
  "fileName": "60012_MissionBattleEvent60012_Ability03_Part01",
  "childAbilityList": [
    "60012_MissionBattleEvent60012_Ability03_Part01",
    "60012_MissionBattleEvent60012_Ability03_Part02",
    "60012_MissionBattleEvent60012_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    60,
    0
  ],
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterID": "8005 (Trailblazer - Harmony[M])"
          },
          {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterID": "8006 (Trailblazer - Harmony[F])"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "MissionBattleEvent60012_Player_Ability03_Part01"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "MissionBattleEvent60012_Ability03_Part02",
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