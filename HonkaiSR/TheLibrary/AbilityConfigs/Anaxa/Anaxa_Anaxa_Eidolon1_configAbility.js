const configAbility = {
  "fileName": "Anaxa_Anaxa_Eidolon1",
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
      "modifier": "<a class=\"gModGreen\" id=\"76118628\">Anaxa_Eidolon1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1900870399\">Anaxa_Eidolon1_FirstBP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1900870399\">Anaxa_Eidolon1_FirstBP</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "displayLines": "1"
                  },
                  "adjustmentType": "+"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__76118628\">Anaxa_Eidolon1</a>",
      "execute": [
        {
          "eventTrigger": "Attacker Finalizes DMG Data",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has DMG Instance Tag",
                "tag": "Anaxa_00_BP"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-266153828\">Anaxa_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Magician, Isolated by Stars</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.16"
                    }
                  }
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