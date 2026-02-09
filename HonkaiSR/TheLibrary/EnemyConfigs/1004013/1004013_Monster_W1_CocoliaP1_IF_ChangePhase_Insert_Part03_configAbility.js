const configAbility = {
  "fileName": "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part03",
  "childAbilityList": [
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part03",
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Camera"
  ],
  "skillTrigger": "SkillEvolution",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertCheck",
      "value": 1
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1652958361\">Monster_W1_Cocolia_IF_RevertSimulationSpeed</a>"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (Monster_SummonID3) || RETURN",
            "displayLines": "Monster_SummonID3",
            "constants": [],
            "variables": [
              "Monster_SummonID3"
            ]
          },
          "locationType": "FormationRecord"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1652958361\">Monster_W1_Cocolia_IF_RevertSimulationSpeed</a>"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "canHitNonTargets": true,
      "allowAbilityTriggers": false
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
    },
    {
      "name": "Add to Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      }
    }
  ],
  "references": []
}