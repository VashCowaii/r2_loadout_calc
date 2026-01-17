const configAbility = {
  "fileName": "Huohuo_Huohuo_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Memosprites and Self)}}"
      },
      "valuePercent": {
        "operator": "Variables[0] (0.2) || RETURN",
        "displayLines": "0.2",
        "constants": [],
        "variables": [
          0.2
        ]
      },
      "isFixed": "(Fixed)",
      "tag": "ActiveSkillAdd"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "Huohuo_Ability03_AttackUP[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MDF_AttackUP": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
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