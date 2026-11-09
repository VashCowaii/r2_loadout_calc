const configAbility = {
  "fileName": "60050_MissionBattleEvent60032_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
            "modifier": "<a class=\"gModGreen\" id=\"845647266\">Enemy_W4_IronTombCore_Beta</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>",
            "invertCondition": true
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "value1": "_ChangePhaseEnd",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Trailblazer}}"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1413 (Evernight)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1414 (Dan Heng • Permansor Terrae)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1402 (Aglaea)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1403 (Tribbie)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1404 (Mydei)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1407 (Castorice)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1405 (Anaxa)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1409 (Hyacine)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1406 (Cipher)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1412 (Cerydra)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1410 (Hysilens)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1415 (Cyrene)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterID": "1408 (Phainon)"
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Ability Value",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrentSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_MaxSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
            "displayLines": "(_MaxSP - _CurrentSP)",
            "constants": [],
            "variables": [
              "_MaxSP",
              "_CurrentSP"
            ]
          },
          "isFixed": "(Fixed)",
          "ignoreBlock": true,
          "isSpecialEnergy": true
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrentSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_MaxSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
            "displayLines": "(_MaxSP - _CurrentSP)",
            "constants": [],
            "variables": [
              "_MaxSP",
              "_CurrentSP"
            ]
          },
          "isFixed": "(Fixed)"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}