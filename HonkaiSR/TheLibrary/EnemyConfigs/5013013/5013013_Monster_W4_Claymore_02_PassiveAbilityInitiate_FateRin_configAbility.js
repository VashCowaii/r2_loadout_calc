const configAbility = {
  "fileName": "5013013_Monster_W4_Claymore_02_PassiveAbilityInitiate_FateRin",
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
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-868072045\">MModifier_Monster_W4_Claymore_StatusControl_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-868072045\">MModifier_Monster_W4_Claymore_StatusControl_FateRin</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]"
              },
              "passed": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-782819442\">Empty</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}