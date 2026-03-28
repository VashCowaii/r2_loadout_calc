const configAbility = {
  "fileName": "4015011_Monster_W4_DawnsEye_01_Ability04_Part01",
  "childAbilityList": [
    "4015011_Monster_W4_DawnsEye_01_Ability04_Camera",
    "4015011_Monster_W4_DawnsEye_01_Ability04_Part01",
    "4015011_Monster_W4_DawnsEye_01_Ability04_Part02"
  ],
  "skillTrigger": "Skill04P3",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_DawnsEye_01_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}