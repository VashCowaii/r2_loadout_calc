const configAbility = {
  "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1366215328\">Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"651084439\">Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1548805762\">Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Frensnel</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1797898351\">Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Frensnel</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2123264245\">Enemy_AML_Boss_Part2_IF_Enhancement</a>",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2123264245\">Enemy_AML_Boss_Part2_IF_Enhancement</a>",
      "addStacksPerTrigger": 1
    },
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "healPercent": {
            "operator": "Variables[0] (SkillEX03_P3_HealHPRatio) || RETURN",
            "displayLines": "SkillEX03_P3_HealHPRatio",
            "constants": [],
            "variables": [
              "SkillEX03_P3_HealHPRatio"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "healPercent": {
            "operator": "Variables[0] (SkillEX03_P3_HealHPRatio) || RETURN",
            "displayLines": "SkillEX03_P3_HealHPRatio",
            "constants": [],
            "variables": [
              "SkillEX03_P3_HealHPRatio"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}