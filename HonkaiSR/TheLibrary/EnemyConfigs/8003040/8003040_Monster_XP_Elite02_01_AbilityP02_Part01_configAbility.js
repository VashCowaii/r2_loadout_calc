const configAbility = {
  "fileName": "8003040_Monster_XP_Elite02_01_AbilityP02_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "Monster_XP_Elite02_01_ShieldEffect"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"553137450\">Monster_XP_Elite02_01_Shield</a>"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_XP_Elite02_01_ShieldEffect",
          "value": 1
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "Monster_XP_Elite02_01_InsertFlag"
    }
  ],
  "references": []
}