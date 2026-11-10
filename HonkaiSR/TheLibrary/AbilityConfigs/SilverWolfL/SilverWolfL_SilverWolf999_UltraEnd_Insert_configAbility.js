const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_UltraEnd_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]"
    },
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1077186888\">_M_SilverWolf999_Ultimate_VisualManager</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "displayLines": "(0 - &nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((CurScore * (1 - 0.2))))"
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "displayLines": "(0 - CurScore)"
            }
          }
        }
      ]
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "popUpText": "\"αWolf Instant\" has ended"
    },
    "Deleted bullshit"
  ],
  "onAbort": [
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}