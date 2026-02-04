const configAbility = {
  "fileName": "8015011_Monster_AML_Boss_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Set Mapping Point",
      "point": "Origin",
      "reset": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill_Insert",
      "passed": [
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_AML_Boss_HitEffect"
            }
          ]
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Create Enemy as Body Part",
              "partName": "R_Hand",
              "value": {
                "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                "displayLines": "PartEntity1_MonsterID",
                "constants": [],
                "variables": [
                  "PartEntity1_MonsterID"
                ]
              },
              "offset": -3
            },
            {
              "name": "Create Enemy as Body Part",
              "partName": "Middle",
              "value": {
                "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
                "displayLines": "PartEntity2_MonsterID",
                "constants": [],
                "variables": [
                  "PartEntity2_MonsterID"
                ]
              },
              "offset": -2,
              "type": 2
            },
            {
              "name": "Create Enemy as Body Part",
              "partName": "L_Hand",
              "value": {
                "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                "displayLines": "PartEntity3_MonsterID",
                "constants": [],
                "variables": [
                  "PartEntity3_MonsterID"
                ]
              },
              "offset": -1,
              "type": 3
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "multiBase": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "modifier": "Enemy_WMonster_W0_Boss_Sign_Part1"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "modifier": "Enemy_WMonster_W0_Boss_Sign_Part2"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "modifier": "Enemy_WMonster_W0_Boss_Sign_Part3"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Monster_ChangePhase"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_WMonster_W0_Boss_LockHP_1"
            }
          ]
        },
        {
          "name": "Animation Task"
        }
      ]
    },
    {
      "name": "Set Enemy Phase",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "phase": 2
    },
    {
      "name": "Set Enemy Phase",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "phase": 2
    },
    {
      "name": "Set Enemy Phase",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "phase": 2
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_DamageTakenUp"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": false
    }
  ],
  "references": []
}