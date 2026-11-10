const configAbility = {
  "fileName": "1023021_Monster_W1_Mecha03_01_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "SummonMonsterEatCount"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "ignoreParallelWarning": true,
      "ifTargetFound": [
        "Ability Start",
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(SummonMonsterEatCount + 1)"
          },
          "variableName": "SummonMonsterEatCount"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
      "duration": 1,
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "displayLines": "{[Skill10[0]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-800128779\">Monster_W1_Mecha03_01_AOECount</a>[<span class=\"descriptionNumberColor\">Bitterly Cold</span>]",
      "duration": 1,
      "addStacksPerTrigger": {
        "displayLines": "SummonMonsterEatCount"
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}