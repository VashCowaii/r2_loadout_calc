const configAbility = {
  "fileName": "Tingyun_TingYun_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "popUpText": "Energy Regeneration"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "displayLines": "(50 + 10)"
          },
          "isFixed": "(Fixed)",
          "tag": "ActiveSkillAdd"
        }
      ],
      "failed": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "displayLines": "50"
          },
          "isFixed": "(Fixed)",
          "tag": "ActiveSkillAdd"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"132060184\">TingYun_Ability03DamageUp</a>[<span class=\"descriptionNumberColor\">Amidst the Rejoicing Clouds</span>]",
      "duration": {
        "displayLines": "2"
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_DamageAddedRatio": {
          "displayLines": "0.5"
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
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__132060184\">TingYun_Ability03DamageUp</a>[<span class=\"descriptionNumberColor\">Amidst the Rejoicing Clouds</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_DamageAddedRatio"
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Amidst the Rejoicing Clouds",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_DamageAddedRatio"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}