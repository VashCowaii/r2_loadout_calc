const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_RestartPhase3AfterBE",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "set": 0
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1090857767\">Enemy_W5_AsatPramad_SpecialBreakRecoverMark</a>"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "revertDefault": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossUltra"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossSummonMonster"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BE_AsatPramad_00"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BE_AsatPramad_01"
      }
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossSummonMonster"
      },
      "multiBase": 0
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossUltra"
      },
      "multiBase": 1
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BE_AsatPramad_00"
      },
      "multiBase": 0.5
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BE_AsatPramad_01"
      },
      "multiBase": 1
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-368045394\">W5_AsatPramad_Part03BEBreakRecover</a>"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 1}}"
      },
      "stayInTeam": false
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 0}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"192411193\">Enemy_W5_AsatPramad_MainStory03</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1765311230\">Enemy_W5_AsatPramad_MainStory03Talk10</a>"
        }
      ]
    },
    {
      "name": "Reset Toughness",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      }
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      }
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "flagNames": []
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-439798019\">Enemy_W5_AsatPramad_Effect02</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
    },
    {
      "name": "Destroy Battle Entity",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossAfterBE"
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}