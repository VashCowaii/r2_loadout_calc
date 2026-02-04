const configAbility = {
  "fileName": "2004014_Monster_XP_Elite01_Ability03_Part01_Assist",
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
      "modifier": "Monster_XP_Elite01_MonsterAssistBonus"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "XP_Fire_Elite_Burning_Modifier_2[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]",
      "valuePerStack": {
        "Modifier_StanceWeakAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_22) || RETURN",
          "displayLines": "UnusedUnderThisBase_22",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_22"
          ]
        },
        "Modifier_Stance": {
          "operator": "Variables[0] (UnusedUnderThisBase_23) || RETURN",
          "displayLines": "UnusedUnderThisBase_23",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_23"
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