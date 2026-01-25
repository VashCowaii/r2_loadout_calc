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
      "modifier": "TheHerta_Trace02_MainTarget"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "TheHerta_SKL02_Mark"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "TheHerta_SKL02_Mark_Pre"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "TheHerta_SKL02_Mark"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "TheHerta_SKL02",
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
      "modifier": "TheHerta_SKL02_Mark_Pre"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "TheHerta_SKL02_Mark"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "TheHerta_Trace02_MainTarget"
    },
    "Trigger: Ability End"
  ],
  "references": []
}