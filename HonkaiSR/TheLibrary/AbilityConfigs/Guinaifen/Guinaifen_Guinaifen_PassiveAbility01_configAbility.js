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
          "operator": "Variables[0] (0) || RETURN",
          "displayLines": "0",
          "constants": [],
          "variables": [
            0
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] (0) || RETURN",
          "displayLines": "0",
          "constants": [],
          "variables": [
            0
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
  "references": []
}