const configAbility = {
  "fileName": "1912336050_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "Ability01_P1_HitCount"
      },
      "execute": [
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
              "name": "Define Variable with Random Value",
              "variableName": "#CL_RandomPosX",
              "min": -0.3,
              "max": 0.3
            },
            {
              "name": "Define Variable with Random Value",
              "variableName": "#CL_RandomPosY",
              "min": -0.3,
              "max": 0.3
            },
            {
              "name": "Define Variable with Random Value",
              "variableName": "#CL_RandomRotY",
              "min": -60,
              "max": 60
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "displayLines": "Ability01_P2_DamagePercentage"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}