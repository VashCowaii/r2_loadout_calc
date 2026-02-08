const configAbility = {
  "fileName": "Jade_Jade_Passive_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Fang of Flare Flaying"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Jade_Passive_Part02_01",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Jade_Passive_Part02_02",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
        "invertCondition": true
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Enemies Still Alive",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "includeNonTargets": true
            }
          },
          "passed": [
            "Deleted bullshit"
          ]
        }
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}