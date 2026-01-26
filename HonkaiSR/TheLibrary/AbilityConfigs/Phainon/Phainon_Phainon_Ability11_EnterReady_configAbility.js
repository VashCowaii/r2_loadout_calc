const configAbility = {
  "fileName": "Phainon_Phainon_Ability11_EnterReady",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "from": {
          "name": "Target Name",
          "target": "{{Player Teams}}"
        },
        "to": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "value1": "Distance_Between_Entities",
        "compareType": "<=",
        "value2": 10
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE, with Unselectables)}}"
            },
            "conditions": {
              "name": "Is Body Part Owner",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          }
        }
      ]
    }
  ],
  "references": []
}