const configAbility = {
  "fileName": "4032011_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_NegativeBlood_Temp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_NegativeBlood",
              "value": {
                "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeBlood_Temp) || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeBlood_Temp)",
                "constants": [],
                "variables": [
                  "CEIL",
                  "MDF_NegativeBlood_Temp"
                ]
              }
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_NegativeBlood_Temp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_NegativeBlood",
              "value": {
                "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeBlood_Temp) || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeBlood_Temp)",
                "constants": [],
                "variables": [
                  "CEIL",
                  "MDF_NegativeBlood_Temp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Target has accumulated \"HP Overload,\" healing <span class=\"descriptionNumberColor\">MDF_NegativeBlood</span> HP will remove this state. When the \"Overload Settlement\" turn begins, the target will receive fatal damage.",
      "type": "Other",
      "statusName": "HP Overload"
    }
  ],
  "references": []
}