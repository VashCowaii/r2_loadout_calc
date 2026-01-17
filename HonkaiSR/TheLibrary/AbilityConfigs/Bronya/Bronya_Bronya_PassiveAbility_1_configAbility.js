const configAbility = {
  "fileName": "Bronya_Bronya_PassiveAbility_1",
  "childAbilityList": [
    "Bronya_Bronya_PassiveAbility_1",
    "Bronya_Bronya_Eidolon4_ATK",
    "Bronya_Bronya_Eidolon4_ATK_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 5,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 1,
          "maximum": 1,
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Bronya_AttackPreshow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Bronya_AbilityPreshow"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Bronya_AbilityPreshow",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Is Part Of",
          "of": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "mustBeAlive2": true,
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_AttackPreshow",
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
          "Basic ATK"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.3) || INVERT || RETURN",
            "displayLines": "-0.3",
            "constants": [],
            "variables": [
              0.3
            ]
          }
        }
      }
    }
  ]
}