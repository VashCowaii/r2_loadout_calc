const configAbility = {
  "fileName": "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part02",
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
        "displayLines": "(-1 * {[Skill01[0]]})"
      },
      "isFixed": "(Fixed)"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}