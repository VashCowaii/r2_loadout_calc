const configAbility = {
  "fileName": "2004022_Monster_W2_Yanqing_Ability02_RevealedDie",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "W2_Yanqing_00_SummonMinionsPerformFlag",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "ability": "Monster_W2_Yanqing_Ability02_TeamFormation",
          "isTrigger": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_SummonMinionsPerformFlag",
          "value": 1
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "flagNames": []
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "stayInTeam": false
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 0,
        "conditions": {
          "name": "Has Flag",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagName": "Break"
        }
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_SummonMinionsPerformFlag"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}