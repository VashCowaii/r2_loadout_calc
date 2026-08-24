const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability05_Part01",
  "childAbilityList": [
    "8015040_Monster_W5_AsatPramad_Ability05_Part01",
    "8015040_Monster_W5_AsatPramad_Ability05_Part02",
    "8015040_Monster_W5_AsatPramad_Ability05_Camera",
    "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part01",
    "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part02"
  ],
  "skillTrigger": "Skill05",
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
      "ability": "Monster_W5_AsatPramad_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}