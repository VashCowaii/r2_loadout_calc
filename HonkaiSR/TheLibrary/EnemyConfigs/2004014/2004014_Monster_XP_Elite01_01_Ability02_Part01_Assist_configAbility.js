const configAbility = {
  "fileName": "2004014_Monster_XP_Elite01_01_Ability02_Part01_Assist",
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
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-831587978\">Monster_XP_Elite01_01_MonsterAssistBonus</a>[<span class=\"descriptionNumberColor\">Crystallite</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-557071994\">XP_Ice_Elite_Powerful_Modifier</a>[<span class=\"descriptionNumberColor\">Freezing Point</span>]",
      "valuePerStack": {
        "Modifier_AllDamageTypeResistance": {
          "operator": "Variables[0] (UnusedUnderThisBase_13929) || RETURN",
          "displayLines": "UnusedUnderThisBase_13929",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13929"
          ]
        },
        "Modifier_StanceWeakAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_13935) || RETURN",
          "displayLines": "UnusedUnderThisBase_13935",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13935"
          ]
        },
        "Modifier_Stance": {
          "operator": "Variables[0] (UnusedUnderThisBase_13936) || RETURN",
          "displayLines": "UnusedUnderThisBase_13936",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13936"
          ]
        }
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "StanceBreak_Sign",
      "value": 1
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}