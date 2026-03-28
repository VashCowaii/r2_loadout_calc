const configAbility = {
  "fileName": "3002013_Monster_W3_TV_02_Ultimate_Part01",
  "childAbilityList": [
    "3002013_Monster_W3_TV_02_Ultimate_Part01",
    "3002013_Monster_W3_TV_02_Ultimate_Part02"
  ],
  "skillTrigger": "Skill08",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1990801725\">Enemy_W3_Theater_TV1Mark</a>"
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}