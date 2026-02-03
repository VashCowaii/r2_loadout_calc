const configAbility = {
  "fileName": "3024012_Monster_W2_Argenti_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "healPercent": 1,
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "First"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "First"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "First"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "First"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_12) || RETURN",
            "displayLines": "UnusedUnderThisBase_12",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_12"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}