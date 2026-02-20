const configAbility = {
  "fileName": "4034012_Monster_W4_FireProwler_Ability04_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
    },
    {
      "name": "Define Custom Variable with HP%",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CurrentHPRatio"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "AroundCasterOnEdge"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "AroundCasterOnEdge"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "AroundCasterOnEdge"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "AroundCasterOnEdge"
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
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonID_3) || RETURN",
          "displayLines": "SummonID_3",
          "constants": [],
          "variables": [
            "SummonID_3"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "phase": "Phase03"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
            "displayLines": "({[Skill04[1]]} * CurrentHPRatio)",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}",
              "CurrentHPRatio"
            ]
          },
          "consumeFloor": 1,
          "attackType": "Unknown",
          "DamageType": {
            "name": "Damage Type Source",
            "sourceType": "Physical"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "valuePerStack": {
            "MDF_RallyHP": {
              "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
              "displayLines": "({[Skill04[1]]} * CurrentHPRatio)",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}",
                "CurrentHPRatio"
              ]
            }
          }
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
        "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Entangled By Agony"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
        "displayLines": "{[Skill04[0]]}",
        "constants": [],
        "variables": [
          "{[Skill04[0]]}"
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "entityClass": "Enemy",
      "barType": "FireProwler",
      "trigger": "NumChange_Increase"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "popUpText": "Calamity Power"
    },
    {
      "name": "Assign Advance/Delay to Current Ability Use",
      "adjustmentValue": {
        "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
        "displayLines": "{[Skill04[2]]}",
        "constants": [],
        "variables": [
          "{[Skill04[2]]}"
        ]
      },
      "adjustmentType": "="
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage Type",
            "stageType": "EvolveBuildActivity"
          }
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"998450039\">Enemy_W4_FireProwler_MainStory_04_CustomTrigger</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}