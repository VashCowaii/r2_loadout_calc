const configAbility = {
  "fileName": "5013051_Monster_W5_Ranger_Ability05_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
      "duration": {
        "operator": "Variables[0] (UnusedUnderThisBase_589) || RETURN",
        "displayLines": "UnusedUnderThisBase_589",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_589"
        ]
      },
      "valuePerStack": {
        "MDF_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_590) || RETURN",
          "displayLines": "UnusedUnderThisBase_590",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_590"
          ]
        },
        "MDF_ResistanceDelta": {
          "operator": "Variables[0] (UnusedUnderThisBase_591) || RETURN",
          "displayLines": "UnusedUnderThisBase_591",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_591"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}