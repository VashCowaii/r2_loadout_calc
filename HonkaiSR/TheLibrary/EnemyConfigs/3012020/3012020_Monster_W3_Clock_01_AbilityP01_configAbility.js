const configAbility = {
  "fileName": "3012020_Monster_W3_Clock_01_AbilityP01",
  "childAbilityList": [
    "3012020_Monster_W3_Clock_01_AbilityP01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-95775214\">Enemy_W3_Clock_01_AbilityP01_SuperArmorController</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}