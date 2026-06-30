const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Eidolon4",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"753920964\">SilverWolf999_Eidolon4</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__753920964\">SilverWolf999_Eidolon4</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has DMG Instance Tag",
                "tag": "SilverWolf999_00_Skill41_Damage"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "scope": "ContextModifier",
                  "variableName": "CurrentEP"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">PunchlineFlatBonus</span>&nbsp;",
                      "value": "(CurrentEP * 5)"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}