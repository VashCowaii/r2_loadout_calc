const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0018",
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
      "modifier": "<a class=\"gModGreen\" id=\"1783155124\">Modifier_ChallengePeakBattle_EnhancedAbility_0018</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1227725619\">Modifier_ChallengePeakBattle_EnhancedAbility_0018_02</a>[<span class=\"descriptionNumberColor\">Hemovore+</span>]",
      "description": "Loses <span class=\"descriptionNumberColor\">ChallengePeakBattle_0018_ADF_1</span> HP at the start of turn.",
      "type": "Other",
      "statusName": "Hemovore+",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Consume",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flatConsume": {
                "operator": "Variables[0] (ChallengePeakBattle_0018_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_0018_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0018_ADF_1"
                ]
              },
              "eatShield": true,
              "attackType": "Level",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Physical"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1783155124\">Modifier_ChallengePeakBattle_EnhancedAbility_0018</a>",
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
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Netherwing}}"
                    },
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"1227725619\">Modifier_ChallengePeakBattle_EnhancedAbility_0018_02</a>[<span class=\"descriptionNumberColor\">Hemovore+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0018_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}