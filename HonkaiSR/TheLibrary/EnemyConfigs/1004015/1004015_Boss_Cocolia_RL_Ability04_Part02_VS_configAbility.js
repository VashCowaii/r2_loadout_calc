const configAbility = {
  "fileName": "1004015_Boss_Cocolia_RL_Ability04_Part02_VS",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Create Enemies",
      "delayPercent": 0.8,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "Ice_Lance_ID_4",
          "summonLocation": "Last"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 1.2,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "Ice_Lance_ID_4",
          "summonLocation": "Last"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "Ice_Lance_ID_3",
          "summonLocation": "First"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0.3,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "Ice_Lance_ID_3",
          "summonLocation": "First"
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