const configAbility = {
  "fileName": "2023020_Monster_W2_Beast02_Ability05_Part01",
  "childAbilityList": [
    "2023020_Monster_W2_Beast02_Ability05_Camera",
    "2023020_Monster_W2_Beast02_Ability05_Part01",
    "2023020_Monster_W2_Beast02_Ability05_Part02"
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
      "ability": "Monster_W2_Beast02_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0"
    }
  ],
  "references": []
}