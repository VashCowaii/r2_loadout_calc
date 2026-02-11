const configAbility = {
  "fileName": "1004025_Monster_W1_Gepard_IF_03_AbilityP02",
  "skillTrigger": "SkillP02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "scope": "TargetEntity",
      "variableName": "Gepard_LimboFlag"
    }
  ],
  "references": []
}