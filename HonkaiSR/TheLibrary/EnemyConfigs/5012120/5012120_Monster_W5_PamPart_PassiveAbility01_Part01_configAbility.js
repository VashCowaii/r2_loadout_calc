const configAbility = {
  "fileName": "5012120_Monster_W5_PamPart_PassiveAbility01_Part01",
  "childAbilityList": [
    "5012120_Monster_W5_PamPart_PassiveAbility01_Camera",
    "5012120_Monster_W5_PamPart_PassiveAbility01_Part01",
    "5012120_Monster_W5_PamPart_PassiveAbility01_Part02"
  ],
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_PamPart_PassiveAbility01_Part02",
      "isTrigger": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1447906215\">Monster_W5_PamPart_zangshui_monitor_02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-185762705\">Monster_W5_PamPart_zangshui</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_dirty_part_num",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_dirty_part_num",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}