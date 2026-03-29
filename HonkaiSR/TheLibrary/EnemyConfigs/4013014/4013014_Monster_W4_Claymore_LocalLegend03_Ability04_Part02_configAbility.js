const configAbility = {
  "fileName": "4013014_Monster_W4_Claymore_LocalLegend03_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Every Battle Entity}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID02) || RETURN",
                  "displayLines": "SummonID02",
                  "constants": [],
                  "variables": [
                    "SummonID02"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        },
        "compareType": "=",
        "value2": 0,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_406) || RETURN",
            "displayLines": "UnusedUnderThisBase_406",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_406"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "KeepOnFirst"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1733208615\">Enemy_W4_Claymore_01_LocalLegend_WhiteSummon</a>"
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "refPoint": "After",
          "isStartingAV": true
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Every Battle Entity}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID01) || RETURN",
                  "displayLines": "SummonID01",
                  "constants": [],
                  "variables": [
                    "SummonID01"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            }
          ]
        },
        "compareType": "=",
        "value2": 0,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_407) || RETURN",
            "displayLines": "UnusedUnderThisBase_407",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_407"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "KeepOnLast"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1733208615\">Enemy_W4_Claymore_01_LocalLegend_WhiteSummon</a>"
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "refPoint": "After",
          "isStartingAV": true
        }
      ]
    },
    {
      "name": "Create AV Link",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: Light Summons}}"
      },
      "linkOrder": 1,
      "isStart": true,
      "linkFollowerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      },
      "linkOwnerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}