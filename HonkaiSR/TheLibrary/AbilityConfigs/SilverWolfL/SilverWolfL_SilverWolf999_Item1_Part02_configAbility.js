const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Item1_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "value": 1,
      "variableName": "_Item1_AchievementFlag"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Big Flipping Sword"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "displayLines": "0.9"
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "displayLines": "0.9"
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1669745589\">VS_PFM_CameraShakeMiddle</a>"
    },
    {
      "name": "IF",
      "conditions": "Active: Fast-Forward Animations"
    },
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters"
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}