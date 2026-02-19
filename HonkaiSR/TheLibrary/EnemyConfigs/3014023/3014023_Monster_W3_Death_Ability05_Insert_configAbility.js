const configAbility = {
  "fileName": "3014023_Monster_W3_Death_Ability05_Insert",
  "childAbilityList": [
    "3014023_Monster_W3_Death_Ability05_Insert",
    "3014023_Monster_W3_Death_Ability05_Part02",
    "3014023_Monster_W3_Death_Ability05_Camera"
  ],
  "skillTrigger": "Skill05",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W3_Death_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}