const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_Ability052_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "AIFlag",
        "compareType": "=",
        "value2": 10
      },
      "passed": [
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        }
      ],
      "failed": [
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}