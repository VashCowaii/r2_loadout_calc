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
          "operator": "Variables[0] (UnusedUnderThisBase_4869) || RETURN",
          "displayLines": "UnusedUnderThisBase_4869",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_4869"
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
          "displayLines": "UnusedUnderThisBase_6051",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_6051"
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