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
              "value": 0,
              "variableName": "TeamAddSP"
            },
            {
              "name": "Summon Memosprite",
              "memoID": {
                "displayLines": "ServantID"
              },
              "valuePerStack": {
                "Ability03_P1_DamagePercentage": {
                  "displayLines": "2.4"
                },
                "Ability11_P2_DamagePercentage": {
                  "displayLines": "1.2"
                }
              },
              "afterSummoning": [
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