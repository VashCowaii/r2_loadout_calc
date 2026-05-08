const configAbility = {
  "fileName": "Aglaea_LocalPlayer_Aglaea_TechniqueUsage_TriggerHitMonster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Overworld Attack Instance",
      "onBattle": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": null,
          "ID": "140201(SkillMaze)"
        }
      ]
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}