const configAbility = {
  "fileName": "2013013_Monster_W2_Mecha03_AbilityP01_FateRin",
  "childAbilityList": [
    "2013013_Monster_W2_Mecha03_AbilityP01_FateRin",
    "2013013_Monster_W2_Mecha03_AbilityP01_Insert_FateRin",
    "2013013_Monster_W2_Mecha03_AbilityP01_Camera"
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
      "modifier": "<a class=\"gModGreen\" id=\"-483586527\">Enemy_W2_Mecha03_Overdrive_Controller_FateRin</a>"
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