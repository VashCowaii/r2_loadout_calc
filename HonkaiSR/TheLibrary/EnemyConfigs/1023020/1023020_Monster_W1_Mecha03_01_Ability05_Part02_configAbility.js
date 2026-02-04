const configAbility = {
  "fileName": "1023020_Monster_W1_Mecha03_01_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": 0.5,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "Monster_SummonID",
          "summonLocation": "BeforeCaster"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "Monster_SummonID",
          "summonLocation": "AfterCaster"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 1023021,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Frigid Prowler (Bug)"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": 1.2,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID",
              "summonLocation": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W1_Mecha03_01_SummonMark",
        "invertCondition": true
      }
    },
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W1_Mecha03_01_SummonMark",
        "invertCondition": true
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W1_Mecha03_01_SummonMark",
        "invertCondition": true
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Monster_W1_Mecha03_01_SummonMark"
    },
    "Trigger: Ability End"
  ],
  "references": []
}