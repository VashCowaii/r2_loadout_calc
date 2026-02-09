const configAbility = {
  "fileName": "1004023_Monster_W1_Gepard_SPRL_AbilityP02_EnterBattle",
  "childAbilityList": [
    "1004023_Monster_W1_Gepard_SPRL_AbilityP02_EnterBattle"
  ],
  "skillTrigger": "SkillP02",
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
      "variableName": "SPRLCount"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Strike_SPRLCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-243818097\">SPRL_Flag</a>"
    }
  ],
  "references": []
}