const configAbility = {
  "fileName": "Acheron_Acheron_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_Passive01Modifier"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_AbilityChange01"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_AbilityChange02"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Acheron_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
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
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_AbilityChange01"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Auto-Battle",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Sort with Actions",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "max": 1,
              "sortOperator": {
                "name": "Sort by Modifier Variable",
                "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                "value": "MDF_Count"
              },
              "includeDying": true,
              "execute": [
                {
                  "name": "Force Team Target-Lock on Target",
                  "team": "Player Team",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Force-Trigger Ability Next-Phase",
      "ability": "MISSING NAME OBJECT(Or implicit from Context)"
    },
    "Trigger: Ability End"
  ],
  "references": []
}