const configAbility = {
  "fileName": "5014014_Monster_W5_Vtuber_AbortInsert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "W5_Vtuber_00"
        },
        "modifier": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>"
      },
      "passed": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>",
          "variableName": "MDF_SwitchField",
          "value": 1
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": [
          "Stealth"
        ],
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add to Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}