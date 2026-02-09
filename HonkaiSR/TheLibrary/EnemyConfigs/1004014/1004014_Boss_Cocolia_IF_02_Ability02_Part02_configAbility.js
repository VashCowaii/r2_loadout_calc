const configAbility = {
  "fileName": "1004014_Boss_Cocolia_IF_02_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"814286618\">Enemy_W2_Cocolia_IF_Weakness_Quantum</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"673638889\">Enemy_W2_Cocolia_IF_Weakness_Thunder</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-263483217\">Enemy_W2_Cocolia_IF_Weakness_Wind</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1103725233\">Enemy_W2_Cocolia_IF_Weakness_Fire</a>"
    },
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2120593927\">Enemy_W2_Cocolia_IF_MoreTarget</a>"
              },
              "passed": [
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2120593927\">Enemy_W2_Cocolia_IF_MoreTarget</a>"
              },
              "passed": [
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2120593927\">Enemy_W2_Cocolia_IF_MoreTarget</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1826725095\">Enemy_W1_CocoliaP1_IF_Summon01</a>"
                    }
                  ]
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2120593927\">Enemy_W2_Cocolia_IF_MoreTarget</a>"
                  },
                  "passed": [
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
          "modifier": "<a class=\"gModGreen\" id=\"1853250756\">Enemy_W2_CocoliaPart_IF_WeaknessClear</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1826725095\">Enemy_W1_CocoliaP1_IF_Summon01</a>"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1103725233\">Enemy_W2_Cocolia_IF_Weakness_Fire</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"673638889\">Enemy_W2_Cocolia_IF_Weakness_Thunder</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1877057952\">Enemy_W1_CocoliaP1_IF_Summon02</a>"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-263483217\">Enemy_W2_Cocolia_IF_Weakness_Wind</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"814286618\">Enemy_W2_Cocolia_IF_Weakness_Quantum</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}