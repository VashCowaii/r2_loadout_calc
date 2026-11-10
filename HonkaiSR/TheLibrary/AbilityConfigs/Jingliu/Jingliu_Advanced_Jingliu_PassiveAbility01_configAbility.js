const configAbility = {
  "fileName": "Jingliu_Advanced_Jingliu_PassiveAbility01",
  "childAbilityList": [
    "Jingliu_Advanced_Jingliu_PassiveAbility01",
    "Jingliu_Jingliu_Passive_Camera",
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01"
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
      "modifier": "<a class=\"gModGreen\" id=\"1453058731\">Advanced_Jingliu_LoseHPPreShow</a>"
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Jingliu_MoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "isReset": false
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Jingliu_FullMoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Jingliu_FullMoonFlagMax + 1)"
          },
          "variableName": "Jingliu_FullMoonFlagMax"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "Jingliu_FullMoonFlagMax"
          },
          "variableName": "Jingliu_FullMoonFlagMax"
        }
      ]
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "Jingliu_MoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "2"
      },
      "variableName": "Jingliu_MoonFlagMax"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "Jingliu_MoonFlag"
      },
      "maximum": {
        "displayLines": "Jingliu_MoonFlagMax"
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-908005903\">Advanced_Jingliu_Passive</a>"
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