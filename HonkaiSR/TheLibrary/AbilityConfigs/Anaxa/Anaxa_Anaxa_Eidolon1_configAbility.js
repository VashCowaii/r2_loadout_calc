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
      "modifier": "Anaxa_Eidolon1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Anaxa_Eidolon1_FirstBP"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Anaxa_Eidolon1_FirstBP",
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
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "adjustmentType": "+"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Anaxa_Eidolon1",
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
                  "modifier": "Anaxa_Eidolon1_Property[<span class=\"descriptionNumberColor\">Magician, Isolated by Stars</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "referenceModifier": "MReference_DefenceRatioDown",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.16) || RETURN",
                      "displayLines": "0.16",
                      "constants": [],
                      "variables": [
                        0.16
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}