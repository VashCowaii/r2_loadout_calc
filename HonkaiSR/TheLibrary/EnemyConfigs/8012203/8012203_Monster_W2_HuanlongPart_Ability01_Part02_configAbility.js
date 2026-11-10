const configAbility = {
  "fileName": "8012203_Monster_W2_HuanlongPart_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "displayLines": "(0 - {[Skill01[0]]})"
      },
      "adjustmentType": "+"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}