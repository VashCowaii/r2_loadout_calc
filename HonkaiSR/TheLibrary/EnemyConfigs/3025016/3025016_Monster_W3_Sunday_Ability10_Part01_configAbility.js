const configAbility = {
  "fileName": "3025016_Monster_W3_Sunday_Ability10_Part01",
  "childAbilityList": [
    "3025016_Monster_W3_Sunday_Ability10_Part01",
    "3025016_Monster_W3_Sunday_Ability10_Part02",
    "3025016_Monster_W3_Sunday_Ability10_Camera",
    "3025016_Monster_W3_Sunday_Ability102_Camera"
  ],
  "skillTrigger": "Skill10",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Skill10TargetNumber",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill10Damage",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill10LightTeamShield",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill10ShieldBreakFlag",
      "value": 0
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Skill10Attack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "variableName": "Skill10TargetNumber",
      "livingTargets": true
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill10Damage",
      "value": {
        "operator": "Variables[0] ({[Skill10[0]]}) || Variables[1] (Skill10Attack) || MUL || Variables[2] (Skill10TargetNumber) || MUL || RETURN",
        "displayLines": "(({[Skill10[0]]} * Skill10Attack) * Skill10TargetNumber)",
        "constants": [],
        "variables": [
          "{[Skill10[0]]}",
          "Skill10Attack",
          "Skill10TargetNumber"
        ]
      }
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team Entity}}"
      },
      "valueType": "CurrentShield",
      "variableName": "Skill10LightTeamShield",
      "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
      "multiplier": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill10Damage",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (Skill10LightTeamShield) || RETURN",
          "displayLines": "Skill10LightTeamShield",
          "constants": [],
          "variables": [
            "Skill10LightTeamShield"
          ]
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill10ShieldBreakFlag",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill10ShieldBreakFlag",
          "value": 0
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Sunday_Ability10_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill10Damage",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (Skill10LightTeamShield) || RETURN",
          "displayLines": "Skill10LightTeamShield",
          "constants": [],
          "variables": [
            "Skill10LightTeamShield"
          ]
        }
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}