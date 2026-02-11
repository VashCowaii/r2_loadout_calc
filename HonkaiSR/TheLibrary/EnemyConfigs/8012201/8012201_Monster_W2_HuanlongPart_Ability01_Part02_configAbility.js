const configAbility = {
  "fileName": "8012201_Monster_W2_HuanlongPart_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Constants[0] (0) || Variables[0] ({[Skill01[0]]}) || SUB || RETURN",
        "displayLines": "(0 - {[Skill01[0]]})",
        "constants": [
          0
        ],
        "variables": [
          "{[Skill01[0]]}"
        ]
      },
      "adjustmentType": "+"
    },
    "Trigger: Ability End"
  ],
  "references": []
}