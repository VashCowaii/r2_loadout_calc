const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_TechniqueInLevel",
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
      "modifier": "StageAbility_Maze_PlayerBoy_10_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_10_TechniqueUsage_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Shield State/Value"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": "Owner of this Modifier"
            },
            {
              "name": "Set Shield State/Value",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Create Shield",
              "target": "Owner of this Modifier",
              "value": {
                "operator": "Variables[0] (MWAvatar_PlayerBoy_10_Shield_Value02) || RETURN",
                "displayLines": "MWAvatar_PlayerBoy_10_Shield_Value02",
                "constants": [],
                "variables": [
                  "MWAvatar_PlayerBoy_10_Shield_Value02"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_PlayerBoy_10_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "CasterDefence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_10_TechniqueUsage_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MWPlayerBoy_10_Shield_Value02": {
                      "operator": "Variables[0] (CasterDefence) || Variables[1] (0.3) || MUL || Variables[2] (384) || ADD || RETURN",
                      "displayLines": "((CasterDefence * 0.3) + 384)",
                      "constants": [],
                      "variables": [
                        "CasterDefence",
                        0.3,
                        384
                      ]
                    }
                  }
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