const configAbility = {
  "fileName": "2023010_Monster_W2_Abomi04_AbilityP01",
  "childAbilityList": [
    "2023010_Monster_W2_Abomi04_AbilityP01",
    "2023010_Monster_W2_Abomi04_AbilityP01_Insert"
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
      "modifier": "Enemy_W2_Abomi04_HitToHeal_Controller"
    }
  ],
  "references": []
}