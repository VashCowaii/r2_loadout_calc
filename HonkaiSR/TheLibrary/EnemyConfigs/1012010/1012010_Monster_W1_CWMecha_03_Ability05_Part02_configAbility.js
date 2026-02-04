const configAbility = {
  "fileName": "1012010_Monster_W1_CWMecha_03_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "healPercent": {
        "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
        "displayLines": "{[Skill05[0]]}",
        "constants": [],
        "variables": [
          "{[Skill05[0]]}"
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    "Trigger: Ability End"
  ],
  "references": []
}