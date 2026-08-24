const configAbility = {
  "fileName": "2013022_Monster_W2_Valkyrie02_PassiveAbilityInitiate_FateRin",
  "skillTrigger": "PassiveSkillInitiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeBattleEvents]].[[index1]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1513124665\">Enemy_W2_Valkyrie02_Target_FateRin</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1513124665\">Enemy_W2_Valkyrie02_Target_FateRin</a>"
    }
  ]
}