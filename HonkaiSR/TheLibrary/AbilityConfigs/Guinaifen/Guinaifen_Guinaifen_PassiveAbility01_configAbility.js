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
          "displayLines": "1"
        },
        "MDF_Damage": {
          "displayLines": "UnusedUnderThisBase_6221"
        },
        "MDF_LifeTime": {
          "displayLines": "UnusedUnderThisBase_7405"
        },
        "SpAdded2": {
          "displayLines": "2"
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