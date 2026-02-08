const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_010",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1359820035\">MStrongChallengeEX_Talent_StageAbility_LE_010</a>[<span class=\"descriptionNumberColor\">Moment of Termination</span>]"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1343970059\">MStrongChallengeEX_Talent_StageAbility_PLY_010_Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1207199115\">MStrongChallengeEX_Talent_StageAbility_PLY_010</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                      "value": "#ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused a Limbo/DeathState [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1359820035\">MStrongChallengeEX_Talent_StageAbility_LE_010</a>[<span class=\"descriptionNumberColor\">Moment of Termination</span>]",
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1207199115\">MStrongChallengeEX_Talent_StageAbility_PLY_010</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Ultimate deals <span class=\"descriptionNumberColor\">#ADF_1</span> more DMG.",
      "type": "Buff",
      "statusName": "Moment of Termination"
    }
  ]
}