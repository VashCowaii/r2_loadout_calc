const configAbility = {
  "fileName": "8012201_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1471440713\">Monster_W2_HuanlongPart_Heal</a>[<span class=\"descriptionNumberColor\">Vigor</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "BreakRecover",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HealRatio) || RETURN",
                    "displayLines": "MDF_HealRatio",
                    "constants": [],
                    "variables": [
                      "MDF_HealRatio"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HealRatio"
      ],
      "latentQueue": [],
      "description": "Every action taken restores <span class=\"descriptionNumberColor\">MDF_HealRatio</span> HP.",
      "type": "Buff",
      "effectName": "Vigor",
      "statusName": "Vigor"
    }
  ],
  "references": []
}