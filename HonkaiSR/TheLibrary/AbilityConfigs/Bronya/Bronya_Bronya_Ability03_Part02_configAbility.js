const configAbility = {
  "fileName": "Bronya_Bronya_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_CriticalDamageBase",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "MDF_CriticalDamageBase"
      },
      "variableName": "MDF_CriticalDamageBase_change"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_CriticalDamageBase_change * 0.16)"
      },
      "variableName": "MDF_CriticalDamageBase_change"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_CriticalDamageBase_change + 0.2)"
      },
      "variableName": "MDF_CriticalDamageBase_Total"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-379855100\">Bronya_Ultimate_PowerUp</a>[<span class=\"descriptionNumberColor\">The Belobog March</span>]",
      "duration": {
        "displayLines": "2"
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "displayLines": "0.55"
        },
        "Bronya_CriticalDamage": {
          "displayLines": "MDF_CriticalDamageBase_Total"
        }
      }
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