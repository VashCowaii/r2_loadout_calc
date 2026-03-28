const configAbility = {
  "fileName": "4034020_Monster_W4_Phainon_PassiveInsert01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Question",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"497709831\">Enemy_W4_Phainon_LockHp_01</a>"
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"514487450\">Enemy_W4_Phainon_LockHp_02</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Question",
      "value": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "popUpText": "Energy Regeneration",
          "living": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
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
                "target": "{{Parameter Target}}"
              },
              "variableName": "_CurrentSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
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
                "target": "{{Parameter Target}}"
              },
              "variableName": "_CurrentSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
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
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}