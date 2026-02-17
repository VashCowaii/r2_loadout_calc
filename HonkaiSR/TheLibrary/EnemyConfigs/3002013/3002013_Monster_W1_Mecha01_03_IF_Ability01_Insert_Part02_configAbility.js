const configAbility = {
  "fileName": "3002013_Monster_W1_Mecha01_03_IF_Ability01_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "MonsterType_W3_Theater"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "MonsterType_W3_Theater"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-720232452\">MModifier_Monster_W3_Theater_RLBoss_StanceDamage</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Variables[0] (UnusedUnderThisBase_244) || RETURN",
        "displayLines": "UnusedUnderThisBase_244",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_244"
        ]
      },
      "adjustmentType": "+"
    }
  ],
  "references": []
}