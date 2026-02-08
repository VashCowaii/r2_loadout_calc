const configAbility = {
  "fileName": "2023011_Monster_W2_Abomi04_AbilityP01",
  "childAbilityList": [
    "2023011_Monster_W2_Abomi04_AbilityP01",
    "2023011_Monster_W2_Abomi04_AbilityP01_Insert"
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
      "modifier": "<a class=\"gModGreen\" id=\"378580326\">Enemy_W2_Abomi04_HitToHeal_Controller</a>"
    }
  ],
  "references": []
}