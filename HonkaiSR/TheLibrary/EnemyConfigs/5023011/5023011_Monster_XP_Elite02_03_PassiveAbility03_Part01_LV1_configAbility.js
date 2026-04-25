const configAbility = {
  "fileName": "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV1",
  "childAbilityList": [
    "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV1"
  ],
  "skillTrigger": "PassiveSkill03",
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
      "modifier": "<a class=\"gModGreen\" id=\"904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>",
      "stackLimit": 3
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}