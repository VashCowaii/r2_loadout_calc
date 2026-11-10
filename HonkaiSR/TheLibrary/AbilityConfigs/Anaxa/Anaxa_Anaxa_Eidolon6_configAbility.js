const configAbility = {
  "fileName": "Anaxa_Anaxa_Eidolon6",
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
      "modifier": "<a class=\"gModGreen\" id=\"2017566930\">Anaxa_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Everything Is in Everything</span>]",
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "displayLines": "1.3"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2017566930\">Anaxa_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Everything Is in Everything</span>]",
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "description": "DMG dealt is <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original DMG.",
      "type": "Buff",
      "statusName": "Everything Is in Everything",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-446302809\">ModifyDamageData_IndependentDamageAddedRatio</a>",
              "variables": {
                "parameter[0]_IndependentDamageAddedRatio": {
                  "displayLines": "(MDF_PropertyRatio - 1)"
                }
              }
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