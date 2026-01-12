const configAbility = {
  "fileName": "Cerydra_Cerydra_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "DV_PursuedDamage_LimitCount",
      "value": {
        "operator": "Variables[0] (20) || RETURN",
        "displayLines": "20",
        "constants": [],
        "variables": [
          20
        ]
      }
    },
    {
      "name": "Find New Target",
      "from": "Allied Team(ALL)",
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "Cerydra_Ability02_Target"
      },
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": "First Character in Lineup (No Memosprites)",
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Cerydra_Ability02_Target",
              "valuePerStack": {
                "DV_PointAdded_Get": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": "Allied Team(Skip Memosprites)",
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": "Use Prior Target(s) Defined"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Cerydra_Ability02_Target",
                  "valuePerStack": {
                    "DV_PointAdded_Get": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Cerydra_Template_MaxPointHandle",
      "variables": {
        "DV_AddPoint": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "All Hostile Entities (AOE)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (2.4) || Variables[1] (2.4) || ADD || RETURN",
          "displayLines": "(2.4 + 2.4)",
          "constants": [],
          "variables": [
            2.4,
            2.4
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "Cerydra_Skill03_Attack",
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}