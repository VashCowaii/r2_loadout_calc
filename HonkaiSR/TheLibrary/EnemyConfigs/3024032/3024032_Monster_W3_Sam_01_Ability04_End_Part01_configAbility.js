const configAbility = {
  "fileName": "3024032_Monster_W3_Sam_01_Ability04_End_Part01",
  "childAbilityList": [
    "3024032_Monster_W3_Sam_01_Ability04_End_Part01",
    "3024032_Monster_W3_Sam_01_Ability04_End_Part02",
    "3024032_Monster_W3_Sam_01_Ability04_End_Camera"
  ],
  "skillTrigger": "Skill04End",
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
      "ability": "Monster_W3_Sam_01_Ability04_End_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}