const configAbility = {
  "fileName": "1012011_Monster_W1_CWMecha_03_Ability05_Part02",
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
        "displayLines": "{[Skill05[0]]}"
      },
      "formula": "Heal from Healer's MaxHP"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}