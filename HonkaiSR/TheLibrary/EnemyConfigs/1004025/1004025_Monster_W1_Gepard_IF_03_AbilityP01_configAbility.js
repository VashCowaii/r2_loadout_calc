const configAbility = {
  "fileName": "1004025_Monster_W1_Gepard_IF_03_AbilityP01",
  "skillTrigger": "SkillP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"681945141\">Enemy_W1_Gepard_IF_03_EnhancePerTurnInit</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__681945141\">Enemy_W1_Gepard_IF_03_EnhancePerTurnInit</a>",
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Owner][?]"
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
              "valuePerStack": {
                "MDF_SpeedUpPerLayer": {
                  "displayLines": "{[SkillP04[0]]}"
                },
                "MDF_AttackUpPerLayer": {
                  "displayLines": "{[SkillP04[1]]}"
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ]
}