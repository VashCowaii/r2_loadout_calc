const configAbility = {
  "fileName": "Gepard_Gepard_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "Avatar_Gepard_DefenceValue",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-176429589\">Gepard_Ultimate_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
      "duration": {
        "displayLines": "3"
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_ShowValue": {
          "displayLines": "((Avatar_Gepard_DefenceValue * 0.45) + 600)"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}