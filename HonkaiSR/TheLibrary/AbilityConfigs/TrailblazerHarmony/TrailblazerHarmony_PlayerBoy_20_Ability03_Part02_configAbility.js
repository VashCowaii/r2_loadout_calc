const configAbility = {
  "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"610400910\">PlayerBoy_20_AbilityP01_ListenRedShieldModifier</a>",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_LifeTime": {
          "displayLines": "3"
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "3"
      },
      "variableName": "MDF_HarmonyEnergy"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "MDF_HarmonyEnergy"
      },
      "maximum": {
        "displayLines": "3"
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  }
}