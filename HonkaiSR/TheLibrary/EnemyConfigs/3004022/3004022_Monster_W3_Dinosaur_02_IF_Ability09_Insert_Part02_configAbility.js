const configAbility = {
  "fileName": "3004022_Monster_W3_Dinosaur_02_IF_Ability09_Insert_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1792784435\">Enemy_W3_Dinosaur_02_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] (UnusedUnderThisBase_240) || RETURN",
        "displayLines": "UnusedUnderThisBase_240",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_240"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] (UnusedUnderThisBase_243) || RETURN",
        "displayLines": "UnusedUnderThisBase_243",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_243"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_242) || RETURN",
          "displayLines": "UnusedUnderThisBase_242",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_242"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    }
  ],
  "references": []
}