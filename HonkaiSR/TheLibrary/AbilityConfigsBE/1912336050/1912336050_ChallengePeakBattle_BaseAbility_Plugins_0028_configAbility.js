const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0028",
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
      "modifier": "<a class=\"gModGreen\" id=\"315363909\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0028</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__799376984\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0028_02</a>[<span class=\"descriptionNumberColor\">Navigator's Oath</span>]",
      "description": "All-Type RES PEN of Skill DMG and Ultimate DMG dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0028_ADF_1</span>.",
      "type": "Other",
      "statusName": "Navigator's Oath",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Skill",
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": "ChallengePeakBattle_Plugins_0028_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__315363909\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0028</a>",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Far Left Player Entity(no Memosprite)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"799376984\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0028_02</a>[<span class=\"descriptionNumberColor\">Navigator's Oath</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0028_ADF_1": {
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
          ],
          "priorityLevel": -90
        }
      ]
    }
  ]
}