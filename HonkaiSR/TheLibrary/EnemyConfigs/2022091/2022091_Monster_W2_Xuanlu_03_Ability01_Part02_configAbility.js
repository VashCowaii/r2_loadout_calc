const configAbility = {
  "fileName": "2022091_Monster_W2_Xuanlu_03_Ability01_Part02",
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
        "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
        "displayLines": "{[Skill01[0]]}",
        "constants": [],
        "variables": [
          "{[Skill01[0]]}"
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    "Trigger: Ability End"
  ],
  "references": []
}