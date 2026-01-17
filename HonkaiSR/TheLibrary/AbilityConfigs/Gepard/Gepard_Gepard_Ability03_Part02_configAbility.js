const configAbility = {
  "fileName": "Gepard_Gepard_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Avatar_Gepard_DefenceValue",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "Gepard_Ultimate_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_ShowValue": {
          "operator": "Variables[0] (Avatar_Gepard_DefenceValue) || Variables[1] (0.45) || MUL || Variables[2] (600) || ADD || RETURN",
          "displayLines": "((Avatar_Gepard_DefenceValue * 0.45) + 600)",
          "constants": [],
          "variables": [
            "Avatar_Gepard_DefenceValue",
            0.45,
            600
          ]
        }
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}