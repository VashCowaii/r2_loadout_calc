const configAbility = {
  "fileName": "4034018_Monster_W4_FireProwler_10_Main03_ChangePhase1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1639750956\">Enemy_W4_FireProwler_10_Main03_TimePower</a>"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"114418173\">Enemy_W4_FireProwler_10_Main03_OffTeamFormation</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2042695212\">Enemy_W4_FireProwler_10_Main03_Charge_Ability031</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertFlag_LMin"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertFlag_LMout"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ChangePhase",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Assist_Flag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Phase_Flag",
      "value": 2
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "LMCountDown",
      "value": 8
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}