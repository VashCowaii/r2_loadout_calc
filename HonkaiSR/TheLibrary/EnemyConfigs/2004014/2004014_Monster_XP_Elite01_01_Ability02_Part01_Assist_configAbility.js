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
      "modifier": "OneMorePerTurn"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "OneMore"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_XP_Elite01_01_MonsterAssistBonus[<span class=\"descriptionNumberColor\">Crystallite</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "XP_Ice_Elite_Powerful_Modifier[<span class=\"descriptionNumberColor\">Freezing Point</span>]",
      "valuePerStack": {
        "Modifier_AllDamageTypeResistance": {
          "operator": "Variables[0] (UnusedUnderThisBase_26) || RETURN",
          "displayLines": "UnusedUnderThisBase_26",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_26"
          ]
        },
        "Modifier_StanceWeakAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_25) || RETURN",
          "displayLines": "UnusedUnderThisBase_25",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_25"
          ]
        },
        "Modifier_Stance": {
          "operator": "Variables[0] (UnusedUnderThisBase_24) || RETURN",
          "displayLines": "UnusedUnderThisBase_24",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_24"
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
  "references": []
}