const configAbility = {
  "fileName": "5024012_Monster_W5_Ripper_Ability06_Part01",
  "childAbilityList": [
    "5024012_Monster_W5_Ripper_Ability06_Camera",
    "5024012_Monster_W5_Ripper_Ability06_Part01",
    "5024012_Monster_W5_Ripper_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W5_Ripper_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}