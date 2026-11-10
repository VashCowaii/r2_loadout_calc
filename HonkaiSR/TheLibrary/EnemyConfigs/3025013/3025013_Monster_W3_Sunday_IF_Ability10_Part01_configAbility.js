const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_Ability10_Part01",
  "childAbilityList": [
    "3025013_Monster_W3_Sunday_IF_Ability10_Part01",
    "3025013_Monster_W3_Sunday_IF_Ability10_Part02",
    "3025013_Monster_W3_Sunday_Ability10_Camera",
    "3025013_Monster_W3_Sunday_Ability102_Camera"
  ],
  "skillTrigger": "Skill10",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Skill10TargetNumber"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Skill10Damage"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Skill10LightTeamShield"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Skill10ShieldBreakFlag"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "Skill10Attack",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "Skill10TargetNumber",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "living": true
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(({[Skill10[0]]} * Skill10Attack) * Skill10TargetNumber)"
      },
      "variableName": "Skill10Damage"
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
          "displayLines": "Skill10LightTeamShield"
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "Skill10ShieldBreakFlag"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Skill10ShieldBreakFlag"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Sunday_IF_Ability10_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill10Damage",
        "compareType": ">=",
        "value2": {
          "displayLines": "Skill10LightTeamShield"
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
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}