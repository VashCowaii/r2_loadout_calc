const configAbility = {
  "fileName": "60014_MissionBattleEvent60014_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Random Event",
      "odds": [
        0.5,
        0.5
      ]
    },
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "DamageExtra": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        },
        "dmgFormulaExtra": "Max HP Scaling",
        "Toughness": {
          "displayLines": 120
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "DamageExtra": {
          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
          "displayLines": "{[SkillP01[1]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[1]]}"
          ]
        },
        "dmgFormulaExtra": "Max HP Scaling",
        "Toughness": {
          "displayLines": 120
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": 9,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP",
            "compareType": ">",
            "value2": 0
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageExtra": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "dmgFormulaExtra": "Max HP Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Follow-up"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}