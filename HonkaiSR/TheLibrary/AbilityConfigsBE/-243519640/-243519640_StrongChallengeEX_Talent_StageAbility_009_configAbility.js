const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_009",
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
      "modifier": "MStrongChallengeEX_Talent_StageAbility_LE_009"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_PLY_009_Mark"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_PLY_009[<span class=\"descriptionNumberColor\">Ashen Battleground</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill"
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
              "functionName": "ReduceActionDelay",
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
      ],
      "description": "Increases DMG dealt by Basic ATK and Skill by <span class=\"descriptionNumberColor\">#ADF_1</span>.",
      "type": "Buff",
      "statusName": "Ashen Battleground"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_LE_009",
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
                  "modifier": "MStrongChallengeEX_Talent_StageAbility_PLY_009[<span class=\"descriptionNumberColor\">Ashen Battleground</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}