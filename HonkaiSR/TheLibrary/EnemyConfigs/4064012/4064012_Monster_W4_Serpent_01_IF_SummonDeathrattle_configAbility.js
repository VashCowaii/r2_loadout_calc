const configAbility = {
  "fileName": "4064012_Monster_W4_Serpent_01_IF_SummonDeathrattle",
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
      "modifier": "<a class=\"gModGreen\" id=\"1049616782\">Enemy_W4_Serpent_01_IF_LockStance</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Summon_Deathrattle"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "includeDyingTargets": true,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "MDF_Deathrattle",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "variableName": "Summon_Deathrattle"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Summon_Deathrattle) || RETURN",
            "displayLines": "Summon_Deathrattle",
            "constants": [],
            "variables": [
              "Summon_Deathrattle"
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>",
              "valuePerStack": {
                "MDF_StanceDamage": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "Deathrattle",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1049616782\">Enemy_W4_Serpent_01_IF_LockStance</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}