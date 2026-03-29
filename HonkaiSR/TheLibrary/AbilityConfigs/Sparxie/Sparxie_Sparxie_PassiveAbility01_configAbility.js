const configAbility = {
  "fileName": "Sparxie_Sparxie_PassiveAbility01",
  "childAbilityList": [
    "Sparxie_Sparxie_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    5,
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
      "modifier": "<a class=\"gModGreen\" id=\"522571708\">Sparxie_Passive01</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Sparxie_Skill02_GrandPrizeChance",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Sparxie_Skill02_MinorPrizeChance",
      "value": {
        "operator": "Variables[0] (28) || Variables[1] (Sparxie_Skill02_GrandPrizeChance) || SUB || RETURN",
        "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)",
        "constants": [],
        "variables": [
          28,
          "Sparxie_Skill02_GrandPrizeChance"
        ]
      }
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Sparxie_EnergyPoint",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
        "displayLines": "Sparxie_EnergyPoint",
        "constants": [],
        "variables": [
          "Sparxie_EnergyPoint"
        ]
      },
      "maximum": 1,
      "assignState": "True",
      "bar#": 4
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sweet! Punchline Signing"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923210596\">Sparxie_Trace01</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Frenzy! Palette of Truth and Lies"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1956765834\">Sparxie_Trace03</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-719410617\">Sparxie_Eidolon1</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-803298712\">Sparxie_Eidolon4</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-769743474\">Sparxie_Eidolon6</a>[<span class=\"descriptionNumberColor\">#BuiltDifferent #GoingExtinct</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
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