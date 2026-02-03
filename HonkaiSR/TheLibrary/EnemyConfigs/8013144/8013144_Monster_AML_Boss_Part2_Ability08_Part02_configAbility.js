const configAbility = {
  "fileName": "8013144_Monster_AML_Boss_Part2_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_W0_Boss_Part2_AttackUp_Ability08_Effect"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_W0_Boss_Part2_AttackUp_Ability08_Frensnel"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_W0_Boss_Part2_AttackUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
        "displayLines": "{[Skill08[1]]}",
        "constants": [],
        "variables": [
          "{[Skill08[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
          "displayLines": "{[Skill08[0]]}",
          "constants": [],
          "variables": [
            "{[Skill08[0]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_Monster_AML_Boss_Part2_Ability07"
    },
    "Ability Start",
    "Trigger: Ability End"
  ],
  "references": []
}