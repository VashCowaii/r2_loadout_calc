const configAbility = {
  "fileName": "3002021_Monster_W1_Mecha01_03_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "displayLines": "(0 - {[Skill02[0]]})"
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