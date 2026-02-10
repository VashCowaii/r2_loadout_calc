const configAbility = {
  "fileName": "8025011_Monster_SW_Minion01_02_IF_PassiveAbility_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "performAccFlag",
        "compareType": "=",
        "value2": 1
      },
      "failed": [
        {
          "name": "UI Display Event",
          "popUpText": "Decay Eulogy"
        },
        "Deleted bullshit"
      ]
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "PassiveSkill01",
      "passed": [
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[5]]}"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Quantum"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[3]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[4]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageTakenUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "scope": "TargetEntity",
              "variableName": "performAccFlag",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"399740303\">Enemy_SW_Boss_01_IF_Ability05_Charge</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "healPercent": {
        "operator": "Variables[0] (UnusedUnderThisBase_188) || RETURN",
        "displayLines": "UnusedUnderThisBase_188",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_188"
        ]
      }
    },
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
        "value2": 1,
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1150081091\">Enemy_SW_Minion01_IF_Deathrattle</a>"
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"526943540\">Enemy_SW_Minion01_01_IF_Deathrattle</a>"
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-938003569\">Enemy_SW_Minion01_02_IF_Deathrattle</a>"
                }
              ]
            },
            {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value1": "CurrentHP%",
              "compareType": "<=",
              "value2": 0
            }
          ]
        }
      }
    }
  ],
  "references": []
}