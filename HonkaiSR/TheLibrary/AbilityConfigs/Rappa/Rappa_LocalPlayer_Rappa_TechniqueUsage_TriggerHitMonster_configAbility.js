const configAbility = {
  "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage_TriggerHitMonster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Overworld Attack Instance",
      "onBattle": [
        {
          "name": "Remove Overworld Entity",
          "summon": {
            "name": "Add Target by Summoned Units",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 13171
          }
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": null,
          "ID": "131701(SkillMaze)"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "overworldID": 131702
        }
      ]
    }
  ],
  "references": [],
  "triggerType": "BySummonUnit",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}