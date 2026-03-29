const configAbility = {
  "fileName": "2004025_Monster_W2_Yanqing_Ability04_Part01",
  "childAbilityList": [
    "2004025_Monster_W2_Yanqing_Ability04_Part01",
    "2004025_Monster_W2_Yanqing_Ability04_Part02",
    "2004025_Monster_W2_Yanqing_Ability04_Camera"
  ],
  "skillTrigger": "Skill04",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_Yanqing_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  },
  "references": []
}