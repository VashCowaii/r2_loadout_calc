const configAbility = {
  "fileName": "8003050_Monster_AML_Elite01_01_PassiveAbility_InsertAbility_ListenPoison",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Monster_AML_Elite01_01_DOTHitCounter) || RETURN",
        "displayLines": "Monster_AML_Elite01_01_DOTHitCounter",
        "constants": [],
        "variables": [
          "Monster_AML_Elite01_01_DOTHitCounter"
        ]
      },
      "Event": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1859460834\">Enemy_AML_Elite01_01_AttackAdd</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
            "displayLines": "{[PassiveSkillInitiate[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkillInitiate[1]]}"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
            "displayLines": "{[PassiveSkillInitiate[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkillInitiate[2]]}"
            ]
          },
          "valuePerStack": {
            "PassiveAbilityInitiate_P1_AttackAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Monster_AML_Elite01_01_DOTHitCounter"
    }
  ],
  "references": []
}