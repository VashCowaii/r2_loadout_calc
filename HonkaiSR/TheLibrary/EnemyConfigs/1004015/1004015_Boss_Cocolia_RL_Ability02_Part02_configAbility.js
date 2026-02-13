const configAbility = {
  "fileName": "1004015_Boss_Cocolia_RL_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 2
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "First"
                }
              ]
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID02",
              "summonLocation": "AfterCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 1004031,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Bronya (Complete)",
            "invertCondition": true
          },
          {
            "name": "Enemy ID",
            "ID": 100403100,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}