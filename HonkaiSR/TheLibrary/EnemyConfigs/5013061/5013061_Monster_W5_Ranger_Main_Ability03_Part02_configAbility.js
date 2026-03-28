const configAbility = {
  "fileName": "5013061_Monster_W5_Ranger_Main_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-680453013\">Enemy_W5_Ranger_Main_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "valuePerStack": {
        "MDF_SpeedUp": {
          "operator": "Variables[0] (UnusedUnderThisBase_593) || RETURN",
          "displayLines": "UnusedUnderThisBase_593",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_593"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}