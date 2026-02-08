const configAbility = {
  "fileName": "2013010_Monster_W2_Mecha03_AbilityP01",
  "childAbilityList": [
    "2013010_Monster_W2_Mecha03_AbilityP01",
    "2013010_Monster_W2_Mecha03_AbilityP01_Insert",
    "2013010_Monster_W2_Mecha03_AbilityP01_Camera"
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
      "modifier": "<a class=\"gModGreen\" id=\"1970609621\">Enemy_W2_Mecha03_Overdrive_Controller</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"516569012\">Enemy_W2_Mecha03_Overdrive_Hint</a>"
    }
  ],
  "references": []
}