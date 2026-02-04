const configAbility = {
  "fileName": "2013011_Monster_W2_Mecha03_AbilityP01",
  "childAbilityList": [
    "2013011_Monster_W2_Mecha03_AbilityP01",
    "2013011_Monster_W2_Mecha03_AbilityP01_Insert",
    "2013011_Monster_W2_Mecha03_AbilityP01_Camera",
    "2013011_Monster_W2_Mecha03_AbilityP02_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W2_Mecha03_Overdrive_Controller"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Enemy_W2_Mecha03_Overdrive_Hint"
    }
  ],
  "references": []
}