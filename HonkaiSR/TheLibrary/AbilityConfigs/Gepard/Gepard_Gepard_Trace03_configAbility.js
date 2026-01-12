const configAbility = {
  "fileName": "Gepard_Gepard_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Gepard_AttackConvert",
      "valuePerStack": {
        "MDF_ConvertRatio": {
          "operator": "Variables[0] (0.35) || RETURN",
          "displayLines": "0.35",
          "constants": [],
          "variables": [
            0.35
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Gepard_AttackConvert",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "Avatar_Gepard_DefenceValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "Avatar_Gepard_DefenceConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Gepard_Passive02_AttackDeltaUp",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (Avatar_Gepard_DefenceValue) || Variables[1] (Avatar_Gepard_DefenceConvert) || SUB || Variables[2] (MDF_ConvertRatio) || MUL || RETURN",
                  "displayLines": "((Avatar_Gepard_DefenceValue - Avatar_Gepard_DefenceConvert) * MDF_ConvertRatio)",
                  "constants": [],
                  "variables": [
                    "Avatar_Gepard_DefenceValue",
                    "Avatar_Gepard_DefenceConvert",
                    "MDF_ConvertRatio"
                  ]
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
              "target": "Owner of this Modifier",
              "variableName": "Avatar_Gepard_DefenceValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "Avatar_Gepard_DefenceConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Gepard_Passive02_AttackDeltaUp",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (Avatar_Gepard_DefenceValue) || Variables[1] (Avatar_Gepard_DefenceConvert) || SUB || Variables[2] (MDF_ConvertRatio) || MUL || RETURN",
                  "displayLines": "((Avatar_Gepard_DefenceValue - Avatar_Gepard_DefenceConvert) * MDF_ConvertRatio)",
                  "constants": [],
                  "variables": [
                    "Avatar_Gepard_DefenceValue",
                    "Avatar_Gepard_DefenceConvert",
                    "MDF_ConvertRatio"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ConvertRatio"
      ],
      "latentQueue": []
    }
  ]
}