const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Trace01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_PlayerBoy_30_Trace01"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_PlayerBoy_30_Trace01_ListenFirstSummon"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoy_30_Trace01_ListenFirstSummon",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": "ServantID",
                    "target": "Use Prior Target(s) Defined",
                    "characterName": null
                  },
                  {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster's Memosprite"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": "Caster's Memosprite",
                  "variableName": "CurEnergy",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (0.4) || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "(0.4 * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      0.4
                    ]
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoy_30_Trace01",
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
                  "name": "Action Advance/Delay",
                  "target": "Owner of this Modifier",
                  "advanceType": "Set",
                  "value": "(0 - 0.3)"
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