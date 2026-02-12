const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-370444723\">W4_IronTombCore_BattleScore1</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-420777580\">W4_IronTombCore_BattleScore2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-403999961\">W4_IronTombCore_BattleScore3</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1258256002\">Enemy_W4_IronTombCore_Status</a>"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4035011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Anti-Creator, Hatred Inundate"
          },
          {
            "name": "Stage ID",
            "ID": 2294,
            "compareType": "=",
            "characterName": null,
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "eventID": 60030,
          "assignOwner": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variables": null
        },
        {
          "name": "Add Battle Event",
          "eventID": 60032,
          "assignOwner": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variables": null
        }
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2029484938\">WMonster_W4_TieMu_P3Test</a>",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1187676843\">Enemy_W4_IronTombCore_PartController</a>"
        }
      ]
    },
    {
      "name": "Create Enemies",
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
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "TimePart",
      "value": {
        "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
        "displayLines": "PartEntity1_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity1_MonsterID"
        ]
      },
      "offset": -1
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "EnergyPart",
      "value": {
        "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
        "displayLines": "PartEntity2_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity2_MonsterID"
        ]
      },
      "offset": 1,
      "type": 2
    },
    {
      "name": "Establish Group Relationship",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "subTarget": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
      },
      "relatedGroup": "HPTransfer"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-453954106\">Enemy_W4_IronTombCorePart_DamageTransfer</a>[<span class=\"descriptionNumberColor\">Damage Resonance</span>]"
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 2}}"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}}"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Create AV Link",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "to": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
      },
      "linkOrder": 1,
      "isStart": true,
      "linkFollowerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      },
      "linkOwnerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      }
    }
  ],
  "references": []
}