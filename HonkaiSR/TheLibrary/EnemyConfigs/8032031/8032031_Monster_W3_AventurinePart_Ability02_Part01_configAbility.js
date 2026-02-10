const configAbility = {
  "fileName": "8032031_Monster_W3_AventurinePart_Ability02_Part01",
  "childAbilityList": [
    "8032031_Monster_W3_AventurinePart_Ability02_Camera",
    "8032031_Monster_W3_AventurinePart_Ability02_Part01",
    "8032031_Monster_W3_AventurinePart_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "DiceGamblingInsertCheck",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "DiceGamblingInsertCheck",
                "compareType": "=",
                "value2": 1
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W3_AventurinePart_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}