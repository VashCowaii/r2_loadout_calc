const configAbility = {
  "fileName": "2004024_Monster_W2_Yanqing_AbilityP01_RL",
  "childAbilityList": [
    "2004024_Monster_W2_Yanqing_AbilityP01_RL",
    "2004024_Monster_W2_Yanqing_AbilityP01_Insert_Part01to02",
    "2004024_Monster_W2_Yanqing_AbilityP01_Insert_Part02to03",
    "2004024_Monster_W2_Yanqing_AbilityP01_Insert_Camera"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}