const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "PlayerBoy_30_Maze"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "PlayerBoy_30_Maze_Damage"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_30_Maze_Damage",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Technique Modifies Current Wave"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "All Hostile Entities (AOE)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Technique"
                  }
                },
                "Trigger: Attack End"
              ]
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_30_Maze",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Technique Modifies Current Wave"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": "All Hostile Entities (AOE)",
                  "advanceType": "Delay",
                  "value": "0.5"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}