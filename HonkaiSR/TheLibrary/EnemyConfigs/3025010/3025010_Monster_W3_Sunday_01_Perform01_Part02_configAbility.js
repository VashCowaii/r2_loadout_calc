const configAbility = {
  "fileName": "3025010_Monster_W3_Sunday_01_Perform01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": 1.5,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "ENEMIES_OBJECT_UNUSED__137",
          "summonLocation": "Last"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W3_Sunday_00_SundayPartPosition5",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 1.75,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "ENEMIES_OBJECT_UNUSED__137",
          "summonLocation": "AfterCaster"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W3_Sunday_00_SundayPartPosition4",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 2,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "ENEMIES_OBJECT_UNUSED__137",
          "summonLocation": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W3_Sunday_00_SundayPartPosition2",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 2.25,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "ENEMIES_OBJECT_UNUSED__137",
          "summonLocation": "First"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W3_Sunday_00_SundayPartPosition1",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}