const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_Ability02P3_Part01",
  "childAbilityList": [
    "8015050_Monster_W5_AsatPramad_Ability02P3_Part01",
    "8015050_Monster_W5_AsatPramad_Ability02P3_Part02",
    "8015050_Monster_W5_AsatPramad_Ability02P3_Camera",
    "8015050_Monster_W5_AsatPramad_Ability02_Assist_00",
    "8015050_Monster_W5_AsatPramad_Ability02_Assist_01"
  ],
  "skillTrigger": "Skill02P3",
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
      "ability": "Monster_W5_AsatPramad_Ability02P3_Part02",
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