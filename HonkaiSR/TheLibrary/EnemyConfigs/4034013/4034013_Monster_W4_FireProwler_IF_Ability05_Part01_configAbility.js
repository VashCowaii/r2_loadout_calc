const configAbility = {
  "fileName": "4034013_Monster_W4_FireProwler_IF_Ability05_Part01",
  "childAbilityList": [
    "4034013_Monster_W4_FireProwler_Ability05_Camera",
    "4034013_Monster_W4_FireProwler_Ability05_Camera_NoClone",
    "4034013_Monster_W4_FireProwler_IF_Ability05_Part01",
    "4034013_Monster_W4_FireProwler_IF_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
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
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
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
      "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
        "compareType": ">",
        "value2": 0,
        "valueType": "Layer"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "AttackCount",
          "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AttackCount",
          "value": {
            "operator": "Variables[0] (AttackCount) || Variables[1] ({[Skill05[0]]}) || MUL || RETURN",
            "displayLines": "(AttackCount * {[Skill05[0]]})",
            "constants": [],
            "variables": [
              "AttackCount",
              "{[Skill05[0]]}"
            ]
          }
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (AttackCount) || RETURN",
            "displayLines": "AttackCount",
            "constants": [],
            "variables": [
              "AttackCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8
            }
          ]
        }
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_IF_Ability05_Part02",
      "isTrigger": true
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