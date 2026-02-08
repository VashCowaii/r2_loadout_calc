const configAbility = {
  "fileName": "Aventurine_Aventurine_PassiveAbility01",
  "childAbilityList": [
    "Aventurine_Aventurine_PassiveAbility01",
    "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
    "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
    "Aventurine_Aventurine_PassiveAbility01_InsertAbility_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 1,
  "toughnessList": [
    3.3333333333333335,
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
      "modifier": "<a class=\"gModGreen\" id=\"-106868585\">Aventurine_Passive</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": 7,
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Leverage"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1167695204\">Aventurine_Trace01</a>"
        }
      ]
    }
  ],
  "references": []
}