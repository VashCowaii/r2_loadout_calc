const configAbility = {
  "fileName": "Tingyun_TingYun_PassiveAbility01",
  "childAbilityList": [
    "Tingyun_TingYun_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "TingYun_ByIsTingYun"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Nourished Joviality"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Ability02PreShowModifier"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": 3,
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Ability02PreShowModifier",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": "Owner of this Modifier",
            "modifier": "Tingyun_Trace_B1_SpeedUp[<span class=\"descriptionNumberColor\">Nourished Joviality</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.2(SPD Change)"
        }
      }
    }
  ]
}