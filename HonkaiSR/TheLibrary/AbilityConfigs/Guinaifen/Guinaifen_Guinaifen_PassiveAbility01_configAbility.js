const configAbility = {
  "fileName": "Guinaifen_Guinaifen_PassiveAbility01",
  "childAbilityList": [
    "Guinaifen_Guinaifen_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1214365283\">GuiNaiFen_PassiveAbility01_Modifier</a>",
      "valuePerStack": {
        "MDF_Chance": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "MDF_Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_5348) || RETURN",
          "displayLines": "UnusedUnderThisBase_5348",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_5348"
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] (UnusedUnderThisBase_6532) || RETURN",
          "displayLines": "UnusedUnderThisBase_6532",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_6532"
          ]
        },
        "SpAdded2": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        }
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}