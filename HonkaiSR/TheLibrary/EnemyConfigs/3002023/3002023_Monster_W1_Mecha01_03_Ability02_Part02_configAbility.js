const configAbility = {
  "fileName": "3002023_Monster_W1_Mecha01_03_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Constants[0] (0) || Variables[0] ({[Skill02[0]]}) || SUB || RETURN",
        "displayLines": "(0 - {[Skill02[0]]})",
        "constants": [
          0
        ],
        "variables": [
          "{[Skill02[0]]}"
        ]
      },
      "adjustmentType": "+"
    },
    "Trigger: Ability End"
  ],
  "references": []
}