const configAbility = {
  "fileName": "60032_MissionBattleEvent60032_Ability03_Part02",
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
            "ID": 1413,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Evernight"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1414,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Dan Heng • Permansor Terrae"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1402,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Aglaea"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1403,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Tribbie"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1404,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Mydei"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1407,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Castorice"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1405,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Anaxa"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1409,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Hyacine"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1406,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Cipher"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1412,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Cerydra"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1410,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Hysilens"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1415,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Cyrene"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1408,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Phainon"
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_CurrentSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_MaxSP",
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_CurrentSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_MaxSP",
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