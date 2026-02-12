const configAbility = {
  "fileName": "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_EntityScore",
      "value": {
        "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
        "displayLines": "{[Skill02[0]]}",
        "constants": [],
        "variables": [
          "{[Skill02[0]]}"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}