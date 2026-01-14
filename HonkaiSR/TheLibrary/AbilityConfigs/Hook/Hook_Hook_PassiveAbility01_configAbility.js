const configAbility = {
  "fileName": "Hook_Hook_PassiveAbility01",
  "childAbilityList": [
    "Hook_Hook_PassiveAbility01",
    "Hook_Hook_PassiveAbility01_2"
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
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Playing With Fire"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Ability01PreShowModifier"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 1,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Ability01PreShowModifier",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.2) || INVERT || RETURN",
            "displayLines": "-0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          }
        }
      }
    }
  ]
}