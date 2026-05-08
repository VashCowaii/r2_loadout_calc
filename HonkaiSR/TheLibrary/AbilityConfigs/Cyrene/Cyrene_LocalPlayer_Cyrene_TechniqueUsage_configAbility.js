const configAbility = {
  "fileName": "Cyrene_LocalPlayer_Cyrene_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>",
      "valuePerStack": {
        "_SpecifiedState": 2
      }
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_SkipNextMazeBuffRefreshState",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "141501(SkillMaze)",
      "duration": 30
    },
    "Submit Technique Use"
  ],
  "onAbortReg": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}