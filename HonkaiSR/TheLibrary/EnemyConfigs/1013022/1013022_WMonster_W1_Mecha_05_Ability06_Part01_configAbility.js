const configAbility = {
  "fileName": "1013022_WMonster_W1_Mecha_05_Ability06_Part01",
  "childAbilityList": [
    "1013022_WMonster_W1_Mecha_05_Ability06_Camera",
    "1013022_WMonster_W1_Mecha_05_Ability06_Part01",
    "1013022_WMonster_W1_Mecha_05_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 1013021,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Automaton Direwolf (Bug)"
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1013022,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Direwolf (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013023,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Direwolf (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013024,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Direwolf (Complete)"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "OneMore"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "OneMore"
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "WMonster_W1_Mecha_05_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}