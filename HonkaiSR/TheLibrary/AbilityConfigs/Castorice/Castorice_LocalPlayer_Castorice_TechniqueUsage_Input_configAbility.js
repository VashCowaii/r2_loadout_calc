const configAbility = {
  "fileName": "Castorice_LocalPlayer_Castorice_TechniqueUsage_Input",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Castorice_OnInput_Flag",
      "value": 1
    },
    "Deleted bullshit",
    {
      "name": "Overworld Attack Instance",
      "onBattle": [
        {
          "name": "Define Custom Variable",
          "variableName": "Castorice_OnBattle_Flag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "140701(SkillMaze)"
        }
      ],
      "entryTargetType": "AllHitTarget"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Castorice_OnBattle_Flag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Castorice_OnBattle_Flag",
          "value": 0
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "overworldID": 140704
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Castorice_OnInput_Flag",
      "value": 0
    },
    {
      "name": "Remove Overworld Entity",
      "summon": {
        "name": "Add Target by Summoned Units",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "summonID": 14071
      }
    }
  ],
  "onAbortReg": [],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}