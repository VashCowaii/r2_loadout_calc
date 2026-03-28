const configAbility = {
  "fileName": "2022101_Monster_W2_Xuanlu_04_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1305390378\">Enemy_W2_Xuanlu_04_Charge</a>[<span class=\"descriptionNumberColor\">Lavish Fruit</span>]"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
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
              "value": "MonsterType_Xuanlu"
            }
          }
        ]
      },
      "scope": "TargetEntity",
      "variableName": "CanUseUltra",
      "value": 1
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
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
              "value": "MonsterType_Xuanlu"
            }
          }
        ]
      },
      "set": 0
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}