const configAbility = {
  "fileName": "4063011_Monster_W4_Serpent_Ability04_Part01",
  "childAbilityList": [
    "4063011_Monster_W4_Serpent_Ability04_Camera",
    "4063011_Monster_W4_Serpent_Ability04_Part01",
    "4063011_Monster_W4_Serpent_Ability04_Part02"
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
      "ability": "Monster_W4_Serpent_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0",
      "revertDefault": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}