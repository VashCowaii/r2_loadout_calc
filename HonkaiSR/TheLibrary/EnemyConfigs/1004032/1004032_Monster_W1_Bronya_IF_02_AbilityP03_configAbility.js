const configAbility = {
  "fileName": "1004032_Monster_W1_Bronya_IF_02_AbilityP03",
  "skillTrigger": "SkillP03",
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
      "modifier": "Monster_IF_BOSS_Standard_BreakBonus"
    }
  ],
  "references": []
}