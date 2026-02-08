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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1429716226\">TingYun_ByIsTingYun</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-894890999\">Ability02PreShowModifier</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-894890999\">Ability02PreShowModifier</a>",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1819337398\">Tingyun_Trace_B1_SpeedUp</a>[<span class=\"descriptionNumberColor\">Nourished Joviality</span>]"
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