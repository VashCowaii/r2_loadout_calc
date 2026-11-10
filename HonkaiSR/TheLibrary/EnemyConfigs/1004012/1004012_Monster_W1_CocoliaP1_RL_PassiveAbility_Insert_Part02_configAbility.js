const configAbility = {
  "fileName": "1004012_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 1004031,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Bronya (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 100403100,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BronyaScore",
          "resetValue": 1,
          "scope": "TargetEntity"
        }
      ]
    },
    {
      "name": "Assign Value to Stat",
      "variableName": "BronyaScoreCheck",
      "value": {
        "displayLines": "BronyaScore"
      }
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "ChargeFlag",
      "scope": "TargetEntity"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1349231340\">Monster_W1_CocoliaP1_RL_Revive</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "value1": "DecisionFlag",
        "compareType": "=",
        "value2": 5,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "BaseSpeed",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20001,
          "statSource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
              "displayLines": "{[PassiveSkill01[0]]}"
            },
            "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
              "displayLines": "{[PassiveSkill01[1]]}"
            },
            "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
            "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
              "displayLines": "BaseSpeed"
            },
            "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
              "displayLines": "{[PassiveSkill01[2]]}"
            },
            "MDF_CocoliaP1_RL_BattleEvent_Count": 0
          }
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "BaseSpeed",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20001,
          "statSource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
              "displayLines": "{[PassiveSkill01[0]]}"
            },
            "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
              "displayLines": "{[PassiveSkill01[1]]}"
            },
            "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
            "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
              "displayLines": "BaseSpeed"
            },
            "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
              "displayLines": "{[PassiveSkill01[2]]}"
            },
            "MDF_CocoliaP1_RL_BattleEvent_Count": 0
          }
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0.05
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DecisionFlag",
      "resetValue": 1,
      "scope": "TargetEntity"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}