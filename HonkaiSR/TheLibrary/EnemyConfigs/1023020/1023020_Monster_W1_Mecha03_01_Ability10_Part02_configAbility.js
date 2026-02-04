const configAbility = {
  "fileName": "1023020_Monster_W1_Mecha03_01_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "SummonMonsterEatCount",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "ignoreParallelWarning": true,
      "ifTargetFound": [
        "Ability Start",
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonMonsterEatCount",
          "value": {
            "operator": "Variables[0] (SummonMonsterEatCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(SummonMonsterEatCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "SummonMonsterEatCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_Mecha03_01_Rage[<span class=\"descriptionNumberColor\">Surpass</span>]",
      "duration": 1,
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_37) || RETURN",
          "displayLines": "UnusedUnderThisBase_37",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_37"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_Mecha03_01_AOECount[<span class=\"descriptionNumberColor\">Bitterly Cold</span>]",
      "duration": 1,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (SummonMonsterEatCount) || RETURN",
        "displayLines": "SummonMonsterEatCount",
        "constants": [],
        "variables": [
          "SummonMonsterEatCount"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}