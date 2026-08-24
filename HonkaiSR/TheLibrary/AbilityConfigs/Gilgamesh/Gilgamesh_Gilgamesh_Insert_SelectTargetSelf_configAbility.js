const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Insert_SelectTargetSelf",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Target List Entities",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "conditions": {
              "name": "Character ID",
              "ID": 1014,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "Saber"
            }
          },
          {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        ]
      },
      "passed": [
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
          "ability": "Gilgamesh_Insert_Part01",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1696185898\">Gilgamesh_InsertCheckSelf</a>"
        }
      ]
    }
  ],
  "onAbort": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1696185898\">Gilgamesh_InsertCheckSelf</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}