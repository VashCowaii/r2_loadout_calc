const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_PartChange",
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
      "variableName": "W2_Yanqing_00_SkillP01_InsertFlag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-794932920\">Enemy_W2_Yanqing_AbilityP01_EnterBattleToast</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2138840050\">Enemy_W2_Yanqing_IF_AbilityP01_ChangePhaseController</a>"
    }
  ],
  "references": []
}