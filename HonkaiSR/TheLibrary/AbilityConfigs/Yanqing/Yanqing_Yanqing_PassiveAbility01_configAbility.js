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
      "modifier": "Yanqing_PassiveAbility_Modifier",
      "valuePerStack": {
        "MDF_CriticalBoost": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "MDF_CriticaDamage": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "MDF_StatusResistance": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "MDF_AddSPRatio": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
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
  "references": []
}