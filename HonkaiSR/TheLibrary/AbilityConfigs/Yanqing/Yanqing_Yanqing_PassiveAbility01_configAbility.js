const configAbility = {
  "fileName": "Yanqing_Yanqing_PassiveAbility01",
  "childAbilityList": [
    "Yanqing_Yanqing_PassiveAbility01_InsertAbility_Camera",
    "Yanqing_Yanqing_PassiveAbility01",
    "Yanqing_Yanqing_PassiveAbility01_InsertAbility",
    "Yanqing_Yanqing_PassiveAbility01_InsertAbilityPhase02"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 10,
  "toughnessList": [
    10,
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
      "modifier": "<a class=\"gModGreen\" id=\"1507574257\">Yanqing_PassiveAbility_Modifier</a>",
      "valuePerStack": {
        "MDF_CriticalBoost": {
          "displayLines": "0.2"
        },
        "MDF_CriticaDamage": {
          "displayLines": "0.3"
        },
        "MDF_StatusResistance": {
          "displayLines": "0.2"
        },
        "MDF_AddSPRatio": {
          "displayLines": "0.1"
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 1,
      "cooldown": 0
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