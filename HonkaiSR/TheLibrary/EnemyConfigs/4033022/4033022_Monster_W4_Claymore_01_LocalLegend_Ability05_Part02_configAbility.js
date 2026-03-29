const configAbility = {
  "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part02",
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
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"1813832219\">Enemy_W4_Claymore_01_LocalLegend_BlackSummon</a>"
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
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"1813832219\">Enemy_W4_Claymore_01_LocalLegend_BlackSummon</a>"
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
        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
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
        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
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
        "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"783794549\">Enemy_W4_Shooter_01_Effect</a>",
            "invertCondition": true
          },
          {
            "name": "Enemy ID",
            "ID": 403205,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"783794549\">Enemy_W4_Shooter_01_Effect</a>",
          "casterAssign": "TargetSelf"
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