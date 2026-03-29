const configAbility = {
  "fileName": "2024021_Monster_Fuyan_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Rapid Gambit"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "set": 0
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "popUpText": "Action Advanced"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}