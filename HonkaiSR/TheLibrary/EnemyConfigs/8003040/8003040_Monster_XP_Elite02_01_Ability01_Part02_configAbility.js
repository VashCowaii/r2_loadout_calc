const configAbility = {
  "fileName": "8003040_Monster_XP_Elite02_01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Monster_XP_Elite02_01_AIFlag",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        }
      ]
    },
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyLayer",
      "value": 7
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-412122860\">Monster_XP_Elite02_01_Battle_02</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}