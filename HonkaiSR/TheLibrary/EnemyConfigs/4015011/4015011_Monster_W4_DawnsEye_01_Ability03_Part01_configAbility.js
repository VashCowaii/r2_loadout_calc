const configAbility = {
  "fileName": "4015011_Monster_W4_DawnsEye_01_Ability03_Part01",
  "childAbilityList": [
    "4015011_Monster_W4_DawnsEye_01_Ability03_Camera",
    "4015011_Monster_W4_DawnsEye_01_Ability03_Part01",
    "4015011_Monster_W4_DawnsEye_01_Ability03_Part02"
  ],
  "skillTrigger": "Skill03P3",
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
      "ability": "Monster_W4_DawnsEye_01_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}