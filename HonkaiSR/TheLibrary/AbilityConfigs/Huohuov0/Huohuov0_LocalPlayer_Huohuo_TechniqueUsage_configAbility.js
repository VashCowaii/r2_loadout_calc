const configAbility = {
  "fileName": "Huohuov0_LocalPlayer_Huohuo_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Overworld Attack Instance",
      "onAttack": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": null,
          "ID": "121701(SkillMaze)",
          "duration": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Adventure Ability Targets}}"
        },
        "value1": "Feared_Target_Count",
        "compareType": ">=",
        "value2": 6
      }
    }
  ],
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}