const configAbility = {
  "fileName": "3025015_Monster_W3_Sunday_Ability10_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"881920025\">W3_Sunday_BattleScore2_Listener</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-396148290\">Enemy_W3_Sunday_P3Ability10Bonus</a>[<span class=\"descriptionNumberColor\">Im Anfang war der Sinn</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1798831542\">Enemy_W3_Sunday_Ability10_AttackIgnoreDEF</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"298444\">Enemy_W3_Sunday_Ability09_ChargeEffect_01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"50631301\">Enemy_W3_Sunday_Ability09_ChargeEffect_02</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"33853682\">Enemy_W3_Sunday_Ability09_ChargeEffect_03</a>"
    },
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill10ShieldBreakFlag",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.11,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.12,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill10ShieldBreakFlag",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-985522063\">Enemy_W3_Sunday_Ability09_ReactionModel</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1798831542\">Enemy_W3_Sunday_Ability10_AttackIgnoreDEF</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1660671565\">Enemy_W3_Sunday_Ability09_ChargeEffect_TearOutline</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"881920025\">W3_Sunday_BattleScore2_Listener</a>"
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-503796113\">TaskList_Monster_W3_SundayPart_Ability10_Shake</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
              "invertCondition": true
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}