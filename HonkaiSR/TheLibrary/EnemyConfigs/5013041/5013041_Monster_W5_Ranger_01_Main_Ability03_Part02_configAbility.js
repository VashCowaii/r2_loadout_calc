const configAbility = {
  "fileName": "5013041_Monster_W5_Ranger_01_Main_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1643569913\">Enemy_W5_Ranger_Main_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "valuePerStack": {
        "MDF_DamageUp": {
          "operator": "Variables[0] (UnusedUnderThisBase_592) || RETURN",
          "displayLines": "UnusedUnderThisBase_592",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_592"
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