const configAbility = {
  "fileName": "3002043_Monster_W3_Clock_02_Ultimate_Part02",
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
        "TargetList": [
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
              "variableName": "ENEMIES_OBJECT_UNUSED__114"
            }
          }
        ]
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1638600472\">Standard_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "displayLines": "{[Skill08[1]]}"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "{[Skill08[0]]}"
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