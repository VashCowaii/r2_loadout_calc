const configAbility = {
  "fileName": "5013050_Monster_W5_Ranger_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Charge"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
      "valuePerStack": {
        "MDF_MaxCharge": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        },
        "MDF_HitCharge": {
          "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
          "displayLines": "{[Skill03[1]]}",
          "constants": [],
          "variables": [
            "{[Skill03[1]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}