const configAbility = {
  "fileName": "1023022_Monster_W1_Mecha03_01_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 1023021,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Frigid Prowler (Bug)"
      },
      "passed": [
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
              "operator": "Variables[0] (UnusedUnderThisBase_27) || RETURN",
              "displayLines": "UnusedUnderThisBase_27",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_27"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
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
              "operator": "Variables[0] (UnusedUnderThisBase_27) || RETURN",
              "displayLines": "UnusedUnderThisBase_27",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_27"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Monster_W1_Mecha03_01_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "counter": 1
    },
    "Trigger: Ability End"
  ],
  "references": []
}