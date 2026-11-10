const configAbility = {
  "fileName": "Seele_Advanced_Seele_Trace01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-391270654\">Seele_Trace01</a>",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "displayLines": "3"
        },
        "MDF_DamageRatio": {
          "displayLines": "0.5"
        },
        "MDF_LiftTime": {
          "displayLines": "3"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-391270654\">Seele_Trace01</a>",
      "stackData": [
        "MDF_MaxLayer",
        "MDF_DamageRatio",
        "MDF_LiftTime"
      ],
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1550591182\">Advanced_Seele_Trace01_KillDamageRatio</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
              "duration": {
                "displayLines": "MDF_LiftTime"
              },
              "stackLimit": {
                "displayLines": "MDF_MaxLayer"
              },
              "valuePerStack": {
                "MDF_DamageRatio": {
                  "displayLines": "0.5"
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