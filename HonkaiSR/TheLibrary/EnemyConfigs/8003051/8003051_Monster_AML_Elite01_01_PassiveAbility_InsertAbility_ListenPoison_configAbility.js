const configAbility = {
  "fileName": "8003051_Monster_AML_Elite01_01_PassiveAbility_InsertAbility_ListenPoison",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "Monster_AML_Elite01_01_DOTHitCounter"
      },
      "execute": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1859460834\">Enemy_AML_Elite01_01_AttackAdd</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "displayLines": "{[PassiveSkillInitiate[1]]}"
          },
          "stackLimit": {
            "displayLines": "{[PassiveSkillInitiate[2]]}"
          },
          "valuePerStack": {
            "PassiveAbilityInitiate_P1_AttackAddedRatio": {
              "displayLines": "{[PassiveSkillInitiate[0]]}"
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
      "variableName": "Monster_AML_Elite01_01_DOTHitCounter",
      "scope": "TargetEntity"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}