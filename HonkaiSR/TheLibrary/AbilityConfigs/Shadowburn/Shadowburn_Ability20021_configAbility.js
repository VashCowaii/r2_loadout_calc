const configAbility = {
  "fileName": "Shadowburn_Ability20021",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_20021_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_20021_Main",
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
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Memosprite"
                  },
                  {
                    "name": "Is Part Of",
                    "of": "Use [SUMMONER OF] Prior Target(s) Defined",
                    "target": "Caster",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Flag_20021",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (12) || RETURN",
                    "displayLines": "12",
                    "constants": [],
                    "variables": [
                      12
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_20021",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "When the wearer summons memosprite for the first time, recovers #1[i] Skill Point(s) and regenerates #2[i] Energy for this unit.",
  "params": [
    [
      1,
      12
    ],
    [
      1,
      14
    ],
    [
      1,
      16
    ],
    [
      1,
      18
    ],
    [
      1,
      20
    ]
  ]
}