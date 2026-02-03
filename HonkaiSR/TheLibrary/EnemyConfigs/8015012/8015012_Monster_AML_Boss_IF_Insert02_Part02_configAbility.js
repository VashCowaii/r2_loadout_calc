const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_Insert02_Part02",
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
          "name": "Set Action-State",
          "on": null,
          "stateName": "AML_Boss_Part",
          "state": false
        },
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
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": {
        "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
        "displayLines": "{[SkillP01[1]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[1]]}"
        ]
      }
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
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "AML_Boss_00_IF_MaxStance",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
      "warningType": "MaxToughness"
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] (AML_Boss_00_IF_MaxStance) || RETURN",
        "displayLines": "AML_Boss_00_IF_MaxStance",
        "constants": [],
        "variables": [
          "AML_Boss_00_IF_MaxStance"
        ]
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "forceReduction": true,
      "canDelay": true,
      "ToughnessDMGType": "Imaginary"
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