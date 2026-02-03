const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_Insert_DownAndChangePhase_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_AML_Boss_IF_Insert_ChangePhase_Part01",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "priorityTag": "MonsterChangePhase",
      "ownerState": "Mask_AliveOrLimbo",
      "targetState": "Mask_AliveOrLimbo",
      "canHitNonTargets": true,
      "showInActionOrder": true,
      "allowAbilityTriggers": false
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_IF_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_ListenPartDie"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Enemy_AML_Boss_IF_Part_Revive"
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_AML_Boss_IF_Sign_Part1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_AML_Boss_IF_Sign_Part2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_AML_Boss_IF_Sign_Part3"
        },
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
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "stayInTeam": false
        }
      ]
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    },
    {
      "name": "Set Mapping Point",
      "point": "Origin",
      "mapTo": "HeadOrigin"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_IF_DamageTakenUp",
      "valuePerStack": {
        "MDF_PropertyValue": {
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
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "setValue": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ListenAllDieController"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_HitEffect"
    }
  ],
  "references": []
}