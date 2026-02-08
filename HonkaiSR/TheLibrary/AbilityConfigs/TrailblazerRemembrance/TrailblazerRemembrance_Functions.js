const configAbility = {
  "fileName": "TrailblazerRemembrance_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1640803691\">PlayerBoy_30_TryCreateServant</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "compareType": "<=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TeamAddSP",
              "value": 0
            },
            {
              "name": "Summon Memosprite",
              "memoID": {
                "operator": "Variables[0] (ServantID) || RETURN",
                "displayLines": "ServantID",
                "constants": [],
                "variables": [
                  "ServantID"
                ]
              },
              "valuePerStack": {
                "Ability03_P1_DamagePercentage": {
                  "operator": "Variables[0] (2.4) || RETURN",
                  "displayLines": "2.4",
                  "constants": [],
                  "variables": [
                    2.4
                  ]
                },
                "Ability11_P2_DamagePercentage": {
                  "operator": "Variables[0] (1.2) || RETURN",
                  "displayLines": "1.2",
                  "constants": [],
                  "variables": [
                    1.2
                  ]
                }
              },
              "afterSummon": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}