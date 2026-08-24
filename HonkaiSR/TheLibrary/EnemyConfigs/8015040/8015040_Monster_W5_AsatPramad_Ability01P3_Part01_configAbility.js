const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability01P3_Part01",
  "childAbilityList": [
    "8015040_Monster_W5_AsatPramad_Ability01P3_Part01",
    "8015040_Monster_W5_AsatPramad_Ability01P3_Part02",
    "8015040_Monster_W5_AsatPramad_Ability01P3_Camera",
    "8015040_Monster_W5_AsatPramad_Ability01_Assist_00",
    "8015040_Monster_W5_AsatPramad_Ability01_Assist_01"
  ],
  "skillTrigger": "Skill01P3",
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
      "ability": "Monster_W5_AsatPramad_Ability01P3_Part02",
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