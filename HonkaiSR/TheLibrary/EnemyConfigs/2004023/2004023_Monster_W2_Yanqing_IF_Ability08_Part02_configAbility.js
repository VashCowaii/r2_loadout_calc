const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_Ability08_Part02",
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
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
    },
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
          "displayLines": "(0.5 * {[Skill08[0]]})",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "40%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
          "displayLines": "(0.5 * {[Skill08[0]]})",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
      "value": {
        "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
        "constants": [
          1
        ],
        "variables": [
          "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
          "displayLines": "(0.5 * {[Skill08[0]]})",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
      "value": {
        "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
        "constants": [
          1
        ],
        "variables": [
          "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
          "displayLines": "(0.5 * {[Skill08[0]]})",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
      "value": {
        "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
        "constants": [
          1
        ],
        "variables": [
          "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
          "displayLines": "(0.5 * {[Skill08[0]]})",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
          "displayLines": "(0.5 * {[Skill08[0]]})",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "60%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}