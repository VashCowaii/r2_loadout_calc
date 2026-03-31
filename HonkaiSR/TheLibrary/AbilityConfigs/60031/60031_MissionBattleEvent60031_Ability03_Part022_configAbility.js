const configAbility = {
  "fileName": "60031_MissionBattleEvent60031_Ability03_Part022",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Phantom}}"
        },
        "value1": "_PhaseLock",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Core}}"
      },
      "variableName": "_WorldErosion",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (100) || MUL || RETURN",
        "displayLines": "(-{[Skill03[1]]} * 100)",
        "constants": [
          100
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "max": 100
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Phantom}}"
        },
        "value1": "_PhaseLock",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Core}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}