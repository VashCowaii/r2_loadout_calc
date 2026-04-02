const configAbility = {
  "fileName": "60028_MissionBattleEvent60028_Ability03_Part01",
  "childAbilityList": [
    "60028_MissionBattleEvent60028_Ability03_Part01",
    "60028_MissionBattleEvent60028_Ability03_Part02",
    "60028_BattleEventAbility_60028_Camera"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Character ID",
        "ID": 1014,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "Saber"
      },
      "ifTargetFound": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "MissionBattleEvent60028_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "MissionBattleEvent60028_Ability03_Part02",
              "isTrigger": true
            }
          ]
        }
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