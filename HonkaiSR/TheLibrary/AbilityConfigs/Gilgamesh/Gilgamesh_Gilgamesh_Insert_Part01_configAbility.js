const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "\"I Grant You Permission To Strike\""
    },
    "Deleted bullshit",
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
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
          "ability": "Gilgamesh_Insert_Part02"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Gilgamesh: Saber}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Gilgamesh_Insert_Part02_Saber"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Gilgamesh: Saber}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1481096050\">Gilgamesh_SaberBonus2</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Gilgamesh: Saber}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1420871220\">Gilgamesh_SaberBonus</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Gilgamesh: Saber}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-437296268\">Saber_Wind_Ability03_buff</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Gilgamesh: Saber}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1497873669\">Gilgamesh_SaberBonus3</a>"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}