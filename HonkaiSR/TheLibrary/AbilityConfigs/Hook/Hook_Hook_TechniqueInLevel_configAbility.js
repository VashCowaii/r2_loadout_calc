const configAbility = {
  "fileName": "Hook_Hook_TechniqueInLevel",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "StageAbility_Maze_Hook_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Hook_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Technique Modifies Current Wave"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_DOT_Burn"
                      },
                      "passed": [
                        {
                          "name": "Trigger Ability",
                          "from": "Caster",
                          "inherentTarget": "Use Prior Target(s) Defined",
                          "ability": "Hook_PassiveAbility01_2",
                          "isTrigger": true
                        }
                      ],
                      "failed": [
                        "Trigger: Attack End"
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "stackFlag": "CharacterSkill"
                }
              ]
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}