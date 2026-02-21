const configAbility = {
  "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1804376736\">W4_Claymore_01_LocalLegend_BattleScoreMark</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{EVENT[RoT] Light Praetor: 3}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_EnterBattle",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertCheck04",
      "value": 1
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
      }
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-726340599\">Enemy_W4_Claymore_01_LocalLegend_ElationListener</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Living State",
        "state": "Mask_AliveOnly",
        "target": {
          "name": "Target Name",
          "target": "{{EVENT[RoT] Light Praetor: 3}}"
        }
      },
      "passed": [
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "display": false
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Living State",
        "state": "Mask_AliveOnly",
        "target": {
          "name": "Target Name",
          "target": "{{EVENT[RoT] Dark Praetor: Self}}"
        }
      },
      "passed": [
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Self}}"
          },
          "display": true
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Self}}"
          },
          "variableName": "_BossUI",
          "value": 0
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Every Battle Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Every Battle Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
    }
  ],
  "references": []
}