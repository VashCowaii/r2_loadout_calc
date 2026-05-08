const configAbility = {
  "fileName": "Hysilens_LocalPlayer_Harscyline_TechniqueUsage_TriggerHitMonster",
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
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "1000111(null)"
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