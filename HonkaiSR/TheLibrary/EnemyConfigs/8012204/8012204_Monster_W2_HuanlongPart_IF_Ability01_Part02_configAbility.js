const configAbility = {
  "fileName": "8012204_Monster_W2_HuanlongPart_IF_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": {
        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill01[0]]}) || MUL || RETURN",
        "displayLines": "(-1 * {[Skill01[0]]})",
        "constants": [
          1
        ],
        "variables": [
          "{[Skill01[0]]}"
        ]
      },
      "isFixed": "(Fixed)"
    },
    "Trigger: Ability End"
  ],
  "references": []
}