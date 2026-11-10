const configAbility = {
  "fileName": "Jingliuv0_Jingliu_PassiveAbility01",
  "childAbilityList": [
    "Jingliuv0_Jingliu_PassiveAbility01",
    "Jingliuv0_Jingliu_Passive_Camera",
    "Jingliuv0_Jingliu_PassiveAtkReady_Part01"
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
      "modifier": "<a class=\"gModGreen\" id=\"11983250\">Jingliu_LoseHPPreShow</a>"
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
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "HpConsumption"
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Jingliu_MoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
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
      "modifier": "<a class=\"gModGreen\" id=\"-537143412\">Jingliu_Passive</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sword Champion"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-582112064\">Jingliu_AbilityPreShow</a>"
        }
      ]
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