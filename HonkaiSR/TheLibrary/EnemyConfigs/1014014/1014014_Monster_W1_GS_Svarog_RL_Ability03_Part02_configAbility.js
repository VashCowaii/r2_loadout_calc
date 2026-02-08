const configAbility = {
  "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1440219637\">Boss_Cocolia_Endurance</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1310,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Firefly"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-205256396\">Monster_W1_Svarog_RL_ListenPlayerDie_Modifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1863384114\">Svarog_ListenBreak_RemoveControl_Modifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1666707889\">Monster_W1_Svarog_RL_Part_ListenHP_Modifier</a>",
      "valuePerStack": {
        "PassiveAbility02_P2_HPRatio": {
          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[0]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1293195213\">Monster_W1_Svarog_RL_Control_Modifier</a>[<span class=\"descriptionNumberColor\">Restrain</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1762407654\">Monster_W1_Svarog_RL_Control_OnPart_Modifier</a>",
      "valuePerStack": {
        "Modifier_DamagePercentage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-545618319\">Svarog_ListenPlayerAllDie_Modifier</a>"
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-545618319\">Svarog_ListenPlayerAllDie_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}.[[removeMemosprite]]"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1293195213\">Monster_W1_Svarog_RL_Control_Modifier</a>[<span class=\"descriptionNumberColor\">Restrain</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1762407654\">Monster_W1_Svarog_RL_Control_OnPart_Modifier</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"226501164\">Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1863384114\">Svarog_ListenBreak_RemoveControl_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1293195213\">Monster_W1_Svarog_RL_Control_Modifier</a>[<span class=\"descriptionNumberColor\">Restrain</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1762407654\">Monster_W1_Svarog_RL_Control_OnPart_Modifier</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}