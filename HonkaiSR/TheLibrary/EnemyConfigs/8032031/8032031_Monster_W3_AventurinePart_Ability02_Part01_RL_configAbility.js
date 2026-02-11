const configAbility = {
  "fileName": "8032031_Monster_W3_AventurinePart_Ability02_Part01_RL",
  "childAbilityList": [
    "8032031_Monster_W3_AventurinePart_Ability02_Camera_RL",
    "8032031_Monster_W3_AventurinePart_Ability02_Part01_RL",
    "8032031_Monster_W3_AventurinePart_Ability02_Part02_RL"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target Group}}"
      },
      "ability": "Monster_W3_AventurinePart_Ability02_Part02_RL",
      "isTrigger": true
    },
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
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "DiceGamblingInsertCheck_RL",
                "compareType": "=",
                "value2": 1
              }
            ]
          }
        ]
      }
    }
  ],
  "references": []
}