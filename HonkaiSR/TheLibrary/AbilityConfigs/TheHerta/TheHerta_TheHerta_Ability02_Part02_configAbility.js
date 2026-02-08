const configAbility = {
  "fileName": "TheHerta_TheHerta_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-424945107\">TheHerta_Trace02_MainTarget</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1142002606\">TheHerta_SKL02</a>",
      "variables": {
        "DV_DamageRatio1": {
          "operator": "Variables[0] (0.7) || RETURN",
          "displayLines": "0.7",
          "constants": [],
          "variables": [
            0.7
          ]
        },
        "DV_MarkAddLayer": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "DV_MarkMaxLayer": {
          "operator": "Variables[0] (42) || RETURN",
          "displayLines": "42",
          "constants": [],
          "variables": [
            42
          ]
        }
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-424945107\">TheHerta_Trace02_MainTarget</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}