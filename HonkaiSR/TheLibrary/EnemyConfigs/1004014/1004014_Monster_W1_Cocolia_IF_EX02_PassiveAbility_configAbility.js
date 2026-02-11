const configAbility = {
  "fileName": "1004014_Monster_W1_Cocolia_IF_EX02_PassiveAbility",
  "skillTrigger": "SkillEX02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1354982558\">Enemy_W1_Cocolia_IF_EX02_Boss</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1354982558\">Enemy_W1_Cocolia_IF_EX02_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "Summon01Flag"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-772818912\">MModifier_CocoliaP1_IF_BattleAlert</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1876053600\">Enemy_W2_Cocolia_IF_WeaknessSplit</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "Summon02Flag"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-936728969\">MModifier_CocoliaP2_IF_BattleAlert</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-776077682\">Enemy_W2_CocoliaP2_IF_WeaknessSplit</a>"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1783900265\">Enemy_W2_Cocolia_IF_ExtraFrozenDamageRatio</a>",
              "valuePerStack": {
                "MDF_ExtraFrozenDamageRatio": {
                  "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
                  "displayLines": "{[SkillEX02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX02[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"222390491\">Enemy_W2_Cocolia_IF_ExtraStance</a>",
              "valuePerStack": {
                "MDF_ExtraStanceRatio": {
                  "operator": "Variables[0] ({[SkillEX02[1]]}) || RETURN",
                  "displayLines": "{[SkillEX02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX02[1]]}"
                  ]
                },
                "MDF_StanceDMGPerTeamMate": {
                  "operator": "Variables[0] ({[SkillEX02[2]]}) || RETURN",
                  "displayLines": "{[SkillEX02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX02[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}