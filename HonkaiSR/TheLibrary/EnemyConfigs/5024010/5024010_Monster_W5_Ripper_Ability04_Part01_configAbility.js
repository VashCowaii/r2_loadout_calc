const configAbility = {
  "fileName": "5024010_Monster_W5_Ripper_Ability04_Part01",
  "childAbilityList": [
    "5024010_Monster_W5_Ripper_Ability04_Camera",
    "5024010_Monster_W5_Ripper_Ability04_Part01",
    "5024010_Monster_W5_Ripper_Ability04_Part02"
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
      "ability": "Monster_W5_Ripper_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "targetIsVariable": true
  },
  "references": []
}