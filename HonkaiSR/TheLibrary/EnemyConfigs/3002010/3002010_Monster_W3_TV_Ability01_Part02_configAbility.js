const configAbility = {
  "fileName": "3002010_Monster_W3_TV_Ability01_Part02",
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
      "valuePercent": {
        "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
        "displayLines": "{[Skill01[0]]}",
        "constants": [],
        "variables": [
          "{[Skill01[0]]}"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "popUpText": "Energy Regenerated",
      "living": true
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}