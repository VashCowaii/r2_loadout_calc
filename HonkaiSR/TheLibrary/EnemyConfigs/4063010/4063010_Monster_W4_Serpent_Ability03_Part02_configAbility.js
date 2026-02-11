const configAbility = {
  "fileName": "4063010_Monster_W4_Serpent_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1176741350\">Enemy_W4_Serpent_Charge_Eff</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
      "stackLimit": {
        "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
        "displayLines": "{[Skill03[0]]}",
        "constants": [],
        "variables": [
          "{[Skill03[0]]}"
        ]
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
        "displayLines": "{[Skill03[0]]}",
        "constants": [],
        "variables": [
          "{[Skill03[0]]}"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}