const configAbility = {
  "fileName": "8012040_Monster_W5_Shell_Ability01_Part01",
  "childAbilityList": [
    "8012040_Monster_W5_Shell_Ability01_Camera",
    "8012040_Monster_W5_Shell_Ability01_Part01",
    "8012040_Monster_W5_Shell_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
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
          "ability": "Monster_W5_Shell_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}