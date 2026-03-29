const configAbility = {
  "fileName": "5013050_Monster_W5_Ranger_Ability05_Part01",
  "childAbilityList": [
    "5013050_Monster_W5_Ranger_Ability05_Camera",
    "5013050_Monster_W5_Ranger_Ability05_Part01",
    "5013050_Monster_W5_Ranger_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_Ranger_Ability05_Part02",
      "isTrigger": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}