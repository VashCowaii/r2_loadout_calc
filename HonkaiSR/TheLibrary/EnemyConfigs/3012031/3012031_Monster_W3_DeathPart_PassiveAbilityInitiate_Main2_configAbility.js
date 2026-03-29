const configAbility = {
  "fileName": "3012031_Monster_W3_DeathPart_PassiveAbilityInitiate_Main2",
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Divide HP Bar into Segments",
      "segCount": {
        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
        "displayLines": "{[SkillP01[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[0]]}"
        ]
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "phase": "PhaseCharge"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Insert_Flag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1476787547\">Monster_W3_DeathPart_ListenDie</a>",
      "valuePerStack": {
        "MDF_ShowValue": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Unselectable Targets}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>",
            "invertCondition": true
          },
          {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
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
          "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}