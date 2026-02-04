const configAbility = {
  "fileName": "2023031_Monster_XP_Elite02_02_RLElite_AbilityP01",
  "childAbilityList": [
    "2023031_Monster_XP_Elite02_02_RLElite_AbilityP01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "SpecialFlag",
      "value": 2
    }
  ],
  "references": []
}