const configAbility = {
  "fileName": "4015010_Monster_W4_DawnsEye_Ability04_Part01",
  "childAbilityList": [
    "4015010_Monster_W4_DawnsEye_Ability04P1_Camera",
    "4015010_Monster_W4_DawnsEye_Ability04_Part01",
    "4015010_Monster_W4_DawnsEye_Ability04_Part02"
  ],
  "skillTrigger": "Skill04P1",
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
      "ability": "Monster_W4_DawnsEye_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}