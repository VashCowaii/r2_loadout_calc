const configAbility = {
  "fileName": "3021032_Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCameraFlag02",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1869945151\">Enemy_W2_Argenti_IF_Power_Trigger</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCount02",
        "compareType": "=",
        "value2": 0
      }
    }
  ],
  "references": []
}