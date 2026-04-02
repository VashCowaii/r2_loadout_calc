const configAbility = {
  "fileName": "60006_MissionBattleEvent60006_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MissionOrWeekly",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MissionOrWeekly",
          "value": 3
        },
        "Trigger: Ability End"
      ],
      "failed": [
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P1_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P1_ADF"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P2_ADF"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
              "displayLines": "#BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}