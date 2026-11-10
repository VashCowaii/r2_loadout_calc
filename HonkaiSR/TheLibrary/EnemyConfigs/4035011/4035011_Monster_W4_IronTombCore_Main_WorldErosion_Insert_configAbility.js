const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Main_WorldErosion_Insert",
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}} + {{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
    },
    "Deleted bullshit",
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "popUpText": "Descent into Chaos"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
      "valuePerStack": {
        "MDF_BPMaxCost": 4,
        "MDF_DirtyHPRatio_PerLayer": {
          "displayLines": "(4 * {[PassiveSkill01[4]]})"
        }
      }
    },
    {
      "name": "IF",
      "conditions": "Yapping is over"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 10
    },
    {
      "name": "Force-Sync AV Link",
      "linkHolder": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "linkSub": {
        "name": "Target Name",
        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1295613867\">Enemy_W4_IronTombCore_Main_P1_DamageReduceController</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "_WorldErosionIndex"
    },
    {
      "name": "Add Battle Event",
      "eventID": 60030,
      "assignOwner": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "variables": null,
      "whenCreated": [
        {
          "name": "Assign Unique Name",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "identifier": "BattleEvent01"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": 4,
          "isFixed": "* ERR",
          "isSetToValue": true
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": 1,
          "variableName": "_StoryMode"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": 1,
          "variableName": "#CL_First"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": 1,
          "variableName": "_FirstBE"
        },
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "skillType": "ControlSkill03",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BattleEvent01"
      },
      "afterInjection": []
    },
    {
      "name": "Add Battle Event",
      "eventID": 60032,
      "assignOwner": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "variables": null,
      "whenCreated": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "set": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": "Yapping is over"
    },
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
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}