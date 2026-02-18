const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_AbilityP01_RL",
  "abilityType": null,
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
      "modifier": "<a class=\"gModGreen\" id=\"2018294690\">Enemy_W2_Yanqing_AbilityP01_ChangePhaseController</a>"
    }
  ],
  "references": []
}