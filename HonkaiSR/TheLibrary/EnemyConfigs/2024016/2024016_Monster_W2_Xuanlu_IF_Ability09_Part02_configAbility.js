const configAbility = {
  "fileName": "2024016_Monster_W2_Xuanlu_IF_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "healPercent": {
        "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
        "displayLines": "{[Skill09[0]]}",
        "constants": [],
        "variables": [
          "{[Skill09[0]]}"
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}