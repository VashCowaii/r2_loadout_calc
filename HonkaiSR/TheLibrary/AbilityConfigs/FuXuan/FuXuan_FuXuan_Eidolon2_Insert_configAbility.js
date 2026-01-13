const configAbility = {
  "fileName": "FuXuan_FuXuan_Eidolon2_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": [
        {
          "name": "Target List",
          "target": "All Team Members(In Context)"
        },
        {
          "name": "Target List",
          "target": "All Untargetable"
        }
      ],
      "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
    },
    {
      "name": "Dispel Debuffs",
      "target": "Caster",
      "silent": true
    },
    {
      "name": "Heal",
      "target": "Caster",
      "healPercent": {
        "operator": "Variables[0] (AADF_1) || RETURN",
        "displayLines": "AADF_1",
        "constants": [],
        "variables": [
          "AADF_1"
        ]
      },
      "formula": "Heal from Target MaxHP"
    }
  ],
  "references": []
}