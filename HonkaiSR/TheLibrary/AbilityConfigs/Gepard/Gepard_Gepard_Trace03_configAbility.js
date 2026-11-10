const configAbility = {
  "fileName": "Gepard_Gepard_Trace03",
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
      "modifier": "<a class=\"gModGreen\" id=\"1558938344\">M_Gepard_AttackConvert</a>",
      "valuePerStack": {
        "MDF_ConvertRatio": {
          "displayLines": "0.35"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1558938344\">M_Gepard_AttackConvert</a>",
      "stackData": [
        "MDF_ConvertRatio"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Avatar_Gepard_DefenceValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Avatar_Gepard_DefenceConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"567771648\">Gepard_Passive02_AttackDeltaUp</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "((Avatar_Gepard_DefenceValue - Avatar_Gepard_DefenceConvert) * MDF_ConvertRatio)"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Avatar_Gepard_DefenceValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Avatar_Gepard_DefenceConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"567771648\">Gepard_Passive02_AttackDeltaUp</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "((Avatar_Gepard_DefenceValue - Avatar_Gepard_DefenceConvert) * MDF_ConvertRatio)"
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