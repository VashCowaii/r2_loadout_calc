const configAbility = {
  "fileName": "3002042_Monster_W3_Clock_02_Ultimate_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W3_Clock_02_Ultimate_Part01",
      "isTrigger": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Check Boolean Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": "ENEMIES_OBJECT_UNUSED__114"
            }
          }
        ]
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1638600472\">Standard_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
        "displayLines": "{[Skill08[1]]}",
        "constants": [],
        "variables": [
          "{[Skill08[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
          "displayLines": "{[Skill08[0]]}",
          "constants": [],
          "variables": [
            "{[Skill08[0]]}"
          ]
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}