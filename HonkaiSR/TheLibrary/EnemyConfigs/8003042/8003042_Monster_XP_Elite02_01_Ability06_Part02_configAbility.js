const configAbility = {
  "fileName": "8003042_Monster_XP_Elite02_01_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "XP_Elite02_01_BattleScore1_Flag",
      "resetValue": 1,
      "scope": "TargetEntity"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(EnergyLayer + 1)"
      },
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyLayer",
            "compareType": "<",
            "value2": 0
          },
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(EnergyLayer - 1)"
              },
              "variableName": "EnergyLayer"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1400625126\">Monster_XP_Elite02_01_Effect</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}