const configAbility = {
  "fileName": "3002025_Monster_W1_Mecha01_03_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "FlopSide",
      "value": -1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Theater_Rogue"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}