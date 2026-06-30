const configAbility = {
  "fileName": "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage_TriggerHitMonster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Overworld Attack Instance",
      "onAttack": [
        {
          "name": "IF",
          "conditions": {
            "name": "Can Die Instantly",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "passed": [
            "Overworld Mark Target for Death(which we don't care about)"
          ]
        }
      ],
      "entryTargetType": "FirstHitTarget"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          "Compare Overworld Tech Points",
          "Can Consumables Recover Tech Points"
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-402526884\">ADV_GlobalAbility_Maze_SilverWolf999_TimeOutRemoveSummonUnit</a>",
          "duration": 0.033999998
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