const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "#CL_State",
      "value": 1
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "operator": "Variables[0] (0.1) || RETURN",
        "displayLines": "0.1",
        "constants": [],
        "variables": [
          0.1
        ]
      },
      "consumeFloor": 1,
      "attackType": "BPSkill"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (0.72) || RETURN",
          "displayLines": "0.72",
          "constants": [],
          "variables": [
            0.72
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "#CL_State",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}