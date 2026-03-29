const configAbility = {
  "fileName": "3014024_Monster_W3_Death_Ability08_Insert",
  "childAbilityList": [
    "3014024_Monster_W3_Death_Ability08_Insert",
    "3014024_Monster_W3_Death_Ability08_Part02",
    "3014024_Monster_W3_Death_Ability08_Camera"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_W3_Death_Ability08_Part02",
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