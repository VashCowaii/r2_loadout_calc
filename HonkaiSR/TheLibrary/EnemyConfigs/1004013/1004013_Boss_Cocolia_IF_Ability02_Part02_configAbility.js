const configAbility = {
  "fileName": "1004013_Boss_Cocolia_IF_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonCount) || RETURN",
        "displayLines": "Monster_W1_CocoliaP2_00_SummonCount",
        "constants": [],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonCount"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 0,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.25,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Ice_Lance_ID",
                      "summonLocation": "First"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1826725095\">Enemy_W1_CocoliaP1_IF_Summon01</a>"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Ice_Lance_ID_2",
                  "summonLocation": "Last"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1877057952\">Enemy_W1_CocoliaP1_IF_Summon02</a>"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Summon01Flag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Ice_Lance_ID",
                      "summonLocation": "First"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1826725095\">Enemy_W1_CocoliaP1_IF_Summon01</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Summon02Flag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Ice_Lance_ID_2",
                      "summonLocation": "Last"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1877057952\">Enemy_W1_CocoliaP1_IF_Summon02</a>"
                }
              ]
            }
          ]
        }
      ],
      "defaultEvents": []
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "NOT",
        "condition": {
          "name": "Enemy ID",
          "ID": 1004031,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": "Bronya (Complete)"
        }
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}